import { useState } from 'react';
import { MdOutlineAddBox } from "react-icons/md";
import { Modal } from '../../../../components/Modals/Modal';
import { useAuth } from '../../../../hooks/useAuth';
import { useFichas } from '../../../../hooks/useFichas';
import { ModalAdd } from './components/ModalAdd';
import { NPC } from './components/NPC';
import { NPCMonstro } from './components/NPCMonstro';
import { NPCPrincipal } from './components/NPCPrincipal';
import { BodyContainer, Button, Container, HeaderContainer, Select } from './styles';

export function FichasNPCsContainer({ npcs, npcsmonstros }) {

  const [modalAddIsOpen, setModalAddIsOpen] = useState(false)

  const { fichas } = useFichas()
  const {user} = useAuth()
  
  const [fichasNPC, setFichasNPC] = useState(npcs)
  const [fichasNPCMonstro, setFichasNPCMonstro] = useState(npcsmonstros)
  const [fichasNPCPrincipal, setFichasNPCPrincipal] = useState(fichas)
  
  const [body, setBody] = useState('none')

  return (
    <Container>

      <Modal padding={false} isOpen={modalAddIsOpen} setClose={() => setModalAddIsOpen(false)}>
        <ModalAdd setModalClose={() => setModalAddIsOpen(false)} setFichasNPC={setFichasNPC} setFichasNPCMonstro={setFichasNPCMonstro} setFichasNPCPrincipal={setFichasNPCPrincipal} />
      </Modal>

      <HeaderContainer>
        <h1>Fichas NPCs</h1>
        <button onClick={() => setModalAddIsOpen(true)}>
          <MdOutlineAddBox size={25} />
        </button>
      </HeaderContainer>

      <hr />

      <Select>
        <Button active={body == 'npcs'} onClick={() => {body != 'npcs' ? setBody('npcs') : setBody('none')}}>NPCs</Button>
        <Button active={body == 'monstros'} onClick={() => {body != 'monstros' ? setBody('monstros') : setBody('none')}}>Monstros</Button>
        <Button active={body == 'npcsprincipais'} onClick={() => {body != 'npcsprincipais' ? setBody('npcsprincipais') : setBody('none')}}>NPCs Principais</Button>
      </Select>

      <hr />

      <BodyContainer nulo={body == 'none'}>

        {body == 'npcs' ? 
          fichasNPC.map(ficha => <NPC key={ficha.id} data={ficha} lista={fichasNPC} atualizar={setFichasNPC} />)
        : body == 'monstros' ? 
          fichasNPCMonstro.map(ficha => <NPCMonstro key={ficha.id} data={ficha} lista={fichasNPCMonstro} atualizar={setFichasNPCMonstro} />)
        : body == 'npcsprincipais' ? 
          fichasNPCPrincipal.map(ficha => ficha.userId == user.id && <NPCPrincipal key={ficha.id} data={ficha} lista={fichasNPCPrincipal} atualizar={setFichasNPCPrincipal} />)
        : null}

      </BodyContainer>

    </Container>
  );
}