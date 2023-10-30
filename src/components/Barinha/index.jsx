import { InputBarrinha } from './InputBarrinha';
import { Container, BarrinhaDiv, Botoes, Progress, ProgressBar, Esquerda, Direita, InputDiv } from './styles';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { useEffect } from 'react';
import { useDisabled } from '../../hooks/useDisabled';

export function Barrinha({ infos, valorA, setValorA, setValorMax, valorMax, color, number, ...rest }) {

  const { disabled } = useDisabled()

  useEffect(() => {

    const multiply = 100 / valorMax

    const porcent = ((valorA * multiply) / (valorMax * multiply)) * 100

    const progress = document.getElementById(`progress${number}`)

    progress.style = `width: ${porcent}%`

  }, [valorA, valorMax])

  return (
    <Container>
      <Botoes>

        <Esquerda>
          <button disabled={disabled} onClick={() => { setValorA(0) }}><SlArrowLeft /> 0</button>
          <button disabled={disabled} onClick={() => { if (valorA > valorMax) { setValorA(valorMax) } else if (valorA > 5) { setValorA(valorA - 5) } else { setValorA(0) } }}><SlArrowLeft />-5</button>
          <button disabled={disabled} onClick={() => { if (valorA > valorMax) { setValorA(valorMax) } else if (valorA > 1) { setValorA(valorA - 1) } else { setValorA(0) } }}><SlArrowLeft />-1</button>
        </Esquerda>
        <InputDiv>
          <InputBarrinha right setValor={setValorA} valor={valorA} valorMax={valorMax} />
          <span>/</span>
          <InputBarrinha setValor={setValorMax} valor={valorMax} {...rest} onBlur={() => {
            if (valorMax == 1) {

              let multiplicadorNex = Math.floor((infos.nex - 5) / 5)

              if (multiplicadorNex < 0) {
                multiplicadorNex = 0
              }

              if (number == 1) {

                if (infos.classe == "Mundano") {
                  setValorMax(8 + Number(infos.vig))
                  setValorA(8 + Number(infos.vig))
                } else if (infos.classe == "Combatente") {
                  setValorMax(20 + Number(infos.vig) + (multiplicadorNex * (4 + Number(infos.vig))))
                  setValorA(20 + Number(infos.vig) + (multiplicadorNex * (4 + Number(infos.vig))))
                } else if (infos.classe == 'Especialista') {
                  setValorMax(16 + Number(infos.vig) + (multiplicadorNex * (3 + Number(infos.vig))))
                  setValorA(16 + Number(infos.vig) + (multiplicadorNex * (3 + Number(infos.vig))))
                } else if (infos.classe == 'Ocultista') {
                  setValorMax(12 + Number(infos.vig) + (multiplicadorNex * (2 + Number(infos.vig))))
                  setValorA(12 + Number(infos.vig) + (multiplicadorNex * (2 + Number(infos.vig))))
                }

              } else if (number == 2) {

                if (infos.classe == "Mundano") {
                  setValorMax(8)
                  setValorA(8)
                } else if (infos.classe == "Combatente") {
                  setValorMax(12 + (multiplicadorNex * 3))
                  setValorA(12 + (multiplicadorNex * 3))
                } else if (infos.classe == 'Especialista') {
                  setValorMax(16 + (multiplicadorNex * 4))
                  setValorA(16 + (multiplicadorNex * 4))
                } else if (infos.classe == 'Ocultista') {
                  setValorMax(20 + (multiplicadorNex * 5))
                  setValorA(20 + (multiplicadorNex * 5))
                }

              } else if (number == 3) {

                if (infos.classe == "Mundano") {
                  setValorMax(1 + Number(infos.pre))
                  setValorA(1 + Number(infos.pre))
                } else if (infos.classe == "Combatente") {
                  setValorMax(2 + Number(infos.pre) + (multiplicadorNex * (2 + Number(infos.pre))))
                  setValorA(2 + Number(infos.pre) + (multiplicadorNex * (2 + Number(infos.pre))))
                } else if (infos.classe == 'Especialista') {
                  setValorMax(3 + Number(infos.pre) + (multiplicadorNex * (3 + Number(infos.pre))))
                  setValorA(3 + Number(infos.pre) + (multiplicadorNex * (3 + Number(infos.pre))))
                } else if (infos.classe == 'Ocultista') {
                  setValorMax(4 + Number(infos.pre) + (multiplicadorNex * (4 + Number(infos.pre))))
                  setValorA(4 + Number(infos.pre) + (multiplicadorNex * (4 + Number(infos.pre))))
                }

              }

            } else
              if (valorMax < valorA) {
                setValorA(valorMax)
              }
          }
          } />
        </InputDiv>
        <Direita>
          <button disabled={disabled} onClick={() => { if (valorA != valorMax && valorA < valorMax) { setValorA(valorA + 1) } else { setValorA(valorMax) } }}>+1<SlArrowRight /> </button>
          <button disabled={disabled} onClick={() => { if (valorA != valorMax && valorA < valorMax - 5) { setValorA(valorA + 5) } else { setValorA(valorMax) } }}>+5<SlArrowRight /></button>
          <button disabled={disabled} onClick={() => { setValorA(valorMax) }}> {valorMax}<SlArrowRight /></button>
        </Direita>

      </Botoes>

      <BarrinhaDiv>

        <ProgressBar>
          <Progress id={`progress${number}`} color={color} />
        </ProgressBar>

      </BarrinhaDiv>

    </Container>
  );
}