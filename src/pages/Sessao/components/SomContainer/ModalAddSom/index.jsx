import { listAll, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { Input } from '../../../../../components/Input';
import { storage } from '../../../../../firebase.config';
import { Body, Container, Header } from './styles';

export function ModalAddSom({ setFolderOpened, setModalClose, currentPath }) {

  const [path, setPath] = useState(currentPath)
  const [name, setName] = useState('')
  const [sound, setSound] = useState('')

  const fetchFoldersAndFiles = async (folderRef) => {
    const response = await listAll(folderRef);
    const folderData = {
      name: folderRef.name,
      items: response.items,
      prefixes: [],
    };

    for (const prefix of response.prefixes) {
      const childFolderData = await fetchFoldersAndFiles(prefix);
      folderData.prefixes.push(childFolderData);
    }

    return folderData
  };

  const folderOpened = (response) => {
    let folderOpened
    const folderPath = path.split('/').pop()

    folderOpened = response.prefixes.find(folder => folder.name === folderPath)

    if (!folderOpened) {
      response.prefixes.forEach(folder => {
        folderOpened = folder.prefixes.find(folder => folder.name === folderPath)
      })
    }

    return folderOpened
  }

  useEffect(() => {
    async function fetchData() {
      const getFoldersRef = ref(storage, 'sound/');
      const response = await fetchFoldersAndFiles(getFoldersRef);
      setFolderOpened(folderOpened(response))
    }

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