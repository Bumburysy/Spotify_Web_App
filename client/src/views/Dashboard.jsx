import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Panel użytkownika — SpotiTools";
  }, []);

  return (
    <div className="dashboard">
      <h1>Panelu użytkownika.</h1>
      <p>Wybierz moduł, który chcesz uruchomić:</p>

      <div className="modules-grid">
        <Link to="/modules/analytics" className="module-card">
          <h2>Analityka muzyczna</h2>
          <p>Statystyki i wizualizacje Twoich danych muzycznych z Spotify.</p>
        </Link>

        <Link to="/modules/recommendations" className="module-card">
          <h2>Rekomendacje</h2>
          <p>
            Nowe utwory i artyści dobrani do Twojego gustu — wybierz model
            rekomendacji.
          </p>
        </Link>

        <Link to="/modules/search" className="module-card">
          <h2>Wyszukiwarka</h2>
          <p>Szukaj muzyki wg gatunku, artysty, roku, popularności i więcej.</p>
        </Link>

        <Link to="/modules/playlistgenerator" className="module-card">
          <h2>Generator playlist</h2>
          <p>Generuj playlisty wg nastroju, tempa, gatunku lub losowo.</p>
        </Link>

        <Link to="/modules/playlistmanager" className="module-card">
          <h2>Zarządzanie playlistami</h2>
          <p>Sortowanie, dzielenie, usuwanie duplikatów, reorganizacja list.</p>
        </Link>

        <Link to="/logout">
          <h2>Wyloguj</h2>
        </Link>
      </div>
    </div>
  );
}
