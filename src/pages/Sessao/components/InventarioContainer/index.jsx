import { BodyContainer, Container, HeaderContainer, Footer, Row, Column, Button, Option, Main } from './styles';
import { MdOutlineAddBox, MdOutlineCleaningServices } from "react-icons/md";
import { useEffect, useState } from 'react';
import { Item } from './components/Item';
import { Arma } from './components/Arma';
import { useFichas } from '../../../../hooks/useFichas';
import { Modal } from '../../../../components/Modals/Modal';
import { ModalAdd } from './components/ModalAdd';
import { ModalAddArma } from './components/ModalAddArma';
import { ModalAddItem } from './components/ModalAddItem';
import { useParams } from 'react-router-dom';
import { api } from '../../../../services/api';
import { ButtonAdd } from '../../../../components/ButtonAdd';
import { io } from 'socket.io-client';
import { toast } from 'react-toastify';
import { useDisabled } from '../../../../hooks/useDisabled';

const socket = io(api.defaults.baseURL);

export function InventarioContainer({ armasData, itensData }) {

  const [itens, setItens] = useState(itensData)

  const [armas, setArmas] = useState(armasData)

  const [modalAddIsOpen, setModalAddIsOpen] = useState(false)
  const [modalAddItemIsOpen, setModalAddItemIsOpen] = useState(false)
  const [modalAddArmaIsOpen, setModalAddArmaIsOpen] = useState(false)

  const [itemAEnviar, setItemAEnviar] = useState('')
  const [fichaIdAEnviar, setFichaAEnviar] = useState('')

  const { id } = useParams()
  const { fichas } = useFichas()
  const { disabled } = useDisabled()

  useEffect(() => {

    async function fetchData() {

      toast('Você recebeu um item em seu inventário.')

      const responseItens = await api.get(`/sessoes/item/${id}`)
      const responseArmas = await api.get(`/sessoes/arma/${id}`)

      setItens(responseItens.data)
      setArmas(responseArmas.data)

    }

    function atualizarInv() {
      fetchData()
    }
    socket.on(`enviado.inv?${id}`, atualizarInv)

  }, [])

  async function enviarInventario() {

    const item = itens.filter(item => item.id == itemAEnviar)
    const arma = armas.filter(arma => arma.id == itemAEnviar)

    const ficha = fichas.filter(ficha => ficha.id == fichaIdAEnviar)

    if (item.length > 0) {

      if (ficha.length == 0) {
        toast.error('Você precisa selecionar uma ficha para enviar.')
        return
      }

      try {

        await api.post(`/fichas/item`, {
          nome: item[0].nome,
          espaco: item[0].espaco,
          categoria: item[0].categoria,
          descricao: item[0].descricao,
          imagem: item[0].imagem,
          isMunicao: item[0].isMunicao,
          municao: item[0].municao,
          municaoMax: item[0].municaoMax,
          fichaId: fichaIdAEnviar
        });

        await api.delete(`/sessoes/item/${itemAEnviar}`)

        const listaAtualizada = itens.filter(item => item.id != itemAEnviar)
        setItens(listaAtualizada)

        socket.emit("enviado.inv", { fichaId: fichaIdAEnviar });

        toast.success(`Item enviado com sucesso para a ficha de ${ficha[0].Principal[0].nome}.`)

      } catch (erro) {
        toast.error(erro.response.data.msg)
      }

    } else if (arma.length > 0) {

      if (ficha.length == 0) {
        toast.error('Você precisa selecionar uma ficha para enviar.')
        return
      }

      try {

        await api.post(`/fichas/arma`, {
          nome: arma[0].nome,
          tipo: arma[0].tipo,
          alcance: arma[0].alcance,
          recarga: arma[0].recarga,
          especial: arma[0].especial,
          ataque: arma[0].ataque,
          dano: arma[0].dano,
          margemCritico: arma[0].margemCritico,
          danoCritico: arma[0].danoCritico,
          espaco: arma[0].espaco,
          categoria: arma[0].categoria,
          descricao: arma[0].descricao,
          imagem: arma[0].imagem,
          fichaId: fichaIdAEnviar
        });

        await api.delete(`/sessoes/arma/${itemAEnviar}`)

        const listaAtualizada = armas.filter(arma => arma.id != itemAEnviar)
        setArmas(listaAtualizada)

        socket.emit("enviado.inv", { fichaId: fichaIdAEnviar });

        toast.success(`Arma enviada com sucesso para a ficha de ${ficha[0].Principal[0].nome}.`)

      } catch (erro) {
        toast.error(erro.response.data.msg)
      }

    } else {
      toast.error('Você precisa selecionar um item para ser enviado.')
    }

  }

  return (
    <Container>

      <Modal isOpen={modalAddIsOpen} setClose={() => setModalAddIsOpen(false)}>
        <ModalAdd setModalClose={() => setModalAddIsOpen(false)} setModalAddArmaIsOpen={() => setModalAddArmaIsOpen(true)} setModalAddItemIsOpen={() => setModalAddItemIsOpen(true)} />
      </Modal>

      <Modal padding={false} isOpen={modalAddArmaIsOpen} setClose={() => setModalAddArmaIsOpen(false)}>
        <ModalAddArma atualizar={setArmas} setModalClose={() => setModalAddArmaIsOpen(false)} />
      </Modal>

      <Modal isOpen={modalAddItemIsOpen} setClose={() => setModalAddItemIsOpen(false)}>
        <ModalAddItem atualizar={setItens} setModalClose={() => setModalAddItemIsOpen(false)} />
      </Modal>

      <HeaderContainer>
        <button className='button' onClick={() => {
            fichas.forEach(ficha => {
              socket.emit('enviado.itemImg', {fichaId: ficha.id, imagem: 'fechar'})
            })
            socket.emit("enviado.itemImg", { sessaoId: id, imagem: 'fechar' })
          }}> 
          <MdOutlineCleaningServices size={22} color={'#00b740'} /> 
        </button>
        <h1>Inventário</h1>
        <ButtonAdd onClick={() => setModalAddIsOpen(true)} />
      </HeaderContainer>
      
      <hr />

      <Main nulo={armas.length == 0 && itens.length == 0}>

        <BodyContainer>

          {armas.map(arma => <Arma key={arma.id} data={arma} atualizar={setArmas} armas={armas} />)}
          {itens.map(item => <Item key={item.id} data={item} atualizar={setItens} itens={itens} />)}

        </BodyContainer>

        <hr />

        <Footer>

          <Row>

            <Column>
              <span>Item</span>
              <select disabled={disabled} onChange={(e) => setItemAEnviar(e.target.value)}>
                <Option value={null}>Nenhum</Option>
                {armas.map(arma => <Option key={arma.id} value={arma.id}>{arma.nome}</Option>)}
                {itens.map(item => <Option key={item.id} value={item.id}>{item.nome}</Option>)}
              </select>
            </Column>

            <Column>
              <span>Ficha</span>
              <select disabled={disabled} onChange={(e) => setFichaAEnviar(e.target.value)}>
                <Option value={null}>Nenhuma</Option>
                {fichas.map(ficha => <Option key={ficha.id} value={ficha.id}>{ficha.Principal[0].nome}</Option>)}
              </select>
            </Column>

          </Row>

          <Button disabled={disabled} onClick={enviarInventario}>Enviar</Button>

        </Footer>

      </Main>

    </Container>
  );
}