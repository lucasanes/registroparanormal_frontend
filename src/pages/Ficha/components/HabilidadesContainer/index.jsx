import { BodyContainer, Container, HeaderContainer, Button } from './styles';
import { useState, useEffect } from 'react';
import { Modal } from '../../../../components/Modals/Modal';
import { ButtonAdd } from '../../../../components/ButtonAdd';
import { ModalHabilidade } from './ModalHabilidade';
import { Habilidade } from './Habilidade';
import { Poder } from './Poder';
import { Proficiencia } from './Proficiencia';
import { ModalPoder } from './ModalPoder';
import { ModalProficiencia } from './ModalProficiencia';

export function HabilidadesContainer({ habilidadesData, poderesData, proficienciasData }) {

  const [body, setBody] = useState('habilidades')

  const [habilidades, setHabilidades] = useState(habilidadesData)
  const [poderes, setPoderes] = useState(poderesData)
  const [proficiencias, setProficiencias] = useState(proficienciasData)

  const [modalHabilidadeIsOpen, setModalHabilidadeIsOpen] = useState(false)
  const [modalPoderIsOpen, setModalPoderIsOpen] = useState(false)
  const [modalProficienciaIsOpen, setModalProficienciaIsOpen] = useState(false)

  function openModal() {
    if (body == 'habilidades') {
      setModalHabilidadeIsOpen(true)
    } else if (body == 'poderes') {
      setModalPoderIsOpen(true)
    } else {
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
        <Button active={body == 'habilidades'} onClick={() => { setBody('habilidades') }}>Hab.</Button>
        <Button active={body == 'poderes'} onClick={() => { setBody('poderes') }}>Pod.</Button>
        <Button active={body == 'proficiencias'} onClick={() => { setBody('proficiencias') }}>Prof.</Button>
        <ButtonAdd onClick={openModal} />
      </HeaderContainer>

      <hr />

      <BodyContainer>

        {body == 'habilidades' && habilidades &&

          habilidades.map(habilidade => <Habilidade key={habilidade.id} data={habilidade} lista={habilidades} atualizar={setHabilidades} />)

        }

        {body == 'poderes' &&

          poderes.map(poder => <Poder key={poder.id} data={poder} lista={poderes} atualizar={setPoderes} />)

        }

        {body == 'proficiencias' &&

          proficiencias.map(proficiencia => <Proficiencia key={proficiencia.id} data={proficiencia} lista={proficiencias} atualizar={setProficiencias} />)

        }

      </BodyContainer>

    </Container>
  );
}