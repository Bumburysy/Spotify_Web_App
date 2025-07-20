import { useRef, useState } from "react";
import MusicToggle from "../Buttons/MusicToggle";
import VolumeSlider from "../Buttons/VolumeSlider";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <audio
        id="bg-music"
        ref={audioRef}
        loop
        src="./public/GTA Vice City - Introduction Theme [REMASTERED & EXTENDED].mp3"
      />

      <MusicToggle
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <VolumeSlider audioRef={audioRef} />
    </>
  );
}
