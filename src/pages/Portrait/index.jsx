import { Container, Main, PortraitImg, Status1, Status2, Dado, Municao } from './styles';
import FundoPortrait from '../../assets/img/FundoPortrait.png'
import { useState, useEffect } from 'react';
import { FaDiceD20 } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { io } from 'socket.io-client';
import municaoImg from '../../assets/img/municaoImg.png'
import {useAuth} from '../../hooks/useAuth'

const socket = io(api.defaults.baseURL);

export function Portrait() {

  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const [nomePortrait, setNome] = useState('')

  const [combate, setCombate] = useState(false)
  const [insano, setInsano] = useState(false)
  const [massivo, setMassivo] = useState(false)
  const [inconsciente, setInconsciente] = useState(false)

  const [portraitImg, setPortraitImg] = useState(null)

  const [pvA, setPvA] = useState(0)
  const [pvMax, setPvMax] = useState(0)
  const [sanA, setSanA] = useState(0)
  const [sanMax, setSanMax] = useState(0)
  const [peA, setPeA] = useState(0)
  const [municao, setMunicao] = useState(0)
  const [municaoAtiva, setMunicaoAtiva] = useState(false)

  const [animation, setAnimation] = useState(false)

  const [semPerm, setSemPerm] = useState(false)

  const [valorDado, setValorDado] = useState(0)
  const [dadoActive, setDadoActive] = useState(false)

  const {user} = useAuth()

  useEffect(() => {

    async function fetchData() {
      try {

        const response = await api.get(`/fichas/${id}`)
        
        if (!user && !response.data.isPublic) {
          setSemPerm(true)
          return
        }

        if ((user && response.data.sessaoId != null && response.data.sessao.userId == user.id) || (user && response.data.userId == user.id)) {
          setSemPerm(false)
        } else if (response.data.isPublic) {
          setSemPerm(false)
        } else {
          setSemPerm(true)
          return
        }

        setNome(response.data.Principal[0].nome)
        document.title = `Fichas RPG - Portrait ${response.data.Principal[0].nome}`

        const status = response.data.Status[0]

        setPvA(status.pv)
        setSanA(status.ps)
        setPeA(status.pe)

        setPvMax(status.pvMax)
        setSanMax(status.psMax)

        setCombate(status.combate)
        setInsano(status.insano)
        setMassivo(status.danoMassivo)
        setInconsciente(status.inconsciente)

        const portrait = response.data.Portrait[0]

        if (portrait) {

          if (portrait.insanoemorrendo != null &&
            (
              status.insano == true && status.danoMassivo == true
              || status.insano == true && status.pv == 0
              || status.danoMassivo == true && status.ps == 0
              || status.pv == 0 && status.ps == 0
            )) {
            setPortraitImg(portrait.insanoemorrendo);
          } else if (portrait.insanoeferido != null && (
            status.insano == true && status.pv < (status.pvMax / 2)
            || status.ps == 0 && status.pv < (status.pvMax / 2))) {
            setPortraitImg(portrait.insanoeferido);
          } else if (portrait.morrendo != null && (status.danoMassivo == true || status.pv == 0)) {
            setPortraitImg(portrait.morrendo);
          } else if (portrait.ferido != null && (status.danoMassivo == true || status.pv < (status.pvMax / 2))) {
            setPortraitImg(portrait.ferido);
          } else if (portrait.insano != null && status.insano == true || status.ps == 0) {
            setPortraitImg(portrait.insano);
          } else {
            setPortraitImg(portrait.normal);
          }

        }

      } catch (error) { console.log(error) }
      finally {
        setTimeout(() => { setIsLoading(false) }, 500)
      }
    }

    fetchData();


    function executeUpdateCombate({ fichaId, newCombate }) {
      if (fichaId == id) {
        setCombate(newCombate)
      }
    }
    socket.on(`status.combate?${id}`, executeUpdateCombate);

    function executeUpdateInsano({ fichaId, newInsano }) {
      if (fichaId == id) {
        setInsano(newInsano)
      }
    }
    socket.on(`status.insano?${id}`, executeUpdateInsano);

    function executeUpdateMassivo({ fichaId, newMassivo }) {
      if (fichaId == id) {
        setMassivo(newMassivo)
      }
    }
    socket.on(`status.massivo?${id}`, executeUpdateMassivo);

    function executeUpdateInconsciente({ fichaId, newInconsciente }) {
      if (fichaId == id) {
        setInconsciente(newInconsciente)
      }
    }
    socket.on(`status.inconsciente?${id}`, executeUpdateInconsciente);

    function executeUpdatePvAtual({ fichaId, newPvAtual }) {
      if (fichaId == id) {
        setPvA(newPvAtual)
      }
    }
    socket.on(`status.pvA?${id}`, executeUpdatePvAtual);

    function executeUpdatePvMax({ fichaId, newPvMax }) {
      if (fichaId == id) {
        setPvMax(newPvMax)
      }
    }
    socket.on(`status.pvMax?${id}`, executeUpdatePvMax);

    function executeUpdateSanAtual({ fichaId, newSanAtual }) {
      if (fichaId == id) {
        setSanA(newSanAtual)
      }
    }
    socket.on(`status.sanA?${id}`, executeUpdateSanAtual);

    function executeUpdateSanMax({ fichaId, newSanMax }) {
      if (fichaId == id) {
        setSanMax(newSanMax)
      }
    }
    socket.on(`status.sanMax?${id}`, executeUpdateSanMax);

    function executeUpdatePeAtual({ fichaId, newPeAtual }) {
      if (fichaId == id) {
        setPeA(newPeAtual)
      }
    }
    socket.on(`status.peA?${id}`, executeUpdatePeAtual);

    function executeUpdateMunicao({ fichaId, municao }) {
      if (fichaId == id) {
        setMunicao(municao)
        setMunicaoAtiva(true)

        setTimeout(() => {
          setMunicaoAtiva(false)
        }, 5000)
      }
    }
    socket.on(`status.municao?${id}`, executeUpdateMunicao);

    function executeDado({ fichaId, valorTotal }) {
      if (fichaId == id && valorTotal != undefined) {

        setDadoActive(false)

        setTimeout(() => {

          setDadoActive(true)
          setValorDado(valorTotal)

        }, 50)

      }
    }
    socket.on(`dado.rolado?${id}`, executeDado)

    function executeUpdatePortrait({ fichaId, newPortrait }) {
      if (fichaId == id) {
        const portraitAtual = document.getElementById('imagem')
        if (portraitAtual != undefined && portraitAtual != null) {
          if (portraitAtual.src != newPortrait) {
            setAnimation(true)
            setTimeout(() => { setAnimation(false) }, 500)
            setTimeout(() => { setPortraitImg(newPortrait) }, 500)
          }
        }
      }
    }
    socket.on(`status.portrait?${id}`, executeUpdatePortrait);

  }, [])


  return (
    <Container isLoading={isLoading}>

      <Main>

        <Status1 combate={combate}>
          <h1>{pvA}/{pvMax}</h1>
          <h2>{sanA}/{sanMax}</h2>
        </Status1>

        <Status2 combate={combate}>
          <h4>{nomePortrait}</h4>
        </Status2>

        {!semPerm && <h3>{peA}</h3>}

         <Municao active={municaoAtiva}> 
          <img src={municaoImg}/>
          <h5>x {municao}</h5>
        </Municao>

        {semPerm && <h6>Portrait Privado</h6>}
        <PortraitImg id='imagem' animation={animation} inconsciente={inconsciente} semPerm={semPerm} src={portraitImg} />
        <img src={FundoPortrait} />
      </Main>

      <Dado id='dado' active={dadoActive}>
        <span>{valorDado}</span>
        <FaDiceD20 color='#60eeff' size={200} />
      </Dado>

    </Container>
  );
}