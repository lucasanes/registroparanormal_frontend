import { Container, Header, Desc, Footer } from './styles'

export function AddSessao({ setModalOpen }) {

  return (
    <Container>
      <Header>
        <h2>Criar Sessão</h2>
      </Header>
      <hr />
      <Desc>
        <h2>Para criar uma sessão basta clicar no botão abaixo. Comece com um título e uma descrição.</h2>
      </Desc>
      <hr />
      <Footer>
        <button onClick={setModalOpen}>Criar Sessão</button>
      </Footer>
    </Container>
  )

}