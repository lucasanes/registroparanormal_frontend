import { useState } from 'react';
import { ButtonDelete } from '../../../../../../components/ButtonDelete';
import { ButtonEdit } from '../../../../../../components/ButtonEdit';
import { Modal } from '../../../../../../components/Modals/Modal';
import { api } from '../../../../../../services/api';
import { DadoRolado } from '../DadoRolado';
import { ModalEdit } from '../ModalEdit';
import { Container, Header, Body, Img, Main, Footer, Card, Span, Desc, Botoes, Buttons } from './styles';
import NoRitual from '../../../../../../assets/img/NoRitual.png'

export function Ritual({ data, atualizar, rituais, setRitualAtivo }) {

  const [modalEditIsOpen, setModalEditIsOpen] = useState(false)
  const [dadoData, setDadoData] = useState({
    nome: '',
    valor: '',
    isDano: true
  })

  async function handleDelete() {

    try {

      await api.delete(`/fichas/ritual/${data.id}`)

      const listaAtualizada = rituais.filter(ritual => ritual.id != data.id)

      atualizar(listaAtualizada)
      setRitualAtivo(null)

    } catch (erro) {
      console.log(erro)
    }

  }

  return (
    <Container elemento={data.elemento}>

      <Modal isOpen={modalEditIsOpen} setClose={() => setModalEditIsOpen(false)}>
        <ModalEdit data={data} setModalClose={() => setModalEditIsOpen(false)} lista={rituais} setRitualAtivo={setRitualAtivo} />
      </Modal>

      <Header elemento={data.elemento}>
        <h1>{data.nome} - {data.circulo}º</h1>

        <Buttons>

          <ButtonEdit onClick={() => setModalEditIsOpen(true)} />
          <ButtonDelete onClick={handleDelete} />

        </Buttons>
      </Header>

      <hr className='hr'/>

      <Body>

        <Img>
          <img src={data.imagem || NoRitual} />
        </Img>

        <Main>

          <Card>
            <h2>Elemento:</h2>
            <hr />
            <Span>{data.elemento}</Span>
          </Card>

          <Card>
            <h2>Alcance:</h2>
            <hr />
            <Span>{data.alcance}</Span>
          </Card>

          <Card>
            <h2>Execução:</h2>
            <hr />
            <Span>{data.execucao}</Span>
          </Card>

          <Card>
            <h2>Duração:</h2>
            <hr />
            <Span>{data.duracao}</Span>
          </Card>

          <Card>
            <h2>Alvo:</h2>
            <hr />
            <Span>{data.alvo}</Span>
          </Card>

          <Card>
            <h2>Resistência:</h2>
            <hr />
            <Span>{data.resistencia || 'Indefinida'}</Span>
          </Card>

        </Main>

      </Body>

      <Footer>

        <div className='row'>
          <Botoes>

            <button onClick={() => {
              if (data.normal != null) {
                setDadoData({
                  nome: 'Normal',
                  valor: data.normal,
                  elemento: data.elemento
                })
              }
            }}>Normal</button>
            <button onClick={() => {
              if (data.discente != null) {
                setDadoData({
                  nome: 'Discente',
                  valor: data.discente,
                  elemento: data.elemento
                })
              }
            }}>Discente</button>
            <button onClick={() => {
              if (data.verdadeiro != null) {
                setDadoData({
                  nome: 'Verdadeiro',
                  valor: data.verdadeiro,
                  elemento: data.elemento
                })
              }
            }}>Verdadeiro</button>

          </Botoes>
          <DadoRolado data={dadoData} />
        </div>

        <Desc>{data.descricao || 'Este ritual não tem uma descrição...'}</Desc>

      </Footer>

    </Container>
  );
}