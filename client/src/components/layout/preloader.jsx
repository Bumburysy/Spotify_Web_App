import { useEffect, useRef } from "react";
import Logo from "@/assets/logoOld.png";
import styles from "./preloader.module.css";

export default function Preloader() {
  const preloaderRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (preloaderRef.current) {
        preloaderRef.current.classList.add(styles.hidden);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.preloader} ref={preloaderRef}>
      <div className={styles.loader}>
        <img className={styles.logo} src={Logo} alt="SpotiTools Logo" />
        <h1 className={styles.title}>SpotiTools</h1>
      </div>
    </div>
  );
}
