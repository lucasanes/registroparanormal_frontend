import { useState } from 'react';
import { Input } from '../../../../../../components/Input';
import { Toggle } from '../../../../../../components/Toggle';
import { Container, Body, Header, Footer } from './styles';
import { toast } from 'react-toastify'
import { api } from '../../../../../../services/api';

export function ModalEditDado({ setModalClose, data, atualizar, dados }) {

  const [nome, setNome] = useState(data.nome)
  const [valor, setValor] = useState(data.valor)
  const [isDano, setIsDano] = useState(data.isDano)

  const patternTeste = /^(((100|\d{1,2}|\/[ABCDEFGILMNOPRSTUV]{3,4}\/)?((d)(20))))([+]((100|\d{1,2}|\/[ABCDEFGILMNOPRSTUV]{3,4}\/)?))*$/g;
  const patternDano = /^(((100|\d{1,2}|\/[ABCDEFGILMNOPRSTUV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ABCDEFGILMNOPRSTUV]{3,4}\/))?)|(\d{0,3}|1000))([+]((100|\d{1,2}|\/[ABCDEFGILMNOPRSTUV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ABCDEFGILMNOPRSTUV]{3,4}\/))?)|([+]\d{0,3}|1000)?)*$/g;

  async function handleEdit(e) {

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

      await api.put(`/sessoes/dado/${data.id}`, {
        nome: nome,
        valor: valor,
        isDano: isDano
      });

      const dado = dados.filter(dado => dado.id == data.id)

      dado[0].nome = nome
      dado[0].valor = valor
      dado[0].isDano = isDano

      setModalClose()

    } catch (erro) {
      toast.error(erro.response.data.msg)
    }

  }

  async function handleDelete() {

    try {

      await api.delete(`/sessoes/dado/${data.id}`)

      const dadosAtualizados = dados.filter(dado => dado.id != data.id)

      atualizar(dadosAtualizados)
      setModalClose()

    } catch (erro) {
      console.log(erro.response.data.msg)
    }

  }

  return (
    <Container>
      
      <form onSubmit={handleEdit}>

        <Header>

          <h1>Editar Dado</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <Input required autoComplete="dado" name="dado" label={'Nome'} valor={nome} setValor={setNome} maxLength={30}/>
          <Input required autoComplete="valor" name="valor" label={'Valor'} valor={valor} setValor={setValor}/>
          <Toggle span={'Rolar Como Dano?'} classNumber={'1'} onClick={() => setIsDano(!isDano)} defaultChecked={data.isDano}/>

        </Body>

        <hr />

        <Footer>

          <button onClick={handleDelete} type="button">Deletar</button>
          <button type="submit">Salvar</button>

        </Footer>

      </form>

    </Container>
  );
}