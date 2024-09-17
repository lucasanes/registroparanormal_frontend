import Peer from 'peerjs';
import { useEffect, useRef, useState } from 'react';
import { LuScreenShare, LuScreenShareOff } from "react-icons/lu";
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { MusicPlayer } from '../../components/MusicPlayer';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';
import { createAnswer } from './createAnswer';
import { prepareToRecieveOffers } from './prepareToRecieveOffers';
import { shareScreen } from './shareScreen';
import { stopShare } from './stopShare';
import { Buttons, Container } from './styles';

const socket = io(api.defaults.baseURL);

export default function Streaming() {
  const { user } = useAuth()
  const { roomId } = useParams()
  let userIsAdmin = false

  if (user) {
    userIsAdmin = user.role == 'ADMIN'
  }

  const peer = useRef(new Peer(undefined, {
    debug: 5
  }))
  const screen = useRef(null);
  const videoRef = useRef(null);
  const peerConnections = useRef({});
  const [isSharingScreen, setIsSharingScreen] = useState(false);

  useEffect(() => {

    peer.current.on("open", id => {
      socket.emit('enter-room', {
        peerId: id,
        socketId: socket.id,
        roomId
      });
    })

    socket.on('leave-room', ({ id }) => {
      if (peerConnections.current[id]) {
        delete peerConnections.current[id]
      }
    })
    
    socket.on('stop-share', (peer) => {
      console.log(peer)
      videoRef.current.srcObject = null
    })

    createAnswer(peer, videoRef, peerConnections, screen, setIsSharingScreen)
    prepareToRecieveOffers(peer, videoRef, peerConnections, socket, screen, roomId)

    window.addEventListener('beforeunload', () => {
      stopShare(peer, socket, roomId, screen).then(() => {
        videoRef.current.srcObject = null
      })
      socket.emit('leave-room', {
        peerId: peer.current.id,
        socketId: socket.id,
        roomId
      });
    })

    return () => {
      if (peer.current) {
        socket.emit('leave-room', {
          peerId: peer.current.id,
          socketId: socket.id,
          roomId
        });
        peer.current.destroy()
        peerConnections.current = {}
        socket.disconnect()
      }
    };
  }, [roomId]);

  function startShareScreen() {
    shareScreen(peer, socket, roomId, peerConnections).then(media => {
      if (media) {
        videoRef.current.srcObject = media
        screen.current = media
        setIsSharingScreen(true)
      }
    });
  }

  function stopScreenShare() {
    stopShare(peer, socket, roomId, screen).then(() => {
      videoRef.current.srcObject = null
      setIsSharingScreen(false)
    });
  }

  return (
    <Container>
      {userIsAdmin && <Buttons active={isSharingScreen.toString()}>
        {!isSharingScreen ?
          <button onClick={startShareScreen}>
            <LuScreenShare size={20} />
          </button>
          :
          <button onClick={stopScreenShare}>
            <LuScreenShareOff size={20} />
          </button>
        }
      </Buttons>}
      <MusicPlayer streaming className='player' />
      <video ref={videoRef} autoPlay playsInline muted></video>
    </Container>
  );
}
