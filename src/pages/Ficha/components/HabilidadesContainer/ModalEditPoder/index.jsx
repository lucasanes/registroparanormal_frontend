import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Input } from '../../../../../components/Input';
import { TextArea } from '../../../../../components/TextArea';
import { api } from '../../../../../services/api';
import { Container, Header, Body, Footer } from './styles';

export function ModalEditPoder({ setModalClose, lista, data }) {

  const [nome, setNome] = useState(data.nome)
  const [desc, setDesc] = useState(data.descricao)

  async function handleEdit(e) {

    e.preventDefault()

    try {

      await api.put(`/fichas/poder/${data.id}`, {
        nome,
        descricao: desc
      })

      const poderAEditar = lista.filter(poder => poder.id == data.id)

      poderAEditar[0].nome = nome
      poderAEditar[0].descricao = desc

      setModalClose()

    } catch (erro) {
      toast.error(erro.response.data.msg)
    }

  }

  return (
    <Container>

      <form onSubmit={handleEdit}>

        <Header>
          <h1>Editar Poder</h1>
          <button type="button" onClick={setModalClose}>x</button>
        </Header>

        <hr />

        <Body>
          <Input required maxLength={30} label={'Nome'} valor={nome} setValor={setNome} />
          <TextArea required maxLength={2000} label={'Descrição'} valor={desc} setValor={setDesc} />
        </Body>

        <hr />

        <Footer>

          <button type="submit">Salvar</button>

        </Footer>

      </form>

    </Container>
  );
}