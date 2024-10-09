import { useParams } from "react-router-dom";
import { Body, Button, Container, Header } from "./styles";

export function ModalRoom({ setModalClose }) {

  const {fichaId, id} = useParams()

  const rooms = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  async function handleChange(room) {
    window.location.href = `/webcam/${fichaId}/${room}`
  }

  return (
    <Container>

      <Header>
        <h1>Trocar Sala</h1>
        <button type="button" onClick={setModalClose}>x</button>
      </Header>

      <hr />

      <Body>
        {
          rooms.map(room => (
            <Button 
              key={room} 
              active={room == id} 
              onClick={() => handleChange(room)}>
                {room}
            </Button>
          ))
        }
      </Body>

    </Container>
  );
}
