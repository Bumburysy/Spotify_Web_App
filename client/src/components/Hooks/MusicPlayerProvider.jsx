import { useRef, useState } from "react";
import MusicToggle from "../ui/buttons/musicToggle.jsx";
import VolumeSlider from "../ui/buttons/volumeSlider.jsx";
import Music from "@/assets/homePageMusic.mp3";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <audio id="bg-music" ref={audioRef} loop src={Music} />

      <MusicToggle
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <VolumeSlider audioRef={audioRef} />
    </>
  );
}
