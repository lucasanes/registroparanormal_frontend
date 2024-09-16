import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { api } from '../../services/api';

const socket = io(api.defaults.baseURL);

export function MusicPlayer() {
  const audioRef = useRef(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // socket.on('audio-duration', (data) => {
    //   audioRef.current.currentTime = data.currentTime; 
    // });

    socket.on('audio-play', (data) => {
      console.log('recebendo play');
      setAudioUrl(data.audioUrl);
      audioRef.current.currentTime = data.currentTime;
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error('Erro ao tentar reproduzir o áudio:', error);
        });
      }
    });

    socket.on('audio-pause', (data) => {
      console.log('recebendo pause');
      audioRef.current.currentTime = data.currentTime;
      audioRef.current.pause();
    });

    socket.on('audio-volume', (data) => {
      console.log('recebendo volume');
      audioRef.current.volume = data.volume; // Sincroniza o volume
    });

    return () => {
      socket.off('audio-duration');
      socket.off('audio-play');
      socket.off('audio-pause');
      socket.off('audio-volume');
    };
  }, [isPlaying]);

  const handlePlayButtonClick = () => {
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error('Erro ao tentar reproduzir o áudio:', error);
      });
      audioRef.current.pause().catch(error => {
        console.error('Erro ao tentar pausar o áudio:', error);
      });
    }
  };

  return (
    <div>
      <audio ref={audioRef} src={audioUrl} />
      {!isPlaying && (
        <button onClick={handlePlayButtonClick}>Ativar Soundpad</button>
      )}
    </div>
  );
}