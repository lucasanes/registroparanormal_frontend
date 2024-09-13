import { Howl } from 'howler';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import diceSound from '../../assets/rolldice.mp3';
import { useFichas } from '../../hooks/useFichas';
import { api } from '../../services/api';
import pericias from '../mappers/pericias';
import { CloseButton, Container, Footer, Header, Main } from './styles';

const socket = io(api.defaults.baseURL);

export function ModalDadoRolado({ setModalClose, data }) {

  const { id } = useParams()
  const {dc} = useFichas()

  const playRollSound = () => {
    const sound = new Howl({
      src: [diceSound],
    });

    sound.play()
  }

  const [dados, setDados] = useState({
    valorTotal: 0,
    conta: "",
    dadosRolados: [
      {
        dado: "",
        valores: []
      }
    ]
  });

  const [isCritico, setIsCritico] = useState(false)
  const [isDesastre, setIsDesastre] = useState(false)

  const [canShow, setCanShow] = useState(true)

  useEffect(() => {

    if (location.href.includes('ficha') && import.meta.env.VITE_NODE_ENV == 'prod') {
      setCanShow(false)
    }

    playRollSound()

    function dadoDinamico(dado, arr = null) {
      if (dado.includes("/")) {
        for (const [i, v] of Object.entries(arr)) {
          dado = dado.replaceAll(i, v);
        }
        dado = dado.replaceAll("/", "");
      }
      return dado;
    }

    function rolarDado(valor) {

      if (data.isDano == false) {

        let qtdDado;
        let valorMax;
        let totalValores = [];
        let contaTotal = [];
        let isCriticoA = false
        let isDesastreA = false

        let splitD

        let soma = []

        if (valor.includes('+')) {
          const splitMais = valor.split('+')

          for (let i = 1; i < splitMais.length; i++) {
            soma.push(splitMais[i])
          }

          splitD = splitMais[0].split('d')
        } else {
          splitD = valor.split('d')
        }

        qtdDado = Number(splitD[0])
        valorMax = Number(splitD[1])

        if (qtdDado == 0) {

          for (let i = 0; i < 2; i++) {

            const valorGerado = Math.floor(Math.random() * valorMax + 1);
            totalValores.push(valorGerado);

          }

          const menor = Math.min.apply(null, totalValores)
          contaTotal.push(menor)

          if (menor >= data.margemCritico || menor >= 20) {
            setIsCritico(true)
            isCriticoA = true
          }

          if (menor == 1) {
            setIsDesastre(true)
            isDesastreA = true
          }

        } else {

          for (let i = 0; i < qtdDado; i++) {

            const valorGerado = Math.floor(Math.random() * valorMax + 1);
            totalValores.push(valorGerado);

          }

          const maior = Math.max.apply(null, totalValores)
          contaTotal.push(maior)
 
          if (maior >= data.margemCritico || maior >= 20) {
            setIsCritico(true)
            isCriticoA = true
          }
          
          const desastre = ((qtdDado - 1) * 2) + 1
          if (maior <= desastre) {
            setIsDesastre(true)
            isDesastreA = true
          }

        }

        if (soma.length > 0) {
          contaTotal.push(`(${soma.join('+')})`)
        }

        socket.emit('dado.rolado', {
          fichaId: id, nomeNPC: data.nomeNPC, nome: data.nome, isDano: data.isDano, isCritico: isCriticoA, isDesastre: isDesastreA, conta: contaTotal.join("+"), valorTotal: eval(contaTotal.join("+")),
          dadosRolados: [{ dado: 'd' + valorMax, valores: totalValores }]
        })

        setDados({
          valorTotal: eval(contaTotal.join("+")),
          conta: contaTotal.join("+"),
          dadosRolados: [
            {
              dado: 'd' + valorMax,
              valores: totalValores
            }
          ]
        });

      } else {

        let isCriticoA = false
        let isDesastreA = false
        let soma = []
        let contaTotal = [];
        let todosDadosRolados = []
        let valorTotalMax = 0
        let valorTotalMin = 0

        if (valor.includes('+')) {
          const splitSoma = valor.split('+')

          for (let i = 0; i < splitSoma.length; i++) {

            if (splitSoma[i].includes('d')) {
              const splitDado = splitSoma[i].split('d')
              let qtdDado = splitDado[0]
              let valorMax = splitDado[1]

              let totalValores = [];

              for (let i = 0; i < qtdDado; i++) {

                const valorGerado = Math.floor(Math.random() * valorMax + 1);
                totalValores.push(valorGerado);
                contaTotal.push(valorGerado)

              }

              const novoDado = {
                dado: 'd' + valorMax,
                valores: totalValores
              }

              todosDadosRolados.push(novoDado)

              valorTotalMax += qtdDado * valorMax
              valorTotalMin += Number(qtdDado)

            } else {
              soma.push(splitSoma[i])
            }
          }

          if (soma.length > 0) {
            contaTotal.push('(' + soma.join('+') + ')')
            valorTotalMax += eval(soma.join('+'))
            valorTotalMin += eval(soma.join('+'))
          }

          if (valorTotalMax == eval(contaTotal.join("+"))) {
            setIsCritico(true)
            isCriticoA = true
          }

          if (valorTotalMin == eval(contaTotal.join("+"))) {
            setIsDesastre(true)
            isDesastreA = true
          }

          socket.emit('dado.rolado', { fichaId: id, nomeNPC: data.nomeNPC, nome: data.nome, isDano: data.isDano, isCritico: isCriticoA, isDesastre: isDesastreA, conta: contaTotal.join("+"), valorTotal: eval(contaTotal.join("+")), dadosRolados: todosDadosRolados })

          setDados({
            valorTotal: eval(contaTotal.join("+")),
            conta: contaTotal.join("+"),
            dadosRolados: todosDadosRolados
          });

        } else {

          let totalValores = []
          let contaTotal = []

          const splitDado = valor.split('d')

          let qtdDado = splitDado[0]
          let valorMax = splitDado[1]

          for (let i = 0; i < qtdDado; i++) {
            const valorGerado = Math.floor(Math.random() * valorMax + 1);
            totalValores.push(valorGerado);
            contaTotal.push(valorGerado)
          }

          valorTotalMax += qtdDado * valorMax

          if (valorTotalMax == eval(contaTotal.join("+"))) {
            setIsCritico(true)
            isCriticoA = true
          }

          valorTotalMin += qtdDado
          if (valorTotalMin == eval(contaTotal.join("+"))) {
            setIsDesastre(true)
            isDesastreA = true
          }

          socket.emit('dado.rolado', {
            fichaId: id, nomeNPC: data.nomeNPC, nome: data.nome, isDano: data.isDano, isCritico: isCriticoA, isDesastre: isDesastreA, conta: contaTotal.join("+"), valorTotal: eval(contaTotal.join("+")), dadosRolados: [{ dado: 'd' + valorMax, valores: totalValores }]
          })

          setDados({
            valorTotal: eval(contaTotal.join("+")),
            conta: contaTotal.join("+"),
            dadosRolados: [
              {
                dado: 'd' + valorMax,
                valores: totalValores
              }
            ]
          });
        }

      }
    }

    rolarDado(dadoDinamico(data.valor, dc));

    if (location.href.includes('ficha')) {
      setTimeout(() => {
        setCanShow(true)
      }, 3300);
    }
  }, []);

  return (
    <Container isDano={data.isDano}>

      <Header>

        <h1>Resultado</h1>
        <CloseButton onClick={setModalClose}>x</CloseButton>

      </Header>

      {canShow ? <>

        <Main isCritico={isCritico} isDesastre={isDesastre} isDano={data.isDano}>
          <h1>{pericias(data.nome) != null ? pericias(data.nome) : data.nome}:</h1>
          <span>
            {dados.conta} = {dados.valorTotal}
          </span>
        </Main>

        <Footer isCritico={isCritico} isDesastre={isDesastre}>
          {dados.dadosRolados.map((dado) => (
            <span key={dado.dado}>
              {dado.dado}: {dado.valores.join(', ')}
            </span>
          ))}
        </Footer>
        
      </>
      
      : <span className='rolando'>Rolando...</span>}

    </Container>
  );

}