import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Input } from '../../../../../../components/Input';
import { TextArea } from '../../../../../../components/TextArea';
import { api } from '../../../../../../services/api';
import { Container, Header, Body, Footer, Main1, Main2, Main3 } from './styles';

export function ModalAddArma({ setModalClose, atualizar, setPesoAtual }) {

  const [nome, setNome] = useState('')

  const [tipo, setTipo] = useState('')
  const [alcance, setAlcance] = useState('')
  const [recarga, setRecarga] = useState(null)
  const [especial, setEspecial] = useState(null)
  const [ataque, setAtaque] = useState('')
  const [dano, setDano] = useState('')
  const [margemCritico, setMargemCritico] = useState('')
  const [danoCritico, setDanoCritico] = useState('')

  const [espaco, setEspaco] = useState('')
  const [categoria, setCategoria] = useState('')
  const [descricao, setDescricao] = useState(null)
  const [imagem, setImagem] = useState(null)

  const { id } = useParams()

  const patternTeste = /^(((100|\d{1,2}|\/[ABCDEFGILMNOPRSTUV]{3,4}\/)?((d)(20))))([+]((100|\d{1,2}|\/[ABCDEFGILMNOPRSTUV]{3,4}\/)?))*$/g;
  const patternDano = /^(((100|\d{1,2}|\/[ABCDEFGILMNOPRSTUV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ABCDEFGILMNOPRSTUV]{3,4}\/))?)|(\d{0,3}|1000))([+]((100|\d{1,2}|\/[ABCDEFGILMNOPRSTUV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ABCDEFGILMNOPRSTUV]{3,4}\/))?)|([+]\d{0,3}|1000)?)*$/g;

  async function handleCreate(e) {

    e.preventDefault()

    if (!ataque.match(patternTeste)) {
      toast.error('Dado de Ataque inválido.')
      return
    }

    if (!dano.match(patternDano)) {
      toast.error('Dado de Dano inválido.')
      return
    }

    if (!danoCritico.match(patternDano)) {
      toast.error('Dado de Dano Crítico inválido.')
      return
    }

    try {

      const response = await api.post(`/fichas/arma`, {
        nome,
        tipo,
        alcance,
        recarga,
        especial,
        dano,
        ataque,
        margemCritico,
        danoCritico,
        espaco,
        categoria,
        descricao,
        imagem,
        fichaId: id
      });

      setModalClose()
      atualizar((prevState) => [...prevState, response.data])
      setPesoAtual((prevState) => prevState + response.data.espaco)

    } catch (erro) {
      toast.error(erro.response.data.msg)
    }

  }

  return (
    <Container>

      <form onSubmit={handleCreate}>

        <Header>

          <h1>Adicionar Arma</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <Main1>
            <Input required maxLength='30' label={'Nome'} valor={nome} setValor={setNome} />
            <Input required label={'Peso'} type='number' valor={espaco} setValor={setEspaco} maxLength={1} maxValor={9} />
            <Input required label={'Categoria'} type='number' valor={categoria} setValor={setCategoria} maxLength={1} maxValor={4} />
            <Input img label={'Imagem'} valor={imagem} setValor={setImagem} />
          </Main1>

          <hr />

          <Main2>
            <Input required label={'Tipo'} valor={tipo} setValor={setTipo} />
            <Input required label={'Alcance'} valor={alcance} setValor={setAlcance} />
            <Input type='number' label={'Recarga'} valor={recarga} setValor={setRecarga} maxLength={2} maxValor={30} />
            <Input label={'Especial'} valor={especial} setValor={setEspecial} />
            <Input required minLength={3} label={'Ataque'} valor={ataque} setValor={setAtaque} />
            <Input required minLength={3} label={'Dano'} valor={dano} setValor={setDano} />
            <Input required label={'Margem Crítico'} valor={margemCritico} setValor={setMargemCritico} maxLength={2} maxValor={20} />
            <Input required minLength={3} label={'Dano Crítico'} valor={danoCritico} setValor={setDanoCritico} />
          </Main2>

          <hr />

          <Main3>
            <TextArea maxLength={300} label={'Descrição'} valor={descricao} setValor={setDescricao} />
          </Main3>

        </Body>

        <hr />

        <Footer>

          <button type="submit">Criar</button>

        </Footer>

      </form>

    </Container>
  );
}