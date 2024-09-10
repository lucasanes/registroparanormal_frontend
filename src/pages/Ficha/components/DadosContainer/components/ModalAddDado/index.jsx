import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Input } from '../../../../../../components/Input';
import { Toggle } from '../../../../../../components/Toggle';
import { api } from '../../../../../../services/api';
import { Body, Container, Footer, Header } from './styles';

export function ModalAddDado({ setModalClose, atualizar }) {

  const [nome, setNome] = useState('')
  const [valor, setValor] = useState('')
  const [isTest, setIsTest] = useState(false)

  const { id } = useParams()

  const patternTeste = /^(((100|\d{1,2}|\/[ABCDEFGILMNOPRSTUV]{3,4}\/)?((d)(20))))([+]((100|\d{1,2}|\/[ABCDEFGILMNOPRSTUV]{3,4}\/)?))*$/g;
  const patternDano = /^(((100|\d{1,2}|\/[ABCDEFGILMNOPRSTUV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ABCDEFGILMNOPRSTUV]{3,4}\/))?)|(\d{0,3}|1000))([+]((100|\d{1,2}|\/[ABCDEFGILMNOPRSTUV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ABCDEFGILMNOPRSTUV]{3,4}\/))?)|([+]\d{0,3}|1000)?)*$/g;

  async function handleCreate(e) {

    e.preventDefault()

    if (isTest && !valor.match(patternTeste)) {
      toast.error('Dado inválido.')
      return
    }

    if (!isTest && !valor.match(patternDano)) {
      toast.error('Dado inválido.')
      return
    }

    try {

      const data = await api.post(`/fichas/dado`, {
        nome: nome,
        valor: valor,
        isDano: !isTest,
        fichaId: id
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
          <Toggle span={'Rolar Como Teste? (D20)'} classNumber={'1'} onClick={() => setIsTest(!isTest)} />

        </Body>

        <hr />

        <Footer>

          <button type="submit">Criar</button>

        </Footer>

      </form>

    </Container>
  );
}