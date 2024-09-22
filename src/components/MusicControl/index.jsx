import { useEffect, useRef, useState } from 'react';
import { GoMute, GoUnmute } from 'react-icons/go';
import { io } from 'socket.io-client';
import { api } from '../../services/api';
import { Container } from './styles';

const socket = io(api.defaults.baseURL);

export function MusicControl({ audioUrl, ...rest }) {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!audioUrl) return;

    audioRef.current.volume = 1/30;
    audioRef.current.play()
    socket.emit('audio-volume', { audioUrl, volume: 1/30 });
  }, [audioUrl])

  const handlePlayAudio = () => {
    socket.emit('audio-play', { audioUrl, currentTime: audioRef.current.currentTime });
  };

  const handlePauseAudio = () => {
    socket.emit('audio-pause', { audioUrl, currentTime: audioRef.current.currentTime });
  };

  const handleVolumeChange = (volume) => {
    audioRef.current.volume = volume / 30;
    socket.emit('audio-volume', { audioUrl, volume: volume / 30});
  };

  const handleMute = () => {

    setMuted(!muted);

    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
    }

    if (audioRef.current.muted) {
      socket.emit('audio-volume', { audioUrl, volume: 0});
    } else {
      socket.emit('audio-volume', { audioUrl, volume: audioRef.current.volume});
    }
  }

  return (
    <Container>
      <audio
        ref={audioRef}
        onPlay={handlePlayAudio}
        onPause={handlePauseAudio}
        controls
        loop
        {...rest}
        >
        <source src={audioUrl} type="audio/mpeg"/>
      </audio>
      <input type="range" onChange={(e) => handleVolumeChange(e.target.value)} min={0} max={1} step={0.01} defaultValue={1}/>
      <button onClick={handleMute}>
        {muted ? 
          <GoMute size={22}/> 
          :
          <GoUnmute size={22}/>
        }
      </button>
    </Container>
  );
}
