import { useState } from 'react';
import { Input } from '../../../../../../components/Input';
import { Select } from '../../../../../../components/Select';
import { Container, Footer, SelectDiv, ButtonSelect, Grid, Grid2, Normal, Grid3, Body, Header } from './styles';
import { toast } from 'react-toastify'
import { api } from '../../../../../../services/api';
import { useParams } from 'react-router-dom';
import { TextArea } from '../../../../../../components/TextArea';
import { Toggle } from '../../../../../../components/Toggle';
import origens from '../../../../../../components/mappers/origens';
import { AtributoInput } from '../../../../../../components/AtributoInput';
import {useAuth} from '../../../../../../hooks/useAuth'

export function ModalAdd({ setModalClose, setFichasNPC, setFichasNPCMonstro, setFichasNPCPrincipal }) {

  const [body, setBody] = useState('principal')

  const [nome, setNome] = useState(null)
  const [idade, setIdade] = useState(0)
  const [nacionalidade, setNacionalidade] = useState(null)
  const [origem, setOrigem] = useState(null)
  const [nex, setNex] = useState(0)
  const [classe, setClasse] = useState('Mundano')
  const [trilha, setTrilha] = useState(null)
  const [patente, setPatente] = useState('Nenhuma')

  const [pv, setPv] = useState(1)
  const [ps, setPs] = useState(1)
  const [pe, setPe] = useState(1)

  const [agi, setAgi] = useState(1)
  const [int, setInt] = useState(1)
  const [vig, setVig] = useState(1)
  const [pre, setPre] = useState(1)
  const [forca, setFor] = useState(1)

  const [acrobacia, setAcrobacia] = useState(0)
  const [adestramento, setAdestramento] = useState(0)
  const [arte, setArte] = useState(0)
  const [atletismo, setAtletismo] = useState(0)
  const [atualidade, setAtualidade] = useState(0)
  const [ciencia, setCiencia] = useState(0)
  const [crime, setCrime] = useState(0)
  const [diplomacia, setDiplomacia] = useState(0)
  const [enganacao, setEnganacao] = useState(0)
  const [fortitude, setFortitude] = useState(0)
  const [furtividade, setFurtividade] = useState(0)
  const [iniciativa, setIniciativa] = useState(0)
  const [intimidacao, setIntimidacao] = useState(0)
  const [intuicao, setIntuicao] = useState(0)
  const [investigacao, setInvestigacao] = useState(0)
  const [luta, setLuta] = useState(0)
  const [medicina, setMedicina] = useState(0)
  const [ocultismo, setOcultismo] = useState(0)
  const [percepcao, setPercepcao] = useState(0)
  const [pilotagem, setPilotagem] = useState(0)
  const [pontaria, setPontaria] = useState(0)
  const [profissao, setProfissao] = useState(0)
  const [reflexo, setReflexo] = useState(0)
  const [religiao, setReligiao] = useState(0)
  const [sobrevivencia, setSobrevivencia] = useState(0)
  const [sorte, setSorte] = useState(0)
  const [tatica, setTatica] = useState(0)
  const [tecnologia, setTecnologia] = useState(0)
  const [vontade, setVontade] = useState(0)

  const [passiva, setPassiva] = useState(0)
  const [bloqueio, setBloqueio] = useState(0)
  const [esquiva, setEsquiva] = useState(0)

  const [fisica, setFisica] = useState(0)
  const [balistica, setBalistica] = useState(0)
  const [corte, setCorte] = useState(0)
  const [impacto, setImpacto] = useState(0)
  const [perfuracao, setPerfuracao] = useState(0)
  const [eletricidade, setEletricidade] = useState(0)
  const [fogo, setFogo] = useState(0)
  const [frio, setFrio] = useState(0)
  const [quimica, setQuimica] = useState(0)

  const [mental, setMental] = useState(0)
  const [morte, setMorte] = useState(0)
  const [conhecimento, setConhecimento] = useState(0)
  const [sangue, setSangue] = useState(0)
  const [energia, setEnergia] = useState(0)

  const [inventario, setInventario] = useState('')
  const [ataques, setAtaques] = useState('')
  const [habilidades, setHabilidades] = useState('')
  const [detalhes, setDetalhes] = useState('')

  const [monstro, setMonstro] = useState(false)
  const [principal, setPrincipal] = useState(false)

  const {user} = useAuth()

  const { id } = useParams()

  async function handleCreate(e) {

    e.preventDefault()

    try {

      if (!monstro && !principal) {

        const response = await api.post(`fichas/npc/`, {

          nome,
          idade: Number(idade),
          nacionalidade,
          origem,
          nex: Number(nex),
          classe,
          trilha,
          patente,

          pvMax: Number(pv),
          psMax: Number(ps),
          peMax: Number(pe),

          agi: Number(agi),
          int: Number(int),
          vig: Number(vig),
          pre: Number(pre),
          forca: Number(forca),

          acrobacia: Number(acrobacia),
          adestramento: Number(adestramento),
          arte: Number(arte),
          atletismo: Number(atletismo),
          atualidade: Number(atualidade),
          ciencia: Number(ciencia),
          crime: Number(crime),
          diplomacia: Number(diplomacia),
          enganacao: Number(enganacao),
          fortitude: Number(fortitude),
          furtividade: Number(furtividade),
          iniciativa: Number(iniciativa),
          intimidacao: Number(intimidacao),
          intuicao: Number(intuicao),
          investigacao: Number(investigacao),
          luta: Number(luta),
          medicina: Number(medicina),
          ocultismo: Number(ocultismo),
          percepcao: Number(percepcao),
          pilotagem: Number(pilotagem),
          pontaria: Number(pontaria),
          profissao: Number(profissao),
          reflexo: Number(reflexo),
          religiao: Number(religiao),
          sobrevivencia: Number(sobrevivencia),
          sorte: Number(sorte),
          tatica: Number(tatica),
          tecnologia: Number(tecnologia),
          vontade: Number(vontade),

          passiva: Number(passiva),
          bloqueio: Number(bloqueio),
          esquiva: Number(esquiva),
          fisica: Number(fisica),
          balistica: Number(balistica),
          corte: Number(corte),
          impacto: Number(impacto),
          perfuracao: Number(perfuracao),
          eletricidade: Number(eletricidade),
          fogo: Number(fogo),
          frio: Number(frio),
          quimica: Number(quimica),
          mental: Number(mental),
          morte: Number(morte),
          conhecimento: Number(conhecimento),
          sangue: Number(sangue),
          energia: Number(energia),

          ataques,
          inventario,
          habilidades,
          detalhes,
          sessaoId: id

        })

        setFichasNPC((prev) => [...prev, response.data])

      } else if (monstro) {

        const response = await api.post(`fichas/npcmonstro/`, {

          nome,
          nex: Number(nex),

          pvMax: Number(pv),

          agi: Number(agi),
          int: Number(int),
          vig: Number(vig),
          pre: Number(pre),
          forca: Number(forca),

          acrobacia: Number(acrobacia),
          adestramento: Number(adestramento),
          arte: Number(arte),
          atletismo: Number(atletismo),
          atualidade: Number(atualidade),
          ciencia: Number(ciencia),
          crime: Number(crime),
          diplomacia: Number(diplomacia),
          enganacao: Number(enganacao),
          fortitude: Number(fortitude),
          furtividade: Number(furtividade),
          iniciativa: Number(iniciativa),
          intimidacao: Number(intimidacao),
          intuicao: Number(intuicao),
          investigacao: Number(investigacao),
          luta: Number(luta),
          medicina: Number(medicina),
          ocultismo: Number(ocultismo),
          percepcao: Number(percepcao),
          pilotagem: Number(pilotagem),
          pontaria: Number(pontaria),
          profissao: Number(profissao),
          reflexo: Number(reflexo),
          religiao: Number(religiao),
          sobrevivencia: Number(sobrevivencia),
          sorte: Number(sorte),
          tatica: Number(tatica),
          tecnologia: Number(tecnologia),
          vontade: Number(vontade),

          passiva: Number(passiva),
          fisica: Number(fisica),
          balistica: Number(balistica),
          corte: Number(corte),
          impacto: Number(impacto),
          perfuracao: Number(perfuracao),
          eletricidade: Number(eletricidade),
          fogo: Number(fogo),
          frio: Number(frio),
          quimica: Number(quimica),
          mental: Number(mental),
          morte: Number(morte),
          conhecimento: Number(conhecimento),
          sangue: Number(sangue),
          energia: Number(energia),

          ataques,
          habilidades,
          detalhes,
          sessaoId: id

        })

        setFichasNPCMonstro((prev) => [...prev, response.data])

      } else if (principal) {

        const response = await api.post(`/fichas/npcprincipal`, {
          userId: user.id,
          sessaoId: id,

          nome,
          idade: Number(idade),
          jogador: `${user.nome} - Mestre`,
          nacionalidade,
          origem,
          nex: Number(nex),
          classe,
          trilha,
          patente,

          agi: Number(agi),
          int: Number(int),
          vig: Number(vig),
          pre: Number(pre),
          forca: Number(forca),

          pvMax: Number(pv),
          sanMax: Number(ps),
          peMax: Number(pe),
        })

        const origemAutomatico = origens(origem)

        if (origemAutomatico != undefined) {

          await api.put(`/fichas/pericias/${response.data.ficha.id}`, {
            [origemAutomatico.pericia1]: 5,
            [origemAutomatico.pericia2]: 5
          })

          await api.post(`/fichas/habilidade`, {
            nome: origemAutomatico.nome,
            descricao: origemAutomatico.desc,
            fichaId: response.data.ficha.id
          })

        }

        const data = response.data

        setFichasNPCPrincipal((prev) => [...prev, {
          ...data.ficha,
          Atributos: [data.atributos],
          Defesas: [data.defesas],
          Pericias: [data.pericias],
          Principal: [data.principal],
          Status: [data.status],
          Armas: [],
          Itens: []
        }])

      }

      toast.success('Ficha criada com sucesso!')
      setModalClose()

    } catch (erro) {
      console.log(erro)
      toast.error(erro.response.data.msg)
    }

  }

  return (
    <Container>
      <form onSubmit={handleCreate}>

        <Header>
          <h1>Criar NPC</h1>
          <button type="button" onClick={setModalClose}>x</button>
        </Header>

        <hr />

        <SelectDiv>

          <ButtonSelect type='button' active={body == 'principal'} onClick={() => setBody('principal')}>Principal</ButtonSelect>
          <ButtonSelect type='button' active={body == 'atributos'} onClick={() => setBody('atributos')}>Atributos</ButtonSelect>
          {!principal && <ButtonSelect type='button' active={body == 'pericias'} onClick={() => setBody('pericias')}>Perícias</ButtonSelect>}
          {!principal && <ButtonSelect type='button' active={body == 'defesas'} onClick={() => setBody('defesas')}>Defesas</ButtonSelect>}
          {!principal && <ButtonSelect type='button' active={body == 'outros'} onClick={() => setBody('outros')}>Outros</ButtonSelect>}

        </SelectDiv>

        <hr />

        <Body>

          {body == 'principal' && <>

            <Grid>

              <Input required maxLength={30} label={'Nome'} valor={nome} setValor={setNome} />
              {monstro && <Input required type='number' maxValor={99} maxLength={2} label={'NEX'} valor={nex} setValor={setNex} />}
              {!monstro && <>
                <Input required type='number' maxValor={99} maxLength={2} label={'Idade'} valor={idade} setValor={setIdade} />
                <Input required maxLength={20} label={'Nacionalidade'} valor={nacionalidade} setValor={setNacionalidade} />
                <Input required list={'listaOrigens'} maxLength={22} label={'Origem'} valor={origem} setValor={setOrigem} />
                <datalist id="listaOrigens"><option value="Acadêmico" /><option value="Agente de Saúde" /><option value="Amnésico" /><option value="Artista" /><option value="Atleta" /><option value="Chef" /><option value="Crimisoso" /><option value="Cultista Arrependido" /><option value="Desgarrado" /><option value="Engenheiro" /><option value="Executivo" /><option value="Investigador" /><option value="Lutador" /><option value="Magnata" /><option value="Mercenário" /><option value="Militar" /><option value="Operário" /><option value="Policial" /><option value="Religioso" /><option value="Sevidor Público" /><option value="Teórico da Conspiração" /><option value="T.I." /><option value="Trabalhador Rural" /><option value="Trambiqueiro" /><option value="Universitário" /><option value="Vítima" />
                </datalist>
                <Input required type='number' maxValor={99} maxLength={2} label={'NEX'} valor={nex} setValor={setNex} />
                <Select label={'Classe'} valor={classe} setValor={setClasse} >
                  <option value="Mundano">Mundano</option><option value="Combatente">Combatente</option><option value="Especialista">Especialista</option><option value="Ocultista">Ocultista</option>
                </Select>
                <Input list={'listaTrilhas'} maxLength={20} label={'Trilhas'} valor={trilha} setValor={setTrilha} />
                <datalist id="listaTrilhas">

                  {classe == 'Combatente' &&

                    <><option value="Aniquilador" />
                      <option value="Comandate de campo" />
                      <option value="Guerreiro" />
                      <option value="Operaçaões especiais" />
                      <option value="Tropa de choque" /></>

                  }

                  {classe == 'Especialista' &&

                    <><option value="Atirador de elite" />
                      <option value="Infiltrador" />
                      <option value="Médico de Campo" />
                      <option value="Negociador" />
                      <option value="Técnico" /></>

                  }

                  {classe == 'Ocultista' &&

                    <><option value="Conduíte" />
                      <option value="Flagelador" />
                      <option value="Graduado" />
                      <option value="Intuitivo" />
                      <option value="Lâmina Paranormal" /></>

                  }

                </datalist>
                <Select label={'Patente'} valor={patente} setValor={setPatente} ><option value="Nenhuma">Nenhuma</option><option value="Recruta">Recruta</option><option value="Operador" >Operador</option><option value="Agente Especial" >Agente Especial</option><option value="Oficial de Operações" >Oficial de Operações</option><option value="Agente de Elite" >Agente de Elite</option>
                </Select>

              </>}

            </Grid>

            <Normal>

              <Input required type='number' maxValor={99} maxLength={2} label={'Vida Máxima (PV)'} valor={pv} setValor={setPv} />
              {!monstro && <>
                <Input required type='number' maxValor={99} maxLength={2} label={'Sanidade Máxima (SAN)'} valor={ps} setValor={setPs} />
                <Input required type='number' maxValor={99} maxLength={2} label={'Pontos de Esforço (PE)'} valor={pe} setValor={setPe} />
              </>}
              <Grid3>
                <Toggle classNumber={1} span={'Adicionar como Monstro?'} checked={monstro} onChange={() => { setPrincipal(false); setMonstro(!monstro) }} />
                <Toggle classNumber={2} span={'Adicionar como Principal?'} checked={principal} onChange={() => { setMonstro(false); setPrincipal(!principal) }} />
              </Grid3>

            </Normal>

          </>}

          {body == 'atributos' && <>

            <AtributoInput agi={agi} setAgi={setAgi} int={int} setInt={setInt} vig={vig} setVig={setVig} pre={pre} setPre={setPre} forca={forca} setFor={setFor} />

          </>}

          {(body == 'pericias' && principal != true) && <Grid2>

            <Input maxLength={2} type='number' maxValor={99} label={'Acrobacia'} valor={acrobacia} setValor={setAcrobacia} />
            <Input maxLength={2} type='number' maxValor={99} label={'Adestramento'} valor={adestramento} setValor={setAdestramento} />
            <Input maxLength={2} type='number' maxValor={99} label={'Artes'} valor={arte} setValor={setArte} />
            <Input maxLength={2} type='number' maxValor={99} label={'Atletismo'} valor={atletismo} setValor={setAtletismo} />
            <Input maxLength={2} type='number' maxValor={99} label={'Atualidade'} valor={atualidade} setValor={setAtualidade} />
            <Input maxLength={2} type='number' maxValor={99} label={'Ciências'} valor={ciencia} setValor={setCiencia} />
            <Input maxLength={2} type='number' maxValor={99} label={'Crime'} valor={crime} setValor={setCrime} />
            <Input maxLength={2} type='number' maxValor={99} label={'Diplomacia'} valor={diplomacia} setValor={setDiplomacia} />
            <Input maxLength={2} type='number' maxValor={99} label={'Enganação'} valor={enganacao} setValor={setEnganacao} />
            <Input maxLength={2} type='number' maxValor={99} label={'Fortitude'} valor={fortitude} setValor={setFortitude} />
            <Input maxLength={2} type='number' maxValor={99} label={'Furtividade'} valor={furtividade} setValor={setFurtividade} />
            <Input maxLength={2} type='number' maxValor={99} label={'Iniciativa'} valor={iniciativa} setValor={setIniciativa} />
            <Input maxLength={2} type='number' maxValor={99} label={'Intimidação'} valor={intimidacao} setValor={setIntimidacao} />
            <Input maxLength={2} type='number' maxValor={99} label={'Intuição'} valor={intuicao} setValor={setIntuicao} />
            <Input maxLength={2} type='number' maxValor={99} label={'Investigação'} valor={investigacao} setValor={setInvestigacao} />
            <Input maxLength={2} type='number' maxValor={99} label={'Luta'} valor={luta} setValor={setLuta} />
            <Input maxLength={2} type='number' maxValor={99} label={'Medicina'} valor={medicina} setValor={setMedicina} />
            <Input maxLength={2} type='number' maxValor={99} label={'Ocultismo'} valor={ocultismo} setValor={setOcultismo} />
            <Input maxLength={2} type='number' maxValor={99} label={'Percepção'} valor={percepcao} setValor={setPercepcao} />
            <Input maxLength={2} type='number' maxValor={99} label={'Pilotagem'} valor={pilotagem} setValor={setPilotagem} />
            <Input maxLength={2} type='number' maxValor={99} label={'Pontaria'} valor={pontaria} setValor={setPontaria} />
            <Input maxLength={2} type='number' maxValor={99} label={'Profissão'} valor={profissao} setValor={setProfissao} />
            <Input maxLength={2} type='number' maxValor={99} label={'Reflexos'} valor={reflexo} setValor={setReflexo} />
            <Input maxLength={2} type='number' maxValor={99} label={'Religião'} valor={religiao} setValor={setReligiao} />
            <Input maxLength={2} type='number' maxValor={99} label={'Sobrevivência'} valor={sobrevivencia} setValor={setSobrevivencia} />
            <Input maxLength={2} type='number' maxValor={99} label={'Sorte'} valor={sorte} setValor={setSorte} />
            <Input maxLength={2} type='number' maxValor={99} label={'Tática'} valor={tatica} setValor={setTatica} />
            <Input maxLength={2} type='number' maxValor={99} label={'Tecnologia'} valor={tecnologia} setValor={setTecnologia} />
            <Input maxLength={2} type='number' maxValor={99} label={'Vontade'} valor={vontade} setValor={setVontade} />

          </Grid2>}

          {(body == 'defesas' && principal != true) && <>


            <h2>Defesas</h2>

            <Grid2>

              <Input required maxLength={2} type='number' maxValor={99} label={'Passiva'} valor={passiva} setValor={setPassiva} />
              {!monstro && <>
                <Input maxLength={2} type='number' maxValor={99} label={'Esquiva'} valor={esquiva} setValor={setEsquiva} />
                <Input maxLength={2} type='number' maxValor={99} label={'Bloqueio'} valor={bloqueio} setValor={setBloqueio} />
              </>}

            </Grid2>

            <h2>Resistências Gerais</h2>

            <Grid2>

              <Input maxLength={2} type='number' maxValor={99} label={'Física'} valor={fisica} setValor={setFisica} />
              <Input maxLength={2} type='number' maxValor={99} label={'Balística'} valor={balistica} setValor={setBalistica} />
              <Input maxLength={2} type='number' maxValor={99} label={'Corte'} valor={corte} setValor={setCorte} />
              <Input maxLength={2} type='number' maxValor={99} label={'Impacto'} valor={impacto} setValor={setImpacto} />
              <Input maxLength={2} type='number' maxValor={99} label={'Perfuração'} valor={perfuracao} setValor={setPerfuracao} />
              <Input maxLength={2} type='number' maxValor={99} label={'Eletricidade'} valor={eletricidade} setValor={setEletricidade} />
              <Input maxLength={2} type='number' maxValor={99} label={'Fogo'} valor={fogo} setValor={setFogo} />
              <Input maxLength={2} type='number' maxValor={99} label={'Frio'} valor={frio} setValor={setFrio} />
              <Input maxLength={2} type='number' maxValor={99} label={'Química'} valor={quimica} setValor={setQuimica} />

            </Grid2>

            <h2>Resistências Elementares</h2>

            <Grid2>

              <Input maxLength={2} type='number' maxValor={99} label={'Mental'} valor={mental} setValor={setMental} />
              <Input maxLength={2} type='number' maxValor={99} label={'Morte'} valor={morte} setValor={setMorte} />
              <Input maxLength={2} type='number' maxValor={99} label={'Conhecimento'} valor={conhecimento} setValor={setConhecimento} />
              <Input maxLength={2} type='number' maxValor={99} label={'Sangue'} valor={sangue} setValor={setSangue} />
              <Input maxLength={2} type='number' maxValor={99} label={'Energia'} valor={energia} setValor={setEnergia} />

            </Grid2>

          </>}

          {(body == 'outros' && principal != true) && <>

            {!monstro && <TextArea maxLength={500} label={'Inventário'} valor={inventario} setValor={setInventario} />}
            <TextArea maxLength={500} label={'Ataques'} valor={ataques} setValor={setAtaques} />
            <TextArea maxLength={500} label={'Habilidades'} valor={habilidades} setValor={setHabilidades} />
            <TextArea maxLength={500} label={'Detalhes'} valor={detalhes} setValor={setDetalhes} />

          </>}

        </Body>

        <hr />

        <Footer>

          <button type="submit">Criar</button>

        </Footer>

      </form>

    </Container>
  );
}