import { useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { api } from '../../services/api';

const socket = io(api.defaults.baseURL);

const ScreenShare = () => {
  const videoRef = useRef(null);
  const peerConnection = useRef(null);
  
  const configuration = {
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
  };

  useEffect(() => {
    peerConnection.current = new RTCPeerConnection(configuration);

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

      const offer = await peerConnection.current.createOffer();
      await peerConnection.current.setLocalDescription(offer);
      socket.emit('offer', offer);
      console.log('Oferta enviada');
    } catch (error) {
      console.error('Erro ao compartilhar tela:', error);
    }
  };

  return (
    <div>
      <button onClick={startScreenShare}>Compartilhar Tela</button>
      <video ref={videoRef} autoPlay playsInline style={{ width: '100%', height: '100%' }}></video>
    </div>
  );
};

export default ScreenShare;
