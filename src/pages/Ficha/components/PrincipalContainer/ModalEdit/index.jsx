import { useState } from 'react'
import {Input} from '../../../../../components/Input'
import {Select} from '../../../../../components/Select'
import * as S from './styles'
import { api } from '../../../../../services/api'
import { toast } from 'react-toastify'
import {useTitle} from '../../../../../hooks/useTitle'

export function ModalEdit({ setModalClose, data }) {

  const [nome, setNome] = useState(data.nome)
  const [idade, setIdade] = useState(data.idade)
  const [idadeAdicional, setIdadeAdicional] = useState(data.idadeAdicional ? data.idadeAdicional : 0)
  const [peprod, setPeprod] = useState(data.peprod)
  const [nacionalidade, setNacionalidade] = useState(data.nacionalidade)
  const [origem, setOrigem] = useState(data.origem)
  const [nex, setNex] = useState(data.nex)
  const [classe, setClasse] = useState(data.classe)
  const [trilha, setTrilha] = useState(data.trilha)
  const [patente, setPatente] = useState(data.patente)
  const [deslocamento, setDeslocamento] = useState(data.deslocamento)

  const {setTitle} = useTitle()

  async function handleEdit(e) {

    e.preventDefault()

    try {

      const response = await api.put(`/fichas/principal/${data.id}`, {
        nome,
        idade: Number(idade),
        idadeAdicional: Number(idadeAdicional),
        peprod: Number(peprod),
        nacionalidade,
        origem,
        nex: Number(nex),
        classe,
        trilha,
        patente,
        deslocamento
      })

      setTitle(nome)
      document.title = `${nome} - Registro Paranormal`

      data.nome = nome
      data.idade = Number(idade)
      data.idadeAdicional = Number(idadeAdicional)
      data.peprod = Number(peprod)
      data.nacionalidade = nacionalidade
      data.origem = origem
      data.nex = Number(nex)
      data.classe = classe
      data.trilha = trilha
      data.patente = patente
      data.deslocamento = deslocamento

      setModalClose()
      toast.success('Atualizado com sucesso!')

    } catch (erro) {
      console.log(erro)
    }

  }

  return (
    <S.Container>
      <form onSubmit={handleEdit}>

      <S.Header>

        <h1>Editar Principal</h1>
        <button type="button" onClick={setModalClose}>x</button>

      </S.Header>

      <hr />

      <S.Body>

        <S.DualParte>
          <Input required maxLength={30} label={'Nome'} valor={nome} setValor={setNome} />
          <Input required type='number' maxValor={99} maxLength={2} label={'Idade'} valor={idade} setValor={setIdade} />
        </S.DualParte>
        <S.DualParte>
          <Input type='number' maxValor={99} maxLength={2} label={'Idade Adicional'} valor={idadeAdicional} setValor={setIdadeAdicional} />
          <Input required maxLength={20} label={'Local de Nascimento'} valor={nacionalidade} setValor={setNacionalidade} />
        </S.DualParte>
        <S.DualParte>
          <Input list={'listaOrigens'} maxLength={22} label={'Origem'} valor={origem} setValor={setOrigem} />
          <datalist id="listaOrigens"><option value="Academico" /><option value="Agente de saúde" /><option value="Amnésico" /><option value="Artista" /><option value="Atleta" /><option value="Chef" /><option value="Crimisoso" /><option value="Cultista Arrependido" /><option value="Desgarrado" /><option value="Engenheiro" /><option value="Executivo" /><option value="Investigador" /><option value="Lutador" /><option value="Magnata" /><option value="Mercenário" /><option value="Militar" /><option value="Operário" /><option value="Policial" /><option value="Religioso" /><option value="Sevidor público" /><option value="Teórico da conspiração" /><option value="TI" /><option value="Trabalhador rural" /><option value="Trambiqueiro" /><option value="Universitário" /><option value="Vítima" />
          </datalist>
          <Input required type='number' maxValor={99} maxLength={2} label={'NEX'} valor={nex} setValor={setNex} />
        </S.DualParte>
        <S.DualParte>
          <Select label={'Classe'} valor={classe} setValor={setClasse}>
            <option value="Mundano">Mundano</option>
            <option value="Combatente">Combatente</option>
            <option value="Especialista">Especialista</option>
            <option value="Ocultista">Ocultista</option>
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
        </S.DualParte>

        <S.DualParte>
          <Select label={'Patente'} valor={patente} setValor={setPatente}><option value="Nenhuma">Nenhuma</option><option value="Recruta">Recruta</option><option value="Operador" >Operador</option><option value="Agente Especial" >Agente Especial</option><option value="Oficial de Operações" >Oficial de Operações</option><option value="Agente de Elite" >Agente de Elite</option>
          </Select>

          <Input required type='number' maxValor={99} label={'PE / Rodada'} maxLength={2} valor={peprod} setValor={setPeprod} />
        </S.DualParte>

        <S.DualParte>
          <Input required type='number' maxValor={99} label={'Deslocamento'} maxLength={2} valor={deslocamento} setValor={setDeslocamento} />
        </S.DualParte>
        
      </S.Body>

      <hr />

      <S.Footer>

        <button type="submit">Salvar</button>

      </S.Footer>

      </form>
    </S.Container>
  );
}