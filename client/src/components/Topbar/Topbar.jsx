import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import SearchBox from "../Topbar/SearchBox";
import TopbarButtons from "./TopbarButtons";

export default function Topbar({ particlesOn, setParticlesOn }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div id="topbar">
      <button id="menu-toggle" onClick={() => setIsSidebarOpen(prev => !prev)}>
        ☰
      </button>

      <Sidebar isOpen={isSidebarOpen} />

      <SearchBox />

      <img src="/src/assets/logo.png" alt="Logo SpotiTools" />

      <TopbarButtons particlesOn={particlesOn} setParticlesOn={setParticlesOn} />
    </div>
  );
}
