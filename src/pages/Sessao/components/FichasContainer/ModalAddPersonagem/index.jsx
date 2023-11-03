import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Input } from '../../../../../components/Input';
import { api } from '../../../../../services/api';
import { Container, Header, Body, Footer } from './styles';
import { io } from 'socket.io-client';
import {useAuth} from '../../../../../hooks/useAuth'

const socket = io(api.defaults.baseURL);

export function ModalAddPersonagem({ setModalClose }) {

  const [email, setEmail] = useState('')

  const { id } = useParams()
  const {user} = useAuth()

  async function handleCreate(e) {

    e.preventDefault()

    if (email != user.email) {

      try {

        await api.post(`/sessoes/convite`, {
          userEmail: email,
          sessaoId: id
        })

        socket.emit("enviado.convite", email);

        toast.success("Convite enviado com sucesso!")
        setModalClose()

      } catch (erro) {
        toast.error(erro.response.data.msg)
      }

    } else {
      toast.error("Você não pode convidar a si mesmo.")
    }

  }

  return (
    <Container>

      <form onSubmit={handleCreate}>

        <Header>

          <h1>Enviar Convite</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <Input required label={'Email'} setValor={setEmail} valor={email} />

        </Body>

        <hr />

        <Footer>

          <button type="submit">Enviar</button>

        </Footer>

      </form>

    </Container>
  );
}