import { useState } from 'react';
import { Container, BarrinhaDiv, Botoes, Progress, ProgressBar } from './styles';
import { useEffect } from 'react';

export function Barrinha({ barrinhaId, nome, valorA, setValorA, setValorMax, valorMax, color, number, ...rest }) {

  useEffect(() => {

    const multiply = 100 / valorMax

    const porcent = ((valorA * multiply) / (valorMax * multiply)) * 100

    const progress = document.getElementById(`progress${barrinhaId}${number}`)

    progress.style = `width: ${porcent}%`

  }, [valorA, valorMax])

  return (
    <Container>
      <Botoes>

        <span><b className='b'>{nome}:</b>{valorA}/{valorMax}</span>

      </Botoes>

      <BarrinhaDiv>

        <ProgressBar>
          <Progress id={`progress${barrinhaId}${number}`} color={color} />
        </ProgressBar>

      </BarrinhaDiv>

    </Container>
  );
}