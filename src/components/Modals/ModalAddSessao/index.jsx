import React, { useState } from "react";
import { toast } from 'react-toastify';
import { api } from "../../../services/api";
import { Container, Body, Header, Footer } from "./styles";
import { TextArea } from "../../TextArea";
import { Input } from "../../Input";
import { useAuth } from "../../../hooks/useAuth";

export function ModalAddSessao({ setModalClose, setSessoes }) {

  const [nome, setNome] = useState('');
  const [descricao, setDesc] = useState('');

  const {user} = useAuth()

  async function handleCreate(e) {

    e.preventDefault()

    try {
      const response = await api.post("/sessoes", {
        nome,
        descricao,
        userId: user.id
      });

      setSessoes(sessoes => [...sessoes, response.data])
      setModalClose()
      toast.success("Sessão criada com sucesso!")

    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }

  return (
    <Container>

      <form onSubmit={handleCreate}>

      <Header>

        <h1>Criar Sessão</h1>
        <button type="button" onClick={setModalClose}>x</button>

      </Header>

      <hr />

      <Body>

        <Input required autoComplete="name" name="nome" label={'Nome'} valor={nome} setValor={setNome} minLength={3} maxLength={25}/>
        <TextArea label={'Descrição'} valor={descricao} setValor={setDesc} minLength={16} maxLength={300}/>

      </Body>

      <hr />

      <Footer>

        <button type="submit">Criar</button>

      </Footer>

      </form>

    </Container>
  );
}