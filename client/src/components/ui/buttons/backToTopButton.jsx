import { useEffect } from "react";
import styles from "./button.module.css";

export default function BackToTopButton() {
  useEffect(() => {
    const handleScroll = () => {
      const btn = document.getElementById("back-to-top");
      if (!btn) return;
      if (window.scrollY > 300) {
        btn.classList.add("show");
      } else {
        btn.classList.remove("show");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    document
      .getElementById("main-header")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      id="back-to-top"
      title="Do góry"
      aria-label="Do góry"
      onClick={handleClick}
      className={styles.button}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}
