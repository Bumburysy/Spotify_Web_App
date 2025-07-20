import { useEffect, useRef } from "react";

const particleColors = [
  "var(--color-base)",
  "var(--color-primary)",
  "var(--color-secondary)",
];

export default function Particles({ isActive }) {
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isActive) {
      clearInterval(intervalRef.current);
      if (containerRef.current) containerRef.current.style.display = "none";
      return;
    }

    if (containerRef.current) containerRef.current.style.display = "";

    function createParticle() {
      const p = document.createElement("div");
      const size = Math.random() * 6 + 3;
      p.className = "particle";
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${Math.random() * 100}vw`;
      p.style.top = "-20px";
      p.style.background =
        particleColors[Math.floor(Math.random() * particleColors.length)];
      p.style.boxShadow = `0 0 ${size * 4}px ${size * 1.5}px ${p.style.background}, 0 0 2px 1px #fff8`;
      p.style.animation = `particleMoveDown ${4 + Math.random() * 4}s linear forwards`;
      p.style.opacity = 0.7 + Math.random() * 0.3;
      containerRef.current.appendChild(p);
      setTimeout(() => p.remove(), 9000);
    }

    intervalRef.current = setInterval(createParticle, 220);

    return () => clearInterval(intervalRef.current);
  }, [isActive]);

  return <div id="particles" ref={containerRef}></div>;
}
