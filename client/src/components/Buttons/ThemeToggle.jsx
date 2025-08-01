import { useEffect, useState } from "react";
import styles from "/src/styles/button.module.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      id="toggle-theme"
      title="Zmień motyw"
      onClick={toggleTheme}
      className={styles.button}
    >
      <i className={`fa-solid ${theme === "dark" ? "fa-moon" : "fa-sun"}`}></i>
    </button>
  );
}
