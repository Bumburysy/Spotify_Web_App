const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;

const SCOPE = encodeURIComponent(
  [
    "user-read-email",
    "user-read-private",
    "user-top-read",
    "user-read-recently-played",
    "user-read-playback-position",
    "user-library-read",
    "playlist-read-private",
    "playlist-read-collaborative",
    "playlist-modify-private",
    "playlist-modify-public",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-follow-read",
  ].join(" ")
);

const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "code";

export default function LoginWithSpotify() {
  const handleLogin = () => {
    const loginURL =
      `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}` +
      `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
      `&response_type=${RESPONSE_TYPE}` +
      `&scope=${SCOPE}` +
      `&show_dialog=true`;
    window.location.href = loginURL;
  };
  return (
    <div>
      <a onClick={handleLogin} role="button">
        Zaloguj
      </a>
    </div>
  );
}
