import { useState } from "react";
import Sidebar from "../sideBar/sideBar.jsx";
import SearchBox from "../topBar/searchBox.jsx";
import TopbarButtons from "../topBar/topBarButtons.jsx";
import styles1 from "./topBar.module.css";
import styles2 from "../buttons/button.module.css";
import Logo from "@/assets/logoOld.png";

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

      <img className={styles1.imgLogo} src={Logo} alt="Logo SpotiTools" />

      <TopbarButtons
        particlesOn={particlesOn}
        setParticlesOn={setParticlesOn}
      />
    </div>
  );
}
