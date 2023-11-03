import { useEffect, useState } from 'react';
import { Input } from '../../../../../../components/Input';
import { Toggle } from '../../../../../../components/Toggle';
import { Container, Footer, Body, Header } from './styles';
import { toast } from 'react-toastify'
import { api } from '../../../../../../services/api';
import { useParams } from 'react-router-dom';

export function ModalAddDado({ setModalClose, atualizar }) {

  const [nome, setNome] = useState('')
  const [valor, setValor] = useState('')
  const [isDano, setIsDano] = useState(false)

  const { id } = useParams()

  const patternTeste = /^(((100|\d{1,2}|\/[ABCDEFGILMNOPRSTUV]{3,4}\/)?((d)(20))))([+]((100|\d{1,2}|\/[ABCDEFGILMNOPRSTUV]{3,4}\/)?))*$/g;
  const patternDano = /^(((100|\d{1,2}|\/[ABCDEFGILMNOPRSTUV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ABCDEFGILMNOPRSTUV]{3,4}\/))?)|(\d{0,3}|1000))([+]((100|\d{1,2}|\/[ABCDEFGILMNOPRSTUV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ABCDEFGILMNOPRSTUV]{3,4}\/))?)|([+]\d{0,3}|1000)?)*$/g;

  async function handleCreate(e) {

    e.preventDefault()

    if (!isDano && !valor.match(patternTeste)) {
      toast.error('Dado inválido.')
      return
    }

    if (isDano && !valor.match(patternDano)) {
      toast.error('Dado inválido.')
      return
    }

    try {

      const data = await api.post(`/sessoes/dado`, {
        nome: nome,
        valor: valor,
        isDano: isDano,
        sessaoId: id
      });

      atualizar((prevState) => [...prevState, data.data]);
      setModalClose()

    } catch (erro) {
      toast.error(erro.response.data.msg)
    }

  }

  return (
    <Container>

      <form onSubmit={handleCreate}>

        <Header>

          <h1>Criar Dado</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <Input required autoComplete="dado" name="dado" label={'Nome'} valor={nome} setValor={setNome} maxLength={30}/>
          <Input required autoComplete="valor" name="valor" label={'Valor'} valor={valor} setValor={setValor}/>
          <Toggle span={'Rolar Como Dano?'} classNumber={'1'} onClick={() => setIsDano(!isDano)} />

        </Body>

        <hr />

        <Footer>

          <button type="submit">Criar</button>

        </Footer>

      </form>

    </Container>
  );
}