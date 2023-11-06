import { useState } from 'react';
import { Container, Body, Header, Footer} from './styles';
import { Input } from '../../../../../../components/Input';
import {api} from '../../../../../../services/api'
import { useParams } from 'react-router-dom';

export function ModalPeso({ setModalClose, pesoTotalAtual, setPesoTotalAtual }) {

  const [peso, setPeso] = useState(pesoTotalAtual)

  const {id} = useParams()

  async function handleEdit(e) {

    e.preventDefault()

    await api.put(`/fichas/status/${id}`, {
      peso: Number(peso)
    })

    setPesoTotalAtual(peso)
    setModalClose()

  }

  return (
    <Container>

      <form onSubmit={handleEdit}>

        <Header>

          <h1>Editar Peso</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />
        
        <Body>
          <Input label={'Peso'} type='number' maxValor={20} maxLength={2} valor={peso} setValor={setPeso}/>
        </Body>

        <hr />

        <Footer>

          <button type="submit">Salvar</button>

        </Footer>

      </form>

    </Container>
  );
}