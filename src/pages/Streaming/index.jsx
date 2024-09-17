import Peer from 'peerjs';
import { useEffect, useRef, useState } from 'react';
import { LuScreenShare, LuScreenShareOff } from "react-icons/lu";
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { MusicPlayer } from '../../components/MusicPlayer';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';
import { Buttons, Container } from './styles';

const socket = io(api.defaults.baseURL);

export default function Streaming() {

  const {user} = useAuth()
  const {id} = useParams()

  let userIsAdmin = false

  if (user) {
    userIsAdmin = user.role == 'ADMIN'
  }

  let peer = useRef(null)
  const [isSharingScreen, setIsSharingScreen] = useState(false);
  const videoRef = useRef(null);
  const [peerConnections, setPeerConnections] = useState([]);
  
  const configuration = {
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' },],
  };

  useEffect(() => {

    peer = new Peer(undefined)

    peer.on('open', peerId =>
      socket.emit('enter-room', {
        peerId: peerId,
        roomId: id
      }),
    )

    socket.on(
      'leave-room',
      ({ id }) => peerConnections[id] && peerConnections[id].close(),
    )

    createAnswer()
    prepareToRecieveOffers()
    
    return () => {
      socket.off('enter-room')

      Object.keys(peer.connections).forEach(connId => {
        const connection = peer.connections[connId][0]
        if (connection) {
          connection.close()
          socket.emit('leave-room', { peerId: connection.connectionId, roomId: id})
        }
      })

      setPeerConnections([])
      peer.destroy()

      socket.disconnect()
    };
  }, []);

  async function createAnswer() {
    peer.on('call', function (call) {
  
      call.answer(videoRef.current.srcObject)

      call.on('stream', function (remoteStream) {
        videoRef.current.srcObject = createVideoElement(remoteStream, call.metadata)
      })
  
      connections[call.connectionId] = call
      call.on('close', () => videoRef.current.srcObject = null)
    })
  }

  function prepareToRecieveOffers() {
    socket.on('enter-room', function (user) {

      const call = peer.call(user.id)

      call.on('stream', userVideoStream => {
        videoRef.current.srcObject = userVideoStream
      })

      call.on('close', () => videoRef.current.srcObject = null)
      connections[call.connectionId] = call
    
      if (videoRef.current.srcObject) {
        const shareConn = peer.call(user.id, videoRef.current.srcObject)
        videoRef.current.srcObject.getVideoTracks()[0].addEventListener('ended', () => {
          shareConn.close()
          socket.emit('leave-room', { peerId: shareConn.connectionId, roomId: id })
        })
      }
      
    })
  }

  const startScreenShare = async () => {
    navigator.mediaDevices.getDisplayMedia({ video: true, audio: false }).then(media => {
      videoRef.current.srcObject = media
      Object.keys(peer.connections).forEach(conn => {
        const shareConn = peer.call(conn, media, { metadata: { name: getUserName() } })

        media.getVideoTracks()[0].addEventListener('ended', () => {
          videoRef.current.srcObject = null
          shareConn.close()
          socket.emit('leave-room', { peerId: shareConn.connectionId, roomId: id })
          setIsSharingScreen(false)
        })
      })
      setIsSharingScreen(true)
    })
  };

  return (
    <Container>
      {userIsAdmin && <Buttons active={isSharingScreen.toString()}>
        {!isSharingScreen ?
          <button onClick={startScreenShare}>
            <LuScreenShare size={20}/> 
          </button>
        :
          <button onClick={stopScreenShare}>
            <LuScreenShareOff size={20}/>
          </button>
        }
      </Buttons>}
      <MusicPlayer streaming className='player'/>
      <video ref={videoRef} autoPlay playsInline muted></video>
    </Container>
  );
}
