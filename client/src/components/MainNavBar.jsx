import styles from "../styles/mainNavBar.module.css";
import ThemeToggle from "./Buttons/ThemeToggle";
import BackToTopButton from "./Buttons/BackToTopButton";

export default function MainNavBar() {
  return (
    <header className={styles.container}>
      <div className={styles.logoSection}>
        <img
          className={styles.imgLogo}
          src="/src/assets/logo.png"
          alt="Logo SpotiTools"
        />
        <h2 className={styles.logoText}>SpotiTools</h2>
      </div>

      <nav className={styles.centerNav}>
        <a href="/" role="button">
          O Aplikacji
        </a>
        <a href="/dashboard" role="button">
          Strona Główna
        </a>

        <div className={styles.dropdown}>
          <a className={styles.dropdownButton} role="button">
            Moduły
          </a>
          <div className={styles.dropdownContent}>
            <a href="#modul1">Moduł 1</a>
            <a href="#modul2">Moduł 2</a>
            <a href="#modul3">Moduł 3</a>
            <a href="#modul4">Moduł 4</a>
            <a href="#modul5">Moduł 5</a>
          </div>
        </div>
      </nav>

      <nav className={styles.nav}>
        <ThemeToggle />
        <BackToTopButton />
        <a href="Info" role="button">
          Zaloguj
        </a>
        <a href="Info" role="button">
          Zarejestruj
        </a>
      </nav>
    </header>
  );
}

/*
ToDo:
    Główny panel nawigacyjny widoczny na wszystkich widokach
    - logo, nazwa aplikacji po lewej,
    - odnośnik do strony informacyjnej,
    - powrót do strony głównej (obecna strona),
    - rozwijana lista modułów,
    - przycisk zaloguj/wyloguj i zarejestruj, 
    - info o obecnie zalogowanym użytkowniku (lub napis niezalogowany),
    - przyciski zmiany motywu,
    - przycisk powrotu na górę

    Logika przycisków, linki, przekierowania, informacje o zalogowanym użytkowniku do implementacji.
*/
