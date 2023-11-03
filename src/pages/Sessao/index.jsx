import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container, Body, DoubleParteContainer,} from "./styles";
import { AnotacoesContainer, DadosContainer, FichaContainer, IniciativasContainer, UTContainer, FichasNPCsContainer, InventarioContainer } from "./components"
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { useFichas } from "../../hooks/useFichas";
import { useAuth } from "../../hooks/useAuth";

export function Sessao() {

    const { id } = useParams()
    const {user} = useAuth()
    const { setTitle } = useTitle()
    const { setFichas } = useFichas()
    const navigate = useNavigate()

    const { setFichasNPCSPrincipal } = useFichas()
    const [sessao, setSessao] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        setTitle('Carregando...')
        setSessao({})
        setFichas([])

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
