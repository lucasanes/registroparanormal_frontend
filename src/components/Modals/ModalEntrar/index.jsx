import React, { useState } from "react";
import { Body, Container, Footer, Header } from "./styles";
import {Input} from '../../Input'
import { Toggle } from "../../Toggle";
import { useAuth } from "../../../hooks/useAuth";

export function ModalEntrar({setModalClose, setModalRecoveryIsOpen}) {

  const { signIn } = useAuth();

  const [campo, setCampo] = useState("");
  const [senha, setSenha] = useState("");

  const [manterLogin, setManterLogin] = useState(true);

  let username = undefined;
  let email = undefined;

  const emailRegex = /^\w+( [-+.']\w+)*@\w+( [-.]\w+)*\.\w+( [-.]\w+)*$/;

  function switchManterLogin() {
    if (manterLogin) {
      setManterLogin(false)
    } else {
      setManterLogin(true)
    }
  }

  function handleLogin(e) {

    e.preventDefault()

    if (emailRegex.test(campo)) {
      email = campo;
    } else {
      username = campo;
    }
    signIn({
      username: username,
      email: email,
      senha: senha,
      manterLogin: manterLogin
    });
  }

  return (
    <Container>

      <form onSubmit={handleLogin}>

        <Header>

          <h1>Entrar</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <Input required minLength={2} maxLength={200} name="username" autoComplete="username" label={'User/Email'} valor={campo} setValor={setCampo}/>
          <Input minLength={8} maxLength={50} required name="senha" autoComplete="current-password" type='password' label={'Senha'} valor={senha} setValor={setSenha}/>

          <div className="div">
            <Toggle defaultChecked={true} classNumber={1} span={'Manter Ativo'} onChange={switchManterLogin}/>
            <button type="button" onClick={() => {setModalClose(); setModalRecoveryIsOpen()}}>Recuperar Senha</button>
          </div>

        </Body>

        <hr />

        <Footer>

          <button type="submit">Entrar</button>

        </Footer>

      </form>
      

    </Container>
  );
}