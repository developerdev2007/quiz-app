import { useEffect, useState } from "react";

export const useSound = (soundFile: string) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const newAudio = new Audio(soundFile);
    setAudio(newAudio);
  }, [soundFile]);

  const playSound = () => {
    if (audio) {
      audio.currentTime = 0; // Restart sound if already playing
      audio.play();
    }
  };

  return playSound;
};
