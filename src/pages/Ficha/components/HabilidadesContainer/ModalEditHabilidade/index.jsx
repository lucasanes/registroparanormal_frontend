import { useState } from 'react';
import { toast } from 'react-toastify';
import { Input } from '../../../../../components/Input';
import { TextArea } from '../../../../../components/TextArea';
import { api } from '../../../../../services/api';
import { Container, Body, Footer, Header } from './styles';

export function ModalEditHabilidade({ setModalClose, lista, data }) {

  const [nome, setNome] = useState(data.nome)
  const [desc, setDesc] = useState(data.descricao)

  async function handleEdit(e) {

    e.preventDefault()

    try {

      await api.put(`/fichas/habilidade/${data.id}`, {
        nome,
        descricao: desc
      })

      const habilidadeAEditar = lista.filter(habilidade => habilidade.id == data.id)

      habilidadeAEditar[0].nome = nome
      habilidadeAEditar[0].descricao = desc

      setModalClose()

    } catch (erro) {
      toast.error(erro.response.data.msg)
    }

  }

  return (
    <Container>

      <form onSubmit={handleEdit}>

        <Header>
          <h1>Editar Habilidade</h1>
          <button type="button" onClick={setModalClose}>x</button>
        </Header>

        <hr />

        <Body>
          <Input required maxLength={30} label={'Nome'} valor={nome} setValor={setNome} />
          <TextArea required maxLength={500} label={'Descrição'} valor={desc} setValor={setDesc} />
        </Body>

        <hr />

        <Footer>

          <button type="submit">Salvar</button>

        </Footer>

      </form>

    </Container>
  );
}