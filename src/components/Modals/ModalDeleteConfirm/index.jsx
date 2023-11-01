import React from "react";
import { Body, Button, Container, Footer, Header } from "./styles";

export function ModalDeleteConfirm({handleExecute, setModalClose}) {

  return (
    <Container>

      <Header>

        <h1>Tem certeza?</h1>
        <button type="button" onClick={setModalClose}>x</button>

      </Header>

      <hr />

      <Body>

        <h2>Ao deletar/desvincular, não será possível reverter.</h2>

      </Body>

      <hr />

      <Footer>

        <Button color={'red'} onClick={setModalClose} type="button">Cancelar</Button>
        <Button onClick={handleExecute} type="button">Confirmar</Button>

      </Footer>

    </Container>
  );
}