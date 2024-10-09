import Peer from 'peerjs';
import { useEffect, useRef, useState } from 'react';
import { BsCameraVideo, BsCameraVideoOff } from "react-icons/bs";
import { MdArrowDropDown } from 'react-icons/md';
import { RiDoorOpenLine } from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { Modal } from '../../components/Modals/Modal';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';
import { ModalRoom } from './components/ModalRoom';
import { ModalWebcam } from './components/ModalWebcam';
import { createAnswer } from './createAnswer';
import { prepareToRecieveOffers } from './prepareToRecieveOffers';
import { shareWebcam } from './shareWebcam';
import { stopShare } from './stopShare';
import { ButtonRoom, Buttons, Container } from './styles';

const socket = io(api.defaults.baseURL);

export default function Webcam() {
  const { user } = useAuth()
  const { fichaId, id } = useParams()
  const [roomId, setRoomId] = useState(fichaId + id)
  const [modalWebcamIsOpen, setModalWebcamIsOpen] = useState(false);
  const [modalRoomIsOpen, setModalRoomIsOpen] = useState(false);

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

    console.log(roomId)

    setRoomId(fichaId + id)

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
  }, [id]);

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
      <Modal isOpen={modalWebcamIsOpen} setClose={() => setModalWebcamIsOpen(false)}>
        <ModalWebcam setModalClose={() => setModalWebcamIsOpen(false)}/>
      </Modal>

      <Modal isOpen={modalRoomIsOpen} setClose={() => setModalRoomIsOpen(false)}>
        <ModalRoom setModalClose={() => setModalRoomIsOpen(false)}/>
      </Modal>

      <div style={{display: 'flex'}}>
        {user && !isSharingWebcam &&
          <Buttons active={false}>
            <button onClick={startShareWebcam}>
              <BsCameraVideoOff size={20} />
            </button>
            <button onClick={() => setModalWebcamIsOpen(true)}>
              <MdArrowDropDown size={20}/>
            </button>
          </Buttons>
        }
        {user && isSharingWebcam &&
          <Buttons active={true}>
            <button onClick={stopShareWebcam}>
              <BsCameraVideo size={20} />
            </button>
            <button onClick={() => setModalWebcamIsOpen(true)}>
              <MdArrowDropDown size={20}/>  
            </button>  
          </Buttons>
        }

        {user && 
          <ButtonRoom onClick={() => setModalRoomIsOpen(true)}>
            <RiDoorOpenLine size={20}/>
          </ButtonRoom>
        }
      </div>

      <video ref={videoRef} autoPlay playsInline muted></video>
    </Container>
  );
}
