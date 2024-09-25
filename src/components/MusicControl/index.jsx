import { Button, Slider } from '@nextui-org/react';
import { useRef, useState } from 'react';
import { GoMute, GoUnmute } from 'react-icons/go';
import { IoPauseCircleOutline, IoPlayCircleOutline } from 'react-icons/io5';
import { io } from 'socket.io-client';
import { api } from '../../services/api';
import { Container } from './styles';

const socket = io(api.defaults.baseURL);

export function MusicControl({ audioUrl, ...rest }) {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [paused, setPaused] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const musicPercentage = 20

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  };

  const handleLoadedMetadata = () => {
    if (!audioUrl) return;

    audioRef.current.volume = 1 / musicPercentage;
    audioRef.current.play()
    setPaused(false);
    socket.emit('audio-volume', { audioUrl, volume: 1 / musicPercentage });
    setDuration(audioRef.current.duration);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  }

  const handleTimeChange = (value) => {
    audioRef.current.currentTime = value;
    setCurrentTime(value);
    socket.emit('audio-play', { audioUrl, currentTime: value });
  }

  const handlePlayAudio = () => {
    setPaused(false);
    socket.emit('audio-play', { audioUrl, currentTime: audioRef.current.currentTime });
  };

  const handlePauseAudio = () => {
    setPaused(true);
    socket.emit('audio-pause', { audioUrl, currentTime: audioRef.current.currentTime });
  }

  const handleVolumeChange = (volume) => {
    audioRef.current.volume = volume / musicPercentage;
    socket.emit('audio-volume', { audioUrl, volume: volume / musicPercentage});
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
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={handlePlayAudio}
        onPause={handlePauseAudio}
        onTimeUpdate={handleTimeUpdate}
        loop
        >
        <source src={audioUrl} type="audio/mpeg"/>
      </audio>

      <Button
        onPress={() => {
          if (paused) {
            audioRef.current.play();
          } else {
            audioRef.current.pause();
          }
        }
      }>{paused ? <IoPlayCircleOutline size={30}/> : <IoPauseCircleOutline size={30}/>}</Button>
      <div style={{display: 'flex'}}>
        <span>{formatTime(currentTime)}</span>
        <Slider color='foreground' size='md' minValue={0} value={currentTime} maxValue={duration} step={1} defaultValue={0} onChange={(value) => handleTimeChange(value)}/>
        <span>{formatTime(duration)}</span>
      </div>
      <Slider size='lg' style={{height: 100}} orientation='vertical' minValue={0} maxValue={1} step={0.01} defaultValue={1} onChange={(value) => handleVolumeChange(value)}/>
      <Button onPress={handleMute}>
        {muted ? 
          <GoMute size={22}/> 
          :
          <GoUnmute size={22}/>
        }
      </Button>
    </Container>
  );
}
