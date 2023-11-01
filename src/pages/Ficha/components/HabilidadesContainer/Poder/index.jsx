import { ButtonEdit } from '../../../../../components/ButtonEdit';
import { Container, Buttons, Main1, Main2 } from './styles';
import { BiTrashAlt } from 'react-icons/bi'
import { api } from '../../../../../services/api';
import { useState } from 'react';
import { Modal } from '../../../../../components/Modals/Modal';
import { ModalEditPoder } from '../ModalEditPoder';
import { ButtonDelete } from '../../../../../components/ButtonDelete';

export function Poder({ data, lista, atualizar }) {

  const [modalEditPoderIsOpen, setModalEditPoderIsOpen] = useState(false)

  async function handleDelete() {

    try {

      await api.delete(`/fichas/poder/${data.id}`)

      const listaAtt = lista.filter(poder => poder.id != data.id)

      atualizar(listaAtt)

    } catch (erro) {
      console.log(erro)
    }

  }

  return (
    <Container>

      <Modal isOpen={modalEditPoderIsOpen} setClose={() => setModalEditPoderIsOpen(false)}>
        <ModalEditPoder lista={lista} data={data} setModalClose={() => setModalEditPoderIsOpen(false)} />
      </Modal>

      <Main1>

        <h1>{data.nome}</h1>

        <Buttons>

          <ButtonEdit onClick={() => setModalEditPoderIsOpen(true)} />
          <ButtonDelete onClick={handleDelete} />

        </Buttons>

      </Main1>

      <Main2>
        <p>{data.descricao}</p>
      </Main2>

    </Container>
  );
}