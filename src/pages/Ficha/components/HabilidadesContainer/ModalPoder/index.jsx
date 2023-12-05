import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Input } from '../../../../../components/Input';
import { TextArea } from '../../../../../components/TextArea';
import { api } from '../../../../../services/api';
import { Container, Header, Body, Footer } from './styles';

export function ModalPoder({ setModalClose, atualizar }) {

  const [nome, setNome] = useState('')
  const [desc, setDesc] = useState('')

  const { id } = useParams()

  async function handleCreate(e) {

    e.preventDefault()
    
    try {

      const response = await api.post(`/fichas/poder`, {
        nome,
        descricao: desc,
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
          <h1>Criar Poder</h1>
          <button type="button" onClick={setModalClose}>x</button>
        </Header>

        <hr />

        <Body>
          <Input required maxLength={30} label={'Nome'} valor={nome} setValor={setNome} />
          <TextArea required maxLength={2000} label={'Descrição'} valor={desc} setValor={setDesc} />
        </Body>

        <hr />

        <Footer>

          <button type="submit">Criar</button>

        </Footer>

      </form>

    </Container>
  );
}