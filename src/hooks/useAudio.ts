import { useContext } from "react";
import { AudioContext } from "../context/AudioContext";

export function useAudio() {
  return useContext(AudioContext);
}
