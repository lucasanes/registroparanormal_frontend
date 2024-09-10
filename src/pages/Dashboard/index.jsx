import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { io } from 'socket.io-client';
import { Modal } from "../../components/Modals/Modal";
import { ModalAddSessao } from '../../components/Modals/ModalAddSessao';
import { useAuth } from '../../hooks/useAuth';
import { useTitle } from '../../hooks/useTitle';
import { api } from "../../services/api";
import { AddFicha } from './AddFicha';
import { AddSessao } from './AddSessao';
import { Convite } from './Convite';
import { Ficha } from './Ficha';
import { Sessao } from './Sessao';
import * as S from './styles';

const socket = io(api.defaults.baseURL);

export default function Dashboard() {

  const { setTitle } = useTitle()
  const {user} = useAuth()

  const [modalCriarSessaoIsOpen, setModalCriarSessaoIsOpen] = useState(false);

  const [sessoes, setSessoes] = useState([]);
  const [fichas, setFichas] = useState([]);
  const [convites, setConvites] = useState([])

  useEffect(() => {

    async function fetchData() {

      try {

        setTitle('Carregando...')

        const response = await api.get(`/usuarios/dashboard/${user.id}`)

        setSessoes(response.data.sessao)
        const fichasPP = []

        if (response.data.sessao.length > 0) {
          response.data.sessao.forEach(sessao => {
            response.data.ficha.forEach(ficha => {
              if (sessao.id != ficha.sessaoId) {
                fichasPP.push(ficha)
              }
            })
          })
        } else {
          response.data.ficha.forEach(ficha => {
            fichasPP.push(ficha)
          })
        }
        
        setFichas(fichasPP)
        setConvites(response.data.convites)

      } catch (error) { console.log(error) }
      finally {
        setTitle('Painel')
        document.title = `Painel - Registro Paranormal`
      }
    }
    fetchData();

    async function atualizarConvites() {

      const responseConvite = await api.get(`/sessoes/convite/${user.email}`)
      setConvites(responseConvite.data)
      toast('Você recebeu um convite!')
  
    }
    socket.on(`enviado.convite?${user.email}`, atualizarConvites)

    return () => {
      socket.off(`enviado.convite?${user.email}`, atualizarConvites)
    }

  }, []);

  return (
    <S.Container>

      <Modal isOpen={modalCriarSessaoIsOpen} setClose={() => setModalCriarSessaoIsOpen(false)}>
        <ModalAddSessao setModalClose={() => setModalCriarSessaoIsOpen(false)} setSessoes={setSessoes}/>
      </Modal>

      <S.ContainerDiv>
        <h1>Sessões</h1>
        <hr />
        <S.DivFlex>
          <AddSessao setModalOpen={() => setModalCriarSessaoIsOpen(true)}/>
          {convites.map(convite => <Convite key={convite.id} data={convite} convites={convites} setConvites={setConvites}/>)}
          {sessoes.map(sessao => <Sessao key={sessao.id} data={sessao} sessoes={sessoes} setSessoes={setSessoes}/>)}
        </S.DivFlex>
      </S.ContainerDiv>

      <S.ContainerDiv>
        <h1>Fichas</h1>
        <hr />
        <S.DivFlex>
          <AddFicha/>
          {fichas.map(ficha => <Ficha key={ficha.id} data={ficha} fichas={fichas} setFichas={setFichas}/>)}
        </S.DivFlex>
      </S.ContainerDiv>

    </S.Container>
  );
}