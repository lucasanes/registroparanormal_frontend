import { Body, Button, Container, HeaderContainer } from './styles';
import { Dado } from './components/dado';
import { useState } from 'react';
import { ModalAddDado } from './components/ModalAddDado';
import { Modal } from '../../../../components/Modals/Modal';
import { ButtonAdd } from '../../../../components/ButtonAdd';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { ModalInfo } from '../../../../components/Modals/ModalInfo';

export function DadosContainer({ data }) {

  const [dados, setDados] = useState(data)
  const [modalAddIsOpen, setModalAddIsOpen] = useState(false)

  const [modalInfoIsOpen, setModalInfoIsOpen] = useState(false)

  return (
    <Container>

      <Modal isOpen={modalAddIsOpen} setClose={() => setModalAddIsOpen(false)}>
        <ModalAddDado atualizar={setDados} setModalClose={() => setModalAddIsOpen(false)} />
      </Modal>
      
      <Modal padding={false} isOpen={modalInfoIsOpen} setClose={() => setModalInfoIsOpen(false)}>
        <ModalInfo setModalClose={() => setModalInfoIsOpen(false)} />
      </Modal>

      <HeaderContainer>
        <Button onClick={() => setModalInfoIsOpen(true)}><AiOutlineInfoCircle size={20} color='#07eed7'/></Button>
        <h1>Dados</h1>
        <ButtonAdd onClick={() => setModalAddIsOpen(true)} />
      </HeaderContainer>

      <hr />

      <Body nulo={dados.length == 0}>
        {dados.map(dado => <Dado key={dado.id} data={dado} atualizar={setDados} dados={dados} />)}
      </Body>

    </Container>
  );
}