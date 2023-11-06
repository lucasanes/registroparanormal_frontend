import { BodyContainer, Container, HeaderContainer, Select, Button } from './styles';
import { MdOutlineAddBox } from "react-icons/md";
import { useState } from 'react';
import { Modal } from '../../../../components/Modals/Modal';
import { ModalAdd } from './components/ModalAdd';
import { useEffect } from 'react';
import { api } from '../../../../services/api';
import { useParams } from 'react-router-dom';
import { NPC } from './components/NPC';
import { NPCMonstro } from './components/NPCMonstro';
import { NPCPrincipal } from './components/NPCPrincipal';
import { useFichas } from '../../../../hooks/useFichas';

export function FichasNPCsContainer({ npcs, npcsmonstros }) {

  const [modalAddIsOpen, setModalAddIsOpen] = useState(false)

  const { fichasNPCSPrincipal } = useFichas()
  
  const [fichasNPC, setFichasNPC] = useState(npcs)
  const [fichasNPCMonstro, setFichasNPCMonstro] = useState(npcsmonstros)
  const [fichasNPCPrincipal, setFichasNPCPrincipal] = useState(fichasNPCSPrincipal)
  
  const [body, setBody] = useState(npcs.length > 0 ? 'npcs' : npcsmonstros.length > 0 ? 'monstros' : fichasNPCSPrincipal.length > 0 ? 'npcsprincipais' : 'npcs')

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
        <Button active={body == 'npcs'} onClick={() => setBody('npcs')}>NPCs</Button>
        <Button active={body == 'monstros'} onClick={() => setBody('monstros')}>Monstros</Button>
        <Button active={body == 'npcsprincipais'} onClick={() => setBody('npcsprincipais')}>NPCs Principais</Button>
      </Select>

      <hr />

      <BodyContainer>

        {body == 'npcs' ? 
          fichasNPC.map(ficha => <NPC key={ficha.id} data={ficha} lista={fichasNPC} atualizar={setFichasNPC} />)
        : body == 'monstros' ? 
          fichasNPCMonstro.map(ficha => <NPCMonstro key={ficha.id} data={ficha} lista={fichasNPCMonstro} atualizar={setFichasNPCMonstro} />)
        : body == 'npcsprincipais' && 
          fichasNPCPrincipal.map(ficha => <NPCPrincipal key={ficha.id} data={ficha} lista={fichasNPCPrincipal} atualizar={setFichasNPCPrincipal} />)
        }

      </BodyContainer>

    </Container>
  );
}