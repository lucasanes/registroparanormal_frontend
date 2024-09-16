import { useRef } from 'react';
import { io } from 'socket.io-client';
import { api } from '../../services/api';

const socket = io(api.defaults.baseURL);

export function MusicControl({ audioUrl, ...rest }) {
  const audioRef = useRef(null);

  const handlePlayAudio = () => {
    socket.emit('audio-play', { audioUrl, currentTime: audioRef.current.currentTime });
  };

  const handlePauseAudio = () => {
    socket.emit('audio-pause', { audioUrl, currentTime: audioRef.current.currentTime });
  };

  const handleVolumeChange = () => {
    console.log('emitindo volume', audioRef.current.volume)
    socket.emit('audio-volume', { audioUrl, volume: audioRef.current.volume });
  };

  return (
    <audio
      ref={audioRef}
      onPlay={handlePlayAudio}
      onPause={handlePauseAudio}
      onVolumeChange={(e) => handleVolumeChange(e.target.volume)}
      controls
      {...rest}
    >
      <source src={audioUrl} type="audio/mpeg" />
    </audio>
  );
}
