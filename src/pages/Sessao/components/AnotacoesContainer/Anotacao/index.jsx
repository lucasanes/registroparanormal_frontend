import { useEffect, useState } from 'react';
import { BiTrashAlt } from 'react-icons/bi';
import { toast } from 'react-toastify';
import { api } from '../../../../../services/api';
import { Container } from './styles';
import {ButtonDelete} from '../../../../../components/ButtonDelete'

export function Anotacao({ data, lista, atualizar, setFechado }) {

  const [nome, setNome] = useState(data.nome)
  const [desc, setDesc] = useState(data.descricao)

  useEffect(() => {

    setNome(data.nome)
    setDesc(data.descricao || '')

  }, [data])

  async function handleEdit() {

    try {

      await api.put(`/sessoes/anotacao/${data.id}`, {
        nome: nome,
        descricao: desc
      })

      const procurando = lista.filter(anotacao => anotacao.id == data.id)
      const anotacaoAEditar = procurando[0]

      anotacaoAEditar.nome = nome
      anotacaoAEditar.descricao = desc

      atualizar(lista)

    } catch (erro) {
      toast.error(erro.response.data.mensagem)
    }

  }

  async function handleDelete() {

    try {

      await api.delete(`/sessoes/anotacao/${data.id}`)

      const anotacoesAtt = lista.filter(anotacao => anotacao.id != data.id)

      atualizar(anotacoesAtt)
      setFechado()

    } catch (erro) {
      console.log(erro)
    }

  }

  return (
    <Container>

      <div>
        <input type="text" value={nome} maxLength={30} onChange={(e) => setNome(e.target.value)} onBlur={handleEdit} />
        <ButtonDelete style={{width: 'fit-content', marginBottom: 0}} onClick={handleDelete}/>
      </div>
      
      <textarea value={desc} onChange={(e) => setDesc(e.target.value)} onBlur={handleEdit} />

    </Container>
  );
}