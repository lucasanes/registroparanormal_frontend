import { useEffect, useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import noportrait from '../../../../assets/img/noportrait.png';
import { Barrinha } from '../../../../components/Barinha';
import { ButtonEdit } from '../../../../components/ButtonEdit';
import resistencias from '../../../../components/mappers/resistencias';
import { Modal } from '../../../../components/Modals/Modal';
import { useDisabled } from '../../../../hooks/useDisabled';
import { api } from '../../../../services/api';
import { theme } from '../../../../stitches.config';
import { ModalPortrait } from './components/ModalPortrait';
import { ModalStatus } from './components/ModalStatus';
import { AreaPortrait, Body, BottomBody, Button, ButtonIcon, Buttons, Container, ContainerDeferes, Deferes, Header, Img, Portrait, TopBody, Video } from './styles';

const socket = io(api.defaults.baseURL);

export function StatusContainer({ status, defesasData, portraitData, infosBarrinha }) {

  const [dataDefesas, setDataDefesas] = useState([])
  const [dataRes, setDataRes] = useState([])

  const [modalPortraitIsOpen, setModalPortraitIsOpen] = useState(false)
  const [modalStatusIsOpen, setModalStatusIsOpen] = useState(false)

  const { disabled } = useDisabled()

  const { id } = useParams()

  const [combate, setCombate] = useState(false)
  const [insano, setInsano] = useState(false)
  const [massivo, setMassivo] = useState(false)
  const [inconsciente, setInconsciente] = useState(false)

  const [defesas, setDefesas] = useState(defesasData)
  const [portrait, setPortrait] = useState(portraitData)

  const [portraitImg, setPortraitImg] = useState(null)

  const [pvA, setPvA] = useState(status.pv)
  const [pvMax, setPvMax] = useState(status.pvMax)
  const [sanA, setSanA] = useState(status.ps)
  const [sanMax, setSanMax] = useState(status.psMax)
  const [peA, setPeA] = useState(status.pe)
  const [peMax, setPeMax] = useState(status.peMax)

  const [pvO, setPvO] = useState(status.pvMax2 > 0)
  const [pvA2, setPvA2] = useState(status.pv2)
  const [pvMax2, setPvMax2] = useState(status.pvMax2)

  const [sanO, setSanO] = useState(status.psMax2 > 0)
  const [sanA2, setSanA2] = useState(status.ps2)
  const [sanMax2, setSanMax2] = useState(status.psMax2)

  const [peO, setPeO] = useState(status.peMax2 > 0)
  const [peA2, setPeA2] = useState(status.pe2)
  const [peMax2, setPeMax2] = useState(status.peMax2)

  const [changinTimer, setChanginTimer] = useState(null)

  async function handleEdit(combate, insano, danoMassivo, inconsciente) {

    await api.put(`/fichas/status/${id}`, {
      combate,
      insano,
      danoMassivo,
      inconsciente,
      pv: pvA,
      pvMax,
      ps: sanA,
      psMax: sanMax,
      pe: peA,
      peMax,

      pv2: pvA2,
      pvMax2,
      ps2: sanA2,
      psMax2: sanMax2,
      pe2: peA2,
      peMax2,
    })
  }

  async function handleEditStatus(combate, insano, danoMassivo, inconsciente) {
    await api.put(`/fichas/status/${id}`, {
      combate,
      insano,
      danoMassivo,
      inconsciente,
    })
  }
  
  function subtimer(combate, insano, danoMassivo, inconsciente) {
    clearTimeout(changinTimer)
    setChanginTimer(setTimeout(() => handleEdit(combate, insano, danoMassivo, inconsciente), 3000))
  }

  useEffect(() => {

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

    return () => {
      handleEditStatus(false, false, false, false)

      socket.off(`status.combate?${id}`, executeUpdateCombate);
      socket.off(`status.insano?${id}`, executeUpdateInsano);
      socket.off(`status.massivo?${id}`, executeUpdateMassivo);
      socket.off(`status.inconsciente?${id}`, executeUpdateInconsciente);
    }
  }, [])

  useEffect(() => {

    let varDefesas = []
    let varRes = []

    if (defesas) {
      for (const [key, value] of Object.entries(defesas)) {
        if (key != 'id' && key != 'fichaId') {
          if (key == 'passiva' || key == 'esquiva' || key == 'bloqueio') {
            if (value != null && value != 0) {
              const novaDefesa = { nome: key, valor: value }
              varDefesas.push(novaDefesa)
            }
          } else {
            if (value != null && value != 0) {
              const novaRes = { nome: key, valor: value }
              varRes.push(novaRes)
            }
          }
        }
      }
      setDataDefesas(varDefesas)
      setDataRes(varRes)
    }

  }, [defesas])

  useEffect(() => {

    if (portrait) {

      if (portrait.insanoemorrendo != null &&
        (
          insano == true && massivo == true
          || insano == true && pvA == 0
          || massivo == true && sanA == 0
          || pvA == 0 && sanA == 0
        )) {
        setarPortrait(portrait.insanoemorrendo);
      } else if (portrait.insanoeferido != null && (
        insano == true && pvA < (pvMax / 2)
        || sanA == 0 && pvA < (pvMax / 2))) {
        setarPortrait(portrait.insanoeferido);
      } else if (portrait.morrendo != null && (massivo == true || pvA == 0)) {
        setarPortrait(portrait.morrendo);
      } else if (portrait.ferido != null && (massivo == true || pvA < (pvMax / 2))) {
        setarPortrait(portrait.ferido);
      } else if (portrait.insano != null && (insano == true || sanA == 0)) {
        setarPortrait(portrait.insano);
      } else if (portrait.normal != null) {
        setarPortrait(portrait.normal);
      }

    }

  }, [pvA, sanA, insano, massivo, portrait])

  useEffect(() => {

    if (pvMax != 0) {
      subtimer(combate, insano, massivo, inconsciente)
    }

  }, [pvA, pvMax, sanA, sanMax, peA, peMax, pvA2, pvMax2, sanA2, sanMax2, peA2, peMax2])

  function setarCombate(newCombate) {
    socket.emit("status.combate", { fichaId: id, newCombate });
    setCombate(newCombate)
  }

  function setarInsano(newInsano) {
    socket.emit("status.insano", { fichaId: id, newInsano });
    setInsano(newInsano)
  }

  function setarMassivo(newMassivo) {
    socket.emit("status.massivo", { fichaId: id, newMassivo });
    setMassivo(newMassivo)
  }

  function setarInconsciente(newInconsciente) {
    socket.emit("status.inconsciente", { fichaId: id, newInconsciente });
    setInconsciente(newInconsciente)
  }

  const fakePlayers = import.meta.env.VITE_FAKE_PLAYERS

  function setarPvAtual(newPvAtual) {
    if (!fakePlayers.includes(id)) {
      socket.emit("status.pvA", { fichaId: id, newPvAtual: newPvAtual + pvA2 })
    } else {
      socket.emit("status.pvA", { fichaId: id, newPvAtual: newPvAtual})
    }
    setPvA(newPvAtual)
  }
  
  function setarSanAtual(newSanAtual) {
    if (!fakePlayers.includes(id)) {
      socket.emit("status.sanA", { fichaId: id, newSanAtual: newSanAtual + sanA2 })
    } else {
      socket.emit("status.sanA", { fichaId: id, newSanAtual: newSanAtual})
    }
    setSanA(newSanAtual)
  }

  function setarPeAtual(newPeAtual) {
    if (!fakePlayers.includes(id)) {
      socket.emit("status.peA", { fichaId: id, newPeAtual: newPeAtual + peA2 })
    } else {
      socket.emit("status.peA", { fichaId: id, newPeAtual: newPeAtual})
    }
    setPeA(newPeAtual)
  }

  function setarPvAtual2(newPvAtual) {
    if (!fakePlayers.includes(id)) {
      socket.emit("status.pvA", { fichaId: id, newPvAtual: newPvAtual + pvA })
    } else {
      socket.emit("status.pvA", { fichaId: id, newPvAtual: pvA})
    }
    setPvA2(newPvAtual)
  }

  function setarSanAtual2(newSanAtual) {
    if (!fakePlayers.includes(id)) {
      socket.emit("status.sanA", { fichaId: id, newSanAtual: newSanAtual + sanA })
    } else {
      socket.emit("status.sanA", { fichaId: id, newSanAtual: sanA})
    }
    setSanA2(newSanAtual)
  }

  function setarPeAtual2(newPeAtual) {
    if (!fakePlayers.includes(id)) {
      socket.emit("status.peA", { fichaId: id, newPeAtual: newPeAtual + peA })
    } else {
      socket.emit("status.peA", { fichaId: id, newPeAtual: peA})
    }
    setPeA2(newPeAtual)
  }



  function setarPvMax(newPvMax) {
    socket.emit("status.pvMax", { fichaId: id, newPvMax });
    setPvMax(newPvMax)
  }

  function setarSanMax(newSanMax) {
    socket.emit("status.sanMax", { fichaId: id, newSanMax });
    setSanMax(newSanMax)
  }

  function setarPeMax(newPeMax) {
    socket.emit("status.peMax", { fichaId: id, newPeMax });
    setPeMax(newPeMax)
  }

  

  function setarPortrait(newPortrait) {
    socket.emit("status.portrait", { fichaId: id, newPortrait });
    setPortraitImg(newPortrait)
  }

  return (
    <Container>

      <Modal padding={false} isOpen={modalPortraitIsOpen} setClose={() => setModalPortraitIsOpen(false)}>
        <ModalPortrait atualizar={setPortrait} data={portrait} setModalClose={() => setModalPortraitIsOpen(false)} />
      </Modal>

      <Modal padding={false} isOpen={modalStatusIsOpen} setClose={() => setModalStatusIsOpen(false)}>
        <ModalStatus atualizar={setDefesas} data={defesas} setModalClose={() => setModalStatusIsOpen(false)} />
      </Modal>

      <Header>
        <h1>Status</h1>
        <ButtonEdit onClick={() => setModalStatusIsOpen(true)} size={22} />
      </Header>

      <hr />

      <Body>

        <TopBody>

          <Buttons>

            <h1>Portrait</h1>

            <hr />

            <Button disabled={disabled} active={'combate' + combate} onClick={() => { setarCombate(!combate); subtimer(!combate, insano, massivo, inconsciente) }} color={'yellow'}>Combate</Button>
            <Button disabled={disabled} active={'insano' + insano} onClick={() => { setarInsano(!insano); subtimer(combate, !insano, massivo, inconsciente) }} color={'aqua'}>Insano</Button>
            <Button disabled={disabled} active={'massivo' + massivo} onClick={() => { setarMassivo(!massivo); subtimer(combate, insano, !massivo, inconsciente) }} color={'red'}>Dano Massivo</Button>
            <Button disabled={disabled} active={'inconsciente' + inconsciente} onClick={() => { setarInconsciente(!inconsciente); subtimer(combate, insano, massivo, !inconsciente) }} color={'red2'}>Inconsciente</Button>

          </Buttons>

          <AreaPortrait>

            <Portrait target='_blank' to={`/ficha/portrait/${id}`}>
              {portraitImg ?
                <Video active={inconsciente} src={portraitImg} autoPlay loop muted/>
                :
                <Img src={noportrait} />
              }

            </Portrait>

            <ButtonEdit className='edit' style={{position: 'relative', bottom: 100, right: 20, zIndex: 10}} size={25} onClick={() => setModalPortraitIsOpen(true)} />

          </AreaPortrait>

        </TopBody>

        <BottomBody>

          <div className='div'>
            <h1>Vida</h1>
            <ButtonIcon onClick={() => setPvO(!pvO)}>{pvO ? <BsEyeSlash color={theme.colors.pv} size={23} /> : <BsEye color={theme.colors.pv} size={23} />}</ButtonIcon>
          </div>

          <Barrinha number={1} setValorA={setarPvAtual} setValorMax={setarPvMax} valorA={pvA} valorMax={pvMax} infos={infosBarrinha} color={'red'} />
          <Barrinha style={{display: pvO ? 'flex' : 'none', marginTop: '1rem'}} number={4} setValorA={setarPvAtual2} setValorMax={setPvMax2} valorA={pvA2} valorMax={pvMax2} infos={infosBarrinha} color={'red'} />
          
          <div className='div'>
            <h1>Sanidade</h1>
            <ButtonIcon onClick={() => setSanO(!sanO)}>{sanO ? <BsEyeSlash color={theme.colors.ps} size={23} /> : <BsEye color={theme.colors.ps} size={23} />}</ButtonIcon>
          </div>

          <Barrinha number={2} setValorA={setarSanAtual} setValorMax={setarSanMax} valorA={sanA} valorMax={sanMax} infos={infosBarrinha} color={'aqua'} />
          <Barrinha style={{display: sanO ? 'flex' : 'none', marginTop: '1rem'}} number={5} setValorA={setarSanAtual2} setValorMax={setSanMax2} valorA={sanA2} valorMax={sanMax2} infos={infosBarrinha} color={'aqua'} />

          <div className='div'>
            <h1>Esforço</h1>
            <ButtonIcon onClick={() => setPeO(!peO)}>{peO ? <BsEyeSlash color={theme.colors.pe} size={23} /> : <BsEye color={theme.colors.pe} size={23} />}</ButtonIcon>
          </div>

          <Barrinha number={3} setValorA={setarPeAtual} setValorMax={setarPeMax} valorA={peA} valorMax={peMax} infos={infosBarrinha} color={'yellow'} />
          <Barrinha style={{display: peO ? 'flex' : 'none', marginTop: '1rem'}} number={6} setValorA={setarPeAtual2} setValorMax={setPeMax2} valorA={peA2} valorMax={peMax2} infos={infosBarrinha} color={'yellow'} />

          {dataDefesas.length > 0 &&

            <><h2>Defesas</h2>

              <ContainerDeferes>

                {dataDefesas.map(defesa => <Deferes key={defesa.nome}>{defesa.nome + ': ' + defesa.valor}</Deferes>)}

              </ContainerDeferes></>

          }

          {dataRes.length > 0 &&

            <><h2>Resistências</h2>

              <ContainerDeferes>

                {dataRes.map(res => <Deferes key={res.nome}>{resistencias(res.nome) + ': ' + res.valor}</Deferes>)}

              </ContainerDeferes></>

          }

        </BottomBody>

      </Body>

    </Container>
  );
}