import { ParteImgModal, ImgModal, Container, DoubleParteContainer, Body } from './styles';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { api } from '../../services/api';
import { useDisabled } from '../../hooks/useDisabled';
import { useTitle } from '../../hooks/useTitle';
import { Modal } from '../../components/Modals/Modal';
import { io } from 'socket.io-client';
import { useFichas } from '../../hooks/useFichas';
import { useAuth } from '../../hooks/useAuth';
import { PrincipalContainer } from './components/PrincipalContainer';
import { StatusContainer } from './components/StatusContainer';

const socket = io(api.defaults.baseURL);

export function Ficha() {

  const [ficha, setFicha] = useState({})

  const { id } = useParams()
  const { setDisabled } = useDisabled()
  const navigate = useNavigate()
  const {user} = useAuth()
  const { setTitle } = useTitle()
  const { setFichas } = useFichas()

  const [imgAberta, setImgAberta] = useState(false)
  const [imagem, setImagem] = useState('')

  const [isLoading, setIsLoading] = useState(true)
 
  useEffect(() => {

    async function fetchData() {
      try {

        setIsLoading(true)
        setTitle('Carregando...')

        const response = await api.get(`/fichas/${id}`)

        if (response.data.isPublic == false && user == null) {
          navigate('/')
          return
        }

        if ((user != null && response.data.sessaoId != null && response.data.sessao.userId == user.id) || (user != null && response.data.userId == user.id)) {
          setDisabled(false)
          if (response.data.sessaoId != null) {
            setFichas(response.data.sessao.Fichas.filter(ficha => ficha.id != response.data.id))
          }
        } else if (response.data.isPublic) {
          setDisabled(true)
        } else {
          navigate('/')
          return
        }

        setFicha(response.data)
        setTitle(response.data.Principal[0].nome)
        document.title = `Registro Paranormal - ${response.data.Principal[0].nome}`

      } catch (error) { console.log(error) }
      finally {setIsLoading(false)}
    }
    fetchData();

    function executeItemImg({ fichaId, imagem }) {
      if (fichaId == id) {
        setImgAberta(true)
        setImagem(imagem)
      }
    }
    socket.on("enviado.itemImg", executeItemImg);

  }, []);

  return (
    <Container>

      <Modal isOpen={imgAberta} setClose={() => setImgAberta(false)}>
        <ParteImgModal>
          <ImgModal onClick={() => setImgAberta(false)} src={imagem} />
        </ParteImgModal>
      </Modal>

      {!isLoading && <Body>

        <DoubleParteContainer>
          <PrincipalContainer data={ficha?.Principal[0]} />
          <StatusContainer infosBarrinha={{classe: ficha?.Principal[0].classe, nex: ficha?.Principal[0].nex, pre: ficha?.Atributos[0].pre, vig: ficha?.Atributos[0].vig}} status={ficha?.Status[0]} defesasData={ficha?.Defesas[0]} portraitData={ficha?.Portrait[0]} />
        </DoubleParteContainer>

        <DoubleParteContainer>
          {/* <AtributoContainer data={ficha && ficha.Atributos[0]} /> */}
          {/* <DadosContainer data={ficha && ficha.Dados} /> */}
        </DoubleParteContainer>

        {/*<DoubleParteContainer>

          <PericiasContainer data={ficha && ficha.Pericias[0]} atributos={ficha && ficha.Atributos[0]} />

          <DoubleParteColumnContainer>
            <HabilidadesContainer poderesData={ficha && ficha.Poderes} proficienciasData={ficha && ficha.Proficiencias} habilidadesData={ficha && ficha.Habilidades} />
            <PersonagemContainer data={ficha && ficha.Personagem[0]} />
          </DoubleParteColumnContainer>

        </DoubleParteContainer>

        <InventarioContainer armasData={ficha && ficha.Armas} itensData={ficha && ficha.Itens} peso={ficha && ficha.Status[0].peso} />
        <RituaisContainer data={ficha && ficha.Rituais} /> */}

      </Body>}

    </Container>
  );
}