import { useEffect, useRef, useState } from 'react';
import { LuScreenShare, LuScreenShareOff } from "react-icons/lu";
import io from 'socket.io-client';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';
import { Buttons, Container } from './styles';

const socket = io(api.defaults.baseURL);

export default function Streaming() {

  const {user} = useAuth()

  const usersAdmin = import.meta.env.VITE_ADMIN_USERS

  let userIsAdmin = false

  if (user) {
    userIsAdmin = usersAdmin.includes(user.id)
  }

  const [isSharingScreen, setIsSharingScreen] = useState(false);
  const videoRef = useRef(null);
  const peerConnection = useRef(null);
  
  const configuration = {
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
  };

  useEffect(() => {
    peerConnection.current = new RTCPeerConnection(configuration);

    socket.emit('new-user-joined')

    // Quando recebemos um candidato ICE
    peerConnection.current.onicecandidate = (event) => {
      if (event.candidate) {
        console.log('Candidato ICE gerado');
        socket.emit('ice-candidate', event.candidate);
      }
    };

    // Quando recebemos um stream remoto
    peerConnection.current.ontrack = (event) => {
      console.log('Stream remoto recebido', event);
      videoRef.current.srcObject = event.streams[0];
    };

    // Receber oferta de outro usuário
    socket.on('offer', async (offer) => {
      console.log('Oferta recebida');
      await peerConnection.current.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await peerConnection.current.createAnswer();
      await peerConnection.current.setLocalDescription(answer);
      socket.emit('answer', answer);
      console.log('Resposta enviada');
    });

    // Receber resposta (answer) de outro usuário
    socket.on('answer', async (answer) => {
      console.log('Resposta recebida');
      await peerConnection.current.setRemoteDescription(new RTCSessionDescription(answer));
    });

    const pendingCandidates = [];

    socket.on('offer', async (offer) => {
      await peerConnection.current.setRemoteDescription(new RTCSessionDescription(offer));
      
      // Adicione qualquer candidato ICE pendente após a configuração da descrição remota
      pendingCandidates.forEach(async candidate => {
        await peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate));
      });

      pendingCandidates.length = 0; // Limpa os candidatos pendentes
    });

    socket.on('ice-candidate', async (candidate) => {
      if (peerConnection.current.remoteDescription) {
        await peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate));
      } else {
        // Armazena os candidatos até que a descrição remota seja configurada
        pendingCandidates.push(candidate);
      }
    });

    socket.on('request-screen-share', async (newUserId) => {
      const offer = await peerConnection.current.createOffer();
      await peerConnection.current.setLocalDescription(offer);
      socket.emit('offer', offer, newUserId); // Enviar a oferta ao novo usuário
    });

    socket.on('stop-screen-share', async () => {
      const tracks = videoRef.current.srcObject.getTracks();

      tracks.forEach(track => {
        track.stop();
      });

      videoRef.current.srcObject = null;
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const startScreenShare = async () => {
    try {
      const displayStream = await navigator.mediaDevices.getDisplayMedia({ video: true });

      // Adicionar tracks da tela no peerConnection
      displayStream.getTracks().forEach(track => {
        peerConnection.current.addTrack(track, displayStream);
      });

      console.log(displayStream)

      videoRef.current.srcObject = displayStream;

      setIsSharingScreen(true);

      const offer = await peerConnection.current.createOffer();
      await peerConnection.current.setLocalDescription(offer);
      socket.emit('offer', offer);
      socket.emit('start-screen-share');
      console.log('Oferta enviada');
    } catch (error) {
      console.error('Erro ao compartilhar tela:', error);
    }
  };

  const stopScreenShare = () => {
    const tracks = videoRef.current.srcObject.getTracks();

    tracks.forEach(track => {
      track.stop();
    });

    videoRef.current.srcObject = null;

    setIsSharingScreen(false);

    socket.emit('stop-screen-share');
  }

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
      <video ref={videoRef} autoPlay playsInline muted style={{ width: '100%', height: '100%' }}></video>
    </Container>
  );
}
