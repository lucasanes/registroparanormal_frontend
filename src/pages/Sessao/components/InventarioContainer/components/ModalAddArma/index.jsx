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
  const [dano, setDano] = useState('')
  const [margemCritico, setMargemCritico] = useState('')
  const [danoCritico, setDanoCritico] = useState('')

  const [espaco, setEspaco] = useState('')
  const [categoria, setCategoria] = useState('')
  const [descricao, setDescricao] = useState(null)
  const [imagem, setImagem] = useState(null)

  const { id } = useParams()

  async function handleCreate(e) {

    e.preventDefault()

    try {

      const response = await api.post(`/sessoes/arma`, {
        nome,
        tipo,
        alcance,
        recarga,
        especial,
        dano,
        margemCritico,
        danoCritico,
        espaco,
        categoria,
        descricao,
        imagem,
        sessaoId: id
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
            <Input required label={'Espaços'} type='number' valor={espaco} setValor={setEspaco} maxLength={1} maxValor={9} />
            <Input required label={'Categoria'} type='number' valor={categoria} setValor={setCategoria} maxLength={1} maxValor={4} />
            <Input img label={'Imagem'} valor={imagem} setValor={setImagem} />
          </Main1>

          <hr />

          <Main2>
            <Input required label={'Tipo'} valor={tipo} setValor={setTipo} />
            <Input required label={'Alcance'} valor={alcance} setValor={setAlcance} />
            <Input type='number' label={'Recarga'} valor={recarga} setValor={setRecarga} maxLength={2} maxValor={30} />
            <Input label={'Especial'} valor={especial} setValor={setEspecial} />
            <Input required label={'Dano'} valor={dano} setValor={setDano} />
            <Input required label={'Margem Crítico'} valor={margemCritico} setValor={setMargemCritico} maxLength={2} maxValor={20} />
            <Input required label={'Dano Crítico'} valor={danoCritico} setValor={setDanoCritico} />
          </Main2>

          <hr />

          <Main3>
            <TextArea label={'Descrição'} valor={descricao} setValor={setDescricao} />
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