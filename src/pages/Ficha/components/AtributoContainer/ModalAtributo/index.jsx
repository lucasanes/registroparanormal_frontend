import { useState } from 'react';
import { Input } from '../../../../../components/Input';
import { api } from '../../../../../services/api';
import { Container, Header, Footer, Body } from './styles';
import { toast, ToastContainer } from 'react-toastify'
import { AtributoInput } from '../../../../../components/AtributoInput';

export function ModalAtributo({ data, atualizar, setModalClose }) {

  const [agi, setAgi] = useState(data.agi)
  const [forca, setForca] = useState(data.for)
  const [int, setInt] = useState(data.int)
  const [pre, setPre] = useState(data.pre)
  const [vig, setVig] = useState(data.vig)

  async function handleEdit(e) {

    e.preventDefault()

    try {

      const response = await api.put(`/fichas/atributos/${data.id}`, {
        agi: Number(agi),
        forca: Number(forca),
        int: Number(int),
        pre: Number(pre),
        vig: Number(vig),
      });

      setModalClose()

      toast.success('Atualizado com sucesso!')
      atualizar(response.data)

    } catch (erro) {
      toast.error(erro.response.data.msg)
    }

  }

  return (
    <Container>

      <form onSubmit={handleEdit}>

        <Header>
          <h1>Editar Atributos</h1>
          <button type="button" onClick={setModalClose}>x</button>
        </Header>

        <hr />

        <Body>

          <AtributoInput agi={agi} setAgi={setAgi} forca={forca} setFor={setForca} int={int} setInt={setInt} vig={vig} setVig={setVig} pre={pre} setPre={setPre} />

        </Body>

        <hr />

        <Footer>

          <button type="submit">Salvar</button>

        </Footer>

      </form>

    </Container>
  );
}