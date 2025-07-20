export default function VolumeSlider({ audioRef }) {
  const handleVolumeChange = (e) => {
    const volume = e.target.value;
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  };

  return (
    <input
      type="range"
      id="volume-slider"
      min="0"
      max="1"
      step="0.01"
      defaultValue="1"
      onInput={handleVolumeChange}
      title="Głośność"
    />
  );
}
