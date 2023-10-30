import React, { useState } from "react";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../../services/api";
import { Container, Body, Header, Footer } from "./styles";
import { TextArea } from "../../TextArea";
import {useAuth} from '../../../hooks/useAuth'
import { Input } from "../../Input";

export function ModalEditSessao({ data, setModalClose, sessoes, setSessoes }) {

  const [nome, setNome] = useState(data.nome);
  const [descricao, setDesc] = useState(data.descricao);

  const {user} = useAuth()

  async function handleEdit(e) {

    e.preventDefault()
    
    try {

      await api.put(`/sessoes/${data.id}`, {
        nome,
        descricao,
        userId: user.id
      });

      const sessaoAlterar = sessoes.filter(sessao => sessao.id == data.id)[0]

      sessaoAlterar.nome = nome
      sessaoAlterar.descricao = descricao

      setModalClose()
      toast.success("Sessão atualizada com sucesso!")

    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }

  return (
    <Container>

      <form onSubmit={handleEdit}>

        <Header>

          <h1>Editar Sessão</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <Input required autoComplete="name" name="nome" label={'Nome'} valor={nome} setValor={setNome} minLength={3} maxLength={25}/>
          <TextArea label={'Descrição'} valor={descricao} setValor={setDesc} minLength={16} maxLength={300}/>

        </Body>

        <hr />

        <Footer>

          <button type="submit">Salvar</button>

        </Footer>

      </form>

    </Container>
  );
}