import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDisabled } from '../../../../hooks/useDisabled';
import { api } from '../../../../services/api';
import { Container, Main, Header, H1 } from './styles';
import { TextAreaPersonagem } from './TextAreaPersonagem';

export function AnotacoesContainer({ data }) {

  const [anotacoesPersonagem, setAnotacoesPersonagem] = useState(data.anotacoesPersonagem)
  const [anotacoesPlayer, setAnotacoesPlayer] = useState(data.anotacoesPlayer)

  const { id } = useParams()

  async function handleEdit() {

    try {

      await api.put(`/fichas/personagem/${id}`, {

        historia: data.historia,
        aparencia: data.aparencia,
        pep: data.pep,
        dfm: data.dfm,
        favoritos: data.favoritos,
        personalidade: data.personalidade,
        piorPesadelo: data.piorPesadelo,
        anotacoesPersonagem,
        anotacoesPlayer,

      })

    } catch (e) { console.log(e) }

  }

  return (
    <Container>

      <Header>

        <H1>Anotações</H1>

      </Header>

      <hr />

      <Main>

        <div>
          <span>Anotações Personagem</span>
          <TextAreaPersonagem valor={anotacoesPersonagem} setValor={setAnotacoesPersonagem} onBlurCapture={() => handleEdit()} />
        </div>

        <div>
          <span>Anotações Player</span>
          <TextAreaPersonagem valor={anotacoesPlayer} setValor={setAnotacoesPlayer} onBlurCapture={() => handleEdit()} />
        </div>

      </Main>

    </Container>
  );
}