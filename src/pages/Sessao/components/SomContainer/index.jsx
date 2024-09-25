import { Spinner } from '@nextui-org/react';
import { deleteObject, getDownloadURL, listAll, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { FcOpenedFolder } from 'react-icons/fc';
import { MdOutlineAddBox } from "react-icons/md";
import { TbPlayerPlay } from "react-icons/tb";
import { io } from 'socket.io-client';
import { ButtonDelete } from '../../../../components/ButtonDelete';
import { Modal } from '../../../../components/Modals/Modal';
import { MusicControl } from '../../../../components/MusicControl';
import { storage } from '../../../../firebase.config';
import { api } from '../../../../services/api';
import { ModalAddSom } from './ModalAddSom';
import { BodyContainer, Container, Folder, HeaderContainer, Item } from './styles';

const socket = io(api.defaults.baseURL);

export function SomContainer() {

  const [prevFolder, setPrevFolder] = useState([])
  const [folderOpened, setFolderOpened] = useState(null)
  const [itemOpened, setItemOpened] = useState(null)
  const [path, setPath] = useState('sound')
  const [openedIndex, setOpenedIndex] = useState(0)
  const [audioUrl, setAudioUrl] = useState(null)

  const [modalAddSomIsOpen, setModalAddSomIsOpen] = useState(false)

  const [loading, setLoading] = useState(false)

  async function fetchData() {
    
    setLoading(true)
    
    setItemOpened(null)
    setAudioUrl(null)

    try {
      const getFoldersRef = ref(storage, 'sound/');
      const response = await fetchFoldersAndFiles(getFoldersRef);

      if (path != 'sound') {
        const currentFolder = currentFolderOpened(response)

        setFolderOpened(currentFolder)
      } else {
        setFolderOpened(response)
      }

    } catch (e) {
      console.error('Erro ao buscar os arquivos:', e);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const currentFolderOpened = (response) => {

    const pathArray = path.split(' > ').slice(1)

    if (pathArray.length === 1) {
      setPrevFolder([response])
      return response.prefixes.find(folder => folder.name === pathArray[0])
    }

    const firstFolderData = response.prefixes.find(folder => folder.name === pathArray[0])
    setPrevFolder([response, firstFolderData])

    return firstFolderData.prefixes[0]

  };

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
    }

    if (to === 'next') {
      setOpenedIndex(openedIndex + 1)
      setPath(`${path} > ${folder.name}`)
      setPrevFolder(prev => [...prev, folderOpened])
      setFolderOpened(folder)
    }

  }

  const handleOpenItem = async (item) => {

    if (itemOpened && itemOpened.name === item.name) {
      setItemOpened(null)
      setAudioUrl(null)
      socket.emit('audio-pause', { audioUrl, currentTime: 0 });
      return
    }

    setItemOpened(item)
    const url = await getDownloadURL(ref(storage, item.fullPath))
    setAudioUrl(url)
    socket.emit('audio-play', { audioUrl: url, currentTime: 0 });

    if (itemOpened && itemOpened.name !== item.name) {
      socket.emit('audio-play', { audioUrl: url, currentTime: 0 });
    }
  }

  const deleteFile = async (item) => {
    const fileRef = ref(storage, item.fullPath);

    try {
      await deleteObject(fileRef);
      fetchData();
    } catch (error) {
      console.error('Erro ao deletar o arquivo:', error);
    }
  };

  return (
    <Container>

      <Modal isOpen={modalAddSomIsOpen} setClose={() => setModalAddSomIsOpen(false)}>
        <ModalAddSom fetchData={fetchData} setModalClose={() => setModalAddSomIsOpen(false)} currentPath={
          path.split(' > ').slice(1).join('/').toString()
        }/>
      </Modal>

      <HeaderContainer>
        <h1>Soundpad</h1>
        <button>
          <MdOutlineAddBox onClick={() => {
            if (path != 'sound') {
              setModalAddSomIsOpen(true)
            }
          }} size={25} />
        </button>
      </HeaderContainer>

      <hr />

      <BodyContainer>

        {loading ? <Spinner style={{margin: '3rem'}} size='lg' color='secondary'/> : <>
        
          <MusicControl key={audioUrl} audioUrl={audioUrl}/>
          
          <h1>{path} {itemOpened ? ` > ${itemOpened.name}.mp3` : null}</h1>

        </>}

        <div className='div'>

          {(folderOpened && folderOpened.name != 'sound') && 
            <Folder onClick={() => handleOpenFolder('prev', folderOpened)}>
              <FcOpenedFolder size={50} />
              <p>Voltar</p>
            </Folder>
          }

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

        </div>
      </BodyContainer>

    </Container>
  );
}