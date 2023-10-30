import * as S from './styles'
import { useState } from 'react';
import { Input } from '../../../../../../components/Input';
import { api } from '../../../../../../services/api';
import { toast } from 'react-toastify'

export function ModalStatus({ data, atualizar, setModalClose }) {

  const [passiva, setPassiva] = useState(data.passiva || '0')
  const [bloqueio, setBloqueio] = useState(data.bloqueio || '0')
  const [esquiva, setEsquiva] = useState(data.esquiva || '0')

  const [fisica, setFisica] = useState(data.fisica || '0')
  const [balistica, setBalistica] = useState(data.balistica || '0')
  const [corte, setCorte] = useState(data.corte || '0')
  const [impacto, setImpacto] = useState(data.impacto || '0')
  const [perfuracao, setPerfuracao] = useState(data.perfuracao || '0')
  const [eletricidade, setEletricidade] = useState(data.eletricidade || '0')
  const [fogo, setFogo] = useState(data.fogo || '0')
  const [frio, setFrio] = useState(data.frio || '0')
  const [quimica, setQuimica] = useState(data.quimica || '0')

  const [mental, setMental] = useState(data.mental || '0')
  const [morte, setMorte] = useState(data.morte || '0')
  const [conhecimento, setConhecimento] = useState(data.conhecimento || '0')
  const [sangue, setSangue] = useState(data.sangue || '0')
  const [energia, setEnergia] = useState(data.energia || '0')

  async function handleEdit(e) {

    e.preventDefault()

    try {

      const response = await api.put(`/fichas/defesas/${data.id}`, {
        passiva: Number(passiva),
        bloqueio: Number(bloqueio),
        esquiva: Number(esquiva),
        fisica: Number(fisica),
        balistica: Number(balistica),
        corte: Number(corte),
        impacto: Number(impacto),
        perfuracao: Number(perfuracao),
        eletricidade: Number(eletricidade),
        fogo: Number(fogo),
        frio: Number(frio),
        quimica: Number(quimica),
        mental: Number(mental),
        morte: Number(morte),
        conhecimento: Number(conhecimento),
        sangue: Number(sangue),
        energia: Number(energia)
      });

      setModalClose()
      atualizar(response.data)
      toast.success("Atualizado com sucesso!")

    } catch (erro) {
      console.log(erro)
    }

  }

  return (
    <S.Container>
      <form onSubmit={handleEdit}>

        <S.Header>

          <h1>Editar Status</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </S.Header>

        <hr />

        <S.Body>

          <h2>Defesas</h2>

          <S.Main1>

            <Input maxValor={99} maxLength={2} type='number' label={'Passiva'} valor={passiva} setValor={setPassiva} />
            <Input maxValor={99} maxLength={2} type='number' label={'Esquiva'} valor={esquiva} setValor={setEsquiva} />
            <Input maxValor={99} maxLength={2} type='number' label={'Bloqueio'} valor={bloqueio} setValor={setBloqueio} />

          </S.Main1>

          <h2 style={{marginTop: '2rem'}}>Resistências Gerais</h2>

          <S.Main1>

            <Input maxValor={99} maxLength={2} type='number' label={'Física'} valor={fisica} setValor={setFisica} />
            <Input maxValor={99} maxLength={2} type='number' label={'Balística'} valor={balistica} setValor={setBalistica} />
            <Input maxValor={99} maxLength={2} type='number' label={'Corte'} valor={corte} setValor={setCorte} />
            <Input maxValor={99} maxLength={2} type='number' label={'Impacto'} valor={impacto} setValor={setImpacto} />
            <Input maxValor={99} maxLength={2} type='number' label={'Perfuração'} valor={perfuracao} setValor={setPerfuracao} />
            <Input maxValor={99} maxLength={2} type='number' label={'Eletricidade'} valor={eletricidade} setValor={setEletricidade} />
            <Input maxValor={99} maxLength={2} type='number' label={'Fogo'} valor={fogo} setValor={setFogo} />
            <Input maxValor={99} maxLength={2} type='number' label={'Frio'} valor={frio} setValor={setFrio} />
            <Input maxValor={99} maxLength={2} type='number' label={'Química'} valor={quimica} setValor={setQuimica} />

          </S.Main1>

          <h2 style={{marginTop: '2rem'}}>Resistências Elementares</h2>

          <S.Main1>

            <Input maxValor={99} maxLength={2} type='number' label={'Mental'} valor={mental} setValor={setMental} />
            <Input maxValor={99} maxLength={2} type='number' label={'Morte'} valor={morte} setValor={setMorte} />
            <Input maxValor={99} maxLength={2} type='number' label={'Conhecimento'} valor={conhecimento} setValor={setConhecimento} />
            <Input maxValor={99} maxLength={2} type='number' label={'Sangue'} valor={sangue} setValor={setSangue} />
            <Input maxValor={99} maxLength={2} type='number' label={'Energia'} valor={energia} setValor={setEnergia} />

          </S.Main1>

        </S.Body>

        <hr />

        <S.Footer>

          <button type="submit">Salvar</button>

        </S.Footer>

      </form>
    </S.Container>
  );
}