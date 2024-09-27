/* eslint-disable react/prop-types */
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "../../Input";
import { Body, Container, Footer, Header } from "./styles";

export function ModalSom({ setModalClose }) {

  const [divisor, setDivisor] = useState(10);

  function handleEdit(e) {
    e.preventDefault();
    localStorage.setItem('@registroparanormal:musicPercentage', divisor);
    setModalClose()
  }

  return (
    <Container>

      <form onSubmit={handleEdit}>

        <Header>

          <h1>Diminuir Volume</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <Input required autoComplete="divisor" name="divisor" label={'Divisor'} valor={divisor} setValor={setDivisor} type='number' maxValor={50}/>

        </Body>

        <hr />

        <Footer>

          <button type="submit">Salvar</button>

        </Footer>

      </form>

    </Container>
  );
}