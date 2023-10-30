import { Link } from 'react-router-dom'
import { Container, Header, Desc, Footer } from './styles'

export function AddFicha() {

  return (
    <Container>
      <Header>
        <h2>Criar Ficha</h2>
      </Header>
      <hr />
      <Desc>
        <h2>Para criar uma ficha basta clicar no botão abaixo. Divirta-se.</h2>
      </Desc>
      <hr />
      <Footer>
        <Link to={'/criarficha'} >Criar Ficha</Link>
      </Footer>
    </Container>
  )

}