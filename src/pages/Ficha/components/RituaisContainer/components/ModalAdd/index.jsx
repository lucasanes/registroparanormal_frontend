import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Input } from '../../../../../../components/Input';
import { Select } from '../../../../../../components/Select';
import { TextArea } from '../../../../../../components/TextArea';
import { api } from '../../../../../../services/api';
import { Container, Header, Main1, Main2, Body, Footer } from './styles';

export function ModalAdd({ setModalClose, atualizar }) {

  const [nome, setNome] = useState('')

  const [circulo, setCirculo] = useState(1)
  const [alcance, setAlcance] = useState('')
  const [elemento, setElemento] = useState('Conhecimento')
  const [execucao, setExecucao] = useState('')
  const [duracao, setDuracao] = useState('')
  const [alvo, setAlvo] = useState('')
  const [resistencia, setResistencia] = useState('')

  const [normal, setNormal] = useState('')
  const [discente, setDiscente] = useState('')
  const [verdadeiro, setVerdadeiro] = useState('')

  const [descricao, setDescricao] = useState(null)
  const [imagem, setImagem] = useState(null)

  const { id } = useParams()

  async function handleCreate(e) {

    e.preventDefault()

    try {

      const data = await api.post(`/fichas/ritual`, {
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
        fichaId: id
      });

      setModalClose()
      atualizar((prevState) => [...prevState, data.data])

    } catch (erro) {
      toast.error(erro.response.data.msg)
    }

  }

  return (
    <Container>

      <form onSubmit={handleCreate}>

        <Header>

          <h1>Adicionar Ritual</h1>
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
            <TextArea label={'Descrição'} valor={descricao} setValor={setDescricao} />
          </Main2>

        </Body>

        <hr />

        <Footer>

          <button type="submit">Criar</button>

        </Footer>

      </form>

    </Container>
  );
}