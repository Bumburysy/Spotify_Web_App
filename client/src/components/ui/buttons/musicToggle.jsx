import styles from "./button.module.css";

export default function MusicToggle({ audioRef, isPlaying, setIsPlaying }) {
  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      try {
        await audio.play();
      } catch (err) {
        console.warn("Autoplay disabled:", err);
      }
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <button
      id="toggle-music"
      title="Włącz/wyłącz muzykę"
      onClick={toggleMusic}
      aria-pressed={isPlaying}
      className={styles.button}
    >
      <i
        className={`fa-solid ${
          isPlaying ? "fa-volume-high" : "fa-volume-xmark"
        }`}
      ></i>
    </button>
  );
}
