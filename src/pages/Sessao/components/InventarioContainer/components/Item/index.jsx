import { useEffect, useState } from 'react';
import { Container, Header, Main, MainTop, Span, ParteImg, ButtonIcon, ImgModal, ParteImgModal } from './styles';
import { MdOutlineSendToMobile } from 'react-icons/md'
import { Modal } from '../../../../../../components/Modals/Modal';
import { ModalEditItem } from '../ModalEditItem';
import { ButtonEdit } from '../../../../../../components/ButtonEdit';
import { Barrinha } from './Barrinha';
import { api } from '../../../../../../services/api';
import { io } from 'socket.io-client';
import { useDisabled } from '../../../../../../hooks/useDisabled';
import { useFichas } from '../../../../../../hooks/useFichas';
import { useParams } from 'react-router-dom';

const socket = io(api.defaults.baseURL);

export function Item({ data, atualizar, itens, setPesoAtual }) {

  const {id} = useParams()
  
  const { disabled } = useDisabled()
  const { fichas } = useFichas()

  const [imgAberta, setImgAberta] = useState(false)
  
  const [modalEditItemIsOpen, setModalEditItemIsOpen] = useState(false)

  const [municao, setMunicao] = useState(data.municao)
  const [municaoMax, setMunicaoMax] = useState(data.municaoMax)

  const [changinTimer, setChanginTimer] = useState(null)

  async function handleEdit() {

    try {

      await api.put(`/sessoes/item/${data.id}`, {
        nome: data.nome,
        espaco: data.espaco,
        categoria: data.categoria,
        descricao: data.descricao,
        isMunicao: data.isMunicao,
        municao,
        municaoMax,
        imagem: data.imagem,
      });

    } catch (erro) {
      console.log(erro)
    }

  }

  function subtimer() {
    clearTimeout(changinTimer)
    setChanginTimer(setTimeout(handleEdit, 1000))
  }

  useEffect(() => {

    subtimer()

  }, [municao, municaoMax])

  useEffect(() => {

    setMunicao(data.municao)
    setMunicaoMax(data.municaoMax)

  }, [data.municao, data.municaoMax])

  function handleSend() {

    fichas.forEach(ficha => {
      socket.emit("enviado.itemImg", { fichaId: ficha.id, imagem: data.imagem });
    });

    socket.emit("enviado.itemImg", { sessaoId: id, imagem: data.imagem });

  }

  return (
    <Container>

      <Modal isOpen={modalEditItemIsOpen} setClose={() => setModalEditItemIsOpen(false)}>
        <ModalEditItem setPesoAtual={setPesoAtual} itens={itens} data={data} atualizar={atualizar} setModalClose={() => setModalEditItemIsOpen(false)} />
      </Modal>

      <Modal isOpen={imgAberta} setClose={() => setImgAberta(false)}>
        <ParteImgModal>
          <ImgModal onClick={() => setImgAberta(false)} src={data.imagem} />
        </ParteImgModal>
      </Modal>

      <Header>
        <ButtonIcon disabled={disabled} color={'aqua'} onClick={handleSend} ><MdOutlineSendToMobile size={22} color={'aqua'} /></ButtonIcon>
        <h1>{data.nome}</h1>
        <ButtonEdit onClick={() => setModalEditItemIsOpen(true)} />
      </Header>

      <hr />

      <Main>

        <MainTop>

          <div className='row'>
            <span className='infos'>Peso: {data.espaco}</span>
            <span className='infos'>Categoria: {data.categoria}</span>
          </div>

          <Span>{data.descricao || "Este item não tem uma descrição..."}</Span>

          {data.isMunicao &&
            <Barrinha barrinhaId={data.id} valorA={municao} setValorA={setMunicao} valorMax={municaoMax} setValorMax={setMunicaoMax} />
          }

        </MainTop>

        <ParteImg>
          <img onClick={() => setImgAberta(true)} src={data.imagem} width={"95%"} />
        </ParteImg>

      </Main>

    </Container>
  );
}