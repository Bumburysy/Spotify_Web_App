import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <h3 className={styles.heading}>O projekcie</h3>
        <p className={styles.paragraph}>
          SpotiTools to nieoficjalna aplikacja demonstracyjna rozwijana w celach
          edukacyjno-prezentacyjnych. Integracja z platformą Spotify poprzez
          Spotify API.
        </p>
        <h3 className={styles.heading}>Dokumentacja</h3>
        <nav className={styles.nav}>
          <a href="https://example.com/" role="button">
            Repozytorium GitHub
          </a>
          <a href="https://example.com/" role="button">
            Dokumentacja techniczna
          </a>
          <a href="https://example.com/" role="button">
            Licencja projektu
          </a>
          <a href="https://example.com/" role="button">
            Status wersji
          </a>
        </nav>
        <h3 className={styles.heading}>Kontakt</h3>
        <nav className={styles.nav}>
          <a href="https://example.com/" role="button">
            Formularz feedbacku
          </a>
          <a href="mailto:kontakt@spotitools.app" role="button">
            kontakt@spotitools.app
          </a>
        </nav>
        <h3 className={styles.heading}>Udostępnij projekt</h3>
        <div className={styles.socialButtons}>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://spotitools.app"
            target="_blank"
            title="Udostępnij na Facebooku"
          >
            <i className="fab fa-facebook-square"></i>
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Sprawdź%20SpotiTools!%20https://spotitools.app"
            target="_blank"
            title="Udostępnij na X/Twitter"
          >
            <i className="fab fa-x-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://spotitools.app&title=SpotiTools"
            target="_blank"
            title="Udostępnij na LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://t.me/share/url?url=https://spotitools.app&text=SpotiTools%20-%20Twoje%20muzyczne%20centrum%20kontroli"
            target="_blank"
            title="Udostępnij na Telegramie"
          >
            <i className="fab fa-telegram"></i>
          </a>
          <a
            href="mailto:?subject=SpotiTools&body=Zobacz%20to!%20https://spotitools.app"
            title="Udostępnij e-mailem"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p className={styles.paragraph}>
          &copy; 2025 SpotiTools. Projekt demonstracyjny. Nieoficjalna
          aplikacja.
          <br />
          Spotify jest zarejestrowanym znakiem towarowym Spotify AB.
        </p>
      </footer>
    </>
  );
}
