import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    document.title = "Zaloguj się — SpotiTools";
  }, []);

  return (
    <div className="login-page">
      <h1>SpotiTools</h1>
      <h2>
        Aby korzystać z aplikacji wymagane jest konto na platformie Spotify.
      </h2>
      <button
        className="button"
        onClick={() => (window.location.href = "/dashboard")}
      >
        <i className="fa-brands fa-spotify"></i> Zaloguj się przez Spotify
      </button>
    </div>
  );
}
