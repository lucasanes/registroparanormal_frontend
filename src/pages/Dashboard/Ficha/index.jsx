import { Container, Header, Desc, Footer, Botoes, Button, Grade, ParteGrade, LinkButton } from './styles'
import { FaUserCircle } from 'react-icons/fa'
import { BiTrashAlt } from 'react-icons/bi'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { api } from '../../../services/api'
import { useState } from 'react'
import { toast } from 'react-toastify'
import noportrait from '../../../assets/img/noportrait.png'

export function Ficha({ data, fichas, setFichas }) {

  const [isPublic, setIsPublic] = useState(data.isPublic)

  const infos = data.Principal[0]
  const portrait = data.Portrait[0]

  async function handleDelete() {

    if (window.confirm("Tem certeza que deseja excluir esta ficha? Uma vez deletada jamais poderá ser recuperada")) {

      await api.delete(`/fichas/${data.id}`)

      const fichasAtt = fichas.filter(ficha => ficha.id != data.id)
      setFichas(fichasAtt)

    }

  }

  async function handleEdit() {
    await api.put(`/fichas/${data.id}`, {
      isPublic: !isPublic,
      sessaoId: data.sessaoId
    })
    setIsPublic(!isPublic)
    toast.success(`Sua ficha agora está ${!isPublic ? 'pública' : 'privada'}.`)
  }

  return (
    <Container>
      <Header>
        <h2>{infos.nome} {data.sessaoId && ' - ' + data.sessao.nome}</h2>
        <Botoes>
          <LinkButton color={'aqua'} to={`/ficha/portrait/${data.id}`}><FaUserCircle size={20} color="#03d9ffff" /></LinkButton>
          <Button onClick={handleEdit} color={isPublic ? 'green' : 'crimson'}>{isPublic ? <BsEye size={20} color="#13ff72" /> : <BsEyeSlash size={20} color="crimson" />}</Button>
          <Button onClick={handleDelete} color={'red'}><BiTrashAlt size={20} color='red' /></Button>
        </Botoes>
      </Header>
      <hr />
      <Desc>
        <img src={portrait.normal || noportrait} />
        <Grade>
          <ParteGrade>
            <span>Origem:</span>
            <div>{infos.origem}</div>
          </ParteGrade>
          <ParteGrade>
            <span>Classe:</span>
            <div>{infos.classe}</div>
          </ParteGrade>
          <ParteGrade>
            <span>NEX:</span>
            <div>{infos.nex}</div>
          </ParteGrade>
          {infos.trilha != 'Nenhuma' ?
            <ParteGrade>
              <span>Trilha:</span>
              <div>{infos.trilha}</div>
            </ParteGrade>
            :
            <ParteGrade>
              <span>Idade:</span>
              <div>{infos.idade}</div>
            </ParteGrade>
          }
        </Grade>
      </Desc>
      <hr />
      <Footer>
        <Link to={data.sessaoId != null ? `/sessao/ficha/${data.id}` : `/ficha/${data.id}`}>Acessar Ficha</Link>
      </Footer>
    </Container>
  )

}