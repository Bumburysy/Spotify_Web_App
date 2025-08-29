import styles from "./navBar.module.css";
import ThemeToggle from "../ui/buttons/themeToggle.jsx";
import Login from "../hooks/loginWithSpotify.jsx";
import Logo from "@/assets/logoOld.png";

export default function MainNavBar({ isAuthenticated, user, handleLogout }) {
  return (
    <header className={styles.container}>
      <div className={styles.logoSection}>
        <img className={styles.imgLogo} src={Logo} alt="Logo SpotiTools" />
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
        {isAuthenticated ? (
          <div className={styles.userInfo}>
            {user?.images?.[0]?.url && (
              <img
                src={user.images[0].url}
                alt="avatar"
                className={styles.avatar}
              />
            )}
            <h2 className={styles.logoText}>
              {user?.display_name || "Nieznany użytkownik"}
            </h2>
            <a onClick={handleLogout} role="button">
              Wyloguj
            </a>
          </div>
        ) : (
          <>
            <Login />
            <a href="https://www.spotify.com/signup" role="button">
              Zarejestruj
            </a>
          </>
        )}
      </nav>
    </header>
  );
}
