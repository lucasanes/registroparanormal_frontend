import React, { useState } from "react";
import { toast } from 'react-toastify';
import { Body, Container, Footer, Header } from "./styles";
import {Input} from '../../Input'
import { api } from "../../../services/api";

export function ModalCadastrar({setModalClose}) {

  const [nome, setNome] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConfirmada, setSenhaConfirmada] = useState('');

  async function handleLogin(e) {

    e.preventDefault()

    if (senha === senhaConfirmada) {
      try {

        const response = await api.post("/usuarios", {
          nome,
          username,
          email,
          senha
        });

        toast.success("Conta criada com sucesso!");
        setModalClose()

      } catch (error) {
        toast.error(error.response.data.msg);
      }
    } else {
      toast.error("Suas senhas não coincidem.")
    }

  }

  return (
    <Container>

      <form onSubmit={handleLogin}>

        <Header>

          <h1>Cadastro</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <Input required autoComplete="name" name="nome" label={'Nome'} valor={nome} setValor={setNome} minLength={2} maxLength={50}/>
          <Input required autoComplete="username" name="username" label={'Username'} valor={username} setValor={setUsername} minLength={2} maxLength={16}/>
          <Input required name="email" label={'Email'} valor={email} setValor={setEmail} minLength={5} maxLength={200}/>
          <Input required autoComplete="new-password" name="senha" type='password' label={'Senha'} valor={senha} setValor={setSenha} minLength={8} maxLength={50}/>
          <Input required autoComplete="new-password" name="senha" type='password' label={'Repetir Senha'} valor={senhaConfirmada} setValor={setSenhaConfirmada} minLength={8} maxLength={50}/>

        </Body>

        <hr />

        <Footer>

          <button type="submit">Cadastrar</button>

        </Footer>

      </form>
    </Container>
  );
}