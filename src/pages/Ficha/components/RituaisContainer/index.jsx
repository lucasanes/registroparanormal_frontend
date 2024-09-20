import { useState } from 'react';
import { ButtonAdd } from '../../../../components/ButtonAdd';
import { Modal } from '../../../../components/Modals/Modal';
import { ModalAdd } from './components/ModalAdd';
import { Ritual } from './components/Ritual';
import { BodyContainer, Button, Container, HeaderContainer, Select } from './styles';

export function RituaisContainer({ data }) {

  const [rituais, setRituais] = useState(data)
  const [modalAddIsOpen, setModalAddIsOpen] = useState(false)

  const [aberto, setAberto] = useState(false)
  const [ritualEscolhido, setRitual] = useState(rituais.length > 0 && rituais[0])

  function slide(ritual) {

    if (aberto == true && ritual.id == ritualEscolhido?.id) {

      setAberto(false)
      
    } else if (aberto == true && ritual.id != ritualEscolhido?.id) {

      setAberto(true)
      setRitual(ritual)

    } else {
      setRitual(ritual)
      setAberto(true)
    }

  }

  function comparar(a, b) {
    // Primeiro, compare pelo item "círculo"
    if (a.circulo > b.circulo) {
      return -1;
    } else if (a.circulo < b.circulo) {
      return 1;
    } else {
      // Se os círculos forem iguais, compare pelo elemento
      if (a.elemento < b.elemento) {
        return -1;
      } else if (a.elemento > b.elemento) {
        return 1;
      } else {
        return 0;
      }
    }
  }

  return (
    <Container>

      <Modal padding={false} isOpen={modalAddIsOpen} setClose={() => setModalAddIsOpen(false)}>
        <ModalAdd setModalClose={() => setModalAddIsOpen(false)} atualizar={setRituais} />
      </Modal>

      <HeaderContainer>
        <h1>Rituais</h1>
        <ButtonAdd onClick={() => setModalAddIsOpen(true)} />
      </HeaderContainer>

      {rituais.length > 0 && <hr />}

      <Select nulo={rituais.length == 0}>

        {rituais.sort(comparar).map((ritual) => 
          <Button key={ritual.id} onClick={() => slide(ritual)} elemento={ritual.elemento} active={ritualEscolhido != null && aberto == true && ritualEscolhido.id == ritual.id && ritual.elemento} >{ritual.nome} - {ritual.circulo}º</Button>)
        }
      </Select>

      <hr />

      <BodyContainer show={aberto.toString()}>

        {ritualEscolhido &&
          <Ritual data={ritualEscolhido} atualizar={setRituais} rituais={rituais} setRitualAtivo={setRitual} />
        }

      </BodyContainer>

    </Container>
  );
}