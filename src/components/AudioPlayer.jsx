// AudioPlayer.js
import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Button} from "react-bootstrap";

const AudioPlayer = ({ currentSongIndex,songs,songLink, onPrevious, onNext }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const currentSong = songs[currentSongIndex];
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    onPrevious();
    setIsPlaying(true); // Start playing the new song
  };

  const handleNext = () => {
    onNext();
    setIsPlaying(true); // Start playing the new song
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    setCurrentTime(seekTime);
    audioRef.current.currentTime = seekTime;
  };

  return (
    <div className=' shadow p-3 my-3' style={{borderRadius:"10px"}}>
      <audio ref={audioRef} src={songLink || ''} onTimeUpdate={handleTimeUpdate}></audio>
      <div>
        <input type="range" value={currentTime}  style={{width:"100%"}} max={audioRef.current?.duration || 0} onChange={handleSeek} />
      </div>
      
      <div className="d-flex justify-content-between" style={{width:"100%"}}>
       
        {currentSong && (
        
        <span>
            <img
              src={currentSong.uploadSongImage}
              alt={`Song ${currentSong.id}`}
              style={{ maxWidth: '50px', maxHeight: '50px' }}
            />
            <span className='px-3'>{currentSong.name}</span>
          </span>
        )}
        <span>
        <Button className='px-2 bg-white text-dark border-white' onClick={handlePrevious}>{"⏮"}</Button>
        <Button className='px-2 bg-white text-dark border-white' onClick={handlePlayPause}>{isPlaying ? '▐▐' : '▶'}</Button>
        <Button className='px-2 bg-white text-dark border-white' onClick={handleNext}>{"⏭"}</Button>
        </span>

      </div>

    
    </div>
  );
};

AudioPlayer.propTypes = {
  songs: PropTypes.array.isRequired,
  songLink: PropTypes.string.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  currentSongIndex: PropTypes.number.isRequired,
};

export default AudioPlayer;
