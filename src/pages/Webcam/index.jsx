import { useEffect, useRef, useState } from 'react';
import { BsCameraVideo, BsCameraVideoOff } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';
import { Buttons, Container } from './styles';

const socket = io(api.defaults.baseURL);

export default function WebCam() {

  const {id} = useParams()

  const {user} = useAuth()

  const [isSharingWebcam, setIsSharingWebcam] = useState(false);
  const videoRef = useRef(null);
  const peerConnections = useRef({});
  
  const configuration = {
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
  };

  useEffect(() => {
    if (!peerConnections.current[socket.id]) {
      peerConnections.current[socket.id] = new RTCPeerConnection(configuration);
    }

    console.log('socket', socket.id
    )

    console.log('peerConnections', peerConnections)
  
    const peerConnection = peerConnections.current[socket.id];

    console.log('conexao', peerConnection)

    socket.emit('webcam/new-user-joined')

    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit('webcam/ice-candidate', event.candidate);
      }
    };

    peerConnection.ontrack = (event) => {
      videoRef.current.srcObject = event.streams[0];
    };

    socket.on('webcam/offer', async (offer) => {
      await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await peerConnection.createAnswer();
      await peerConnection.setLocalDescription(answer);
      socket.emit('webcam/answer', answer);
    });

    socket.on('webcam/answer', async (answer) => {
      await peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
    });

    const pendingCandidates = [];

    socket.on('webcam/offer', async (offer) => {
      await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
      
      pendingCandidates.forEach(async candidate => {
        await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
      });

      pendingCandidates.length = 0;
    });

    socket.on('webcam/ice-candidate', async (candidate) => {
      if (peerConnection.remoteDescription) {
        await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
      } else {
        pendingCandidates.push(candidate);
      }
    });

    socket.on('webcam/request-screen-share', async (newUserId) => {
      const offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);
      socket.emit('webcam/offer', offer, newUserId);
    });

    socket.on('webcam/stop-screen-share', async () => {
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

  const startWebcamShare = async () => {
    try {
      const webcamStream = await navigator.mediaDevices.getUserMedia({ video: true });

      const peerConnection = peerConnections.current[socket.id];

      // Adicionar tracks da tela no peerConnection
      webcamStream.getTracks().forEach(track => {
        peerConnection.addTrack(track, webcamStream);
      });

      videoRef.current.srcObject = webcamStream;

      setIsSharingWebcam(true);

      const offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);
      socket.emit('webcam/offer', offer);
      socket.emit('webcam/start-screen-share');
    } catch (error) {
      console.error('Erro ao compartilhar WebCam:', error);
    }
  };

  const stopWebcamShare = () => {
    const tracks = videoRef.current.srcObject.getTracks();

    tracks.forEach(track => {
      track.stop();
    });

    videoRef.current.srcObject = null;

    setIsSharingWebcam(false);

    socket.emit('webcam/stop-screen-share');
  }

  return (
    <Container>
      {user && <Buttons active={isSharingWebcam.toString()}>
        {!isSharingWebcam ?
          <button onClick={startWebcamShare}>
            <BsCameraVideo size={20}/> 
          </button>
        :
          <button onClick={stopWebcamShare}>
            <BsCameraVideoOff size={20}/>
          </button>
        }
      </Buttons>}
      <video ref={videoRef} autoPlay playsInline muted></video>
    </Container>
  );
}