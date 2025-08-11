import { useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function SpotifyCallback() {
  const called = useRef(false);
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (called.current) return;
    called.current = true;

    const error = params.get("error");
    if (error) {
      console.error("Spotify login error:", error);
      navigate("/login/error");
      return;
    }

    const code = params.get("code");
    if (!code) {
      navigate("/login");
      return;
    }

    fetch("http://localhost:3001/api/auth/spotify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          localStorage.setItem("accessToken", data.access_token);
          localStorage.setItem("refreshToken", data.refresh_token);
          localStorage.setItem(
            "tokenExpiry",
            Date.now() + data.expires_in * 1000
          );
          navigate("/dashboard");
        } else {
          console.error("Brak tokenu w odpowiedzi:", data);
          navigate("/login");
        }
      })
      .catch((err) => {
        console.error("Błąd podczas logowania:", err);
        navigate("/login");
      });
  }, [params, navigate]);

  return <h2>Logowanie przez Spotify...</h2>;
}
