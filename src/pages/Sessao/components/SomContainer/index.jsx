import { deleteObject, getDownloadURL, listAll, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { FcOpenedFolder } from 'react-icons/fc';
import { MdOutlineAddBox } from "react-icons/md";
import { TbPlayerPlay } from "react-icons/tb";
import { ButtonDelete } from '../../../../components/ButtonDelete';
import { Modal } from '../../../../components/Modals/Modal';
import { MusicControl } from '../../../../components/MusicControl';
import { storage } from '../../../../firebase.config';
import { ModalAddSom } from './ModalAddSom';
import { BodyContainer, Container, Folder, HeaderContainer, Item } from './styles';

export function SomContainer() {

  const [prevFolder, setPrevFolder] = useState([])
  const [folderOpened, setFolderOpened] = useState(null)
  const [itemOpened, setItemOpened] = useState(null)
  const [path, setPath] = useState('sound')
  const [openedIndex, setOpenedIndex] = useState(0)
  const [audioUrl, setAudioUrl] = useState(null)

  const [modalAddSomIsOpen, setModalAddSomIsOpen] = useState(false)

  useEffect(() => {

    setPath('sound')
    setOpenedIndex(0)
    setPrevFolder([])
    setItemOpened(null)
    setAudioUrl(null)

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

  const deleteFile = async (item) => {
    const fileRef = ref(storage, item.fullPath);

    folderOpened.items.filter(file => file.name !== item.name)
    folderOpened.items.map(file => file)
    setFolderOpened(folderOpened)
  
    try {
      await deleteObject(fileRef);
      console.log('Arquivo deletado com sucesso');
    } catch (error) {
      console.error('Erro ao deletar o arquivo:', error);
    }
  };

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

        <div>

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
                <Item key={i}>
                  <ButtonDelete size={20} className='delete' onClick={() => deleteFile(item)}/>
                  <button className='button' onClick={() => handleOpenItem(item)}>
                    <TbPlayerPlay size={40}/>
                    <p style={{position: 'relative', top: 5}}>{item.name}</p>
                  </button>
                </Item>
              ))
            }
          </>}

          {(itemOpened && audioUrl) &&
            <MusicControl audioUrl={audioUrl}/>
          }

        </div>
      </BodyContainer>

    </Container>
  );
}