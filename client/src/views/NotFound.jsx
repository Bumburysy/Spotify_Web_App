import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 — Nie znaleziono strony";
  }, []);

  return (
    <div className="not-found-page">
      <h1>404</h1>
      <p>Ups! Strona, której szukasz, nie istnieje.</p>
      <button className="button" onClick={() => (window.location.href = "/")}>
        <i className="fa-solid fa-house"></i> Powrót
      </button>
    </div>
  );
}
