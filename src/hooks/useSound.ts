import { useEffect, useRef } from "react";

export const useSound = (soundFile: string) => {
  const audioRef = useRef(new Audio(soundFile));

  useEffect(() => {
    audioRef.current = new Audio(soundFile); // Ensure audio updates if soundFile changes
  }, [soundFile]);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.pause(); // Stop any previous playback
      audioRef.current.currentTime = 0; // Restart sound
      audioRef.current
        .play()
        .catch((error) => console.error("Audio play failed:", error));
    }
  };

  return playSound;
};
