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
import { Buttons, Container } from './styles';

const socket = io(api.defaults.baseURL);

export default function Streaming() {
  const { user } = useAuth()
  const { id } = useParams()
  let userIsAdmin = false

  if (user) {
    userIsAdmin = user.role == 'ADMIN'
  }

  const peer = useRef(new Peer())
  const screen = useRef(null);
  const videoRef = useRef(null);
  const peerConnections = useRef({});
  const [isSharingScreen, setIsSharingScreen] = useState(false);

  useEffect(() => {
    createAnswer(peer, videoRef, peerConnections)
    prepareToRecieveOffers(peer, videoRef, peerConnections, socket, screen)

    peer.current.on("open", id => {
      socket.emit('enter-room', {
        id: id,
        roomId: id
      });
    })

    socket.on('leave-room', ({ id }) => {
      if (peerConnections.current[id]) {
        delete peerConnections.current[id]
      }
    })

    socket.on('stop-share', ({ roomId }) => {
      videoRef.current.srcObject = null
    })

    window.addEventListener('beforeunload', () => {
      socket.emit('leave-room', {
        id: peer.current.id,
        roomId: id
      });
    })

    return () => {
      socket.emit('leave-room', {
        id: peer.current.id,
        roomId: id
      });
      peer.current.destroy()
      peerConnections.current = {}
      socket.disconnect()
    };
  }, []);

  function startShareScreen() {
    shareScreen(peer, socket, id, peerConnections).then(media => {
      if (media) {
        videoRef.current.srcObject = media
        screen.current = media
        setIsSharingScreen(true)
      }
    });
  }

  function stopScreenShare() {
    socket.emit('stop-share', {
      id: peer.current.id,
      roomId: id
    });
    if (screen.current) {
      screen.current.getTracks().forEach(track => track.stop());
      screen.current = null;
    }
    videoRef.current.srcObject = null
    setIsSharingScreen(false)
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
