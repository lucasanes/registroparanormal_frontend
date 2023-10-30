import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Input } from '../../components/Input';
import { AtributoInput } from '../../components/AtributoInput';
import { Select } from '../../components/Select';
import { useTitle } from '../../hooks/useTitle';
import { api } from '../../services/api';
import { Container, Body, Principal, Atributos, Footer, Span } from './styles';
import {useAuth} from '../../hooks/useAuth'
import origens from './origens';

export function CriarFicha() {

  const { setTitle } = useTitle()

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [nacionalidade, setNacionalidade] = useState('')
  const [origem, setOrigem] = useState('')
  const [nex, setNex] = useState(0)
  const [classe, setClasse] = useState('Mundano')
  const [trilha, setTrilha] = useState('')
  const [patente, setPatente] = useState('Nenhuma')

  const [agi, setAgi] = useState(1)
  const [int, setInt] = useState(1)
  const [vig, setVig] = useState(1)
  const [pre, setPre] = useState(1)
  const [forca, setFor] = useState(1)

  const [pv, setPv] = useState(1)
  const [ps, setPs] = useState(1)
  const [pe, setPe] = useState(1)

  const {user} = useAuth()

  const navigate = useNavigate()

  useEffect(() => {

    setTitle('Criar Ficha')
    document.title = `Fichas RPG - Criando Ficha`

  }, [])

  async function handleCreate(e) {

    e.preventDefault()

    if (nex > 4 && classe == 'Mundano') {
      toast.error('Você não pode ter a classe Mundano com 5% de NEX ou mais.')
      return
    } else if (nex > 9 && trilha.length == 0) {
      toast.error("Você precisa ter uma trilha com 10% de NEX ou mais.")
      return
    }

    if (nex < 5 && classe != 'Mundano') {
      toast.error("Você só pode ter essa classe com 5% de NEX ou mais.")
      return
    }

    if (nex < 10 && trilha != null && nex < 10 && trilha != '') {
      toast.error("Você só pode ter uma trilha com 10% de NEX ou mais.")
      return
    }

    const arrayAtributos = [
      Number(agi),
      Number(int),
      Number(vig),
      Number(pre),
      Number(forca)
    ]

    const arrayStatus = {
      pv: Number(pv),
      ps: Number(ps),
      pe: Number(pe),
    }

    if (arrayAtributos.filter(atributo => atributo == 0).length > 1) {
      toast.error('Você só pode ter no máximo um atributo igual a 0.')
      return
    }

    if (nex < 20) {
      if (Number(agi) > 3 || Number(int) > 3 || Number(vig) > 3 || Number(pre) > 3 || Number(forca) > 3) {
        toast.error("Você não pode ter nenhum atributo com mais de 3 pontos.")
        return
      } else if (Number(agi) + Number(int) + Number(vig) + Number(pre) + Number(forca) != 9) {
        toast.error('Você precisa ter 9 pontos somados nos atributos.')
        return
      }
    } else if (nex < 50) {
      if (Number(agi) > 4 || Number(int) > 4 || Number(vig) > 4 || Number(pre) > 4 || Number(forca) > 4) {
        toast.error("Você não pode ter nenhum atributo com mais de 4 pontos.")
        return
      } else if (arrayAtributos.filter(atributo => atributo == 4).length > 1) {
        toast.error("Você só pode ter um atributo com 4 pontos.")
        return
      } else if (Number(agi) + Number(int) + Number(vig) + Number(pre) + Number(forca) != 10) {
        toast.error('Você precisa ter 10 pontos somados nos atributos.')
        return
      }
    } else if (nex < 80) {
      if (Number(agi) > 5 || Number(int) > 5 || Number(vig) > 5 || Number(pre) > 5 || Number(forca) > 5) {
        toast.error("Você não pode ter nenhum atributo com mais de 5 pontos.")
        return
      } else if (arrayAtributos.filter(atributo => atributo == 5).length > 1) {
        toast.error("Você só pode ter um atributo com 5 pontos.")
        return
      } else if (Number(agi) + Number(int) + Number(vig) + Number(pre) + Number(forca) != 11) {
        toast.error('Você precisa ter 11 pontos somados nos atributos.')
        return
      }
    } else {
      if (Number(agi) > 5 || Number(int) > 5 || Number(vig) > 5 || Number(pre) > 5 || Number(forca) > 5) {
        toast.error("Você não pode ter nenhum atributo com mais de 5 pontos.")
        return
      } else if (arrayAtributos.filter(atributo => atributo == 5).length > 2) {
        toast.error("Você só pode ter no máximo dois atributos com 5 pontos.")
        return
      } else if (Number(agi) + Number(int) + Number(vig) + Number(pre) + Number(forca) != 12) {
        toast.error('Você precisa ter 12 pontos somados nos atributos.')
        return
      }
    }

    if (pv == 1) {
      if (classe == "Mundano") {
        arrayStatus.pv = 8 + Number(vig)
      } else if (classe == "Combatente") {
        arrayStatus.pv = 20 + Number(vig) + (Math.floor((nex - 5) / 5) * (4 + Number(vig)))
      } else if (classe == 'Especialista') {
        arrayStatus.pv = 16 + Number(vig) + (Math.floor((nex - 5) / 5) * (3 + Number(vig)))
      } else if (classe == 'Ocultista') {
        arrayStatus.pv = 12 + Number(vig) + (Math.floor((nex - 5) / 5) * (2 + Number(vig)))
      }
    }

    if (ps == 1) {
      if (classe == "Mundano") {
        arrayStatus.ps = 8
      } else if (classe == "Combatente") {
        arrayStatus.ps = 12 + (Math.floor((nex - 5) / 5) * 3)
      } else if (classe == 'Especialista') {
        arrayStatus.ps = 16 + (Math.floor((nex - 5) / 5) * 4)
      } else if (classe == 'Ocultista') {
        arrayStatus.ps = 20 + (Math.floor((nex - 5) / 5) * 5)
      }
    }

    if (pe == 1) {
      if (classe == "Mundano") {
        arrayStatus.pe = 1 + Number(pre)
      } else if (classe == "Combatente") {
        arrayStatus.pe = 2 + Number(pre) + (Math.floor((nex - 5) / 5) * (2 + Number(pre)))
      } else if (classe == 'Especialista') {
        arrayStatus.pe = 3 + Number(pre) + (Math.floor((nex - 5) / 5) * (3 + Number(pre)))
      } else if (classe == 'Ocultista') {
        arrayStatus.pe = 4 + Number(pre) + (Math.floor((nex - 5) / 5) * (4 + Number(pre)))
      }
    }

    try {

      const response = await api.post(`/fichas`, {
        userId: user.id,

        nome,
        idade: Number(idade),
        jogador: user.nome,
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

        pvMax: arrayStatus.pv,
        sanMax: arrayStatus.ps,
        peMax: arrayStatus.pe,
      })

      const origemAutomatico = origens(origem)

      if (origemAutomatico != undefined) {

        if (origemAutomatico.pericia1 != null && origemAutomatico.pericia2 != null) {

          await api.put(`/fichas/pericias/${response.data.ficha.id}`, {
            [origemAutomatico.pericia1]: 5,
            [origemAutomatico.pericia2]: 5
          })

        }

        await api.post(`/fichas/habilidade`, {
          nome: origemAutomatico.nome,
          descricao: origemAutomatico.desc,
          fichaId: response.data.ficha.id
        })

      }

      navigate(`/`)

    } catch (erro) {
      toast.error(erro.response.data.msg)
    }

  }

  return (
    <Container>

      <form onSubmit={handleCreate}>

        <Body>

          <Principal>

            <h1>Principal</h1>

            <Input required maxLength={30} label={'Nome'} valor={nome} setValor={setNome} />
            <Input required type='number' maxValor={99} maxLength={2} label={'Idade'} valor={idade} setValor={setIdade} />
            <Input required maxLength={20} label={'Local de Nascimento'} valor={nacionalidade} setValor={setNacionalidade} />
            <Input required list={'listaOrigens'} maxLength={22} label={'Origem'} valor={origem} setValor={setOrigem} />
            <datalist id="listaOrigens"><option value="Acadêmico" /><option value="Agente de Saúde" /><option value="Amnésico" /><option value="Artista" /><option value="Atleta" /><option value="Chef" /><option value="Crimisoso" /><option value="Cultusta Arrependido" /><option value="Desgarrado" /><option value="Engenheiro" /><option value="Executivo" /><option value="Investigador" /><option value="Lutador" /><option value="Magnata" /><option value="Mercenário" /><option value="Militar" /><option value="Operário" /><option value="Policial" /><option value="Religioso" /><option value="Sevidor Público" /><option value="Teórico da Conspiração" /><option value="T.I." /><option value="Trabalhador Rural" /><option value="Trambiqueiro" /><option value="Universitário" /><option value="Vítima" />
            </datalist>
            <Span>Caso use o modo manual: sem automatização de perícias e habilidades.</Span>
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


          </Principal>

          <Atributos>

            <h1>Atributos e Status</h1>

            <AtributoInput agi={agi} setAgi={setAgi} int={int} setInt={setInt} vig={vig} setVig={setVig} pre={pre} setPre={setPre} forca={forca} setFor={setFor} />

            <Input required type='number' maxValor={99} maxLength={2} label={'Vida Máxima (PV)'} valor={pv} setValor={setPv} />
            <Span>Deixe o valor em 1 para calcular automaticamente!</Span>
            <Input required type='number' maxValor={99} maxLength={2} label={'Sanidade Máxima (SAN)'} valor={ps} setValor={setPs} />
            <Span>Deixe o valor em 1 para calcular automaticamente!</Span>
            <Input required type='number' maxValor={99} maxLength={2} label={'Pontos de Esforço (PE)'} valor={pe} setValor={setPe} />
            <Span>Deixe o valor em 1 para calcular automaticamente!</Span>

          </Atributos>

          <Footer>
            <button type='submit'>Criar Personagem</button>
          </Footer>

        </Body>

      </form>

    </Container>
  );
}