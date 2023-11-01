import React from "react";
import { Body, Button, Container, Footer, Header } from "./styles";

export function ModalDeleteConfirm({handleExecute, setModalClose}) {

  return (
    <Container>

      <form onSubmit={handleExecute}>

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
          <Button type="submit">Confirmar</Button>

        </Footer>

      </form>

    </Container>
  );
}