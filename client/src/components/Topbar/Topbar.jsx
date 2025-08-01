import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import SearchBox from "../Topbar/SearchBox";
import TopbarButtons from "./TopbarButtons";
import styles1 from "/src/styles/topBar.module.css";
import styles2 from "/src/styles/button.module.css";

export default function Topbar({ particlesOn, setParticlesOn }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={styles1.topbar}>
      <button
        className={styles2.button}
        onClick={() => setIsSidebarOpen((prev) => !prev)}
      >
        ☰
      </button>

      <Sidebar isOpen={isSidebarOpen} />

      <SearchBox />

      <img
        className={styles1.imgLogo}
        src="/src/assets/logo.png"
        alt="Logo SpotiTools"
      />

      <TopbarButtons
        particlesOn={particlesOn}
        setParticlesOn={setParticlesOn}
      />
    </div>
  );
}
