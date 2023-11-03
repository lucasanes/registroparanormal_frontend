import { Link } from 'react-router-dom'
import { Container, Header, Desc, Footer } from './styles'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { api } from '../../../services/api'
import { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useAuth } from '../../../hooks/useAuth'
import { Modal } from '../../../components/Modals/Modal'
import { ModalDeleteConfirm } from '../../../components/Modals/ModalDeleteConfirm'
import {Select} from '../../../components/Select'

export function Convite({ data, setConvites }) {

  const [participantes, setParticipantes] = useState('')
  const [fichas, setFichas] = useState([])
  const [fichaSelecionada, setFichaSelecionada] = useState('Indefinida')

  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false)

  const {user} = useAuth()

  useEffect(() => {

    console.log(data.sessao.Participantes)
    const listaParticipantes = data.sessao.Participantes.map(participante => participante.user.nome)

    if (data.sessao.Participantes.length > 0) {
      setParticipantes('E seus participantes são: ' + listaParticipantes.join(', '))
    }

    async function fetchData() {
      const response = await api.get(`/fichas/user/${user.id}`)
      const fichasFilter = response.data.filter(ficha => ficha.sessaoId == null)
      setFichas(fichasFilter)
    }

    fetchData()
  }, [])

  async function handleDelete() {

    try {

      await api.delete(`/sessoes/convite/${data.id}`)
      const listaAtualizada = convites.filter(convite => data.id != convite.id)
      setConvites(listaAtualizada)

    } catch (erro) { console.log(erro) }

  }

  async function handleEdit() {

    if (fichaSelecionada != 'Indefinida') {

      try {

        await api.put(`/fichas/${fichaSelecionada}`, {
          sessaoId: data.sessaoId
        })
        await api.post(`/sessoes/participante`, {
          userId: user.id,
          sessaoId: data.sessaoId,
          fichaId: fichaSelecionada
        })
        await api.delete(`/sessoes/convite/${data.id}`)

        setConvites(rest => rest.filter(convite => data.id != convite.id))
        toast.success('Você agorá faz parte de ' + data.sessao.nome + '.')

      } catch (erro) {
        console.log(erro)
      }

    } else {
      toast.error('Você não selecionou nenhuma ficha.')
    }

  }

  return (
    <Container>

      <Modal isOpen={modalDeleteIsOpen} setClose={() => setModalDeleteIsOpen(false)}>
        <ModalDeleteConfirm setModalClose={() => setModalDeleteIsOpen(false)} handleExecute={handleDelete}/>
      </Modal>

      <Header>
        <h2>Convite - {data.sessao.nome}</h2>
        <button onClick={() => setModalDeleteIsOpen(true)}>Recusar <AiOutlineCloseCircle size={18} /></button>
      </Header>
      <hr />
      <Desc>
        <h2>{data.sessao.user.nome} te convidou para sua sessão: {data.sessao.nome}. <br /> Cuja descrição é: {data.sessao.descricao} <br /> {participantes}</h2>
      </Desc>
      <hr />
      <Footer>
        <div>
          <button onClick={handleEdit}>Entrar com a Ficha:</button>
          <Select label={''} valor={fichaSelecionada} setValor={setFichaSelecionada}>
            <option value={'Indefinida'}>Indefinida</option>
            {fichas.map(ficha => <option key={ficha.id} value={ficha.id}>{ficha.Principal[0].nome}</option>)}
          </Select>
        </div>
        {/* <Link to={`/criarficha/convite/${data.id}`}>Entrar e Criar Ficha</Link> */}
      </Footer>
    </Container>
  )

}