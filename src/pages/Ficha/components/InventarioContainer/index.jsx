import { BodyContainer, Container, HeaderContainer, Footer, Row, Column, Button, Option, Main } from './styles';
import { MdOutlineAddBox } from "react-icons/md";
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
import { ModalPeso } from './components/ModalPeso';

const socket = io(api.defaults.baseURL);

export function InventarioContainer({ armasData, itensData, peso }) {

  const [itens, setItens] = useState(itensData)

  const [armas, setArmas] = useState(armasData)

  const [pesoAtual, setPesoAtual] = useState(0)
  const [pesoTotalAtual, setPesoTotalAtual] = useState(peso)

  const [modalAddIsOpen, setModalAddIsOpen] = useState(false)
  const [modalAddItemIsOpen, setModalAddItemIsOpen] = useState(false)
  const [modalAddArmaIsOpen, setModalAddArmaIsOpen] = useState(false)
  const [modalPesoIsOpen, setModalPesoIsOpen] = useState(false)

  const [itemAEnviar, setItemAEnviar] = useState('')
  const [fichaIdAEnviar, setFichaAEnviar] = useState('')

  const { id } = useParams()
  const { fichas, sessaoIdFicha } = useFichas()
  const { disabled } = useDisabled()

  useEffect(() => {

    setPesoAtual(0)

    itensData.map(item => setPesoAtual((prev) => prev + item.espaco))
    armasData.map(arma => setPesoAtual((prev) => prev + arma.espaco))

    async function fetchData() {

      toast('Você recebeu um item em seu inventário.')

      const responseItens = await api.get(`/fichas/item/${id}`)
      const responseArmas = await api.get(`/fichas/arma/${id}`)

      setPesoAtual(0)

      responseItens.data.map(item => setPesoAtual((prev) => prev + item.espaco))
      responseArmas.data.map(arma => setPesoAtual((prev) => prev + arma.espaco))

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

    if (fichaIdAEnviar == '') {
      toast.error('Você precisa selecionar alguém para enviar.')
      return
    }

    let nome

    if (ficha.length > 0) {
      nome = ficha[0].Principal[0].nome
    } else {
      nome = 'Mestre'
    }


    if (item.length > 0) {

      try {

        if (ficha.length > 0) {

          await api.post(`/fichas/item`, {
            nome: item[0].nome,
            espaco: item[0].espaco,
            categoria: item[0].categoria,
            descricao: item[0].descricao,
            imagem: item[0].imagem,
            isMunicao: item[0].isMunicao,
            municao: item[0].municao,
            municaoMax: item[0].municaoMax,
            fichaId: fichaIdAEnviar,
          });

        } else {
          await api.post(`/sessoes/item`, {
            nome: item[0].nome,
            espaco: item[0].espaco,
            categoria: item[0].categoria,
            descricao: item[0].descricao,
            imagem: item[0].imagem,
            isMunicao: item[0].isMunicao,
            municao: item[0].municao,
            municaoMax: item[0].municaoMax,
            sessaoId: fichaIdAEnviar
          });
        }

        await api.delete(`/fichas/item/${itemAEnviar}`)

        const listaAtualizada = itens.filter(item => item.id != itemAEnviar)
        setItens(listaAtualizada)

        setPesoAtual((prev) => prev - item[0].espaco)

        socket.emit("enviado.inv", { fichaId: fichaIdAEnviar });

        toast.success(`Item enviado com sucesso para a ficha de ${nome}.`)

      } catch (erro) {
        toast.error(erro.response.data.msg)
      }

    } else if (arma.length > 0) {

      try {

        if (ficha.length > 0) {
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
            fichaId: fichaIdAEnviar,
          });
        } else {
          await api.post(`/sessoes/arma`, {
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
            sessaoId: fichaIdAEnviar
          });
        }


        await api.delete(`/fichas/arma/${itemAEnviar}`)

        const listaAtualizada = armas.filter(arma => arma.id != itemAEnviar)
        setArmas(listaAtualizada)

        setPesoAtual((prev) => prev - arma[0].espaco)

        socket.emit("enviado.inv", { fichaId: fichaIdAEnviar });

        toast.success(`Arma enviada com sucesso para a ficha de ${ficha[0].Principal[0].nome}.`)

      } catch (erro) {
        toast.error(erro.response.data.msg)
      }

    } else {
      toast.error('Ocorreu algum erro no envio. Recomendado o recarregamento da página.')
    }

  }

  return (
    <Container>

      <Modal isOpen={modalAddIsOpen} setClose={() => setModalAddIsOpen(false)}>
        <ModalAdd setModalClose={() => setModalAddIsOpen(false)} setModalAddArmaIsOpen={() => setModalAddArmaIsOpen(true)} setModalAddItemIsOpen={() => setModalAddItemIsOpen(true)} />
      </Modal>

      <Modal padding={false} isOpen={modalAddArmaIsOpen} setClose={() => setModalAddArmaIsOpen(false)}>
        <ModalAddArma setPesoAtual={setPesoAtual} atualizar={setArmas} setModalClose={() => setModalAddArmaIsOpen(false)} />
      </Modal>

      <Modal isOpen={modalAddItemIsOpen} setClose={() => setModalAddItemIsOpen(false)}>
        <ModalAddItem setPesoAtual={setPesoAtual} atualizar={setItens} setModalClose={() => setModalAddItemIsOpen(false)} />
      </Modal>

      <Modal isOpen={modalPesoIsOpen} setClose={() => setModalPesoIsOpen(false)}>
        <ModalPeso pesoTotalAtual={pesoTotalAtual} setPesoTotalAtual={setPesoTotalAtual} setModalClose={() => setModalPesoIsOpen(false)} />
      </Modal>

      <HeaderContainer>
        <h1>Inventário |</h1>
        <button onClick={() => setModalPesoIsOpen(true)} className='peso'>{pesoAtual}/{pesoTotalAtual}</button>
        <ButtonAdd className='edit' onClick={() => setModalAddIsOpen(true)} />
      </HeaderContainer>
      
      <hr />

      <Main nulo={armas.length == 0 && itens.length == 0}>

        <BodyContainer>

          {armas.map(arma => <Arma key={arma.id} data={arma} atualizar={setArmas} armas={armas} setPesoAtual={setPesoAtual} />)}
          {itens.map(item => <Item key={item.id} data={item} atualizar={setItens} itens={itens} setPesoAtual={setPesoAtual} />)}

        </BodyContainer>

        <hr />

        {sessaoIdFicha && <Footer>

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
                <Option value={sessaoIdFicha}>Mestre</Option>
                {fichas.map(ficha => <Option key={ficha.id} value={ficha.id}>{ficha.Principal[0].nome}</Option>)}
              </select>
            </Column>

          </Row>

          <Button disabled={disabled} onClick={enviarInventario}>Enviar</Button>

        </Footer>}

      </Main>

    </Container>
  );
}