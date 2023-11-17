import { BodyContainer, Container, HeaderContainer } from './styles';
import { CardFichasPersonagem } from "./CardFichasPersonagem";
import { MdOutlineAddBox } from "react-icons/md";
import { useState } from 'react';
import { useFichas } from '../../../../hooks/useFichas';
import { Modal } from '../../../../components/Modals/Modal';
import { ModalAddPersonagem } from './ModalAddPersonagem';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth';

export function FichaContainer() {

  const { fichas } = useFichas()
  const {user} = useAuth()
  const [modalAddPersoagemIsOpen, setModalAddPersoagemIsOpen] = useState(false)

  return (
    <Container>

      <Modal isOpen={modalAddPersoagemIsOpen} setClose={() => setModalAddPersoagemIsOpen(false)}>
        <ModalAddPersonagem setModalClose={() => setModalAddPersoagemIsOpen(false)} />
      </Modal>

      <HeaderContainer>
        <h1>Fichas Players</h1>
        <button>
          <MdOutlineAddBox onClick={() => setModalAddPersoagemIsOpen(true)} size={25} />
        </button>
      </HeaderContainer>

      <hr />

      <BodyContainer quantidade={fichas.length}>

        {fichas.map(ficha => 
          ficha.userId != user.id && <CardFichasPersonagem key={ficha.id} data={ficha} />
        )}

      </BodyContainer>

    </Container>
  );
}