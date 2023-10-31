import { Body, Container, HeaderContainer } from './styles';
import { Dado } from './components/dado';
import { useState } from 'react';
import { ModalAddDado } from './components/ModalAddDado';
import { Modal } from '../../../../components/Modals/Modal';
import { ModalDadoRolado } from '../../../../components/ModalDadoRolado';
import { ButtonAdd } from '../../../../components/ButtonAdd';

export function DadosContainer({ data }) {

  const [dados, setDados] = useState(data)
  const [modalAddIsOpen, setModalAddIsOpen] = useState(false)

  return (
    <Container>

      <Modal isOpen={modalAddIsOpen} setClose={() => setModalAddIsOpen(false)}>
        <ModalAddDado atualizar={setDados} setModalClose={() => setModalAddIsOpen(false)} />
      </Modal>

      <HeaderContainer>
        <h1>Dados</h1>
        <ButtonAdd onClick={() => setModalAddIsOpen(true)} />
      </HeaderContainer>

      <hr />

      <Body>
        {dados.map(dado => <Dado key={dado.id} data={dado} atualizar={setDados} dados={dados} />)}
      </Body>

    </Container>
  );
}