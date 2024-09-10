import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { io } from "socket.io-client";
import { Modal } from "../../components/Modals/Modal";
import { useAuth } from "../../hooks/useAuth";
import { useFichas } from "../../hooks/useFichas";
import { useTitle } from "../../hooks/useTitle";
import { api } from "../../services/api";
import { AnotacoesContainer, DadosContainer, FichaContainer, FichasNPCsContainer, IniciativasContainer, InventarioContainer, UTContainer } from "./components";
import { Body, Container, DoubleParteContainer, ImgModal, ParteImgModal, } from "./styles";

const socket = io(api.defaults.baseURL);

export function Sessao() {

    const { id } = useParams()
    const {user} = useAuth()
    const { setTitle } = useTitle()
    const { setFichas } = useFichas()
    const navigate = useNavigate()
    const [sessao, setSessao] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const [imgAberta, setImgAberta] = useState(false)
    const [imagem, setImagem] = useState(false)

    useEffect(() => {

      setTitle('Carregando...')
      setSessao({})
      setFichas([])

      function executeItemImg({ imagem }) {
        if (imagem != 'fechar') {
          setImgAberta(true)
          setImagem(imagem)
        } else {
          setImgAberta(false)
          setImagem('')
        }
      }
      socket.on(`enviado.itemImg?${id}`, executeItemImg);

      async function fetchData() {
        try {

          const response = await api.get(`/sessoes/${id}`);

          if (response.data.userId != user.id) {
            toast.error('Você não tem acesso a esta sessão!')
            navigate('/')
            return
          }
          
          response.data.Fichas.sort((a, b) => a.Principal[0].nome.localeCompare(b.Principal[0].nome))

          response.data.Fichas.forEach(ficha => {
            setFichas((prev) => [...prev, ficha])
          })

          setSessao(response.data)

          setTitle(response.data.nome)
          document.title = `${response.data.nome} - Registro Paranormal`

        } catch (erro) {
          console.log(erro);
        } finally {
          setIsLoading(false)
        }
      }

      fetchData();

      return () => {
        socket.off(`enviado.itemImg?${id}`, executeItemImg);
      }
    }, []);

    return (
        <Container>

            <Modal isOpen={imgAberta} setClose={() => setImgAberta(false)}>
                <ParteImgModal>
                    <ImgModal onClick={() => setImgAberta(false)} src={imagem} />
                </ParteImgModal>
            </Modal>

            {!isLoading &&
                <Body>

                    <FichaContainer />

                    <DoubleParteContainer>
                        <IniciativasContainer data={sessao?.Iniciativas} />
                        <UTContainer />
                    </DoubleParteContainer>

                    <DoubleParteContainer>
                        <AnotacoesContainer data={sessao?.Anotacoes} />
                        <DadosContainer data={sessao?.Dados} />
                    </DoubleParteContainer>

                    <InventarioContainer armasData={sessao?.Armas} itensData={sessao?.Itens} />

                    <FichasNPCsContainer npcs={sessao?.FichasNPC} npcsmonstros={sessao?.Monstros} />

                </Body>
            }
        </Container>
    );
}
