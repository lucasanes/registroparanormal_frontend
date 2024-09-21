import { useEffect, useState } from 'react';
import { Input } from '../../../../../components/Input';
import { InputStop } from '../../../../../components/InputStop';
import { Body, Container, Header } from './styles';

export function ModalAddSom({ fetchData, setModalClose, currentPath }) {

  const [name, setName] = useState('')
  const [sound, setSound] = useState('')
  useEffect(() => {
    if (sound.includes('https://firebasestorage.googleapis.com')) {
      fetchData()
      setModalClose()
    }
  }, [sound])

  return (
    <Container>

      <form>

        <Header>

          <h1>Enviar Som</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <InputStop required label={'Pasta'} valor={currentPath} />
          <Input required label={'Nome'} valor={name} setValor={setName} />
          {(currentPath && name) && <Input sound required label={'Som'} soundName={name} pathName={currentPath} valor={sound} setValor={setSound}/>}

        </Body>

      </form>

    </Container>
  );
}