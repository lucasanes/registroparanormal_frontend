import { BodyContainer, Container, HeaderContainer, Select, Button } from './styles';
import { useState, useRef } from 'react';
import { Modal } from '../../../../components/Modals/Modal';
import { ButtonAdd } from '../../../../components/ButtonAdd';
import { ModalAdd } from './components/ModalAdd';
import { Ritual } from './components/Ritual';

export function RituaisContainer({ data }) {

  const [rituais, setRituais] = useState(data)
  const [modalAddIsOpen, setModalAddIsOpen] = useState(false)

  const contentRef = useRef(null)
  const [aberto, setAberto] = useState(false)
  const [ritualEscolhido, setRitual] = useState(rituais.length > 0 && rituais[0])

  function slide(ritual) {

    const content = contentRef.current

    if (aberto == true && ritual.id == ritualEscolhido?.id) {

      content.style.transition = '0.5s'
      content.style.height = '0'
      setAberto(false)
      
    } else if (aberto == true && ritual.id != ritualEscolhido?.id) {

      content.style.transition = '0.5s'
      content.style.height = `0`;
      setAberto(false)

      setTimeout(() => {

        content.style.transition = '0.5s'
        content.style.height = `${content.scrollHeight}px`;
        setAberto(true)
        setRitual(ritual)

      }, 500)

    } else {
      setRitual(ritual)
      content.style.transition = '0.5s'
      content.style.height = `${content.scrollHeight}px`;
      setAberto(true)
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

        {rituais.map((ritual) => 
          <Button key={ritual.id} onClick={() => slide(ritual)} elemento={ritual.elemento} active={ritualEscolhido != null && aberto == true && ritualEscolhido.id == ritual.id && ritual.elemento} >{ritual.nome} - {ritual.circulo}º</Button>)
        }
      </Select>

      <hr />

      <BodyContainer ref={contentRef}>

        {ritualEscolhido &&
          <Ritual data={ritualEscolhido} atualizar={setRituais} rituais={rituais} setRitualAtivo={setRitual} />
        }

      </BodyContainer>

    </Container>
  );
}