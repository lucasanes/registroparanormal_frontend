import { useEffect, useRef, useState } from 'react';
import { LuScreenShare, LuScreenShareOff } from "react-icons/lu";
import { toast } from 'react-toastify';
import io from 'socket.io-client';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';
import { Buttons, Container } from './styles';

const socket = io(api.defaults.baseURL);

export default function Streaming() {

  const {user} = useAuth()

  let userIsAdmin = false

  if (user) {
    userIsAdmin = user.role == 'ADMIN'
  }

  const [isSharingScreen, setIsSharingScreen] = useState(false);
  const videoRef = useRef(null);
  const peerConnections = useRef({});
  
  const configuration = {
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' },],
  };

  useEffect(() => {
    peerConnections.current[socket.id] = new RTCPeerConnection(configuration);

    const peerConnection = peerConnections.current[socket.id];
  
    socket.emit('streaming/new-user-joined')

    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        console.log('Candidato ICE gerado');
        socket.emit('streaming/ice-candidate', event.candidate);
      }
    };

    peerConnection.ontrack = (event) => {
      console.log('Stream remoto recebido', event);
      videoRef.current.srcObject = event.streams[0];
    };

    socket.on('streaming/offer', async (offer) => {
      console.log('Oferta recebida');
      await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await peerConnection.createAnswer();
      await peerConnection.setLocalDescription(answer);
      socket.emit('streaming/answer', answer);
      console.log('Resposta enviada');
    });

    socket.on('streaming/answer', async (answer) => {
      console.log('Resposta recebida');
      await peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
    });

    const pendingCandidates = [];

    socket.on('streaming/offer', async (offer) => {
      await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
      
      pendingCandidates.forEach(async candidate => {
        await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
      });

      pendingCandidates.length = 0; // Limpa os candidatos pendentes
    });

    socket.on('streaming/ice-candidate', async (candidate) => {
      if (peerConnection.remoteDescription) {
        await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
      } else {
        pendingCandidates.push(candidate);
      }
    });

    socket.on('streaming/request-share', async (newUserId) => {
      const offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);
      socket.emit('streaming/offer', offer, newUserId); // Enviar a oferta ao novo usuário
    });

    socket.on('streaming/stop-share', async () => {
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

      const peerConnection = peerConnections.current[socket.id];

      displayStream.getTracks().forEach(track => {
        peerConnection.addTrack(track, displayStream);
      });

      videoRef.current.srcObject = displayStream;

      setIsSharingScreen(true);

      const offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);
      socket.emit('streaming/offer', offer);
      socket.emit('streaming/start-share');
    } catch (error) {
      toast.error('Erro ao compartilhar tela');
      console.error('Erro ao compartilhar tela:', error);
    }
  };

  const stopScreenShare = () => {
    try {

      const tracks = videoRef.current.srcObject.getTracks();
      
      tracks.forEach(track => {
        track.stop();
      });
      
      videoRef.current.srcObject = null;
      
      setIsSharingScreen(false);
      
      socket.emit('streaming/stop-share');
    } catch (error) {
      toast.error('Erro ao parar de compartilhar tela');
      console.error('Erro ao parar de compartilhar tela:', error);
    }
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
      <video ref={videoRef} autoPlay playsInline muted></video>
    </Container>
  );
}
