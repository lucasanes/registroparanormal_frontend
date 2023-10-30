import { Container, Header, Desc, Part, Footer, Button } from './styles'
import { BsGear } from 'react-icons/bs'
import { IoTrashOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { ModalEditSessao } from '../../../components/Modals/ModalEditSessao'
import { Modal } from '../../../components/Modals/Modal'
import { useState } from 'react'
import { useAuth } from '../../../hooks/useAuth'
import { toast } from 'react-toastify'
import { api } from '../../../services/api'

export function Sessao({data, sessoes, setSessoes}) {

  const [modalEditarSessaoIsOpen, setModalEditarSessaoIsOpen] = useState(false)

  const {user} = useAuth()

  async function handleDelete() {

    if (window.confirm("Tem certeza que deseja excluir esta sessão? Uma vez deletada jamais será recuperada.")) {
      try {

        await api.delete(`/sessoes/${data.id}`)

        const sessoesAtualizadas = sessoes.filter(sessao => sessao.id != data.id)

        setSessoes(sessoesAtualizadas)
        toast.success("Sessão deletada com sucesso!")

      } catch (error) {
        toast.error(error.response.data.msg);
      }
    }

  }

  return (
    <Container>

      <Modal isOpen={modalEditarSessaoIsOpen} setClose={() => setModalEditarSessaoIsOpen(false)}>
        <ModalEditSessao data={data} sessoes={sessoes} setSessoes={setSessoes} setModalClose={() => setModalEditarSessaoIsOpen(false)} />
      </Modal>

      <Header>
        <h2>{data.nome}</h2>
        <div>
          <Button color={'blue'} onClick={() => setModalEditarSessaoIsOpen(true)}><BsGear size={17} /></Button>
          <Button onClick={handleDelete}><IoTrashOutline size={19} /></Button>
        </div>
      </Header>
      <hr />
      <Desc>
        <h2><strong>Descrição:</strong> {data.descricao}</h2>
      </Desc>
      <hr />
      <Part>
        <h2><strong>Participantes:</strong> {data.Participantes?.length > 0 ? `${user.nome}, ${data.Participantes.join(', ')}` : user.nome}</h2>
      </Part>
      <hr />
      <Footer>
        <Link to={`/sessao/mestre/${data.id}`}>Acessar Painel</Link>
      </Footer>
    </Container>
  )

}