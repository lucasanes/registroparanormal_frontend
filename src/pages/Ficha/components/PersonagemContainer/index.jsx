import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDisabled } from '../../../../hooks/useDisabled';
import { api } from '../../../../services/api';
import { Container, Select, Main, Button } from './styles';
import { TextAreaPersonagem } from './TextAreaPersonagem';

export function PersonagemContainer({ data }) {

  const [body, setBody] = useState('principal')

  const [historia, setHistoria] = useState(data.historia)
  const [aparencia, setAparencia] = useState(data.aparencia)
  const [pep, setPep] = useState(data.pep)

  const [dfm, setDfm] = useState(data.dfm)
  const [favoritos, setFavoritos] = useState(data.favoritos)
  const [personalidade, setPersonalidade] = useState(data.personalidade)

  const [piorPesadelo, setPiorPesadelo] = useState(data.piorpesadelo)
  const [anotacoesPersonagem, setAnotacoesPersonagem] = useState(data.anotacoesPersonagem)
  const [anotacoesPlayer, setAnotacoesPlayer] = useState(data.anotacoesPlayer)

  const { id } = useParams()

  async function handleEdit() {

    try {

      await api.put(`/fichas/personagem/${id}`, {

        historia,
        aparencia,
        pep,
        dfm,
        favoritos,
        personalidade,
        piorPesadelo,
        anotacoesPersonagem,
        anotacoesPlayer,

      })

    } catch (e) { console.log(e) }

  }

  return (
    <Container>

      <Select>

        <Button active={body == 'principal'} onClick={() => setBody('principal')}>Principal</Button>
        <Button active={body == 'detalhes'} onClick={() => setBody('detalhes')}>Detalhes</Button>
        <Button active={body == 'outros'} onClick={() => setBody('outros')}>Outros</Button>

      </Select>

      <hr />

      <Main>

        {body == 'principal' && <>


          <span>História</span>
          <TextAreaPersonagem valor={historia} setValor={setHistoria} onBlurCapture={() => handleEdit()} />

          <span>Aparência</span>
          <TextAreaPersonagem valor={aparencia} setValor={setAparencia} onBlurCapture={() => handleEdit()} />

          <span>Primeiro Encontro Paranormal</span>
          <TextAreaPersonagem valor={pep} setValor={setPep} onBlurCapture={() => handleEdit()} />

        </>}

        {body == 'detalhes' && <>


          <span>Doenças, Fobias e Manias</span>
          <TextAreaPersonagem valor={dfm} setValor={setDfm} onBlurCapture={() => handleEdit()} />

          <span>Favoritos</span>
          <TextAreaPersonagem valor={favoritos} setValor={setFavoritos} onBlurCapture={() => handleEdit()} />

          <span>Personalidade</span>
          <TextAreaPersonagem valor={personalidade} setValor={setPersonalidade} onBlurCapture={() => handleEdit()} />

        </>}

        {body == 'outros' && <>


          <span>Pior Pesadelo</span>
          <TextAreaPersonagem valor={piorPesadelo} setValor={setPiorPesadelo} onBlurCapture={() => handleEdit()} />

          <span>Anotações Personagem</span>
          <TextAreaPersonagem valor={anotacoesPersonagem} setValor={setAnotacoesPersonagem} onBlurCapture={() => handleEdit()} />

          <span>Anotações Player</span>
          <TextAreaPersonagem valor={anotacoesPlayer} setValor={setAnotacoesPlayer} onBlurCapture={() => handleEdit()} />

        </>}

      </Main>

    </Container>
  );
}