import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "./Preloader";
import Footer from "./Footer.jsx";
import NavBar from "../components/MainNavBar.jsx";
import styles from "../styles/dashboard.module.css";
import Login from "../components/LoginWithSpotify.jsx";

export default function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    document.title = "Panel użytkownika — SpotiTools";
    const token = localStorage.getItem("accessToken");

    if (token) {
      setIsAuthenticated(true);

      // Pobieramy dane użytkownika z API Spotify
      fetch("https://api.spotify.com/v1/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => {
          if (!res.ok) throw new Error("Błąd pobierania danych użytkownika");
          return res.json();
        })
        .then((data) => setUser(data))
        .catch(() => {
          setIsAuthenticated(false);
          setUser(null);
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <div className={styles.dashboard}>
      <Preloader />

      <NavBar
        isAuthenticated={isAuthenticated}
        user={user}
        handleLogout={handleLogout}
      />

      <div className={styles.content}>
        {isAuthenticated ? (
          <div className={styles.modules}>
            <h1>Witaj z powrotem{user ? `, ${user.display_name}` : ""}!</h1>
            <p>Wybierz moduł, z którego chcesz skorzystać.</p>
            <ul>
              <li>
                <Link to="/modul1">Moduł 1</Link>
              </li>
              <li>
                <Link to="/modul2">Moduł 2</Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className={styles.welcome}>
            <h1>Witaj użytkowniku!</h1>
            <h2>Obecnie jesteś niezalogowany.</h2>
            <h2>
              Zaloguj się na swoje konto Spotify aby korzystać z aplikacji.
            </h2>
            <Login />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

/*
ToDo:
Poprawić CSSa
Układ panelu głównego:
-odnośiniki do modułów, ikony, opisy
-nawigacja topbara
-link do logowania
-wersja zalogowana i wylogowana (niezalogowany przekierowanie do logowania)
-nazwa zalogowanego użytkownika, jego zdjęcie profilowe itp
-zmiana motywu, logo itp
-footer z linkami do dokumentacji, repozytorium, kontaktu itp
*/
