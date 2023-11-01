import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Input } from '../../../../../components/Input';
import { api } from '../../../../../services/api';
import { Container, Header, Body, Footer } from './styles';

export function ModalProficiencia({ setModalClose, atualizar }) {

  const [nome, setNome] = useState('')

  const { id } = useParams()

  async function handleCreate(e) {

    e.preventDefault()

    try {

      const response = await api.post(`/fichas/proficiencia`, {
        nome,
        fichaId: id
      })

      atualizar((prevState) => [...prevState, response.data])
      setModalClose()

    } catch (erro) {
      toast.error(erro.response.data.msg)
    }

  }

  return (
    <Container>

      <form onSubmit={handleCreate}>

        <Header>
          <h1>Criar Profiência</h1>
          <button type="button" onClick={setModalClose}>x</button>
        </Header>

        <hr />

        <Body>
          <Input required maxLength={30} label={'Nome'} valor={nome} setValor={setNome} />
        </Body>

        <hr />

        <Footer>

          <button type="submit">Criar</button>

        </Footer>

      </form>

    </Container>
  );
}