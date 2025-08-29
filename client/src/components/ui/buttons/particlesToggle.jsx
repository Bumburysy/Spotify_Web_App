import styles from "./button.module.css";

export default function ParticlesToggle({ particlesOn, setParticlesOn }) {
  const particlesToggle = () => {
    setParticlesOn((prev) => !prev);
  };

  return (
    <button
      id="toggle-particles"
      title="Włącz/wyłącz iskierki"
      onClick={particlesToggle}
      aria-pressed={particlesOn}
      className={styles.button}
    >
      <i
        className={`fa-solid ${
          particlesOn ? "fa-wand-magic-sparkles" : "fa-wand-magic"
        }`}
      ></i>
    </button>
  );
}
