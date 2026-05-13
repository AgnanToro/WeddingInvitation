'use client';

import { useEffect, useRef, useState } from 'react';

type BackgroundMusicProps = {
  active: boolean;
  src?: string;
};

export default function BackgroundMusic({ active, src = '/music.mp3' }: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!active) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    const playPromise = audio.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {
        setIsPlaying(false);
      });
    } else {
      setIsPlaying(!audio.paused);
    }

    const handleFirstInteraction = () => {
      if (!audio.paused) return;
      const interactionPlay = audio.play();
      if (interactionPlay && typeof interactionPlay.then === 'function') {
        interactionPlay
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      } else {
        setIsPlaying(true);
      }
    };

    window.addEventListener('pointerdown', handleFirstInteraction, { once: true });
    window.addEventListener('keydown', handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
  }, [active]);

  return (
    <audio ref={audioRef} src={src} loop preload="metadata" />
  );
}
