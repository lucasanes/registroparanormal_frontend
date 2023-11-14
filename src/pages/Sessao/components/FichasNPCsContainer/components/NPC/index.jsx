import { useState } from 'react';
import { useEffect } from 'react';
import { ButtonDelete } from '../../../../../../components/ButtonDelete';
import { ButtonEdit } from '../../../../../../components/ButtonEdit';
import { ModalDadoRolado } from '../../../../../../components/ModalDadoRolado';
import { Modal } from '../../../../../../components/Modals/Modal';
import { api } from '../../../../../../services/api';
import { Barrinha } from '../Barrinha';
import { ModalEditNPC } from '../ModalEditNPC';
import periciasmapper from '../../../../../../components/mappers/pericias';
import resistenciasmapper from '../../../../../../components/mappers/resistencias';
import { Container, Header, Select, Button, BodyContainerPrincipal, BodyContainerOutros, Card, TextArea, BodyContainerStatus, FlexStatus, Status, BodyContainerDados, Pericia } from './styles';

export function NPC({ data, lista, atualizar }) {

  const [body, setBody] = useState('status')

  const [modalDadoRoladoIsOpen, setModalDadoRoladoIsOpen] = useState(false)
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false)

  const [dadoData, setDadoData] = useState({
    nome: '',
    valor: '',
    isValor: false
  })

  const [pv, setPv] = useState(data.pv)
  const [pvMax, setPvMax] = useState(data.pvMax)

  const [ps, setPs] = useState(data.ps)
  const [psMax, setPsMax] = useState(data.psMax)

  const [pe, setPe] = useState(data.pe)
  const [peMax, setPeMax] = useState(data.peMax)

  const [defesas, setDefesas] = useState([])
  const [res, setRes] = useState([])
  const [pericias, setPericias] = useState([])

  const [changinTimer, setChanginTimer] = useState(null)

  async function handleDelete() {

    try {

      const listaAtt = lista.filter(npc => npc.id != data.id)

      atualizar(listaAtt)

      await api.delete(`/fichas/npc/${data.id}`)

    } catch (e) { }

  }

  async function handleEdit() {

    try {

      const response = await api.put(`/fichas/npc/status/${data.id}`, {
        pv,
        ps,
        pe,
        pvMax,
        psMax,
        peMax
      })

    } catch (e) { console.log(e) }

  }

  function subtimer() {
    clearTimeout(changinTimer)
    setChanginTimer(setTimeout(handleEdit, 2000))
  }

  useEffect(() => {

    if (pvMax != 0) {
      subtimer()
    }

  }, [pv, pvMax, ps, psMax, pe, peMax])

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
          || key == 'sobrevivencia' || key == 'sorte' || key == 'tatica' || key == 'tecnologia' || key == 'vontade') {
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
              sorte: data.pre,
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

  }, [data.acrobacia, data.adestramento, data.arte, data.atletismo, data.atualidade, data.ciencia, data.crime, data.diplomacia, data.enganacao, data.fortitude, data.furtividade, data.iniciativa, data.intimidacao, data.intuicao, data.investigacao, data.luta, data.medicina, data.ocultismo, data.percepcao, data.pilotagem, data.pontaria, data.profissao, data.reflexo, data.religiao, data.sobrevivencia, data.sorte, data.tatica, data.tecnologia, data.vontade, data.passiva, data.bloqueio, data.esquiva, data.fisica, data.balistica, data.corte, data.impacto, data.perfuracao, data.eletricidade, data.fogo, data.frio, data.quimica, data.mental, data.morte, data.conhecimento, data.sangue, data.energia])

  return (
    <Container>

      <Modal isOpen={modalDadoRoladoIsOpen} setClose={() => setModalDadoRoladoIsOpen(false)}>
        <ModalDadoRolado setModalClose={() => setModalDadoRoladoIsOpen(false)} data={dadoData} />
      </Modal>

      <Modal isOpen={modalEditIsOpen} setClose={() => setModalEditIsOpen(false)}>
        <ModalEditNPC setModalClose={() => setModalEditIsOpen(false)} data={data} />
      </Modal>

      <Header>

        <ButtonDelete size={20} onClick={handleDelete} />
        <h1>{data.nome}</h1>
        <ButtonEdit onClick={() => setModalEditIsOpen(true)} />

      </Header>

      <hr />

      <Select>
        <Button onClick={() => setBody('principal')} active={body == 'principal'}>Principal</Button>
        <Button onClick={() => setBody('status')} active={body == 'status'}>Status</Button>
        <Button onClick={() => setBody('dados')} active={body == 'dados'}>Dados</Button>
        <Button onClick={() => setBody('outros')} active={body == 'outros'}>Outros</Button>
      </Select>

      <hr />



      {body == 'principal' &&

        <BodyContainerPrincipal>

          <Card>

            <label>Nacionalidade:</label>
            <span>{data.nacionalidade}</span>

          </Card>

          <Card>

            <label>Idade:</label>
            <span>{data.idade}</span>

          </Card>

          <Card>

            <label>Origem:</label>
            <span>{data.origem}</span>

          </Card>

          <Card>

            <label>Deslocamento:</label>
            <span>{data.deslocamento}</span>

          </Card>

          <Card>

            <label>NEX:</label>
            <span>{data.nex}</span>

          </Card>

          <Card>

            <label>Classe:</label>
            <span>{data.classe}</span>

          </Card>

          {((data.trilha != 'Nenhuma' && data.trilha != null) || (data.patente != 'Nenhuma' && data.patente != null)) && <>

            <Card>

              <label>Trilha:</label>
              <span>{data.trilha}</span>

            </Card>

            <Card>

              <label>Patente:</label>
              <span>{data.patente}</span>

            </Card>

          </>}

        </BodyContainerPrincipal>

      }

      {body == 'status' &&

        <BodyContainerStatus>

          <h3>Vida</h3>

          <Barrinha data={data} barrinhaId={data.id} number={1} color={'red'} valorA={pv} setValorA={setPv} valorMax={pvMax} setValorMax={setPvMax} />

          <h3>Sanidade</h3>

          <Barrinha data={data} barrinhaId={data.id} number={2} color={'aqua'} valorA={ps} setValorA={setPs} valorMax={psMax} setValorMax={setPsMax} />

          <h3>Esforço</h3>

          <Barrinha data={data} barrinhaId={data.id} number={3} color={'yellow'} valorA={pe} setValorA={setPe} valorMax={peMax} setValorMax={setPeMax} />

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

      }

      {body == 'dados' &&

        <BodyContainerDados>

          <h5>Atributos</h5>

          <FlexStatus>
            <button onClick={() => { setModalDadoRoladoIsOpen(true); setDadoData({ nome: 'Agilidade', nomeNPC: data.nome, valor: `${data.agi}d20`, isDano: false }) }}>AGI: {data.agi}</button>
            <button onClick={() => { setModalDadoRoladoIsOpen(true); setDadoData({ nome: 'Intelecto', nomeNPC: data.nome, valor: `${data.int}d20`, isDano: false }) }}>INT: {data.int}</button>
            <button onClick={() => { setModalDadoRoladoIsOpen(true); setDadoData({ nome: 'Vigor', nomeNPC: data.nome, valor: `${data.vig}d20`, isDano: false }) }}>VIG: {data.vig}</button>
            <button onClick={() => { setModalDadoRoladoIsOpen(true); setDadoData({ nome: 'Presença', nomeNPC: data.nome, valor: `${data.pre}d20`, isDano: false }) }}>PRE: {data.pre}</button>
            <button onClick={() => { setModalDadoRoladoIsOpen(true); setDadoData({ nome: 'Força', nomeNPC: data.nome, valor: `${data.for}d20`, isDano: false }) }}>FOR: {data.for}</button>
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

          <h2>Inventário</h2>

          <TextArea defaultValue={data.inventario} disabled={true} />

          <h2>Ataques</h2>

          <TextArea defaultValue={data.ataques} disabled={true} />

          <h2>Habilidades</h2>

          <TextArea disabled={true} defaultValue={data.habilidades} />

          <h2>Detalhes</h2>

          <TextArea disabled={true} defaultValue={data.detalhes} />

          <h3>Peso: {data.peso}</h3>

        </BodyContainerOutros>

      }

    </Container >
  );
}