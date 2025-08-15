export default function LoginError() {
  return (
    <div>
      <h1>Logowanie nie powiodło się</h1>
      <h2>Nie udzielono dostępu do konta Spotify.</h2>
      <a href="/dashboard" role="button">
        Wróć na stronę główną
      </a>
    </div>
  );
}
