import { useEffect, useRef, useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { useDisabled } from '../../../../../../hooks/useDisabled';
import { InputBarrinha } from './components/InputBarrinha';
import {
  BarrinhaDiv,
  Botoes,
  Container,
  Direita,
  Esquerda,
  Progress,
  ProgressBar,
} from './styles';

export function Barrinha({
  barrinhaId,
  data,
  valorA,
  setValorA,
  setValorMax,
  valorMax,
  color,
  number,
  ...rest
}) {
  const { disabled } = useDisabled();

  const [classe, setClasse] = useState('');
  const [nex, setNex] = useState('');

  const [pre, setPre] = useState(0);
  const [vig, setVig] = useState(0);

  const barrinhaRef = useRef(null);

  useEffect(() => {
    if (data.Principal == undefined || data.Principal == null) {
      setClasse(data.classe);
      setNex(data.nex);

      setPre(data.pre);
      setVig(data.vig);
    } else {
      setClasse(data.Principal[0].classe);
      setNex(data.Principal[0].nex);

      setPre(data.Atributos[0].pre);
      setVig(data.Atributos[0].vig);
    }
  }, []);

  useEffect(() => {
    const multiply = 100 / valorMax;

    const porcent = ((valorA * multiply) / (valorMax * multiply)) * 100;

    barrinhaRef.current.style = `width: ${porcent}%`;
  }, [valorA, valorMax]);

  return (
    <Container>
      <Botoes>
        <Esquerda>
          <button
            disabled={disabled}
            onClick={() => {
              if (valorA > valorMax) {
                setValorA(valorMax);
              } else if (valorA > 5) {
                setValorA(valorA - 5);
              } else {
                setValorA(0);
              }
            }}
          >
            <SlArrowLeft />- 5
          </button>
          <button
            disabled={disabled}
            onClick={() => {
              if (valorA > valorMax) {
                setValorA(valorMax);
              } else if (valorA > 1) {
                setValorA(valorA - 1);
              } else {
                setValorA(0);
              }
            }}
          >
            <SlArrowLeft />- 1
          </button>
        </Esquerda>
        <InputBarrinha
          right
          setValor={setValorA}
          valor={valorA}
          valorMax={valorMax}
        />
        <span>/</span>
        <InputBarrinha
          setValor={setValorMax}
          valor={valorMax}
          {...rest}
          onBlur={() => {
            if (valorMax == 1) {
              if (number == 1) {
                if (classe == 'Mundano') {
                  setValorMax(8 + Number(vig));
                  setValorA(8 + Number(vig));
                } else if (classe == 'Combatente') {
                  setValorMax(
                    20 +
                      Number(vig) +
                      Math.floor((nex - 5) / 5) * (4 + Number(vig))
                  );
                  setValorA(
                    20 +
                      Number(vig) +
                      Math.floor((nex - 5) / 5) * (4 + Number(vig))
                  );
                } else if (classe == 'Especialista') {
                  setValorMax(
                    16 +
                      Number(vig) +
                      Math.floor((nex - 5) / 5) * (3 + Number(vig))
                  );
                  setValorA(
                    16 +
                      Number(vig) +
                      Math.floor((nex - 5) / 5) * (3 + Number(vig))
                  );
                } else if (classe == 'Ocultista') {
                  setValorMax(
                    12 +
                      Number(vig) +
                      Math.floor((nex - 5) / 5) * (2 + Number(vig))
                  );
                  setValorA(
                    12 +
                      Number(vig) +
                      Math.floor((nex - 5) / 5) * (2 + Number(vig))
                  );
                }
              } else if (number == 2) {
                if (classe == 'Mundano') {
                  setValorMax(8);
                  setValorA(8);
                } else if (classe == 'Combatente') {
                  setValorMax(12 + Math.floor((nex - 5) / 5) * 3);
                  setValorA(12 + Math.floor((nex - 5) / 5) * 3);
                } else if (classe == 'Especialista') {
                  setValorMax(16 + Math.floor((nex - 5) / 5) * 4);
                  setValorA(16 + Math.floor((nex - 5) / 5) * 4);
                } else if (classe == 'Ocultista') {
                  setValorMax(20 + Math.floor((nex - 5) / 5) * 5);
                  setValorA(20 + Math.floor((nex - 5) / 5) * 5);
                }
              } else if (number == 3) {
                if (classe == 'Mundano') {
                  setValorMax(1 + Number(pre));
                  setValorA(1 + Number(pre));
                } else if (classe == 'Combatente') {
                  setValorMax(
                    2 +
                      Number(pre) +
                      Math.floor((nex - 5) / 5) * (2 + Number(pre))
                  );
                  setValorA(
                    2 +
                      Number(pre) +
                      Math.floor((nex - 5) / 5) * (2 + Number(pre))
                  );
                } else if (classe == 'Especialista') {
                  setValorMax(
                    3 +
                      Number(pre) +
                      Math.floor((nex - 5) / 5) * (3 + Number(pre))
                  );
                  setValorA(
                    3 +
                      Number(pre) +
                      Math.floor((nex - 5) / 5) * (3 + Number(pre))
                  );
                } else if (classe == 'Ocultista') {
                  setValorMax(
                    4 +
                      Number(pre) +
                      Math.floor((nex - 5) / 5) * (4 + Number(pre))
                  );
                  setValorA(
                    4 +
                      Number(pre) +
                      Math.floor((nex - 5) / 5) * (4 + Number(pre))
                  );
                }
              }
            } else if (valorMax < valorA) {
              setValorA(valorMax);
            }
          }}
        />
        <Direita>
          <button
            disabled={disabled}
            onClick={() => {
              if (valorA != valorMax && valorA < valorMax) {
                setValorA(valorA + 1);
              } else {
                setValorA(valorMax);
              }
            }}
          >
            + 1<SlArrowRight />{' '}
          </button>
          <button
            disabled={disabled}
            onClick={() => {
              if (valorA != valorMax && valorA + 5 < valorMax) {
                setValorA(valorA + 5);
              } else {
                setValorA(valorMax);
              }
            }}
          >
            + 5<SlArrowRight />{' '}
          </button>
        </Direita>
      </Botoes>

      <BarrinhaDiv>
        <ProgressBar>
          <Progress ref={barrinhaRef} color={color} valorA={valorA} />
        </ProgressBar>
      </BarrinhaDiv>
    </Container>
  );
}
