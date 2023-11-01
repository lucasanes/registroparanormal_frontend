import { useState } from 'react';
import { toast } from 'react-toastify';
import { Input } from '../../../../../components/Input';
import { api } from '../../../../../services/api';
import { Container, Header, Body, Footer } from './styles';

export function ModalEditProficiencia({ setModalClose, lista, data }) {

  const [nome, setNome] = useState(data.nome)

  async function handleEdit(e) {

    e.preventDefault()

    try {

      await api.put(`/fichas/proficiencia/${data.id}`, {
        nome
      })

      const proficienciaAEditar = lista.filter(proficiencia => proficiencia.id == data.id)

      proficienciaAEditar[0].nome = nome

      setModalClose()

    } catch (erro) {
      toast.error(erro.response.data.msg)
    }

  }

  return (
    <Container>

      <form onSubmit={handleEdit}>

        <Header>
          <h1>Editar Proficiência</h1>
          <button type="button" onClick={setModalClose}>x</button>
        </Header>

        <hr />

        <Body>
          <Input required maxLength={30} label={'Nome'} valor={nome} setValor={setNome} />
        </Body>

        <hr />

        <Footer>

          <button type="submit">Salvar</button>

        </Footer>

      </form>

    </Container>
  );
}