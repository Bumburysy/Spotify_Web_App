import ThemeToggle from "../Buttons/ThemeToggle";
import ToggleParticles from "../Buttons/ParticlesToggle";
import BackToTopButton from "../Buttons/BackToTopButton";
import MusicPlayer from "../Hooks/MusicPlayerProvider";

export default function TopbarButtons({ particlesOn, setParticlesOn }) {
  return (
    <div id="topbar-buttons">
      <ThemeToggle />
      <ToggleParticles particlesOn={particlesOn} setParticlesOn={setParticlesOn} />
      <BackToTopButton />
      <MusicPlayer />
    </div>
  );
}

