import { useEffect, useRef, useState } from 'react';
import { BsCameraVideo, BsCameraVideoOff } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { api } from '../../services/api';
import { Buttons, Container } from './styles';

const socket = io(api.defaults.baseURL);

export default function WebCam() {

  const {id} = useParams()

  const [isSharingWebcam, setIsSharingWebcam] = useState(false);
  const videoRef = useRef(null);
  const peerConnection = useRef(null);
  
  const configuration = {
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
  };

  useEffect(() => {
    peerConnection.current = new RTCPeerConnection(configuration);

    socket.emit('webcam/new-user-joined')

    peerConnection.current.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit('webcam/ice-candidate', event.candidate);
      }
    };

    peerConnection.current.ontrack = (event) => {
      videoRef.current.srcObject = event.streams[0];
    };

    socket.on('webcam/offer', async (offer) => {
      await peerConnection.current.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await peerConnection.current.createAnswer();
      await peerConnection.current.setLocalDescription(answer);
      socket.emit('webcam/answer', answer);
    });

    socket.on('webcam/answer', async (answer) => {
      await peerConnection.current.setRemoteDescription(new RTCSessionDescription(answer));
    });

    const pendingCandidates = [];

    socket.on('webcam/offer', async (offer) => {
      await peerConnection.current.setRemoteDescription(new RTCSessionDescription(offer));
      
      pendingCandidates.forEach(async candidate => {
        await peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate));
      });

      pendingCandidates.length = 0;
    });

    socket.on('webcam/ice-candidate', async (candidate) => {
      if (peerConnection.current.remoteDescription) {
        await peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate));
      } else {
        pendingCandidates.push(candidate);
      }
    });

    socket.on('webcam/request-screen-share', async (newUserId) => {
      const offer = await peerConnection.current.createOffer();
      await peerConnection.current.setLocalDescription(offer);
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

      // Adicionar tracks da tela no peerConnection
      webcamStream.getTracks().forEach(track => {
        peerConnection.current.addTrack(track, webcamStream);
      });

      videoRef.current.srcObject = webcamStream;

      setIsSharingWebcam(true);

      const offer = await peerConnection.current.createOffer();
      await peerConnection.current.setLocalDescription(offer);
      socket.emit('webcam/offer', offer);
      socket.emit('webcam/start-screen-share');
    } catch (error) {
      console.error('Erro ao compartilhar tela:', error);
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
      <Buttons active={isSharingWebcam.toString()}>
        {!isSharingWebcam ?
          <button onClick={startWebcamShare}>
            <BsCameraVideo size={20}/> 
          </button>
        :
          <button onClick={stopWebcamShare}>
            <BsCameraVideoOff size={20}/>
          </button>
        }
      </Buttons>
      <video ref={videoRef} autoPlay playsInline muted></video>
    </Container>
  );
}