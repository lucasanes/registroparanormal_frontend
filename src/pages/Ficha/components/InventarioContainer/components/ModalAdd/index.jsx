import { Container, Body, Header, Button} from './styles';

export function ModalAdd({ setModalClose, setModalAddArmaIsOpen, setModalAddItemIsOpen }) {
  return (
    <Container>

      <Header>

        <h1>Adicionar no Inventário</h1>
        <button type="button" onClick={setModalClose}>x</button>

      </Header>

      <hr />
      
      <Body>
        <Button onClick={() => {
          setModalClose();
          setModalAddItemIsOpen()
        }}>Item</Button>
        <Button onClick={() => {
          setModalClose();
          setModalAddArmaIsOpen()
        }} color={'red'}>Arma</Button>
      </Body>

    </Container>
  );
}