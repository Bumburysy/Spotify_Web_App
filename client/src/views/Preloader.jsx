import { useEffect, useRef } from "react";
import logo from "/src/assets/logo.png";

export default function Preloader() {
  const preloaderRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (preloaderRef.current) {
        preloaderRef.current.classList.add("hidden");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="preloader" ref={preloaderRef}>
      <div className="loader">
        <img src={logo} alt="SpotiTools Logo" />
        <h1>SpotiTools</h1>
      </div>
    </div>
  );
}