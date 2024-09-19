import { useEffect, useState } from 'react';
import { Input } from '../../../../../components/Input';
import { Body, Container, Header } from './styles';

export function ModalAddSom({ fetchData, setModalClose, currentPath }) {

  const [path, setPath] = useState(currentPath)
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

          <Input required label={'Pasta'} setValor={setPath} valor={path} />
          <Input required label={'Nome'} valor={name} setValor={setName} />
          {(path && name) && <Input sound required label={'Som'} soundName={name} pathName={path} valor={sound} setValor={setSound}/>}

        </Body>

      </form>

    </Container>
  );
}