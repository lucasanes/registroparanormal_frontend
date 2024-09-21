import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useRef, useState } from 'react';
import { storage } from '../../firebase.config';
import { InputB, Progress, ProgressBar, SpanMsg } from "./styles";

export function SoundUploader({ onSoundUpload, path, name }) {

  const [file, setFile] = useState(undefined);
  const [msg, setMsg] = useState('Enviar Som')

  const progress = useRef(null)

  const handleSoundUpload = async (e) => {

    setFile(undefined);

    const file = e.target.files[0];
    if (!file) return;

    setFile(file);

    const storageRef = ref(storage, `sound/${path}/${name}`);
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
          onSoundUpload(downloadURL);
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
      <input type="file" style={{display: 'none'}} accept="audio/mpeg, audio/x-m4a" onChange={handleSoundUpload} />
    </InputB>
  );
}
