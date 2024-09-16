import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { FcOpenedFolder } from 'react-icons/fc';
import { FiMusic } from 'react-icons/fi';
import { MdOutlineAddBox } from "react-icons/md";
import { Modal } from '../../../../components/Modals/Modal';
import { storage } from '../../../../firebase.config';

import { MusicControl } from '../../../../components/MusicControl';
import { ModalAddSom } from './ModalAddSom';
import { BodyContainer, Container, Folder, HeaderContainer } from './styles';

export function SomContainer() {

  const [prevFolder, setPrevFolder] = useState([])
  const [folderOpened, setFolderOpened] = useState(null)
  const [itemOpened, setItemOpened] = useState(null)
  const [path, setPath] = useState('sound')
  const [openedIndex, setOpenedIndex] = useState(0)
  const [audioUrl, setAudioUrl] = useState(null)

  const [modalAddSomIsOpen, setModalAddSomIsOpen] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const getFoldersRef = ref(storage, 'sound/');
      const response = await fetchFoldersAndFiles(getFoldersRef);
      setFolderOpened(response)
    }

    fetchData();
  }, []);

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

  const handleOpenFolder = (to, folder) => {

    if (to === 'prev') {
      setOpenedIndex(openedIndex - 1)
      setPath(path.split(' > ').slice(0, -1).join(' > '))
      setFolderOpened(prevFolder[openedIndex - 1])
      setPrevFolder(prev => prev.slice(0, -1))
      setAudioUrl(null)
      setItemOpened(null)
    }

    if (to === 'next') {
      setOpenedIndex(openedIndex + 1)
      setPath(`${path} > ${folder.name}`)
      setPrevFolder(prev => [...prev, folderOpened])
      setFolderOpened(folder)
    }

  }

  const handleOpenItem = async (item) => {

    setOpenedIndex(openedIndex + 1)
    setPath(`${path} > ${item.name}`)
    setPrevFolder(prev => [...prev, folderOpened])
    setItemOpened(item)
    const url = await getDownloadURL(ref(storage, item.fullPath))
    setAudioUrl(url)

  }

  return (
    <Container>

      <Modal isOpen={modalAddSomIsOpen} setClose={() => setModalAddSomIsOpen(false)}>
        <ModalAddSom setFolderOpened={setFolderOpened} setModalClose={() => setModalAddSomIsOpen(false)} currentPath={() => {
          return path.split(' > ').slice(1).join('/')
        }}/>
      </Modal>

      <HeaderContainer>
        <h1>Soundpad</h1>
        <button>
          <MdOutlineAddBox onClick={() => setModalAddSomIsOpen(true)} size={25} />
        </button>
      </HeaderContainer>

      <hr />

      <BodyContainer>

        <h1>{path}</h1>

        {(folderOpened && folderOpened.name != 'sound') && 
          <Folder onClick={() => handleOpenFolder('prev', folderOpened)}>
            <FcOpenedFolder size={50} />
            <p>Voltar</p>
          </Folder>
        }

        {!itemOpened && <>
          { 
            folderOpened?.prefixes && folderOpened.prefixes.map((folder, i) => (
              <Folder key={i} onClick={() => handleOpenFolder('next', folder)}>
                <FcOpenedFolder size={50} />
                <p>{folder.name}</p>
              </Folder>
            ))
          }
          
          { 
            folderOpened?.items && folderOpened.items.map((item, i) => (
              <Folder key={i} onClick={() => handleOpenItem(item)}>
                <FiMusic size={50} />
                <p>{item.name}</p>
              </Folder>
            ))
          }
        </>}

        {(itemOpened && audioUrl) &&
          <MusicControl audioUrl={audioUrl}/>
        }

      </BodyContainer>

    </Container>
  );
}