import styles from "../styles/dashboard.module.css";

export default function ModuleSelector({
  user,
  activeModule,
  setActiveModule,
  modules,
}) {
  if (!activeModule) {
    return (
      <div className={styles.modules}>
        <h1>Witaj z powrotem{user ? `, ${user.display_name}` : ""}!</h1>
        <h2>Wybierz moduł, z którego chcesz skorzystać.</h2>
        <nav className={styles.navGrid}>
          <button onClick={() => setActiveModule("module1")}>Statystyki</button>
          <button onClick={() => setActiveModule("module2")}>
            Generowanie Playlist
          </button>
          <button onClick={() => setActiveModule("module3")}>
            Zarządzanie Playlistami
          </button>
          <button onClick={() => setActiveModule("module4")}>
            Rekomendacje
          </button>
          <button onClick={() => setActiveModule("module5")}>
            Wyszukiwarka
          </button>
        </nav>
      </div>
    );
  }

  return (
    <div className={styles.moduleContent}>
      <button onClick={() => setActiveModule(null)}>← Powrót</button>
      {modules[activeModule]}
    </div>
  );
}
