import styles from "./header.module.css";
import Logo from "@/assets/logoOld.png";

export default function Header() {
  return (
    <>
      <header id="main-header" className={styles.header}>
        <img className={styles.logo} src={Logo} alt="SpotiTools logo" />
        <h1 className={styles.title}>SpotiTools</h1>
        <h2 className={styles.subtitle}>Twoje Muzyczne Centrum Kontroli</h2>
        <p className={styles.description}>
          Personalizuj. Analizuj. Zarządzaj. Wszystko w jednym miejscu dzięki
          SpotiTools!
        </p>
        <a href="#dolacz" role="button">
          Wypróbuj Teraz!
        </a>
      </header>
    </>
  );
}
