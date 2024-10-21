import { useState } from 'react';
import { MdOutlineAddBox } from "react-icons/md";
import { Modal } from '../../../../components/Modals/Modal';
import { useAuth } from '../../../../hooks/useAuth';
import { useFichas } from '../../../../hooks/useFichas';
import { CardFichasPersonagem } from "./CardFichasPersonagem";
import { ModalAddPersonagem } from './ModalAddPersonagem';
import { BodyContainer, Container, HeaderContainer } from './styles';

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