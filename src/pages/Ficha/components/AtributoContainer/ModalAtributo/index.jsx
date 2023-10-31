import { useState } from 'react';
import { Input } from '../../../../../components/Input';
import { api } from '../../../../../services/api';
import { Container, Header, Footer, Body } from './styles';
import { toast, ToastContainer } from 'react-toastify'
import { AtributoInput } from '../../../../../components/AtributoInput';
import { useFichas } from '../../../../../hooks/useFichas';

export function ModalAtributo({ data, atualizar, setModalClose }) {

  const [agi, setAgi] = useState(data.agi)
  const [forca, setForca] = useState(data.for)
  const [int, setInt] = useState(data.int)
  const [pre, setPre] = useState(data.pre)
  const [vig, setVig] = useState(data.vig)

  const {setDc} = useFichas()

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

      setDc(rest => ({
        "FOR": Number(forca),
        "AGI": Number(agi),
        "INT": Number(int),
        "PRE": Number(pre),
        "VIG": Number(vig),
        "ACRO": rest.ACRO,
        "ADES": rest.ADES,
        "ARTE": rest.ARTE,
        "ATLE": rest.ATLE,
        "ATUA": rest.ATUA,
        "CIEN": rest.CIEN,
        "CRIM": rest.CRIM,
        "DIPL": rest.DIPL,
        "ENGA": rest.ENGA,
        "FORT": rest.FORT,
        "FURT": rest.FURT,
        "INIT": rest.INIT,
        "INTI": rest.INTI,
        "INTU": rest.INTU,
        "INVE": rest.INVE,
        "LUTA": rest.LUTA,
        "MEDI": rest.MEDI,
        "OCUL": rest.OCUL,
        "PERC": rest.PERC,
        "PILO": rest.PILO,
        "PONT": rest.PONT,
        "PROF": rest.PROF,
        "REFL": rest.REFL,
        "RELI": rest.RELI,
        "SOBR": rest.SOBR,
        "TATI": rest.TATI,
        "TECN": rest.TECN,
        "VONT": rest.VONT,
      }))

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