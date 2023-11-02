import { useState } from 'react';
import { Container, BarrinhaDiv, Botoes, Progress, ProgressBar, Esquerda, Direita } from './styles';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../../../../../../services/api';
import { useDisabled } from '../../../../../../../hooks/useDisabled';

export function Barrinha({ barrinhaId, valorA, setValorA, valorMax, ...rest }) {

  const { disabled } = useDisabled()
  const [low, setLow] = useState(false)

  useEffect(() => {

    if (window.innerWidth < 420) {
      setLow(true)
    } else {
      setLow(false)
    }

  }, []);

  useEffect(() => {

    const multiply = 100 / valorMax

    const porcent = ((valorA * multiply) / (valorMax * multiply)) * 100

    const progress = document.getElementById(`progress${barrinhaId}`)

    progress.style = `width: ${porcent}%`

  }, [valorA, valorMax])

  window.addEventListener('resize', () => {
    if (window.innerWidth < 420) {
      setLow(true)
    } else {
      setLow(false)
    }
  })

  return (
    <Container>

      <Botoes>

        <Esquerda>
          {!low && <button disabled={disabled} onClick={() => { setValorA(0) }}><SlArrowLeft />0</button>}
          <button disabled={disabled} onClick={() => { if (valorA > valorMax) { setValorA(valorMax) } else if (valorA > 1) { setValorA(valorA - 1) } else { setValorA(0) } }}><SlArrowLeft />- 1</button>
        </Esquerda>
        <span>{valorA ? valorA : 0} / {valorMax}</span>
        <Direita>
          <button disabled={disabled} onClick={() => { if (valorA != valorMax && valorA < valorMax) { setValorA(valorA + 1) } else { setValorA(valorMax) } }}>+ 1<SlArrowRight /> </button>
          {!low && <button disabled={disabled} onClick={() => { setValorA(valorMax) }}>{valorMax}<SlArrowRight /></button>}
        </Direita>

      </Botoes>

      <BarrinhaDiv>

        <ProgressBar>
          <Progress id={`progress${barrinhaId}`} />
        </ProgressBar>

      </BarrinhaDiv>

    </Container>
  );
}