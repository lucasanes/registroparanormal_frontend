import { useState } from 'react';
import { Input } from '../../../../../../components/Input';
import { TextArea } from '../../../../../../components/TextArea';
import { api } from '../../../../../../services/api';
import { Container, Header, Body, Footer } from './styles';
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom';
import { Toggle } from '../../../../../../components/Toggle';

export function ModalAddItem({ setModalClose, atualizar, setPesoAtual }) {

  const [nome, setNome] = useState('')
  const [espaco, setEspaco] = useState('')
  const [categoria, setCategoria] = useState('')
  const [descricao, setDescricao] = useState(null)
  const [imagem, setImagem] = useState(null)

  const [isMunicao, setIsMunicao] = useState(false)

  const { id } = useParams()

  async function handleCreate(e) {

    e.preventDefault()

    try {

      const response = await api.post(`/sessoes/item`, {
        nome,
        espaco,
        categoria,
        descricao,
        imagem,
        isMunicao,
        municao: isMunicao ? 30 : null,
        municaoMax: isMunicao ? 30 : null,
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

          <h1>Adicionar Item</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <Input required maxLength={'30'} label={'Nome'} valor={nome} setValor={setNome} />
          <Input required label={'Peso'} type={'number'} valor={espaco} setValor={setEspaco} maxValor={99} maxLength={2} />
          <Input required label={'Categoria'} type='number' valor={categoria} setValor={setCategoria} maxLength={1} maxValor={4} />
          <Input img label={'Imagem'} valor={imagem} setValor={setImagem} />
          <TextArea maxLength={'100'} label={'Descrição'} setValor={setDescricao} valor={descricao} />
          <Toggle span={'Adicionar como munição?'} classNumber={1} onClick={() => setIsMunicao(!isMunicao)} />

        </Body>

        <hr />

        <Footer>

          <button type="submit">Criar</button>

        </Footer>

      </form>

    </Container>
  );
}