import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container, Body, DoubleParteContainer, ParteImgModal, ImgModal,} from "./styles";
import { AnotacoesContainer, DadosContainer, FichaContainer, IniciativasContainer, UTContainer, FichasNPCsContainer, InventarioContainer } from "./components"
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { useFichas } from "../../hooks/useFichas";
import { useAuth } from "../../hooks/useAuth";
import { Modal } from "../../components/Modals/Modal";
import { io } from "socket.io-client";

const socket = io(api.defaults.baseURL);

export function Sessao() {

    const { id } = useParams()
    const {user} = useAuth()
    const { setTitle } = useTitle()
    const { setFichas } = useFichas()
    const navigate = useNavigate()

    const { setFichasNPCSPrincipal } = useFichas()
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
                    if (ficha.userId != user.id) {
                        setFichas((prev) => [...prev, ficha])
                    } else {
                        setFichasNPCSPrincipal((prev) => [...prev, ficha])
                    }
                })

                setSessao(response.data)

                setTitle(response.data.nome)
                document.title = `Registro Paranormal - ${response.data.nome}`

            } catch (erro) {
                console.log(erro);
            } finally {
                setIsLoading(false)
            }
        };

        fetchData();
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
