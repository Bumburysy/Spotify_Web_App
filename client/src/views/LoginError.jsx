export default function LoginError() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Logowanie nie powiodło się</h1>
      <p>Nie udzielono dostępu do konta Spotify.</p>
      <a href="/dashboard">Wróć na stronę główną</a>
    </div>
  );
}
