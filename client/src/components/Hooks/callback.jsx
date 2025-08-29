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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.sessionID) {
          localStorage.setItem("sessionID", data.sessionID);
          navigate("/dashboard");
        } else {
          console.error("Missing sessionID", data);
          navigate("/login/error");
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
        navigate("/login/error");
      });
  }, [params, navigate]);

  return <h2>Logowanie przez Spotify...</h2>;
}
