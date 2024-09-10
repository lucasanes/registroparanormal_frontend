import { useEffect, useState } from 'react';
import { FaDiceD20 } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import FundoPortrait from '../../assets/img/FundoPortrait.png';
import municaoImg from '../../assets/img/municaoImg.png';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';
import { Container, Dado, Main, Municao, PortraitImg, Status1, Status2, Status3, Status4 } from './styles';

const socket = io(api.defaults.baseURL);

export function Portrait() {

  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()
  const {user} = useAuth()

  const [semPerm, setSemPerm] = useState(false)

  const [status, setStatus] = useState({
    nome: '',
    combate: false,
    insano: false,
    massivo: false,
    inconsciente: false,
    pvA: 0,
    pvMax: 0,
    sanA: 0,
    sanMax: 0,
    peA: 0,
    municao: 0,
  })

  const [animation, setAnimation] = useState(false)

  const [dadoRolado, setDadoRolado] = useState(0)

  const [portraitImg, setPortraitImg] = useState(null)
  const [dado, setDado] = useState({valorTotal: 0, isCritico: false, isDano: false})

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

        document.title = `${response.data.Principal[0].nome} Portrait - Registro Paranormal`

        const status = response.data.Status[0]


        setStatus({
          nome: response.data.Principal[0].nome, 
          combate: status.combate,
          insano: status.insano,
          massivo: status.danoMassivo,
          inconsciente: status.inconsciente,
          pvA: status.pv + status.pv2,
          pvMax: status.pvMax,
          sanA: status.ps + status.ps2,
          sanMax: status.psMax,
          peA: status.pe + status.pe2,
          municao: 0,
        })

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


    function executeUpdateCombate({ newCombate }) {
      setStatus(rest => {
        const status = {...rest}
        status.combate = newCombate
        return status
      })
    }
    socket.on(`status.combate?${id}`, executeUpdateCombate);

    function executeUpdateInsano({ newInsano }) {
      setStatus(rest => {
        const status = {...rest}
        status.insano = newInsano
        return status
      })
    }
    socket.on(`status.insano?${id}`, executeUpdateInsano);

    function executeUpdateMassivo({ newMassivo }) {
      setStatus(rest => {
        const status = {...rest}
        status.massivo = newMassivo
        return status
      })
    }
    socket.on(`status.massivo?${id}`, executeUpdateMassivo);

    function executeUpdateInconsciente({ newInconsciente }) {
      setStatus(rest => {
        const status = {...rest}
        status.inconsciente = newInconsciente
        return status
      })
    }
    socket.on(`status.inconsciente?${id}`, executeUpdateInconsciente);

    function executeUpdatePvAtual({ newPvAtual }) {
      setStatus(rest => {
        const status = {...rest}
        status.pvA = newPvAtual
        return status
      })
    }
    socket.on(`status.pvA?${id}`, executeUpdatePvAtual);

    function executeUpdatePvMax({ newPvMax }) {
      setStatus(rest => {
        const status = {...rest}
        status.pvMax = newPvMax
        return status
      })
    }
    socket.on(`status.pvMax?${id}`, executeUpdatePvMax);

    function executeUpdateSanAtual({ newSanAtual }) {
      setStatus(rest => {
        const status = {...rest}
        status.sanA = newSanAtual
        return status
      })
    }
    socket.on(`status.sanA?${id}`, executeUpdateSanAtual);

    function executeUpdateSanMax({ newSanMax }) {
      setStatus(rest => {
        const status = {...rest}
        status.sanMax = newSanMax
        return status
      })
    }
    socket.on(`status.sanMax?${id}`, executeUpdateSanMax);

    function executeUpdatePeAtual({ newPeAtual }) {
      setStatus(rest => {
        const status = {...rest}
        status.peA = newPeAtual
        return status
      })
    }
    socket.on(`status.peA?${id}`, executeUpdatePeAtual);

    function executeUpdateMunicao({ municao }) {
      setStatus(rest => {
        const status = {...rest}
        status.municao = municao
        return status
      })
    }
    socket.on(`status.municao?${id}`, executeUpdateMunicao);

    function executeDado({ valorTotal, isDano, isCritico, isDesastre }) {
      if (valorTotal != undefined) {

        setDadoRolado(rest => rest + 1)
        setDado({valorTotal, isDano, isCritico, isDesastre})

      }
    }
    socket.on(`dado.rolado?${id}`, executeDado)

    function executeUpdatePortrait({ newPortrait }) {
      const portraitAtual = document.getElementById('imagem')
      if (portraitAtual != undefined && portraitAtual != null) {
        if (portraitAtual.src != newPortrait) {
          setAnimation(true)
          setTimeout(() => { setAnimation(false) }, 500)
          setTimeout(() => { setPortraitImg(newPortrait) }, 500)
        }
      }
    }
    socket.on(`status.portrait?${id}`, executeUpdatePortrait);

    return () => {
      socket.off(`status.combate?${id}`, executeUpdateCombate);
      socket.off(`status.insano?${id}`, executeUpdateInsano);
      socket.off(`status.massivo?${id}`, executeUpdateMassivo);
      socket.off(`status.inconsciente?${id}`, executeUpdateInconsciente);
      socket.off(`status.pvA?${id}`, executeUpdatePvAtual);
      socket.off(`status.pvMax?${id}`, executeUpdatePvMax);
      socket.off(`status.sanA?${id}`, executeUpdateSanAtual);
      socket.off(`status.sanMax?${id}`, executeUpdateSanMax);
      socket.off(`status.peA?${id}`, executeUpdatePeAtual);
      socket.off(`status.municao?${id}`, executeUpdateMunicao);
      socket.off(`dado.rolado?${id}`, executeDado);
      socket.off(`status.portrait?${id}`, executeUpdatePortrait);
    }

  }, [])


  return (
    <Container isLoading={isLoading}>

      <Main>

        <Status1 combate={status.combate}>
          <h1>{status.pvA}/{status.pvMax}</h1>
          <h2>{status.sanA}/{status.sanMax}</h2>
        </Status1>

        <Status2 combate={status.combate}>
          <h4>{status.nome}</h4>
        </Status2>

        <Status3 combate={status.combate}>
          <h3>{status.peA}</h3>
        </Status3>

        <Status4 combate={status.combate}>
          <h3>{!semPerm && status.sanA}</h3>
        </Status4>

        <Municao active={status.municao > 0 && status.combate}> 
          <img src={municaoImg}/>
          <h5>x {status.municao}</h5>
        </Municao>

        {semPerm && <h6>Portrait Privado</h6>}
        <PortraitImg id='imagem' animation={animation} inconsciente={status.inconsciente} semPerm={semPerm} src={portraitImg} />
        <img src={FundoPortrait} />
      </Main>

      <Dado key={dadoRolado} style={{display: dadoRolado < 1 ? 'none' : 'flex'}} id='dado' isCritico={dado.isCritico} isDesastre={dado.isDesastre} isDano={dado.isDano}>
        <span>{dado.valorTotal}</span>
        <FaDiceD20 color='#' size={200} />
      </Dado>

    </Container>
  );
}