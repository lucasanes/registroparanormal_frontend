import { Container } from './styles';
import { io } from 'socket.io-client';
import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { useEffect } from 'react';

const socket = io(api.defaults.baseURL);

export function Documentos() {

  const { id } = useParams()

  const contentRef = useRef(null)

  function slide(imagem) {

    const content = contentRef.current

    if (imagem == 'fechar') {
      content.style.scale = 0
      content.src = ''
    } else if (content.src != '') {
      
      content.style.transition = '0.3s'
      content.style.scale = 0
      
      setTimeout(() => {
        content.src = imagem
        content.style.transition = 'ease 0.2s'
        content.style.scale = 1.5
        setTimeout(() => {
          content.style.transition = 'ease 0.4s'
          content.style.scale = 1
        }, 220);
      }, 300);
 
    } else {
      content.src = imagem
      content.style.transition = 'ease 0.2s'
      content.style.scale = 1.5
      setTimeout(() => {
        content.style.transition = 'ease 0.4s'
        content.style.scale = 1
      }, 220);
    }
  }

  useEffect(() => {

    function executeItemImg({imagem}) {

      slide(imagem)
      
    }
    socket.on(`enviado.itemImg?${id}`, executeItemImg);

  }, [])

  return (
    <Container>
      <img ref={contentRef} width='100%' />
    </Container>
  );
}