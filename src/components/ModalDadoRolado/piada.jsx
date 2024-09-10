import { useEffect, useState } from 'react';
import { Body, CloseButton, Container, FooterDano, FooterTeste, Header } from './styles';

export function ModalDadoRolado({ setModalEditIsOpenFalse, data }) {

  //Teste

  const [valores, setValores] = useState([])
  const [valorMax, setValorMax] = useState(0)
  const [valorDadoFinal, setValorDadoFinal] = useState(0)
  const [valorSoma, setValorSoma] = useState(0)
  const [valorFinal, setValorFinal] = useState(0)

  //Dano

  const [dados, setDados] = useState([])
  const [valoresSoma, setValoresSoma] = useState([])

  useEffect(() => {

    setValores([])

    function rolarDado() {

      if (data.isDano == false) {

        let splitD;
        let soma;

        if (data.valor.includes('+')) {
          const splitMais = data.valor.split('+')
          soma = splitMais[1]

          splitD = splitMais[0].split('d')

          setValorSoma(soma)
        } else {
          splitD = data.valor.split('d')
          soma = 0
        }

        const quantidade = splitD[0]
        const valorMax = splitD[1]
        setValorMax(valorMax)

        if (quantidade == 0) {

          let menor = 20;

          for (let i = 0; i < 2; i++) {

            const novoValor = {
              valor: Math.floor(Math.random() * valorMax + 1)
            }

            if (novoValor.valor < menor) {
              setValorDadoFinal(novoValor.valor)
              menor = novoValor.valor
              setValorFinal(Number(novoValor.valor) + Number(soma))
            }

            setValores((prevState) => [...prevState, novoValor])

          }

        } else {

          let maior = 0;

          for (let i = 0; i < quantidade; i++) {

            const novoValor = {
              valor: Math.floor(Math.random() * valorMax + 1)
            }

            if (novoValor.valor > maior) {
              setValorDadoFinal(novoValor.valor)
              maior = novoValor.valor
              setValorFinal(Number(novoValor.valor) + Number(soma))
            }

            setValores((prevState) => [...prevState, novoValor])

          }

        }

      } else {

        const splitMais = data.valor.split('+')

        setValoresSoma([])
        setDados([])

        let final = 0

        for (let i = 0; i < splitMais.length; i++) {

          if (splitMais[i].includes('d')) {

            const splitD = splitMais[i].split('d')

            const dado = {
              valorMax: Number(splitD[1]),
              valores: []
            }

            for (let i = 0; i < splitD[0]; i++) {

              const novoValor = {
                valor: Math.floor(Math.random() * splitD[1] + 1),
              }

              final += novoValor.valor
              dado.valores.push(novoValor)

            }

            setDados((prevState) => [...prevState, dado])

          } else {
            setValoresSoma((prevState) => [...prevState, splitMais[i]])
            final += Number(splitMais[i])
          }

          setValorFinal(final)

        }

      }

    }

    rolarDado()

  }, [])

  return (
    <Container>

      <Header>

        <h1>Resultado</h1>
        <CloseButton onClick={setModalEditIsOpenFalse}>x</CloseButton>

      </Header>

      {data.isDano ?

        <>
          <Body>

            <h2><h3>{data.nome}:</h3> {dados.map(dado => dado.valores.map(valor => <h4>{'+' + valor.valor}</h4>))} {valoresSoma.map(valor => <h4>{valoresSoma[valoresSoma.length - 1] != valor ? valor + '+' : valor}</h4>)} <h5>..</h5> <h4>{'= ' + valorFinal}</h4> </h2>

          </Body>

          <FooterDano>
            {dados.map(dado => <h2><h3>d{dado.valorMax}:</h3> {dadova.lores.map(valor => <h4>{dado.valores[dado.valores.length - 1] == valor ? valor.valor : valor.valor + ','}</h4>)}</h2>)}
          </FooterDano>
        </>

        :

        <>
          <Body>

            <h2><h3>{data.nome}:</h3> <h4>{valorDadoFinal}{valorSoma > 0 && '+' + valorSoma} <h5>..</h5> {'= ' + valorFinal}</h4></h2>

          </Body>

          <FooterTeste>
            <h2><h3>{'d' + valorMax + ': '}</h3>{valores.map(valor => <h4>{valores[valores.length - 1] == valor ? valor.valor : valor.valor + ','}</h4>)}</h2>
          </FooterTeste>
        </>

      }


    </Container>
  );
}