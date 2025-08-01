import { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "/src/styles/sideBar.module.css";

const sectionIds = [
  "intro",
  "czym-jest",
  "problematyka",
  "nasze-rozwiazanie",
  "technologie-i-integracje",
  "funkcjonalnosci",
  "jak-dziala",
  "dlaczego-warto",
  "dla-kogo",
  "potencjalna-rozbudowa",
  "status-projektu",
  "faq",
  "kontakt",
  "dolacz",
];

export default function Sidebar({ isOpen }) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 183;
      let currentId = "";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop =
            section.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= sectionTop) {
            currentId = id;
          }
        }
      }

      if (currentId) {
        setActiveSection(currentId);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      id="sidebar"
      className={classNames(styles.sidebar, { [styles.active]: isOpen })}
    >
      <nav>
        {sectionIds.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={classNames(styles.link, {
              [styles.activeLink]: activeSection === id,
            })}
          >
            {formatLinkText(id)}
          </a>
        ))}
      </nav>
    </aside>
  );
}

function formatLinkText(id) {
  const map = {
    intro: "Intro",
    "czym-jest": "Czym jest SpotiTools?",
    problematyka: "Problematyka",
    "nasze-rozwiazanie": "Nasze rozwiązanie",
    "technologie-i-integracje": "Technologie",
    funkcjonalnosci: "Funkcje",
    "jak-dziala": "Jak działa?",
    "dlaczego-warto": "Dlaczego my?",
    "dla-kogo": "Dla kogo?",
    "potencjalna-rozbudowa": "Rozbudowa",
    "status-projektu": "Status",
    faq: "FAQ",
    kontakt: "Kontakt",
    dolacz: "Dołącz teraz!",
  };
  return map[id] || id;
}
