import { Container } from './styles';
import { io } from 'socket.io-client';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { useEffect } from 'react';

const socket = io(api.defaults.baseURL);

export function Documentos() {

  const { id } = useParams()

  const [imagem, setImagem] = useState('')

  useEffect(() => {

    function executeItemImg({ sessaoId, imagem }) {

      if (sessaoId == id) {
        if (imagem == 'fechar') {
          setImagem('')
        } else {
          setImagem(imagem)
        }
      }
    }
    socket.on("enviado.itemImg", executeItemImg);

  }, [])

  return (
    <Container>
      <img src={imagem} width='100%' />
    </Container>
  );
}