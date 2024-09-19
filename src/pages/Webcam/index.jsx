import Peer from 'peerjs';
import { useEffect, useRef, useState } from 'react';
import { BsCameraVideo, BsCameraVideoOff } from "react-icons/bs";
import { MdArrowDropDown } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { Modal } from '../../components/Modals/Modal';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';
import { ModalWebcam } from './components/ModalWebcam';
import { createAnswer } from './createAnswer';
import { prepareToRecieveOffers } from './prepareToRecieveOffers';
import { shareWebcam } from './shareWebcam';
import { stopShare } from './stopShare';
import { Buttons, Container } from './styles';

const socket = io(api.defaults.baseURL);

export default function Webcam() {
  const { user } = useAuth()
  const { roomId } = useParams()
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const peer = useRef(new Peer(undefined, {
    debug: 5,
    config: {
      iceServers: [
        { urls: "stun:stun.l.google.com:19302" },
        {
          urls: "turn:0.peerjs.com:3478", username: "peerjs", credential: "peerjsp"
        }
      ],
    },
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

    socket.on(`webcam/leave-room?${roomId}`, ({ peerId }) => {
      if (peerConnections.current[peerId]) {
        delete peerConnections.current[peerId]
      }
    })
    
    socket.on(`webcam/stop-share?${roomId}`, () => {
      videoRef.current.srcObject = null
    })

    createAnswer(peer, videoRef, peerConnections, webcam, setIsSharingWebcam)
    prepareToRecieveOffers(peer, videoRef, peerConnections, socket, webcam, roomId)
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
    // selectCamera().then(() => {
    //   setSelectedCameraId()
    // })
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
      <Modal isOpen={modalIsOpen} setClose={() => setModalIsOpen(false)}>
        <ModalWebcam setModalClose={() => setModalIsOpen(false)}/>
      </Modal>

      {user && !isSharingWebcam &&
        <Buttons active={false}>
          <button onClick={startShareWebcam}>
            <BsCameraVideoOff size={20} />
          </button>
          <button onClick={() => setModalIsOpen(true)}>
            <MdArrowDropDown size={20}/>
          </button>
        </Buttons>
      }
      {user && isSharingWebcam &&
        <Buttons active={true}>
          <button onClick={stopShareWebcam}>
            <BsCameraVideo size={20} />
          </button>
          <button onClick={() => setModalIsOpen(true)}>
            <MdArrowDropDown size={20}/>  
          </button>  
        </Buttons>
      }
      <video ref={videoRef} autoPlay playsInline muted></video>
    </Container>
  );
}
