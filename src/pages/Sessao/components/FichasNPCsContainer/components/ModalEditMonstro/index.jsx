import { useState } from 'react';
import { Input } from '../../../../../../components/Input';
import { Container, Footer, SelectDiv, ButtonSelect, Grid, Grid2, Body,Header } from './styles';
import { toast } from 'react-toastify'
import { api } from '../../../../../../services/api';
import { TextArea } from '../../../../../../components/TextArea';
import { AtributoInput } from '../../../../../../components/AtributoInput';

export function ModalEditMonstro({ setModalClose, data }) {

  const [body, setBody] = useState('principal')

  const [nome, setNome] = useState(data.nome)
  const [nex, setNex] = useState(data.nex)
  const [deslocamento, setDeslocamento] = useState(data.deslocamento)

  const [pv, setPv] = useState(data.pvMax)

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
  const [sorte, setSorte] = useState(data.sorte)
  const [tatica, setTatica] = useState(data.tatica)
  const [tecnologia, setTecnologia] = useState(data.tecnologia)
  const [vontade, setVontade] = useState(data.vontade)

  const [passiva, setPassiva] = useState(data.passiva)

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

  const [ataques, setAtaques] = useState(data.ataques)
  const [habilidades, setHabilidades] = useState(data.habilidades)
  const [detalhes, setDetalhes] = useState(data.detalhes)

  async function handleEdit(e) {

    e.preventDefault()

    try {

      const response = await api.put(`/fichas/npcmonstro/${data.id}`, {

        nome,
        deslocamento: Number(deslocamento),
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

      })

      data.nome = nome
      data.nex = nex
      data.deslocamento = deslocamento
      data.pvMax = pv
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
      data.sorte = sorte
      data.tatica = tatica
      data.tecnologia = tecnologia
      data.vontade = vontade
      data.passiva = passiva
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
      data.ataques = ataques
      data.habilidades = habilidades
      data.detalhes = detalhes

      setModalClose()

    } catch (erro) {
      console.log(erro)
      toast.error(erro.response.data.msg)
    }

  }

  return (
    <Container>

      <form onSubmit={handleEdit}>

        <Header>
          <h1>Editar NPC</h1>
          <button type="button" onClick={setModalClose}>x</button>
        </Header>

        <hr />

        <SelectDiv>

          <ButtonSelect type='button' active={body == 'principal'} onClick={() => setBody('principal')}>Principal</ButtonSelect>
          <ButtonSelect type='button' active={body == 'atributos'} onClick={() => setBody('atributos')}>Atributos</ButtonSelect>
          <ButtonSelect type='button' active={body == 'pericias'} onClick={() => setBody('pericias')}>Perícias</ButtonSelect>
          <ButtonSelect type='button' active={body == 'defesas'} onClick={() => setBody('defesas')}>Defesas</ButtonSelect>
          <ButtonSelect type='button' active={body == 'outros'} onClick={() => setBody('outros')}>Outros</ButtonSelect>

        </SelectDiv>

        <hr />

        <Body>

          {body == 'principal' && <>

            <Grid>

              <Input required maxLength={30} label={'Nome'} valor={nome} setValor={setNome} />
              <Input required type='number' maxValor={99} maxLength={2} label={'NEX'} valor={nex} setValor={setNex} />
              <Input required type='number' maxValor={99} maxLength={2} label={'Deslocamento'} valor={deslocamento} setValor={setDeslocamento} valorMax={12} />
              <Input required type='number' maxValor={99} maxLength={2} label={'Vida Máxima (PV)'} valor={pv} setValor={setPv} />

            </Grid>

          </>}

          {body == 'atributos' && <>

            <AtributoInput agi={agi} setAgi={setAgi} int={int} setInt={setInt} vig={vig} setVig={setVig} pre={pre} setPre={setPre} forca={forca} setFor={setFor} />

          </>}

          {body == 'pericias' && <Grid2>

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

          {body == 'defesas' && <>


            <h2>Defesas</h2>

            <Grid2>

              <Input required maxLength={2} type='number' maxValor={99} label={'Passiva'} valor={passiva} setValor={setPassiva} />

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

          {body == 'outros' && <>

            <TextArea label={'Ataques'} valor={ataques} setValor={setAtaques} />
            <TextArea label={'Habilidades'} valor={habilidades} setValor={setHabilidades} />
            <TextArea label={'Detalhes'} valor={detalhes} setValor={setDetalhes} />

          </>}

        </Body>

        <hr />

        <Footer>

          <button type="submit">Salvar</button>

        </Footer>

      </form>

    </Container>
  );
}