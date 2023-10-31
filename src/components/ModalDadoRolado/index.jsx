import { useEffect, useState } from 'react';
import { Container, Header, Main, Footer, CloseButton } from './styles';
import { io } from 'socket.io-client';
import { api } from '../../services/api';
import { useParams } from 'react-router-dom';
import pericias from './pericias';

const socket = io(api.defaults.baseURL);

export function ModalDadoRolado({ setModalEditIsOpenFalse, data }) {

  const { id } = useParams()

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

  useEffect(() => {
    const rolarDado = () => {

      if (data.isDano == false) {

        let qtdDado;
        let valorMax;
        let totalValores = [];
        let contaTotal = [];

        let splitD

        let soma = 0

        if (data.valor.includes('+')) {
          const splitMais = data.valor.split('+')
          soma = splitMais[1]

          splitD = splitMais[0].split('d')
        } else {
          splitD = data.valor.split('d')
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

        } else if (qtdDado == -1) {

          for (let i = 0; i < 3; i++) {

            const valorGerado = Math.floor(Math.random() * valorMax + 1);
            totalValores.push(valorGerado);

          }

          const menor = Math.min.apply(null, totalValores)
          contaTotal.push(menor)

        } else {

          for (let i = 0; i < qtdDado; i++) {

            const valorGerado = Math.floor(Math.random() * valorMax + 1);
            totalValores.push(valorGerado);

          }

          const maior = Math.max.apply(null, totalValores)
          contaTotal.push(maior)

        }

        if (soma > 0) {
          contaTotal.push(soma)
        }

        socket.emit('dado.rolado', {
          fichaId: id, nomeNPC: data.nomeNPC, nome: data.nome, isDano: data.isDano, conta: contaTotal.join("+"), valorTotal: eval(contaTotal.join("+")),
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

        let soma = []
        let contaTotal = [];
        let todosDadosRolados = []

        if (data.valor.includes('+')) {
          const splitSoma = data.valor.split('+')

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

            } else {
              soma.push(splitSoma[i])
            }
          }

          if (soma.length > 0) {
            contaTotal.push('(' + soma.join('+') + ')')
          }

          socket.emit('dado.rolado', { fichaId: id, nomeNPC: data.nomeNPC, nome: data.nome, isDano: data.isDano, conta: contaTotal.join("+"), valorTotal: eval(contaTotal.join("+")), dadosRolados: todosDadosRolados })

          setDados({
            valorTotal: eval(contaTotal.join("+")),
            conta: contaTotal.join("+"),
            dadosRolados: todosDadosRolados
          });

        } else {

          let totalValores = []
          let contaTotal = []

          const splitDado = data.valor.split('d')

          let qtdDado = splitDado[0]
          let valorMax = splitDado[1]

          for (let i = 0; i < qtdDado; i++) {
            const valorGerado = Math.floor(Math.random() * valorMax + 1);
            totalValores.push(valorGerado);
            contaTotal.push(valorGerado)
          }

          socket.emit('dado.rolado', {
            fichaId: id, nomeNPC: data.nomeNPC, nome: data.nome, isDano: data.isDano, conta: contaTotal.join("+"), valorTotal: eval(contaTotal.join("+")), dadosRolados: [{ dado: 'd' + valorMax, valores: totalValores }]
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

      };
    }

    rolarDado();
  }, []);

  return (
    <Container>

      <Header>

        <h1>Resultado</h1>
        <CloseButton onClick={setModalEditIsOpenFalse}>x</CloseButton>

      </Header>

      <Main isDano={data.isDano}>
        <h1>{pericias(data.nome) != null ? pericias(data.nome) : data.nome}:</h1>
        <span>
          {dados.conta} = {dados.valorTotal}
        </span>
      </Main>

      <Footer>
        {dados.dadosRolados.map((dado) => (
          <span key={dado.dado}>
            {dado.dado}: {dado.valores.join(', ')}
          </span>
        ))}
      </Footer>

    </Container>
  );

}