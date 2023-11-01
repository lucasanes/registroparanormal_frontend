import { Container } from './styles';
import { BiTrashAlt } from 'react-icons/bi'
import { useDisabled } from '../../hooks/useDisabled';
import { Modal } from '../../components/Modals/Modal'
import { ModalDeleteConfirm } from '../../components/Modals/ModalDeleteConfirm'
import { useState } from 'react';

export function ButtonDelete({ onClick, size = 20, ...rest }) {

  const { disabled } = useDisabled()
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <Container {...rest}>

      <Modal isOpen={modalIsOpen} setClose={() => setModalIsOpen(false)}>
        <ModalDeleteConfirm setModalClose={() => setModalIsOpen(false)} handleExecute={onClick}/>
      </Modal>

      <button type='button' disabled={disabled} onClick={() => setModalIsOpen(true)}>
        <BiTrashAlt size={size} color={'#ff0000'} />
      </button>
    </Container>
  );
}