import { ButtonEdit } from '../../../../../components/ButtonEdit';
import { Container, Buttons, Main1 } from './styles';
import { BiTrashAlt } from 'react-icons/bi'
import { api } from '../../../../../services/api';
import { ModalEditProficiencia } from '../ModalEditProficiencia';
import { Modal } from '../../../../../components/Modals/Modal';
import { useState } from 'react';
import { ButtonDelete } from '../../../../../components/ButtonDelete';

export function Proficiencia({ data, lista, atualizar }) {

  const [modalEditProficienciaIsOpen, setModalEditProficienciaIsOpen] = useState(false)

  async function handleDelete() {

    try {

      await api.delete(`/fichas/proficiencia/${data.id}`)

      const listaAtt = lista.filter(proficiencia => proficiencia.id != data.id)

      atualizar(listaAtt)

    } catch (erro) {
      console.log(erro)
    }

  }

  return (
    <Container>

      <Modal isOpen={modalEditProficienciaIsOpen} setClose={() => setModalEditProficienciaIsOpen(false)}>
        <ModalEditProficiencia lista={lista} data={data} setModalClose={() => setModalEditProficienciaIsOpen(false)} />
      </Modal>

      <Main1>

        <h1>{data.nome}</h1>

        <Buttons>

          <ButtonEdit onClick={() => setModalEditProficienciaIsOpen(true)} />
          <ButtonDelete onClick={handleDelete} />

        </Buttons>

      </Main1>

    </Container>
  );
}