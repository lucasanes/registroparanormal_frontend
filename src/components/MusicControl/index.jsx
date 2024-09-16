import { useRef } from 'react';
import { io } from 'socket.io-client';
import { api } from '../../services/api';

const socket = io(api.defaults.baseURL);

export function MusicControl({ audioUrl, ...rest }) {
  const audioRef = useRef(null);

  const handlePlayAudio = () => {
    console.log('emitindo play')
    socket.emit('audio-play', { audioUrl, currentTime: audioRef.current.currentTime });
  };

  const handlePauseAudio = () => {
    console.log('emitindo pause')
    socket.emit('audio-pause', { audioUrl, currentTime: audioRef.current.currentTime });
  };

  const handleVolumeChange = () => {
    console.log('emitindo volume')
    socket.emit('audio-volume', { audioUrl, volume: audioRef.current.volume });
  };

  // const handleDurationChange = () => {
  //   console.log('emitindo duration')
  //   socket.emit('audio-duration', { audioUrl, currentTime: audioRef.current.currentTime });
  // };

  return (
    <audio
      ref={audioRef}
      onPlay={handlePlayAudio}
      onPause={handlePauseAudio}
      onVolumeChange={(e) => handleVolumeChange(e.target.volume)}
      // onTimeUpdate={(e) => handleDurationChange(e.target.currentTime)}
      controls
      {...rest}
    >
      <source src={audioUrl} type="audio/mpeg" />
    </audio>
  );
}
