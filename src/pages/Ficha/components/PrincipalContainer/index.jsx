import { useState } from 'react';
import { ButtonEdit } from '../../../../components/ButtonEdit';
import { InputStop } from '../../../../components/InputStop';
import { Modal } from '../../../../components/Modals/Modal';
import { ModalEdit } from './ModalEdit';
import { Container, Header, Body } from './styles';

export function PrincipalContainer({ data }) {

  const [modalEditIsOpen, setModalEditIsOpen] = useState(false)

  return (
    <Container>

      <Modal isOpen={modalEditIsOpen} setClose={() => setModalEditIsOpen(false)}>
        <ModalEdit data={data} setModalClose={() => setModalEditIsOpen(false)} />
      </Modal>

      <Header>
        <h1>Principal</h1>
        <ButtonEdit size={22} onClick={() => setModalEditIsOpen(true)} />
      </Header>
      
      <hr />

      <Body>

        <InputStop label={'Nome'} valor={data.nome} />
        <InputStop label={'Jogador'} valor={data.jogador} />
        <InputStop label={'Idade'} valor={data.idade} />
        {data.idadeAdicional != 0 && data.idadeAdicional != null && <InputStop label={'Idade Adicional'} valor={data.idadeAdicional} />}
        <InputStop label={'Nacionalidade'} valor={data.nacionalidade} />
        <InputStop label={'Origem'} valor={data.origem} />
        <InputStop label={'NEX'} valor={data.nex} />
        <InputStop label={'Classe'} valor={data.classe} />
        {data.trilha != 'Nenhuma' && <InputStop label={'Trilha'} valor={data.trilha} />}
        {data.patente != 'Nenhuma' && <InputStop label={'Patente'} valor={data.patente} />}
        <InputStop label={'PE / Rodada'} valor={data.peprod} />
        <InputStop label={'Deslocamento'} valor={data.deslocamento} />

      </Body>

    </Container>
  );
}