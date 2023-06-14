import React, { useRef, useEffect } from 'react';
import videojs from 'video.js';
import '@videojs/themes/dist/sea/index.css';
import 'video.js/dist/video-js.css';
import '../../custom.scss';
import s from './Video.module.css';

const Video = ({ options }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  useEffect(() => {
    const player = playerRef.current;
    if (!player) {
      const videoElement = videoRef.current;
      if (!videoElement) return;
      playerRef.current = videojs(videoElement, options);
    }
    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [options, videoRef, playerRef]);

  return (
    // <div data-vjs-player className={s.box}>
    <div className={s.box}>
      <video
        ref={videoRef}
        className={'video-js vjs-big-play-cenetred vjs-theme-sea'}
        width={500}
      />
    </div>
  );
};

export default Video;
