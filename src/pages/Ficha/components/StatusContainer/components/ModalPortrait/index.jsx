import { useState } from 'react'
import { toast } from 'react-toastify'
import { Input } from '../../../../../../components/Input'
import { api } from '../../../../../../services/api'
import * as S from './styles'

export function ModalPortrait({ data, atualizar, setModalClose }) {

  const [normal, setNormal] = useState(data.normal || '')
  const [ferido, setFerido] = useState(data.ferido || '')
  const [insano, setInsano] = useState(data.insano || '')
  const [insanoeferido, setInsanoeferido] = useState(data.insanoeferido || '')
  const [insanoemorrendo, setInsanoemorrendo] = useState(data.insanoemorrendo || '')
  const [morrendo, setMorrendo] = useState(data.morrendo || '')

  async function handleEdit(e) {

    e.preventDefault()

    try {

      const response = await api.put(`/fichas/portrait/${data.id}`, {
        normal,
        ferido,
        insano,
        insanoeferido,
        morrendo,
        insanoemorrendo
      });

      setModalClose()

      toast.success('Atualizado com sucesso!')
      atualizar(response.data)

    } catch (erro) {
      toast.error(erro.response.data.msg)
    }

  }

  return (
    <S.Container>
      <form onSubmit={handleEdit}>

        <S.Header>

          <h1>Editar Portrait</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </S.Header>

        <hr />

        <S.Body>

          <Input video label={'Normal'} valor={normal} setValor={setNormal} />
          <Input video label={'Ferido'} valor={ferido} setValor={setFerido} />
          <Input video label={'Morrendo'} valor={morrendo} setValor={setMorrendo} />
          <Input video label={'Insano'} valor={insano} setValor={setInsano} />
          <Input video label={'Insano e Ferido'} valor={insanoeferido} setValor={setInsanoeferido} />
          <Input video label={'Insano e Morrendo'} valor={insanoemorrendo} setValor={setInsanoemorrendo} />

        </S.Body>

        <hr />

        <S.Footer>

          <button type="submit">Salvar</button>

        </S.Footer>

      </form>
    </S.Container>
  );
}