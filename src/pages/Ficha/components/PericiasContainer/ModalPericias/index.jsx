import { useState } from 'react';
import { Input } from '../../../../../components/Input';
import { api } from '../../../../../services/api';
import { Container, Header, Footer, Body } from './styles';
import { toast } from 'react-toastify'
import { useFichas } from '../../../../../hooks/useFichas';

export function ModalPericias({ data, atualizar, setModalClose, atributos, pericias }) {

  const [acrobacia, setAcrobacia] = useState(pericias[0].valor || '0')
  const [adestramento, setAdestramento] = useState(pericias[1].valor || '0')
  const [arte, setArte] = useState(pericias[2].valor || '0')
  const [atletismo, setAtletismo] = useState(pericias[3].valor || '0')
  const [atualidade, setAtualidade] = useState(pericias[4].valor || '0')
  const [ciencia, setCiencia] = useState(pericias[5].valor || '0')
  const [crime, setCrime] = useState(pericias[6].valor || '0')
  const [diplomacia, setDiplomacia] = useState(pericias[7].valor || '0')
  const [enganacao, setEnganacao] = useState(pericias[8].valor || '0')
  const [fortitude, setFortitude] = useState(pericias[9].valor || '0')
  const [furtividade, setFurtividade] = useState(pericias[10].valor || '0')
  const [iniciativa, setIniciativa] = useState(pericias[11].valor || '0')
  const [intimidacao, setIntimidacao] = useState(pericias[12].valor || '0')
  const [intuicao, setIntuicao] = useState(pericias[13].valor || '0')
  const [investigacao, setInvestigacao] = useState(pericias[14].valor || '0')
  const [luta, setLuta] = useState(pericias[15].valor || '0')
  const [medicina, setMedicina] = useState(pericias[16].valor || '0')
  const [ocultismo, setOcultismo] = useState(pericias[17].valor || '0')
  const [percepcao, setPercepcao] = useState(pericias[18].valor || '0')
  const [pilotagem, setPilotagem] = useState(pericias[19].valor || '0')
  const [pontaria, setPontaria] = useState(pericias[20].valor || '0')
  const [profissao, setProfissao] = useState(pericias[21].valor || '0')
  const [reflexo, setReflexo] = useState(pericias[22].valor || '0')
  const [religiao, setReligiao] = useState(pericias[23].valor || '0')
  const [sobrevivencia, setSobrevivencia] = useState(pericias[24].valor || '0')
  const [sorte, setSorte] = useState(pericias[25].valor || '0')
  const [tatica, setTatica] = useState(pericias[26].valor || '0')
  const [tecnologia, setTecnologia] = useState(pericias[27].valor || '0')
  const [vontade, setVontade] = useState(pericias[28].valor || '0')

  const {setDc} = useFichas()

  async function handleEdit(e) {

    e.preventDefault()

    try {

      const response = await api.put(`/fichas/pericias/${data.fichaId}`, {
        adestramento: Number(adestramento),
        arte: Number(arte),
        diplomacia: Number(diplomacia),
        enganacao: Number(enganacao),
        intimidacao: Number(intimidacao),
        percepcao: Number(percepcao),
        religiao: Number(religiao),
        vontade: Number(vontade),
        acrobacia: Number(acrobacia),
        crime: Number(crime),
        furtividade: Number(furtividade),
        pilotagem: Number(pilotagem),
        pontaria: Number(pontaria),
        reflexo: Number(reflexo),
        atletismo: Number(atletismo),
        luta: Number(luta),
        iniciativa: Number(iniciativa),
        atualidade: Number(atualidade),
        ciencia: Number(ciencia),
        intuicao: Number(intuicao),
        investigacao: Number(investigacao),
        medicina: Number(medicina),
        ocultismo: Number(ocultismo),
        profissao: Number(profissao),
        sobrevivencia: Number(sobrevivencia),
        sorte: Number(sorte),
        tatica: Number(tatica),
        tecnologia: Number(tecnologia),
        fortitude: Number(fortitude)
      });

      setModalClose()
      toast.success('Atualizado com sucesso!')

      let varPericias = []

      for (const [key, value] of Object.entries(response.data)) {

        let atributoChave = ''

        const mapeamento = {
          adestramento: atributos.pre,
          arte: atributos.pre,
          diplomacia: atributos.pre,
          enganacao: atributos.pre,
          intimidacao: atributos.pre,
          percepcao: atributos.pre,
          religiao: atributos.pre,
          vontade: atributos.pre,
          acrobacia: atributos.agi,
          crime: atributos.agi,
          furtividade: atributos.agi,
          pilotagem: atributos.agi,
          pontaria: atributos.agi,
          reflexo: atributos.agi,
          atletismo: atributos.for,
          luta: atributos.for,
          atualidade: atributos.int,
          ciencia: atributos.int,
          intuicao: atributos.int,
          investigacao: atributos.int,
          medicina: atributos.int,
          ocultismo: atributos.int,
          profissao: atributos.int,
          sobrevivencia: atributos.int,
          sorte: atributos.pre,
          tatica: atributos.int,
          tecnologia: atributos.int,
          fortitude: atributos.vig,
          iniciativa: atributos.agi
        }

        atributoChave = mapeamento[key]

        if (key != 'id' && key != 'fichaId') {
          const novaPericia = { nome: key, atributoChave, valor: value }
          varPericias.push(novaPericia)
        }
      }
      atualizar(varPericias)

      setDc(rest => ({
        "FOR": rest.FOR,
        "AGI": rest.AGI,
        "INT": rest.INT,
        "PRE": rest.PRE,
        "VIG": rest.VIG,
        "ACRO": Number(acrobacia),
        "ADES": Number(adestramento),
        "ARTE": Number(arte),
        "ATLE": Number(atletismo),
        "ATUA": Number(atualidade),
        "CIEN": Number(ciencia),
        "CRIM": Number(crime),
        "DIPL": Number(diplomacia),
        "ENGA": Number(enganacao),
        "FORT": Number(fortitude),
        "FURT": Number(furtividade),
        "INIT": Number(iniciativa),
        "INTI": Number(intimidacao),
        "INTU": Number(intuicao),
        "INVE": Number(investigacao),
        "LUTA": Number(luta),
        "MEDI": Number(medicina),
        "OCUL": Number(ocultismo),
        "PERC": Number(percepcao),
        "PILO": Number(pilotagem),
        "PONT": Number(pontaria),
        "PROF": Number(profissao),
        "REFL": Number(reflexo),
        "RELI": Number(religiao),
        "SOBR": Number(sobrevivencia),
        "SORT": Number(sorte),
        "TATI": Number(tatica),
        "TECN": Number(tecnologia),
        "VONT": Number(vontade),
      }))

    } catch (erro) {
      toast.error(erro.response.data.msg)
    }

  }

  return (
    <Container>

      <form onSubmit={handleEdit}>

        <Header>
          <h1>Editar Perícias</h1>
          <button type="button" onClick={setModalClose}>x</button>
        </Header>

        <hr />

        <Body>

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

        </Body>

        <hr />

        <Footer>

          <button type="submit">Salvar</button>

        </Footer>

      </form>

    </Container>
  );
}