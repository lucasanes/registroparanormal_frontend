import { useState } from 'react';
import { BiTrashAlt } from 'react-icons/bi';
import { BsCameraVideo, BsEye, BsEyeSlash } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { MdOutlinePlayCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import noportrait from '../../../assets/img/noportrait.png';
import { Modal } from '../../../components/Modals/Modal';
import { ModalDeleteConfirm } from '../../../components/Modals/ModalDeleteConfirm';
import { api } from '../../../services/api';
import { theme } from '../../../stitches.config';

import {
  Botoes,
  Button,
  Container,
  Desc,
  Footer,
  Grade,
  Header,
  LinkButton,
  ParteGrade,
} from './styles';

export function Ficha({ data, fichas, setFichas }) {
  const [isPublic, setIsPublic] = useState(data.isPublic);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);

  const infos = data.Principal[0];
  const portrait = data.Portrait[0];

  async function handleDelete() {
    try {
      await api.delete(`/fichas/${data.id}`);

      const fichasAtt = fichas.filter((ficha) => ficha.id != data.id);
      setFichas(fichasAtt);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleEdit() {
    await api.put(`/fichas/${data.id}`, {
      isPublic: !isPublic,
      sessaoId: data.sessaoId,
    });
    setIsPublic(!isPublic);
    toast.success(`Sua ficha agora está ${!isPublic ? 'pública' : 'privada'}.`);
  }

  return (
    <Container>
      <Modal
        isOpen={modalDeleteIsOpen}
        setClose={() => setModalDeleteIsOpen(false)}
      >
        <ModalDeleteConfirm
          setModalClose={() => setModalDeleteIsOpen(false)}
          handleExecute={handleDelete}
        />
      </Modal>

      <Header>
        <h2>
          {infos.nome} {data.sessaoId && ' - ' + data.sessao.nome}
        </h2>
        <Botoes>
          {data.sessaoId && (
            <LinkButton to={`/streaming/${data.sessaoId}`} target='_blank'>
              <MdOutlinePlayCircle size={20} color={theme.colors.cyan} />
            </LinkButton>
          )}
          <LinkButton
            to={`https://vdo.ninja/?push=${data.sessaoId}_sala_0`}
            target='_blank'
          >
            <BsCameraVideo size={20} color={theme.colors.cyan} />
          </LinkButton>
          <LinkButton to={`/ficha/portrait/${data.id}`} target='_blank'>
            <FaUserCircle size={20} color={theme.colors.cyan} />
          </LinkButton>
          <Button onClick={handleEdit} color={isPublic ? 'green' : 'crimson'}>
            {isPublic ? (
              <BsEye size={20} color='#13ff72' />
            ) : (
              <BsEyeSlash size={20} color='crimson' />
            )}
          </Button>
          <Button onClick={() => setModalDeleteIsOpen(true)} color={'red'}>
            <BiTrashAlt size={20} color='red' />
          </Button>
        </Botoes>
      </Header>
      <hr />
      <Desc>
        <video src={portrait.normal || noportrait} autoPlay loop muted />
        <Grade>
          <ParteGrade>
            <span>Origem:</span>
            <div>{infos.origem}</div>
          </ParteGrade>
          <ParteGrade>
            <span>Classe:</span>
            <div>{infos.classe}</div>
          </ParteGrade>
          <ParteGrade>
            <span>NEX:</span>
            <div>{infos.nex}</div>
          </ParteGrade>
          {infos.trilha != 'Nenhuma' ? (
            <ParteGrade>
              <span>Trilha:</span>
              <div>{infos.trilha}</div>
            </ParteGrade>
          ) : (
            <ParteGrade>
              <span>Idade:</span>
              <div>{infos.idade}</div>
            </ParteGrade>
          )}
        </Grade>
      </Desc>
      <hr />
      <Footer>
        <Link
          to={
            data.sessaoId != null
              ? `/sessao/ficha/${data.id}`
              : `/ficha/${data.id}`
          }
        >
          Acessar Ficha
        </Link>
      </Footer>
    </Container>
  );
}
