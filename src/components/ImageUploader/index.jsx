import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useRef, useState } from 'react';
import { useParams } from "react-router-dom";
import { storage } from '../../firebase.config';
import { useAuth } from '../../hooks/useAuth';
import { InputB, Progress, ProgressBar, SpanMsg } from "./styles";

export function ImageUploader({ onImageUpload }) {

  const {id} = useParams()

  const [file, setFile] = useState(undefined);
  const [msg, setMsg] = useState('Enviar Foto')

  const {user} = useAuth()

  const progress = useRef(null)

  const handleImageUpload = async (e) => {

    setFile(undefined);

    const file = e.target.files[0];
    if (!file) return;

    setFile(file);

    const storageRef = ref(storage, `site/${user.username}/${id}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        setMsg('Aguarde...')
        progress.current.style.width = (snapshot.bytesTransferred / snapshot.totalBytes) * 100 + '%'
      },
      (err) => {
        progress.current.style.width = '0%'
        setMsg('Erro!')
        console.log(err)
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          onImageUpload(downloadURL);
        } catch (err) {
          progress.current.style.width = '0%'
          setMsg('Erro ao adquirir link do arquivo!')
          console.log(err)
        } finally {
          setMsg('Enviado!');
        }
      }
    );
  };

  return (
    <InputB progresso={!file && 'ni'}>
      <SpanMsg msg={msg == 'Erro!' ? 'erro' : msg == 'Enviado!' && 'enviado' } className="msg">{msg}</SpanMsg>
      <ProgressBar progresso={!file && 'ni'}>
        <Progress ref={progress} progresso={msg == 'Enviado!' ? 'f' : 'i'}/>
      </ProgressBar>
      <input type="file" style={{display: 'none'}} accept="image/*,video/*" onChange={handleImageUpload} />
    </InputB>
  );
}
