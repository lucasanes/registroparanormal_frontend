import { useState } from 'react';
import { Input } from '../../../../../../components/Input';
import { TextArea } from '../../../../../../components/TextArea';
import { api } from '../../../../../../services/api';
import { Container, Header, Body, Footer } from './styles';
import { toast } from 'react-toastify'
import { Toggle } from '../../../../../../components/Toggle';

export function ModalEditItem({ data, setModalClose, atualizar, itens, setPesoAtual }) {

  const [nome, setNome] = useState(data.nome)
  const [espaco, setEspaco] = useState(data.espaco)
  const [categoria, setCategoria] = useState(data.categoria)
  const [descricao, setDescricao] = useState(data.descricao)
  const [imagem, setImagem] = useState(data.imagem)
  const [isMunicao, setIsMunicao] = useState(data.isMunicao)

  async function handleCreate(e) {

    e.preventDefault()

    try {

      const response = await api.put(`/fichas/item/${data.id}`, {
        nome,
        espaco,
        categoria,
        descricao,
        isMunicao,
        municao: isMunicao && data.municao == null ? 30 : data.municao,
        municaoMax: isMunicao && data.municaoMax == null ? 30 : data.municaoMax,
        imagem,
      });

      setModalClose()
      setPesoAtual((prevState) => prevState - data.espaco + Number(espaco))

      const item = itens.filter(item => item.id == data.id)

      item[0].nome = response.data.nome
      item[0].espaco = response.data.espaco
      item[0].categoria = response.data.categoria
      item[0].descricao = response.data.descricao
      item[0].isMunicao = response.data.isMunicao
      item[0].municao = response.data.municao
      item[0].municaoMax = response.data.municaoMax
      item[0].imagem = response.data.imagem

    } catch (erro) {
      toast.error(erro.response.data.msg)
    }

  }

  async function handleDelete() {

    try {

      await api.delete(`/sessoes/item/${data.id}`);

      const itensAtualizados = itens.filter(item => item.id != data.id)

      atualizar(itensAtualizados)
      setPesoAtual((prevState) => prevState - data.espaco)

    } catch (error) {
      console.log(error);
    }

  }

  return (
    <Container>

      <form onSubmit={handleCreate}>

        <Header>

          <h1>Editar Item</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <Input required maxLength={'30'} label={'Nome'} valor={nome} setValor={setNome} />
          <Input required label={'Peso'} type={'number'} valor={espaco} setValor={setEspaco} maxValor={99} maxLength={2} />
          <Input required label={'Categoria'} type='number' valor={categoria} setValor={setCategoria} maxLength={1} maxValor={4} />
          <Input img label={'Imagem'} valor={imagem} setValor={setImagem} />
          <TextArea maxLength={500} label={'Descrição'} setValor={setDescricao} valor={descricao} />
          <Toggle span={'Adicionar como munição?'} classNumber={1} defaultChecked={data.isMunicao} onClick={() => setIsMunicao(!isMunicao)} />

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