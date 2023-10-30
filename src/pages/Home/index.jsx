import { useState } from "react";
import { ModalEntrar } from "../../components/Modals/ModalEntrar";
import { Modal } from "../../components/Modals/Modal";
import { Entrar, Criar, Container, Main } from "./styles";
import { ModalCadastrar } from "../../components/Modals/ModalCadastrar";
import { useEffect } from "react";
import { ModalRecovery } from "../../components/Modals/ModalRecovery";

export function Home() {

  const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false)
  const [modalCadastroIsOpen, setModalCadastroIsOpen] = useState(false)
  const [modalRecoveryIsOpen, setModalRecoveryIsOpen] = useState(false)

  useEffect(() => {

    document.title = 'Registro Paranormal'

  }, [])

  return (
    <Container>
      <Main>
        <h1>Registro</h1>
        <h2>Paranormal</h2>

        <Entrar onClick={() => { setModalLoginIsOpen(true) }}>
          Entrar
        </Entrar>
        <Criar onClick={() => { setModalCadastroIsOpen(true) }}>Criar conta</Criar>

        <Modal isOpen={modalLoginIsOpen} setClose={() => { setModalLoginIsOpen(false)}}>
          <ModalEntrar setModalClose={() => { setModalLoginIsOpen(false) }} setModalRecoveryIsOpen={() => setModalRecoveryIsOpen(true)} />
        </Modal>

        <Modal isOpen={modalCadastroIsOpen} setClose={() => { setModalCadastroIsOpen(false) }}>
          <ModalCadastrar setModalClose={() => { setModalCadastroIsOpen(false) }} />
        </Modal>

        <Modal isOpen={modalRecoveryIsOpen} setClose={() => { setModalRecoveryIsOpen(false) }}>
          <ModalRecovery setModalClose={() => { setModalRecoveryIsOpen(false) }} />
        </Modal>

      </Main>
    </Container>
  );
}
