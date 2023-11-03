import { useState } from 'react';
import { useEffect } from 'react';
import { FaRegCopy } from 'react-icons/fa';
import { ButtonDelete } from '../../../../../../components/ButtonDelete';
import { ButtonEdit } from '../../../../../../components/ButtonEdit';
import { ModalDadoRolado } from '../../../../../../components/ModalDadoRolado';
import { Modal } from '../../../../../../components/Modals/Modal';
import { api } from '../../../../../../services/api';
import { Barrinha } from '../Barrinha';
import { ModalEditMonstro } from '../ModalEditMonstro';
import periciasmapper from '../../../../../../components/mappers/pericias';
import resistenciasmapper from '../../../../../../components/mappers/resistencias';
import { Container, Header, Select, Button, BodyContainerPrincipal, BodyContainerOutros, Card, TextArea, BodyContainerStatus, FlexStatus, Status, BodyContainerDados, Pericia, ButtonIcon } from './styles';

export function NPCMonstro({ data, lista, atualizar }) {

  const [body, setBody] = useState('principal')

  const [modalDadoRoladoIsOpen, setModalDadoRoladoIsOpen] = useState(false)
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false)

  const [dadoData, setDadoData] = useState({
    nome: '',
    valor: '',
    isValor: false
  })

  const [pv, setPv] = useState(data.pv)
  const [pvMax, setPvMax] = useState(data.pvMax)

  const [defesas, setDefesas] = useState([])
  const [res, setRes] = useState([])
  const [pericias, setPericias] = useState([])

  async function handleDuplicate() {

    try {

      const response = await api.post(`/fichas/npcmonstro`, {

        nome: data.nome,
        nex: Number(data.nex),

        pvMax: Number(pvMax),

        agi: Number(data.agi),
        int: Number(data.int),
        vig: Number(data.vig),
        pre: Number(data.pre),
        forca: Number(data.for),

        acrobacia: Number(data.acrobacia),
        adestramento: Number(data.adestramento),
        arte: Number(data.arte),
        atletismo: Number(data.atletismo),
        atualidade: Number(data.atualidade),
        ciencia: Number(data.ciencia),
        crime: Number(data.crime),
        diplomacia: Number(data.diplomacia),
        enganacao: Number(data.enganacao),
        fortitude: Number(data.fortitude),
        furtividade: Number(data.furtividade),
        iniciativa: Number(data.iniciativa),
        intimidacao: Number(data.intimidacao),
        intuicao: Number(data.intuicao),
        investigacao: Number(data.investigacao),
        luta: Number(data.luta),
        medicina: Number(data.medicina),
        ocultismo: Number(data.ocultismo),
        percepcao: Number(data.percepcao),
        pilotagem: Number(data.pilotagem),
        pontaria: Number(data.pontaria),
        profissao: Number(data.profissao),
        reflexo: Number(data.reflexo),
        religiao: Number(data.religiao),
        sobrevivencia: Number(data.sobrevivencia),
        tatica: Number(data.tatica),
        tecnologia: Number(data.tecnologia),
        vontade: Number(data.vontade),

        passiva: Number(data.passiva),
        bloqueio: Number(data.bloqueio),
        esquiva: Number(data.esquiva),
        fisica: Number(data.fisica),
        balistica: Number(data.balistica),
        corte: Number(data.corte),
        impacto: Number(data.impacto),
        perfuracao: Number(data.perfuracao),
        eletricidade: Number(data.eletricidade),
        fogo: Number(data.fogo),
        frio: Number(data.frio),
        quimica: Number(data.quimica),
        mental: Number(data.mental),
        morte: Number(data.morte),
        conhecimento: Number(data.conhecimento),
        sangue: Number(data.sangue),
        energia: Number(data.energia),

        inventario: data.inventario,
        habilidades: data.habilidades,
        detalhes: data.detalhes,
        sessaoId: data.sessaoId

      })

      atualizar((prev) => [...prev, response.data])

    } catch (e) { console.log(e) }

  }

  async function handleDelete() {

    if (window.confirm('Tem certeza que deseja excluir este NPC? Uma vez deletado jamais poderá ser recuperado!'))

      try {

        const listaAtt = lista.filter(npc => npc.id != data.id)

        atualizar(listaAtt)

        await api.delete(`/fichas/npcmonstro/${data.id}`)

      } catch (e) { }

  }

  async function handleEdit() {

    try {

      await api.put(`/fichas/npcmonstro/status/${data.id}`, {
        pv: Number(pv),
        pvMax: Number(pvMax),
      })

    } catch (e) { console.log(e) }

  }

  useEffect(() => {

    if (pv == data.pv && pvMax == data.pvMax) {

    } else {

      handleEdit()

    }

  }, [pv, pvMax])

  useEffect(() => {

    if (pv > data.pvMax) {
      setPv(data.pvMax)
      setPvMax(data.pvMax)
    } else {
      setPvMax(data.pvMax)
    }

  }, [data.pv, data.pvMax])

  useEffect(() => {

    let varDefesas = []
    let varRes = []
    let varPericias = []

    if (data) {

      for (const [key, value] of Object.entries(data)) {
        if (key == 'passiva' || key == 'esquiva' || key == 'bloqueio') {
          if (value != null && value != 0) {
            const novaDefesa = { nome: key, valor: value }
            varDefesas.push(novaDefesa)
          }
        } else if (key == 'mental' || key == 'morte' || key == 'conhecimento' || key == 'sangue' || key == 'energia' || key == 'fisica'
          || key == 'balistica' || key == 'corte' || key == 'impacto' || key == 'perfuracao' || key == 'eletricidade' || key == 'fogo'
          || key == 'frio' || key == 'quimica') {
          if (value != null && value != 0) {
            const novaRes = { nome: key, valor: value }
            varRes.push(novaRes)
          }
        } else if (key == 'acrobacia' || key == 'adestramento' || key == 'arte' || key == 'atletismo' || key == 'atualidade' || key == 'ciencia'
          || key == 'crime' || key == 'diplomacia' || key == 'enganacao' || key == 'fortitude' || key == 'furtividade' || key == 'iniciativa'
          || key == 'intimidacao' || key == 'intuicao' || key == 'investigacao' || key == 'luta' || key == 'medicina' || key == 'ocultismo'
          || key == 'percepcao' || key == 'pilotagem' || key == 'pontaria' || key == 'profissao' || key == 'reflexo' || key == 'religiao'
          || key == 'sobrevivencia' || key == 'tatica' || key == 'tecnologia' || key == 'vontade') {
          if (value != null && value != 0) {

            let atributoChave = ''

            const mapeamento = {
              adestramento: data.pre,
              arte: data.pre,
              diplomacia: data.pre,
              enganacao: data.pre,
              intimidacao: data.pre,
              percepcao: data.pre,
              religiao: data.pre,
              vontade: data.pre,
              acrobacia: data.agi,
              crime: data.agi,
              furtividade: data.agi,
              pilotagem: data.agi,
              pontaria: data.agi,
              reflexo: data.agi,
              atletismo: data.for,
              luta: data.for,
              atualidade: data.int,
              ciencia: data.int,
              intuicao: data.int,
              investigacao: data.int,
              medicina: data.int,
              ocultismo: data.int,
              profissao: data.int,
              sobrevivencia: data.int,
              tatica: data.int,
              tecnologia: data.int,
              fortitude: data.vig,
              iniciativa: data.agi
            }

            atributoChave = mapeamento[key]
            const novaPericia = { nome: key, atributoChave, valor: value }
            varPericias.push(novaPericia)
          }
        }
      }

    }

    setDefesas(varDefesas)
    setRes(varRes)
    setPericias(varPericias)

  }, [data.acrobacia, data.adestramento, data.arte, data.atletismo, data.atualidade, data.ciencia, data.crime, data.diplomacia, data.enganacao, data.fortitude, data.furtividade, data.iniciativa, data.intimidacao, data.intuicao, data.investigacao, data.luta, data.medicina, data.ocultismo, data.percepcao, data.pilotagem, data.pontaria, data.profissao, data.reflexo, data.religiao, data.sobrevivencia, data.tatica, data.tecnologia, data.vontade, data.passiva, data.bloqueio, data.esquiva, data.fisica, data.balistica, data.corte, data.impacto, data.perfuracao, data.eletricidade, data.fogo, data.frio, data.quimica, data.mental, data.morte, data.conhecimento, data.sangue, data.energia])

  return (
    <Container>

      <Modal isOpen={modalDadoRoladoIsOpen} setClose={() => setModalDadoRoladoIsOpen(false)}>
        <ModalDadoRolado setModalEditIsOpenFalse={() => setModalDadoRoladoIsOpen(false)} data={dadoData} />
      </Modal>

      <Modal isOpen={modalEditIsOpen} setClose={() => setModalEditIsOpen(false)}>
        <ModalEditMonstro setModalEditNPCOpenIsFalse={() => setModalEditIsOpen(false)} data={data} />
      </Modal>

      <Header>

        {/* <ButtonIcon color={'aqua'} onClick={handleDuplicate} ><FaRegCopy size={20} color={'aqua'} /></ButtonIcon> */}
        <ButtonDelete size={20} onClick={handleDelete} />
        <h1>{data.nome}</h1>
        <ButtonEdit onClick={() => setModalEditIsOpen(true)} />

      </Header>

      <hr />

      <Select>
        <Button onClick={() => setBody('principal')} active={body == 'principal'}>Principal</Button>
        <Button onClick={() => setBody('dados')} active={body == 'dados'}>Dados</Button>
        <Button onClick={() => setBody('outros')} active={body == 'outros'}>Outros</Button>
      </Select>

      <hr />



      {body == 'principal' && <>

        <BodyContainerPrincipal>

          <Card>

            <label>NEX:</label>
            <span>{data.nex}</span>

          </Card>

          <Card>

            <label>Deslocamento:</label>
            <span>{data.deslocamento}</span>

          </Card>

        </BodyContainerPrincipal>

        <BodyContainerStatus>

          <h3>Vida</h3>

          <Barrinha barrinhaId={data.id} data={data} number={1} color={'red'} valorA={pv} setValorA={setPv} valorMax={pvMax} setValorMax={setPvMax} />

          {defesas.length > 0 && <>

            <h4>Defesas</h4>
            <FlexStatus>
              {defesas.map(defesa => <Status key={defesa.nome}><label>{defesa.nome}: </label><span>{defesa.valor}</span></Status>)}
            </FlexStatus>

          </>}

          {res.length > 0 && <>

            <h4>Resistências</h4>
            <FlexStatus>
              {res.map(resistencia => <Status key={resistencia.nome}><label>{resistenciasmapper(resistencia.nome)}: </label><span>{resistencia.valor}</span></Status>)}
            </FlexStatus>

          </>}

        </BodyContainerStatus>

      </>}

      {body == 'dados' &&

        <BodyContainerDados>

          <h5>Atributos</h5>

          <FlexStatus>
            <button onClick={() => { setModalDadoRoladoIsOpen(true); setDadoData({ nome: 'AGI', nomeNPC: data.nome, valor: `${data.agi}d20`, isDano: false }) }}>AGI: {data.agi}</button>
            <button onClick={() => { setModalDadoRoladoIsOpen(true); setDadoData({ nome: 'INT', nomeNPC: data.nome, valor: `${data.int}d20`, isDano: false }) }}>INT: {data.int}</button>
            <button onClick={() => { setModalDadoRoladoIsOpen(true); setDadoData({ nome: 'VIG', nomeNPC: data.nome, valor: `${data.vig}d20`, isDano: false }) }}>VIG: {data.vig}</button>
            <button onClick={() => { setModalDadoRoladoIsOpen(true); setDadoData({ nome: 'PRE', nomeNPC: data.nome, valor: `${data.pre}d20`, isDano: false }) }}>PRE: {data.pre}</button>
            <button onClick={() => { setModalDadoRoladoIsOpen(true); setDadoData({ nome: 'FOR', nomeNPC: data.nome, valor: `${data.for}d20`, isDano: false }) }}>FOR: {data.for}</button>
          </FlexStatus>

          {pericias.length > 0 && <>

            <h4>Perícias</h4>
            <FlexStatus>
              {pericias.map(pericia => <Pericia onClick={() => { setModalDadoRoladoIsOpen(true); setDadoData({ nome: periciasmapper(pericia.nome), nomeNPC: data.nome, valor: `${pericia.atributoChave}d20+${pericia.valor}`, isDano: false }) }} key={pericia.nome}>{periciasmapper(pericia.nome)}: {pericia.valor}</Pericia>)}
            </FlexStatus>

          </>}

        </BodyContainerDados>

      }

      {body == 'outros' &&

        <BodyContainerOutros>

          <h2>Ataques</h2>

          <TextArea defaultValue={data.ataques} disabled={true} />

          <h2>Habilidades</h2>

          <TextArea disabled={true} defaultValue={data.habilidades} />

          <h2>Detalhes</h2>

          <TextArea disabled={true} defaultValue={data.detalhes} />

        </BodyContainerOutros>

      }

    </Container >
  );
}