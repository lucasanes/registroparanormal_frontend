import { Container, Button, Body } from './styles';
import { FaDiceD20 } from 'react-icons/fa'
import { Modal } from '../../../../../../components/Modals/Modal';
import { useEffect, useState } from 'react';
import { ModalDadoRolado } from '../../../../../../components/ModalDadoRolado';
import { MdOutlineEdit } from 'react-icons/md'
import { ModalEditDado } from '../ModalEditDado';
import { ButtonEdit } from '../../../../../../components/ButtonEdit';
import { useParams } from 'react-router-dom';
import { api } from '../../../../../../services/api';
import { useDisabled } from '../../../../../../hooks/useDisabled';

export function Dado({ data, atualizar, dados }) {

  const [modalDadoRoladoIsOpen, setModalDadoRoladoIsOpen] = useState(false)
  const [modalDadoEditIsOpen, setModalDadoEditIsOpen] = useState(false)

  const { disabled } = useDisabled()

  return (
    <Container>

      <Modal isOpen={modalDadoRoladoIsOpen} setClose={() => setModalDadoRoladoIsOpen(false)}>
        <ModalDadoRolado setModalClose={() => setModalDadoRoladoIsOpen(false)} data={data} />
      </Modal>

      <Modal isOpen={modalDadoEditIsOpen} setClose={() => setModalDadoEditIsOpen(false)}>
        <ModalEditDado setModalClose={() => setModalDadoEditIsOpen(false)} data={data} atualizar={atualizar} dados={dados} />
      </Modal>

      <ButtonEdit className='edit' onClick={() => setModalDadoEditIsOpen(true)} />

      <Body>

        <Button disabled={disabled} id='click'
          onClick={() => setModalDadoRoladoIsOpen(true)}
          isDano={data.isDano}>
          <FaDiceD20 size={40} />
          <h1>{data.nome}</h1>
        </Button>

      </Body>
    </Container>
  );
}