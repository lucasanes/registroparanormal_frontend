import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { api } from '../../services/api';

const socket = io(api.defaults.baseURL);

export function MusicControl({ audioUrl, ...rest }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioUrl) return;

    audioRef.current.play()
  }, [audioUrl])

  const handlePlayAudio = () => {
    socket.emit('audio-play', { audioUrl, currentTime: audioRef.current.currentTime });
  };

  const handlePauseAudio = () => {
    socket.emit('audio-pause', { audioUrl, currentTime: audioRef.current.currentTime });
  };

  const handleVolumeChange = () => {
    if (audioRef.current.muted) {
      socket.emit('audio-volume', { audioUrl, volume: 0});
    } else {
      socket.emit('audio-volume', { audioUrl, volume: audioRef.current.volume / 100});
    }
  };

  return (
    <audio
      style={{marginBottom: '4rem'}}
      ref={audioRef}
      onPlay={handlePlayAudio}
      onPause={handlePauseAudio}
      onVolumeChange={handleVolumeChange}
      controls
      loop
      {...rest}
    >
      <source src={audioUrl} type="audio/mpeg"/>
    </audio>
  );
}
