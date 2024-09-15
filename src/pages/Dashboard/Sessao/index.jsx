import { useEffect, useState } from 'react';
import { BiTrashAlt } from 'react-icons/bi';
import { BsGear } from 'react-icons/bs';
import { MdOutlinePlayCircle } from "react-icons/md";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Modal } from '../../../components/Modals/Modal';
import { ModalDeleteConfirm } from '../../../components/Modals/ModalDeleteConfirm';
import { ModalEditSessao } from '../../../components/Modals/ModalEditSessao';
import { useAuth } from '../../../hooks/useAuth';
import { api } from '../../../services/api';
import { Button, Container, Desc, Footer, Header, Part } from './styles';

export function Sessao({data, sessoes, setSessoes}) {

  const [modalEditarSessaoIsOpen, setModalEditarSessaoIsOpen] = useState(false)
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false)

  const [participantes, setParticipantes] = useState([])

  const {user} = useAuth()

  useEffect(() => {

    let part

    if (data.Participantes) {
      const cadaParticipante = data.Participantes?.map(each => each.user.nome)
      if (cadaParticipante.length > 0) {
        part = user.nome + ', ' + cadaParticipante.join(', ')
        setParticipantes(part)
      } else {
        setParticipantes(user.nome)
      }
      return
    }

    setParticipantes(user.nome)

  }, [])

  async function handleDelete() {

    try {

      await api.delete(`/sessoes/${data.id}`)

      const sessoesAtualizadas = sessoes.filter(sessao => sessao.id != data.id)

      setSessoes(sessoesAtualizadas)
      toast.success("Sessão deletada com sucesso!")

    } catch (error) {
      toast.error(error.response.data.msg);
    }

  }

  return (
    <Container>

      <Modal isOpen={modalEditarSessaoIsOpen} setClose={() => setModalEditarSessaoIsOpen(false)}>
        <ModalEditSessao data={data} sessoes={sessoes} setSessoes={setSessoes} setModalClose={() => setModalEditarSessaoIsOpen(false)} />
      </Modal>

      <Modal isOpen={modalDeleteIsOpen} setClose={() => setModalDeleteIsOpen(false)}>
        <ModalDeleteConfirm setModalClose={() => setModalDeleteIsOpen(false)} handleExecute={handleDelete}/>
      </Modal>

      <Header>
        <h2>{data.nome}</h2>
        <div>
          <Link color={'blue'} to={`/streaming/${data.id}`} target='_blank'><MdOutlinePlayCircle size={20} /></Link>
          <Button color={'blue'} onClick={() => setModalEditarSessaoIsOpen(true)}><BsGear size={18} /></Button>
          <Button onClick={() => setModalDeleteIsOpen(true)}><BiTrashAlt size={20} /></Button>
        </div>
      </Header>
      <hr />
      <Desc>
        <h2><strong>Descrição:</strong> {data.descricao}</h2>
      </Desc>
      <hr />
      <Part>
        <h2><strong>Participantes:</strong> {participantes}</h2>
      </Part>
      <hr />
      <Footer>
        <Link to={`/sessao/mestre/${data.id}`}>Acessar Painel</Link>
      </Footer>
    </Container>
  )

}