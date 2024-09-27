import { useRef, useState } from 'react';
import { GoMute, GoUnmute } from 'react-icons/go';
import { IoPauseCircleOutline, IoPlayCircleOutline } from 'react-icons/io5';
import { io } from 'socket.io-client';
import { api } from '../../services/api';
import * as S from './styles';

const socket = io(api.defaults.baseURL);

export function MusicControl({ audioUrl, ...rest }) {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [paused, setPaused] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showVolume, setShowVolume] = useState(false);

  const musicPercentageLocalStorage = localStorage.getItem('@registroparanormal:musicPercentage');

  const musicPercentage = musicPercentageLocalStorage ? musicPercentageLocalStorage : 10;

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
    <S.Container>
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

      <S.Top>
        <S.Play
          color='secondary'
          disabled={!audioUrl}
          onClick={() => {
            if (paused) {
              audioRef.current.play();
            } else {
              audioRef.current.pause();
            }
          }
        }>{paused ? <IoPlayCircleOutline size={25}/> : <IoPauseCircleOutline size={25}/>}</S.Play>

        <S.Volume onMouseEnter={() => setShowVolume(true)} onMouseLeave={() => setShowVolume(false)}>
          <S.Mute
            disabled={!audioUrl} 
            onClick={handleMute}
          >
            {muted ? 
              <GoMute size={25}/> 
              :
              <GoUnmute size={25}/>
            }
          </S.Mute>
          {showVolume && <S.VolumeSlider color='secondary' size='md' minValue={0} maxValue={1} step={0.01} defaultValue={1} onChange={(value) => handleVolumeChange(value)}/>}
        </S.Volume>

      </S.Top>

      <S.Bottom>
        <S.Time>
          <S.TimeText>{formatTime(currentTime)}</S.TimeText>
          <S.TimeSlider color='secondary' size='md' minValue={0} value={currentTime} maxValue={duration} step={1} defaultValue={0} onChange={(value) => handleTimeChange(value)}/>
          <S.TimeText>{formatTime(duration)}</S.TimeText>
        </S.Time>
      </S.Bottom>

     
    </S.Container>
  );
}
