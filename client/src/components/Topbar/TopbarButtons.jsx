import ThemeToggle from "../Buttons/ThemeToggle";
import ToggleParticles from "../Buttons/ParticlesToggle";
import BackToTopButton from "../Buttons/BackToTopButton";
import MusicPlayer from "../Hooks/MusicPlayerProvider";
import styles from "/src/styles/topBarButtons.module.css";

export default function TopbarButtons({ particlesOn, setParticlesOn }) {
  return (
    <div className={styles.topBarButtons}>
      <ThemeToggle />
      <ToggleParticles
        particlesOn={particlesOn}
        setParticlesOn={setParticlesOn}
      />
      <BackToTopButton />
      <MusicPlayer />
    </div>
  );
}
