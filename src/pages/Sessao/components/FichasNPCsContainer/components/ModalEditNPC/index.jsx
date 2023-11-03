import { useState } from 'react';
import { Input } from '../../../../../../components/Input';
import { Select } from '../../../../../../components/Select';
import { Container, Footer, Button, SelectDiv, ButtonSelect, Grid, Grid2, Normal, HrFooter, Body } from './styles';
import { toast } from 'react-toastify'
import { api } from '../../../../../../services/api';
import { useParams } from 'react-router-dom';
import { TextArea } from '../../../../../../components/TextArea';
import { AtributoInput } from '../../../../../../components/AtributoInput';

export function ModalEditNPC({ setModalEditNPCOpenIsFalse, data }) {

  const [body, setBody] = useState('principal')

  const [nome, setNome] = useState(data.nome)
  const [idade, setIdade] = useState(data.idade)
  const [nacionalidade, setNacionalidade] = useState(data.nacionalidade)
  const [origem, setOrigem] = useState(data.origem)
  const [nex, setNex] = useState(data.nex)
  const [classe, setClasse] = useState(data.classe)
  const [trilha, setTrilha] = useState(data.trilha)
  const [patente, setPatente] = useState(data.patente)
  const [deslocamento, setDeslocamento] = useState(data.deslocamento)
  const [peso, setPeso] = useState(data.peso)

  const [pv, setPv] = useState(data.pv)
  const [ps, setPs] = useState(data.ps)
  const [pe, setPe] = useState(data.pe)

  const [agi, setAgi] = useState(data.agi)
  const [int, setInt] = useState(data.int)
  const [vig, setVig] = useState(data.vig)
  const [pre, setPre] = useState(data.pre)
  const [forca, setFor] = useState(data.for)

  const [acrobacia, setAcrobacia] = useState(data.acrobacia)
  const [adestramento, setAdestramento] = useState(data.adestramento)
  const [arte, setArte] = useState(data.arte)
  const [atletismo, setAtletismo] = useState(data.atletismo)
  const [atualidade, setAtualidade] = useState(data.atualidade)
  const [ciencia, setCiencia] = useState(data.ciencia)
  const [crime, setCrime] = useState(data.crime)
  const [diplomacia, setDiplomacia] = useState(data.diplomacia)
  const [enganacao, setEnganacao] = useState(data.enganacao)
  const [fortitude, setFortitude] = useState(data.fortitude)
  const [furtividade, setFurtividade] = useState(data.furtividade)
  const [iniciativa, setIniciativa] = useState(data.iniciativa)
  const [intimidacao, setIntimidacao] = useState(data.intimidacao)
  const [intuicao, setIntuicao] = useState(data.intuicao)
  const [investigacao, setInvestigacao] = useState(data.investigacao)
  const [luta, setLuta] = useState(data.luta)
  const [medicina, setMedicina] = useState(data.medicina)
  const [ocultismo, setOcultismo] = useState(data.ocultismo)
  const [percepcao, setPercepcao] = useState(data.percepcao)
  const [pilotagem, setPilotagem] = useState(data.pilotagem)
  const [pontaria, setPontaria] = useState(data.pontaria)
  const [profissao, setProfissao] = useState(data.profissao)
  const [reflexo, setReflexo] = useState(data.reflexo)
  const [religiao, setReligiao] = useState(data.religiao)
  const [sobrevivencia, setSobrevivencia] = useState(data.sobrevivencia)
  const [tatica, setTatica] = useState(data.tatica)
  const [tecnologia, setTecnologia] = useState(data.tecnologia)
  const [vontade, setVontade] = useState(data.vontade)

  const [passiva, setPassiva] = useState(data.passiva)
  const [bloqueio, setBloqueio] = useState(data.bloqueio)
  const [esquiva, setEsquiva] = useState(data.esquiva)

  const [fisica, setFisica] = useState(data.fisica)
  const [balistica, setBalistica] = useState(data.balistica)
  const [corte, setCorte] = useState(data.corte)
  const [impacto, setImpacto] = useState(data.impacto)
  const [perfuracao, setPerfuracao] = useState(data.perfuracao)
  const [eletricidade, setEletricidade] = useState(data.eletricidade)
  const [fogo, setFogo] = useState(data.fogo)
  const [frio, setFrio] = useState(data.frio)
  const [quimica, setQuimica] = useState(data.quimica)

  const [mental, setMental] = useState(data.mental)
  const [morte, setMorte] = useState(data.morte)
  const [conhecimento, setConhecimento] = useState(data.conhecimento)
  const [sangue, setSangue] = useState(data.sangue)
  const [energia, setEnergia] = useState(data.energia)

  const [inventario, setInventario] = useState(data.inventario)
  const [ataques, setAtaques] = useState(data.ataques)
  const [habilidades, setHabilidades] = useState(data.habilidades)
  const [detalhes, setDetalhes] = useState(data.detalhes)

  const { id } = useParams()

  async function handleEdit() {

    try {

      const response = await api.put(`/fichas/npc/${data.id}`, {

        nome,
        idade: Number(idade),
        nacionalidade,
        deslocamento,
        peso,
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

        inventario,
        ataques,
        habilidades,
        detalhes,

      })

      data.nome = nome
      data.idade = idade
      data.nacionalidade = nacionalidade
      data.origem = origem
      data.nex = nex
      data.classe = classe
      data.trilha = trilha
      data.patente = patente
      data.deslocamento = deslocamento
      data.peso = peso
      data.pv = pv
      data.ps = ps
      data.pe = pe
      data.agi = agi
      data.int = int
      data.vig = vig
      data.pre = pre
      data.forca = forca
      data.acrobacia = acrobacia
      data.adestramento = adestramento
      data.arte = arte
      data.atletismo = atletismo
      data.atualidade = atualidade
      data.ciencia = ciencia
      data.crime = crime
      data.diplomacia = diplomacia
      data.enganacao = enganacao
      data.fortitude = fortitude
      data.furtividade = furtividade
      data.iniciativa = iniciativa
      data.intimidacao = intimidacao
      data.intuicao = intuicao
      data.investigacao = investigacao
      data.luta = luta
      data.medicina = medicina
      data.ocultismo = ocultismo
      data.percepcao = percepcao
      data.pilotagem = pilotagem
      data.pontaria = pontaria
      data.profissao = profissao
      data.reflexo = reflexo
      data.religiao = religiao
      data.sobrevivencia = sobrevivencia
      data.tatica = tatica
      data.tecnologia = tecnologia
      data.vontade = vontade
      data.passiva = passiva
      data.bloqueio = bloqueio
      data.esquiva = esquiva
      data.fisica = fisica
      data.balistica = balistica
      data.corte = corte
      data.impacto = impacto
      data.perfuracao = perfuracao
      data.eletricidade = eletricidade
      data.fogo = fogo
      data.frio = frio
      data.quimica = quimica
      data.mental = mental
      data.morte = morte
      data.conhecimento = conhecimento
      data.sangue = sangue
      data.energia = energia
      data.inventario = inventario
      data.ataques = ataques
      data.habilidades = habilidades
      data.detalhes = detalhes

      setModalEditNPCOpenIsFalse()

    } catch (erro) {
      toast.error(erro.response.data.mensagem)
    }

  }

  return (
    <Container>

      <h1>Editar NPC</h1>

      <hr />

      <SelectDiv>

        <ButtonSelect active={body == 'principal'} onClick={() => setBody('principal')}>Principal</ButtonSelect>
        <ButtonSelect active={body == 'atributos'} onClick={() => setBody('atributos')}>Atributos</ButtonSelect>
        <ButtonSelect active={body == 'pericias'} onClick={() => setBody('pericias')}>Perícias</ButtonSelect>
        <ButtonSelect active={body == 'defesas'} onClick={() => setBody('defesas')}>Defesas</ButtonSelect>
        <ButtonSelect active={body == 'outros'} onClick={() => setBody('outros')}>Outros</ButtonSelect>

      </SelectDiv>

      <hr />

      <Body>

        {body == 'principal' && <>

          <Grid>

            <Input maxLength={30} label={'Nome'} valor={nome} setValor={setNome} />
            <Input onlyNumber maxLength={2} label={'Idade'} valor={idade} setValor={setIdade} />
            <Input maxLength={20} label={'Nacionalidade'} valor={nacionalidade} setValor={setNacionalidade} />
            <Input list={'listaOrigens'} maxLength={22} label={'Origem'} valor={origem} setValor={setOrigem} />
            <datalist id="listaOrigens"><option value="Acadêmico" /><option value="Agente de Saúde" /><option value="Amnésico" /><option value="Artista" /><option value="Atleta" /><option value="Chef" /><option value="Crimisoso" /><option value="Cultusta Arrependido" /><option value="Desgarrado" /><option value="Engenheiro" /><option value="Executivo" /><option value="Investigador" /><option value="Lutador" /><option value="Magnata" /><option value="Mercenário" /><option value="Militar" /><option value="Operário" /><option value="Policial" /><option value="Religioso" /><option value="Sevidor Público" /><option value="Teórico da Conspiração" /><option value="T.I." /><option value="Trabalhador Rural" /><option value="Trambiqueiro" /><option value="Universitário" /><option value="Vítima" />
            </datalist>
            <Input onlyNumber maxLength={2} label={'NEX'} valor={nex} setValor={setNex} />
            <Select label={'Classe'} valor={classe} setValor={setClasse} defaultValor={classe} defaultValue={classe} >
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
            <Select label={'Patente'} valor={patente} setValor={setPatente} defaultValor={patente} defaultValue={patente} ><option value="Nenhuma">Nenhuma</option><option value="Recruta">Recruta</option><option value="Operador" >Operador</option><option value="Agente Especial" >Agente Especial</option><option value="Oficial de Operações" >Oficial de Operações</option><option value="Agente de Elite" >Agente de Elite</option>
            </Select>
            <Input onlyNumber maxLength={2} label={'Deslocamento'} valor={deslocamento} setValor={setDeslocamento} valorMax={12} />
            <Input onlyNumber maxLength={2} label={'Peso'} valor={peso} setValor={setPeso} valorMax={20} />

          </Grid>

        </>}

        {body == 'atributos' && <>

          <AtributoInput agi={agi} setAgi={setAgi} int={int} setInt={setInt} vig={vig} setVig={setVig} pre={pre} setPre={setPre} forca={forca} setFor={setFor} />

        </>}

        {body == 'pericias' && <Grid2>

          <Input maxLength={2} padding={'low'} onlyNumber label={'Acrobacia'} valor={acrobacia} setValor={setAcrobacia} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Adestramento'} valor={adestramento} setValor={setAdestramento} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Artes'} valor={arte} setValor={setArte} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Atletismo'} valor={atletismo} setValor={setAtletismo} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Atualidade'} valor={atualidade} setValor={setAtualidade} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Ciências'} valor={ciencia} setValor={setCiencia} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Crime'} valor={crime} setValor={setCrime} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Diplomacia'} valor={diplomacia} setValor={setDiplomacia} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Enganação'} valor={enganacao} setValor={setEnganacao} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Fortitude'} valor={fortitude} setValor={setFortitude} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Furtividade'} valor={furtividade} setValor={setFurtividade} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Iniciativa'} valor={iniciativa} setValor={setIniciativa} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Intimidação'} valor={intimidacao} setValor={setIntimidacao} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Intuição'} valor={intuicao} setValor={setIntuicao} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Investigação'} valor={investigacao} setValor={setInvestigacao} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Luta'} valor={luta} setValor={setLuta} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Medicina'} valor={medicina} setValor={setMedicina} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Ocultismo'} valor={ocultismo} setValor={setOcultismo} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Percepção'} valor={percepcao} setValor={setPercepcao} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Pilotagem'} valor={pilotagem} setValor={setPilotagem} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Pontaria'} valor={pontaria} setValor={setPontaria} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Profissão'} valor={profissao} setValor={setProfissao} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Reflexos'} valor={reflexo} setValor={setReflexo} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Religião'} valor={religiao} setValor={setReligiao} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Sobrevivência'} valor={sobrevivencia} setValor={setSobrevivencia} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Tática'} valor={tatica} setValor={setTatica} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Tecnologia'} valor={tecnologia} setValor={setTecnologia} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Vontade'} valor={vontade} setValor={setVontade} />

        </Grid2>}

        {body == 'defesas' && <>


          <h2>Defesas</h2>

          <Grid2>

            <Input maxLength={2} padding={'low'} onlyNumber label={'Passiva'} valor={passiva} setValor={setPassiva} />
            <Input maxLength={2} padding={'low'} onlyNumber label={'Esquiva'} valor={esquiva} setValor={setEsquiva} />
            <Input maxLength={2} padding={'low'} onlyNumber label={'Bloqueio'} valor={bloqueio} setValor={setBloqueio} />

          </Grid2>

          <h2>Resistências Gerais</h2>

          <Grid2>

            <Input maxLength={2} padding={'low'} onlyNumber label={'Física'} valor={fisica} setValor={setFisica} />
            <Input maxLength={2} padding={'low'} onlyNumber label={'Balística'} valor={balistica} setValor={setBalistica} />
            <Input maxLength={2} padding={'low'} onlyNumber label={'Corte'} valor={corte} setValor={setCorte} />
            <Input maxLength={2} padding={'low'} onlyNumber label={'Impacto'} valor={impacto} setValor={setImpacto} />
            <Input maxLength={2} padding={'low'} onlyNumber label={'Perfuração'} valor={perfuracao} setValor={setPerfuracao} />
            <Input maxLength={2} padding={'low'} onlyNumber label={'Eletricidade'} valor={eletricidade} setValor={setEletricidade} />
            <Input maxLength={2} padding={'low'} onlyNumber label={'Fogo'} valor={fogo} setValor={setFogo} />
            <Input maxLength={2} padding={'low'} onlyNumber label={'Frio'} valor={frio} setValor={setFrio} />
            <Input maxLength={2} padding={'low'} onlyNumber label={'Química'} valor={quimica} setValor={setQuimica} />

          </Grid2>

          <h2>Resistências Elementares</h2>

          <Grid2>

            <Input maxLength={2} padding={'low'} onlyNumber label={'Mental'} valor={mental} setValor={setMental} />
            <Input maxLength={2} padding={'low'} onlyNumber label={'Morte'} valor={morte} setValor={setMorte} />
            <Input maxLength={2} padding={'low'} onlyNumber label={'Conhecimento'} valor={conhecimento} setValor={setConhecimento} />
            <Input maxLength={2} padding={'low'} onlyNumber label={'Sangue'} valor={sangue} setValor={setSangue} />
            <Input maxLength={2} padding={'low'} onlyNumber label={'Energia'} valor={energia} setValor={setEnergia} />

          </Grid2>

        </>}

        {body == 'outros' && <>

          <TextArea label={'Inventário'} valor={inventario} setValor={setInventario} />
          <TextArea label={'Ataques'} valor={ataques} setValor={setAtaques} />
          <TextArea label={'Habilidades'} valor={habilidades} setValor={setHabilidades} />
          <TextArea label={'Detalhes'} valor={detalhes} setValor={setDetalhes} />

        </>}

      </Body>

      <HrFooter />

      <Footer>

        <Button onClick={setModalEditNPCOpenIsFalse} >Fechar</Button>
        <Button color='purple' onClick={handleEdit}>Salvar</Button>

      </Footer>

    </Container>
  );
}