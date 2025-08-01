import { useEffect } from "react";
import { Link } from "react-router-dom";
import Preloader from "./Preloader";
import Footer from "./Footer.jsx";
import NavBar from "../components/MainNavBar.jsx";
import styles from "../styles/dashboard.module.css";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Panel użytkownika — SpotiTools";
  }, []);

  return (
    <div className={styles.dashboard}>
      <Preloader />

      <NavBar />

      <div className={styles.content}>
        {/*Miejsce do wsadzania zawartości modułów. Bazowo info o niezalogowanym
        użytkowniku i odnoścink do logowania. Zalogowany użytkownik ma dostęp do
        modułów linki do nich. Widok moduły trafi w to miejsce.*/}
        <div className={styles.welcome}>
          <h1>Witaj użytkowniku!</h1>
          <h2>Obecnie jesteś niezalogowany.</h2>
          <h2>Zaloguj się na swoje konto Spotify aby korzystać z aplikacji.</h2>
          <a href="/login" role="button">
            Zaloguj się
          </a>
        </div>
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
