import ThemeToggle from "../buttons/themeToggle.jsx";
import ToggleParticles from "../buttons/particlesToggle.jsx";
import BackToTopButton from "../buttons/backToTopButton.jsx";
import MusicPlayer from "@/components/hooks/musicPlayerProvider.jsx";
import styles from "./topBarButtons.module.css";

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
