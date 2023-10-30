import React, { useState } from "react";
import { toast } from 'react-toastify';
import { Body, Button, ButtonAgain, Container, Footer, Header } from "./styles";
import {Input} from '../../Input'
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import Validator from '../../../services/validator'

export function ModalRecovery({setModalClose}) {

  const [id, setId] = useState('')
  const [step, setStep] = useState(0)
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [senha, setSenha] = useState('')
  const [senhaConfirmada, setSenhaConfirmada] = useState('')

  const [expired, setExpired] = useState(false)

  const validator = new Validator()
  const navigate = useNavigate()

  function validatedCode(date1, date2) {

    const horario1 = date1.split(',')[1]
    const horario2 = date2.split(',')[1]

    const [hora1, minuto1, segundo1] = horario1.split(':');
    const [hora2, minuto2, segundo2] = horario2.split(':');

    const totalSegundos1 = parseInt(hora1) * 3600 + parseInt(minuto1) * 60 + parseInt(segundo1);
    const totalSegundos2 = parseInt(hora2) * 3600 + parseInt(minuto2) * 60 + parseInt(segundo2);

    const diferencaSegundos = Math.abs(totalSegundos1 - totalSegundos2);

    if (diferencaSegundos >= 300) {
      return false;
    } else {
      return true;
    }
  }

  async function handleRecoverySend(e) {

    e.preventDefault()

    try {

      if (expired) {
        setExpired(false)
      }

      if (validator.email(email) != null) {
        toast.error('Email inválido!')
        return
      }

      await api.post('/login/sendrecovery', { email, created_at: new Date().toLocaleString() })

      toast.success('E-mail enviado com sucesso!')
      toast.warning('O código enviado tem uma validade de 5 minutos.')
      setStep(1)

    } catch (e) {

      toast.error(e.response.data.msg)

    }

  }

  async function handleRecoveryGet(e) {

    e.preventDefault()

    if (code.length != 6) {
      return
    }

    try {

      const response = await api.post('/login/getrecovery', { code: code.toUpperCase(), email })

      const hora = response.data.created_at
      const horaAtual = new Date().toLocaleString()

      if (!validatedCode(hora, horaAtual)) {
        toast.error('Este código foi expirado.')
        setExpired(true)
        return
      }

      setId(response.data.id)

      toast.success('Código verificado com sucesso!')
      setStep(2)

    } catch (e) {
      toast.error(e.response.data.msg)
    }

  }

  async function handleUpdate(e) {

    e.preventDefault()

    const validSenha = validator.senha(senha)
    const validSenhaConfirm = validator.senha(senhaConfirmada)

    if (validSenha != null) {
      toast.error(validSenha)
      return
    }

    if (validSenhaConfirm != null) {
      toast.error(validSenhaConfirm)
      return
    }

    if (senha !== senhaConfirmada) {
      toast.error('Suas senhas não coincidem.')
      return
    }

    try {

      await api.put(`/usuarios/pass/${id}`, { senha, senhaConfirmada })

      toast.success('Senha alterada com sucesso!')
      setModalClose()

    } catch (e) {

      toast.error(e.response.data.msg)

    }

  }

  async function deleteRecovery(e) {

    e.preventDefault()

    try {

      setCode('')
      setStep(0)
      await api.delete(`/login/deleterecovery/${email}`)

    } catch (e) { setStep(0) }

  }

  return (
    <Container>

      <form style={{display: step == 0 ? 'block' : 'none'}} onSubmit={handleRecoverySend}>

        <Header>

          <h1>Enviar E-mail</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <Input required name="email" label={'Email'} valor={email} setValor={setEmail} minLength={5} maxLength={200}/>

        </Body>

        <hr />

        <Footer>

          <Button type="submit">Enviar</Button>

        </Footer>

      </form>
    
      <form style={{display: step == 1 ? 'block' : 'none'}}  onSubmit={handleRecoveryGet}>

        <Header>

          <h1>Insira o código</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <Input required name="code" label={'Código'} valor={code} setValor={setCode} minLength={6} maxLength={6}/>
          {expired && <ButtonAgain onClick={handleRecoverySend}>Enviar código novamente</ButtonAgain>}

        </Body>

        <hr />

        <Footer>

          <Button color={'red'} onClick={deleteRecovery} type="button">Voltar</Button>
          <Button disabled={code.length != 6} type="submit">Enviar</Button>

        </Footer>

      </form>
      
      <form style={{display: step == 2 ? 'block' : 'none'}}  onSubmit={handleUpdate}>

        <Header>

          <h1>Alterar senha</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <Input minLength={8} maxLength={50} required name="senha" autoComplete="current-password" type='password' label={'Senha'} valor={senha} setValor={setSenha}/>
          <Input minLength={8} maxLength={50} required name="senha" autoComplete="current-password" type='password' label={'Confirmar Senha'} valor={senhaConfirmada} setValor={setSenhaConfirmada}/>

        </Body>

        <hr />

        <Footer>

          <Button disabled={code.length != 6} type="submit">Salvar</Button>

        </Footer>

      </form>
    </Container>
  );
}