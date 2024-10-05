import { createContext, ReactNode, useRef } from "react";
import { getAudio } from "../util/requests";

interface AudioContextType {
  playAudio: (frase: string) => void;
}

const defaultValue: AudioContextType = {
  playAudio: () => {},
};

export const AudioContext = createContext<AudioContextType>(defaultValue);

export function AudioContextProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(new Audio());

  async function playAudio(audioId: string) {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;

    try {
      const url = await getAudio(audioId);
      audioRef.current.src = url;
      audioRef.current.play();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AudioContext.Provider value={{ playAudio }}>
      {children}
    </AudioContext.Provider>
  );
}
