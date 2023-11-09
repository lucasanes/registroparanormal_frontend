import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Input } from '../../../../../../components/Input';
import { Select } from '../../../../../../components/Select';
import { TextArea } from '../../../../../../components/TextArea';
import { api } from '../../../../../../services/api';
import { Container, Header,Body, Footer, Main1, Main2 } from './styles';

export function ModalEdit({ data, setModalClose, lista, setRitualAtivo }) {

  const [nome, setNome] = useState(data.nome)

  const [circulo, setCirculo] = useState(data.circulo)
  const [alcance, setAlcance] = useState(data.alcance)
  const [elemento, setElemento] = useState(data.elemento)
  const [execucao, setExecucao] = useState(data.execucao)
  const [duracao, setDuracao] = useState(data.duracao)
  const [alvo, setAlvo] = useState(data.alvo)
  const [resistencia, setResistencia] = useState(data.resistencia)

  const [normal, setNormal] = useState(data.normal)
  const [discente, setDiscente] = useState(data.discente)
  const [verdadeiro, setVerdadeiro] = useState(data.verdadeiro)

  const [descricao, setDescricao] = useState(data.descricao)
  const [imagem, setImagem] = useState(data.imagem)

  const patternDano = /^(((100|\d{1,2}|\/[ABCDEFGILMNOPRSTUV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ABCDEFGILMNOPRSTUV]{3,4}\/))?)|(\d{0,3}|1000))([+]((100|\d{1,2}|\/[ABCDEFGILMNOPRSTUV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ABCDEFGILMNOPRSTUV]{3,4}\/))?)|([+]\d{0,3}|1000)?)*$/g;

  async function handleEdit(e) {

    e.preventDefault()

    if (!normal.match(patternDano)) {
      toast.error('Dado Normal inválido.')
      return
    }

    if (!normal.match(patternDano)) {
      toast.error('Dado Discente inválido.')
      return
    }

    if (!normal.match(patternDano)) {
      toast.error('Dado Verdadeiro inválido.')
      return
    }

    try {

      const response = await api.put(`/fichas/ritual/${data.id}`, {
        nome,
        circulo: Number(circulo),
        alcance,
        elemento,
        execucao,
        duracao,
        alvo,
        resistencia,
        normal,
        discente,
        verdadeiro,
        descricao,
        imagem,
      });

      const procurandoRitual = lista.filter(ritual => ritual.id == data.id)
      const ritualAEditar = procurandoRitual[0]

      ritualAEditar.nome = nome
      ritualAEditar.circulo = Number(circulo)
      ritualAEditar.alcance = alcance
      ritualAEditar.elemento = elemento
      ritualAEditar.execucao = execucao
      ritualAEditar.duracao = duracao
      ritualAEditar.alvo = alvo
      ritualAEditar.resistencia = resistencia
      ritualAEditar.normal = normal
      ritualAEditar.discente = discente
      ritualAEditar.verdadeiro = verdadeiro
      ritualAEditar.descricao = descricao
      ritualAEditar.imagem = imagem

      setModalClose()
      setRitualAtivo(response.data)
      toast.success('Alterado com sucesso!')

    } catch (erro) {
      toast.error(erro.response.data.msg)
    }

  }

  return (
    <Container>

      <form onSubmit={handleEdit}>

        <Header>

          <h1>Editar Ritual</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <Main1>

            <Input required label={'Nome'} valor={nome} setValor={setNome} maxLength={20} />

            <Select label={'Círculo'} valor={circulo} setValor={setCirculo} >
              <option value={1}>1º</option>
              <option value={2}>2º</option>
              <option value={3}>3º</option>
              <option value={4}>4º</option>
            </Select>

            <Select label={'Elemento'} valor={elemento} setValor={setElemento} >
              <option value={'Conhecimento'}>Conhecimento</option>
              <option value={'Energia'}>Energia</option>
              <option value={'Sangue'}>Sangue</option>
              <option value={'Morte'}>Morte</option>
              <option value={'Medo'}>Medo</option>
            </Select>

            <Input required label={'Alcance'} valor={alcance} setValor={setAlcance} maxLength={10} />
            <Input required label={'Execução'} valor={execucao} setValor={setExecucao} maxLength={20} />
            <Input required label={'Duração'} valor={duracao} setValor={setDuracao} maxLength={20} />
            <Input required label={'Alvo'} valor={alvo} setValor={setAlvo} maxLength={20} />
            <Input label={'Resistência'} valor={resistencia} setValor={setResistencia} />
            <Input label={'Normal'} valor={normal} setValor={setNormal} maxLength={20} />
            <Input label={'Discente'} valor={discente} setValor={setDiscente} maxLength={20} />
            <Input label={'Verdadeiro'} valor={verdadeiro} setValor={setVerdadeiro} maxLength={20} />
          </Main1>

          <hr />

          <Main2>
            <Input label={'Imagem'} valor={imagem} setValor={setImagem} />
            <TextArea maxLength={900} label={'Descrição'} valor={descricao} setValor={setDescricao} />
          </Main2>

        </Body>

        <hr />

        <Footer>

          <button type="submit">Salvar</button>

        </Footer>

      </form>

    </Container>
  );
}