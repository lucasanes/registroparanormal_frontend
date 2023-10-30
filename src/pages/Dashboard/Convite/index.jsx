import { Link } from 'react-router-dom'
import { Container, Header, Desc, Footer } from './styles'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { api } from '../../../services/api'
import { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useAuth } from '../../../hooks/useAuth'

export function Convite({ data, convites, setConvites }) {

  const [participantes, setParticipantes] = useState('')
  const [fichas, setFichas] = useState([])
  const [fichaSelecionada, setFichaSelecionada] = useState('Indefinida')

  const {user} = useAuth()

  useEffect(() => {

    const listaParticipantes = data.participantes.map(participante => participante.user.nome)

    if (data.participantes.length > 0) {
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

    if (window.confirm("Tem certeza que deseja excluir este convite?")) {
      try {

        await api.delete(`/sessoes/convite/${data.id}`)
        const listaAtualizada = convites.filter(convite => data.id != convite.id)
        setConvites(listaAtualizada)

      } catch (erro) { console.log(erro) }
    }

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

        const listaAtualizada = lista.filter(convite => data.id != convite.id)
        setConvites(listaAtualizada)

      } catch (erro) {
        console.log(erro)
      }

    } else {
      toast.error('Você não selecionou nenhuma ficha.')
    }

  }

  return (
    <Container>
      <Header>
        <h2>Convite - {data.nome}</h2>
        <button onClick={handleDelete}>Recusar <AiOutlineCloseCircle size={18} /></button>
      </Header>
      <hr />
      <Desc>
        <h2>{data.owner} te convidou para sua sessão: {data.nome}. <br /> Cuja descrição é: {data.descricao} <br /> {data.participantes.length > 0 && participantes}</h2>
      </Desc>
      <hr />
      <Footer>
        <div>
          <button onClick={handleEdit}>Entrar com a Ficha:</button>
          <select onChange={(e) => setFichaSelecionada(e.target.value)}>
            <option value={'Indefinida'}>Indefinida</option>
            {fichas.map(ficha => <option key={ficha.id} value={ficha.id}>{ficha.Principal[0].nome}</option>)}
          </select>
        </div>
        {/* <Link to={`/criarficha/convite/${data.id}`}>Entrar e Criar Ficha</Link> */}
      </Footer>
    </Container>
  )

}