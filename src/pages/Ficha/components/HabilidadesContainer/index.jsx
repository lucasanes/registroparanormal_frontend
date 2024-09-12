import { useState } from 'react';
import { ButtonAdd } from '../../../../components/ButtonAdd';
import { Modal } from '../../../../components/Modals/Modal';
import { Habilidade } from './Habilidade';
import { ModalHabilidade } from './ModalHabilidade';
import { ModalPoder } from './ModalPoder';
import { ModalProficiencia } from './ModalProficiencia';
import { Poder } from './Poder';
import { Proficiencia } from './Proficiencia';
import { BodyContainer, Button, Container, HeaderContainer } from './styles';

export function HabilidadesContainer({ habilidadesData, poderesData, proficienciasData }) {

  const [body, setBody] = useState('none')

  const [habilidades, setHabilidades] = useState(habilidadesData)
  const [poderes, setPoderes] = useState(poderesData)
  const [proficiencias, setProficiencias] = useState(proficienciasData)

  const [modalHabilidadeIsOpen, setModalHabilidadeIsOpen] = useState(false)
  const [modalPoderIsOpen, setModalPoderIsOpen] = useState(false)
  const [modalProficienciaIsOpen, setModalProficienciaIsOpen] = useState(false)

  function openModal() {
    if (body == 'hab') {
      setModalHabilidadeIsOpen(true)
    } else if (body == 'pod') {
      setModalPoderIsOpen(true)
    } else if (body == 'prof') {
      setModalProficienciaIsOpen(true)
    }
  }

  return (
    <Container>

      <Modal isOpen={modalProficienciaIsOpen} setClose={() => setModalProficienciaIsOpen(false)}>
        <ModalProficiencia atualizar={setProficiencias} setModalClose={() => setModalProficienciaIsOpen(false)} />
      </Modal>

      <Modal isOpen={modalPoderIsOpen} setClose={() => setModalPoderIsOpen(false)}>
        <ModalPoder atualizar={setPoderes} setModalClose={() => setModalPoderIsOpen(false)} />
      </Modal>

      <Modal isOpen={modalHabilidadeIsOpen} setClose={() => setModalHabilidadeIsOpen(false)}>
        <ModalHabilidade atualizar={setHabilidades} setModalClose={() => setModalHabilidadeIsOpen(false)} />
      </Modal>

      <HeaderContainer>
        <Button active={body == 'hab'} onClick={() => { body != 'hab' ? setBody('hab') : setBody('none')}}>Habilidades</Button>
        <Button active={body == 'pod'} onClick={() => { body != 'pod' ? setBody('pod') : setBody('none')}}>Poderes </Button>
        <Button active={body == 'prof'} onClick={() => {body != 'prof' ? setBody('prof') : setBody('none')}}>Proficiências</Button>
        <ButtonAdd className='add' onClick={openModal} />
      </HeaderContainer>

      <hr />

      <BodyContainer nulo={habilidades.length == 0} style={{display: body != 'hab' && 'none'}}>
        {habilidades.map(habilidade => <Habilidade key={habilidade.id} data={habilidade} lista={habilidades} atualizar={setHabilidades} />)}
      </BodyContainer>

      <BodyContainer nulo={poderes.length == 0} style={{display: body != 'pod' && 'none'}}>
        {poderes.map(poder => <Poder key={poder.id} data={poder} lista={poderes} atualizar={setPoderes} />)}
      </BodyContainer>

      <BodyContainer nulo={proficiencias.length == 0} style={{display: body != 'prof' && 'none'}}>
        {proficiencias.map(proficiencia => <Proficiencia key={proficiencia.id} data={proficiencia} lista={proficiencias} atualizar={setProficiencias} />)}
      </BodyContainer>

    </Container>
  );
}