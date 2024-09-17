import Peer from 'peerjs';
import { useEffect, useRef, useState } from 'react';
import { BsCameraVideo, BsCameraVideoOff } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { MusicPlayer } from '../../components/MusicPlayer';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';
import { createAnswer } from './createAnswer';
import { prepareToRecieveOffers } from './prepareToRecieveOffers';
import { shareWebcam } from './shareWebcam';
import { stopShare } from './stopShare';
import { Buttons, Container } from './styles';

const socket = io(api.defaults.baseURL);

export default function Webcam() {
  const { user } = useAuth()
  const { roomId } = useParams()

  const peer = useRef(new Peer(undefined, {
    debug: 5
  }))
  const webcam = useRef(null);
  const videoRef = useRef(null);
  const peerConnections = useRef({});
  const [isSharingWebcam, setIsSharingWebcam] = useState(false);

  useEffect(() => {

    peer.current.on("open", id => {
      socket.emit('webcam/enter-room', {
        peerId: id,
        socketId: socket.id,
        roomId
      });
    })

    socket.on('webcam/leave-room', ({ id }) => {
      if (peerConnections.current[id]) {
        delete peerConnections.current[id]
      }
    })
    
    socket.on('webcam/stop-share', (peer) => {
      console.log(peer)
      videoRef.current.srcObject = null
    })

    createAnswer(peer, videoRef, peerConnections, webcam, setIsSharingWebcam)
    prepareToRecieveOffers(peer, videoRef, peerConnections, socket, webcam, roomId)

    return () => {
      if (peer.current) {
        socket.emit('webcam/leave-room', {
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

  window.addEventListener('beforeunload', () => {
    stopShare(peer, socket, roomId, webcam, isSharingWebcam).then(() => {
      videoRef.current.srcObject = null
    })
    socket.emit('webcam/leave-room', {
      peerId: peer.current.id,
      socketId: socket.id,
      roomId
    });
  })

  function startShareWebcam() {
    shareWebcam(peer, socket, roomId, peerConnections).then(media => {
      if (media) {
        videoRef.current.srcObject = media
        webcam.current = media
        setIsSharingWebcam(true)
      }
    });
  }

  function stopShareWebcam() {
    stopShare(peer, socket, roomId, webcam, isSharingWebcam).then(() => {
      videoRef.current.srcObject = null
      setIsSharingWebcam(false)
    });
  }

  return (
    <Container>
      {user && <Buttons active={isSharingWebcam.toString()}>
        {!isSharingWebcam ?
          <button onClick={startShareWebcam}>
            <BsCameraVideo size={20} />
          </button>
          :
          <button onClick={stopShareWebcam}>
            <BsCameraVideoOff size={20} />
          </button>
        }
      </Buttons>}
      <MusicPlayer streaming className='player' />
      <video ref={videoRef} autoPlay playsInline muted></video>
    </Container>
  );
}
