import { BodyContainer, Container, Button, HeaderContainer, Table, TH4, TH5, Footer, ButtonSalvar } from './styles';
import { MdOutlineAddBox } from "react-icons/md";
import { LinhaTabela } from './components/LinhaTabela';
import { useEffect, useState } from 'react';
import { api } from "../../../../services/api";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useParams } from 'react-router-dom';
import { useFichas } from '../../../../hooks/useFichas';
import { io } from 'socket.io-client';

const socket = io(api.defaults.baseURL);

export function IniciativasContainer({ data }) {

  const [iniciativas, setIniciativas] = useState(data)
  const [precisaSalvar, setPrecisaSalvar] = useState(false)

  const [combate, setCombate] = useState(false)

  const { id } = useParams()
  const { fichas } = useFichas()

  useEffect(() => {

    fichas.forEach(ficha => {
      setarCombate(ficha.id, false)
    });

  }, [fichas])

  async function handleCreate() {

    try {

      const data = await api.post(`/sessoes/iniciativa`, {
        nome: `Jogador ${iniciativas.length + 1}`,
        iniciativa: 0,
        dano: 0,
        sessaoId: id
      });

      setIniciativas((prevState) => [...prevState, data.data]);

    } catch (erro) {
      toast.error(erro.response.data.mensagem)
    }

  }

  async function handleUpdate() {

    if (precisaSalvar) {
      try {
        for (let i = 0; i < iniciativas.length; i++) {
          await api.put(`/sessoes/iniciativa/${iniciativas[i].id}`, {
            nome: iniciativas[i].nome,
            posicao: iniciativas[i].posicao,
            iniciativa: iniciativas[i].iniciativa,
            dano: iniciativas[i].dano
          });
        }
        setPrecisaSalvar(false)
      } catch (erro) {
        console.log(erro)
      }

    }

  }

  function setarCombate(fichaId, newCombate) {
    socket.emit("status.combate", { fichaId, newCombate });
  }

  function combateAll() {
    fichas.forEach(ficha => {
      setarCombate(ficha.id, !combate)
    });

    setCombate(!combate)
  }

  return (
    <Container>
      <HeaderContainer>
        <h1>Iniciativas</h1>
        <button>
          <MdOutlineAddBox onClick={handleCreate} size={25} />
        </button>
      </HeaderContainer>

      <hr />

      <BodyContainer>

        {iniciativas.length > 0 &&

          <Table>
            <thead>
              <tr>
                <th style={{paddingLeft: '1rem'}}>Up</th>
                <th>#</th>
                <th>Nome</th>
                <TH4>Iniciativa</TH4>
                <TH5>Dano</TH5>
                <th>Down</th>
              </tr>
            </thead>
            <tbody>
              {iniciativas && iniciativas.map(iniciativa => <LinhaTabela key={iniciativa.id} data={iniciativa} iniciativas={iniciativas} atualizar={setIniciativas} setPrecisaSalvar={() => setPrecisaSalvar(true)} />)}
            </tbody>
          </Table>

        }

        <Footer>

          <Button onClick={combateAll} combate={combate}>Combate All</Button>
          {iniciativas.length > 0 &&
            <ButtonSalvar precisaSalvar={precisaSalvar} onClick={handleUpdate}> {precisaSalvar ? 'Salvar' : 'Salvo!'} </ButtonSalvar>
          }

        </Footer>

      </BodyContainer>

    </Container >
  );
}