import { useEffect, useState } from 'react';
import { Container, Header, Main, MainTop, Span, Infos, DivInfos, ParteImg, ParteImgModal, ButtonIcon, ImgModal, Icon, Dados, Button, ContainerDadoRolado } from './styles';
import { BiInfoCircle } from 'react-icons/bi'
import { MdOutlineSendToMobile } from 'react-icons/md'
import { IoIosStarOutline } from 'react-icons/io'
import { GiPistolGun } from 'react-icons/gi'
import { IoIosShuffle } from 'react-icons/io'
import { IoLocateSharp } from 'react-icons/io5'
import { Modal } from '../../../../../../components/Modals/Modal';
import { DadoRolado } from '../DadoRolado';
import { ModalEditArma } from '../ModalEditArma';
import { ButtonEdit } from '../../../../../../components/ButtonEdit';
import { useParams } from 'react-router-dom';
import { api } from '../../../../../../services/api';
import { Barrinha } from './Barrinha';
import { io } from 'socket.io-client';
import { useDisabled } from '../../../../../../hooks/useDisabled';
import { useFichas } from '../../../../../../hooks/useFichas';

const socket = io(api.defaults.baseURL);

export function Arma({ data, atualizar, armas, setPesoAtual }) {

  const [mostrarComoItem, setMostrarComoItem] = useState(false)

  const [imgAberta, setImgAberta] = useState(false)

  const [dadoData, setDadoData] = useState({
    nome: '',
    valor: '',
    isDano: null
  })

  const [modalEditArmaIsOpen, setModalEditArmaIsOpen] = useState(false)

  const { disabled } = useDisabled()
  const { fichas, dc } = useFichas()
  const { id } = useParams()

  const [municaoA, setMunicaoA] = useState(data.municao)

  const [changinTimer, setChanginTimer] = useState(null)

  async function update() {

    try {

      await api.put(`/fichas/arma/${data.id}`, {
        nome: data.nome,
        tipo: data.tipo,
        alcance: data.alcance,
        recarga: data.recarga,
        especial: data.especial,
        ataque: data.ataque,
        dano: data.dano,
        margemCritico: data.margemCritico,
        danoCritico: data.danoCritico,
        espaco: data.espaco,
        categoria: data.categoria,
        descricao: data.descricao,
        imagem: data.imagem,
        municao: Number(municaoA)
      });

    } catch (erro) {
      console.log(erro)
    }

  }

  function subtimer() {
    clearTimeout(changinTimer)
    setChanginTimer(setTimeout(update, 1500))
  }

  useEffect(() => {

    if (municaoA != null) {
      subtimer()
    }

  }, [municaoA])

  function handleSend() {

    fichas.forEach(ficha => {
      socket.emit("enviado.itemImg", { fichaId: ficha.id, imagem: data.imagem, sessaoId: ficha.sessaoId });
    });

    socket.emit("enviado.itemImg", { sessaoId: id, imagem: data.imagem });

  }

  function dadoDinamico(dado, arr = null) {
    if (dado.includes("/")) {
      for (const [i, v] of Object.entries(arr)) {
        dado = dado.replaceAll(i, v);
      }
      dado = dado.replaceAll("/", "");
    }
    return dado;
  }

  return (
    <Container>

      <Modal padding={false} isOpen={modalEditArmaIsOpen} setClose={() => setModalEditArmaIsOpen(false)}>
        <ModalEditArma setPesoAtual={setPesoAtual} armas={armas} data={data} atualizar={atualizar} setModalClose={() => setModalEditArmaIsOpen(false)} />
      </Modal>

      <Modal isOpen={imgAberta} setClose={() => setImgAberta(false)}>
        <ParteImgModal>
          <ImgModal onClick={() => setImgAberta(false)} src={data.imagem} />
        </ParteImgModal>
      </Modal>

      <Header>
        <ButtonIcon onClick={() => setMostrarComoItem(!mostrarComoItem)} color={'aqua'}><BiInfoCircle size={22} color={'aqua'} /></ButtonIcon>
        <h1>{data.nome}</h1>
        {mostrarComoItem == false ?
          <ButtonEdit onClick={() => setModalEditArmaIsOpen(true)} />
          :
          <ButtonIcon disabled={disabled} color={'aqua'} onClick={handleSend} ><MdOutlineSendToMobile size={22} color={'aqua'} /></ButtonIcon>
        }
      </Header>

      <hr />

      {!mostrarComoItem ?

        <Main>

          <Infos>

            <DivInfos>
              <Icon title='Tipo'><GiPistolGun size={30} color={'#5200aa'} /></Icon>  {/* tipo */}
              <span>{data.tipo}</span>
            </DivInfos>
            <DivInfos>
              <Icon title='Alcance'><IoLocateSharp size={30} color={'#ad0a0a'} /></Icon> {/* alcance */}
              <span>{data.alcance}</span>
            </DivInfos>
            <DivInfos>
              <Icon title='Recarga'><IoIosShuffle size={30} color={'#28b4b4'} /></Icon> {/* recarga */}
              <span>{data.recarga || '- - -'}</span>
            </DivInfos>
            <DivInfos title='Especial'>
              <Icon><IoIosStarOutline size={30} color={'#d9c21a'} /></Icon> {/* especial */}
              <span>{data.especial || '- - -'}</span>
            </DivInfos>

          </Infos>

          {data.recarga > 0 &&
            <Barrinha barrinhaId={data.id} valorA={municaoA} setValorA={setMunicaoA} valorMax={data.recarga} />
          }

          <Dados recarga={data.recarga > 0}>

            <Button disabled={disabled} onClick={() => {
              setDadoData({
                nome: 'Teste',
                valor: data.ataque,
                isDano: false,
                margemCritico: data.margemCritico
              })
            }} color={'purple'}><strong>Teste:</strong> {dadoDinamico(data.ataque, dc)}</Button>
            <Button disabled={disabled} onClick={() => {
              setDadoData({
                nome: 'Dano',
                valor: data.dano,
                isDano: true
              })
            }} color={'crimson'}><strong>Dano:</strong> {dadoDinamico(data.dano, dc)}</Button>
            <Button disabled={disabled} onClick={() => {
              setDadoData({
                nome: 'Crítico',
                valor: data.danoCritico,
                isDano: true
              })
            }} color={'red'}><strong>Crítico:</strong> {data.margemCritico} / {dadoDinamico(data.danoCritico, dc)}</Button>

          </Dados>

          <ContainerDadoRolado>
            <DadoRolado data={dadoData} />
          </ContainerDadoRolado>

        </Main>

        :

        <Main>

          <MainTop>

            <div className='row'>
              <span className='infos'>Peso: {data.espaco}</span>
              <span className='infos'>Categoria: {data.categoria}</span>
            </div>

            <Span>{data.descricao ? data.descricao : 'Esta arma não tem uma descrição...'}</Span>

          </MainTop>

          <ParteImg>

            <img onClick={() => setImgAberta(true)} src={data.imagem} width={"95%"} />

          </ParteImg>

        </Main>

      }

    </Container>
  );
}