import { useRef, useState, useEffect } from "react";
import styles from "/src/styles/search.module.css";

export default function SearchBox() {
  const inputRef = useRef(null);
  const [matches, setMatches] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastQuery, setLastQuery] = useState("");

  const performSearch = () => {
    const query = inputRef.current.value.trim().toLowerCase();
    if (!query) {
      setMatches([]);
      setCurrentIndex(0);
      return;
    }

    if (query !== lastQuery) {
      const allSections = [...document.querySelectorAll("section")];
      const matched = allSections.filter((section) =>
        section.textContent.toLowerCase().includes(query)
      );

      if (matched.length === 0) {
        alert(`Nie znaleziono treści zawierającej: "${query}"`);
        setMatches([]);
        setCurrentIndex(0);
        setLastQuery("");
        return;
      }

      setMatches(matched);
      setCurrentIndex(0);
      setLastQuery(query);
      matched[0].scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (matches.length > 1) {
      const nextIndex = (currentIndex + 1) % matches.length;
      setCurrentIndex(nextIndex);
      matches[nextIndex].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      performSearch();
    }
  };

  useEffect(() => {
    const inputEl = inputRef.current;
    const handler = () => {
      setLastQuery("");
      setCurrentIndex(0);
      setMatches([]);
    };

    inputEl.addEventListener("input", handler);
    return () => inputEl.removeEventListener("input", handler);
  }, []);

  return (
    <div className={styles.search}>
      <input
        type="text"
        id="search-input"
        ref={inputRef}
        placeholder="Szukaj..."
        className={styles.input}
      />
      <button className={styles.button} title="Szukaj" onClick={performSearch}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}
