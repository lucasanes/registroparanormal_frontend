import { useState } from 'react';
import { toast } from 'react-toastify';
import { Input } from '../../../../../../components/Input';
import { TextArea } from '../../../../../../components/TextArea';
import { api } from '../../../../../../services/api';
import { Container, Header, Main1, Main2, Main3, Footer, Body } from './styles';

export function ModalEditArma({ data, setModalClose, atualizar, armas, setPesoAtual }) {

  const [nome, setNome] = useState(data.nome)
  const [tipo, setTipo] = useState(data.tipo)
  const [alcance, setAlcance] = useState(data.alcance)
  const [recarga, setRecarga] = useState(data.recarga)
  const [especial, setEspecial] = useState(data.especial)
  const [ataque, setAtaque] = useState(data.ataque)
  const [dano, setDano] = useState(data.dano)
  const [margemCritico, setMargemCritico] = useState(data.margemCritico)
  const [danoCritico, setDanoCritico] = useState(data.danoCritico)

  const [espaco, setEspaco] = useState(data.espaco)
  const [categoria, setCategoria] = useState(data.categoria)
  const [descricao, setDescricao] = useState(data.descricao)
  const [imagem, setImagem] = useState(data.imagem)

  const patternTeste = /^(((100|\d{1,2}|\/[ABCDEFGILMNOPRSTUV]{3,4}\/)?((d)(20))))([+]((100|\d{1,2}|\/[ABCDEFGILMNOPRSTUV]{3,4}\/)?))*$/g;
  const patternDano = /^(((100|\d{1,2}|\/[ABCDEFGILMNOPRSTUV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ABCDEFGILMNOPRSTUV]{3,4}\/))?)|(\d{0,3}|1000))([+]((100|\d{1,2}|\/[ABCDEFGILMNOPRSTUV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ABCDEFGILMNOPRSTUV]{3,4}\/))?)|([+]\d{0,3}|1000)?)*$/g;


  async function handleEdit(e) {

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

      const data2 = await api.put(`/fichas/arma/${data.id}`, {
        nome,
        tipo,
        alcance,
        recarga,
        especial,
        ataque,
        dano,
        margemCritico,
        danoCritico,
        espaco,
        categoria,
        descricao,
        imagem,
      });

      setModalClose()
      setPesoAtual((prevState) => prevState - data.espaco + Number(espaco))

      const arma = armas.filter(arma => arma.id == data.id)

      arma[0].nome = nome
      arma[0].tipo = tipo
      arma[0].alcance = alcance
      arma[0].recarga = recarga
      arma[0].especial = especial
      arma[0].ataque = ataque
      arma[0].dano = dano
      arma[0].margemCritico = margemCritico
      arma[0].danoCritico = danoCritico
      arma[0].espaco = espaco
      arma[0].categoria = categoria
      arma[0].descricao = descricao
      arma[0].imagem = imagem

    } catch (erro) {
      toast.error(erro.response.data.msg)
    }

  }

  async function handleDelete() {

    try {

      await api.delete(`/sessoes/arma/${data.id}`);

      const armasAtualizadas = armas.filter(arma => arma.id != data.id)

      atualizar(armasAtualizadas)
      setPesoAtual((prevState) => prevState - data.espaco)

    } catch (error) {
      console.log(error);
    }

  }

  return (
    <Container>

      <form onSubmit={handleEdit}>

        <Header>

          <h1>Editar Arma</h1>
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
            <Input required minLength={3} label={'Teste'} valor={ataque} setValor={setAtaque} />
            <Input required minLength={3} label={'Dano'} valor={dano} setValor={setDano} />
            <Input required label={'Margem Crítico'} valor={margemCritico} setValor={setMargemCritico} maxLength={2} maxValor={20} />
            <Input required minLength={3} label={'Dano Crítico'} valor={danoCritico} setValor={setDanoCritico} />
          </Main2>

          <hr />

          <Main3>
            <TextArea maxLength={2000} label={'Descrição'} valor={descricao} setValor={setDescricao} />
          </Main3>

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