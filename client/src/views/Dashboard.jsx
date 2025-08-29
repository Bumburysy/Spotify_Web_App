import { useEffect, useState } from "react";
import Preloader from "@/components/layout/preloader.jsx";
import Footer from "@/components/layout/footer.jsx";
import NavBar from "@/components/layout/navBar.jsx";
import ModuleSelector from "@/components/layout/moduleSelector.jsx";
import Login from "@/components/hooks/loginWithSpotify.jsx";
import Analytics from "./modules/analytics.jsx";
import PlaylistGen from "./modules/playlistGen.jsx";
import PlaylistMan from "./modules/playlistMan.jsx";
import Rec from "./modules/recs.jsx";
import Search from "./modules/search.jsx";
import styles from "./dashboard.module.css";

export default function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [activeModule, setActiveModule] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const sessionID = localStorage.getItem("sessionID");
      if (!sessionID) {
        setLoading(false);
        return;
      }

      try {
        const sessionRes = await fetch("http://localhost:3001/api/session/me", {
          headers: { "X-Session-ID": sessionID },
        });
        if (!sessionRes.ok) throw new Error("Not logged in");
        setIsAuthenticated(true);

        const userRes = await fetch(`http://localhost:3001/api/user/details`, {
          headers: { "X-Session-ID": sessionID },
        });

        if (!userRes.ok) throw new Error("Failed to fetch user data");

        const userData = await userRes.json();
        setUser(userData);
      } catch (err) {
        console.error(err);
        localStorage.removeItem("sessionID");
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    const sessionID = localStorage.getItem("sessionID");
    if (!sessionID) return;

    try {
      await fetch("http://localhost:3001/api/session/logout", {
        method: "POST",
        headers: { "X-Session-ID": sessionID },
      });
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      localStorage.removeItem("sessionID");
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const modules = {
    module1: <Analytics sessionID={localStorage.getItem("sessionID")} />,
    module2: <PlaylistGen sessionID={localStorage.getItem("sessionID")} />,
    module3: <PlaylistMan sessionID={localStorage.getItem("sessionID")} />,
    module4: <Rec sessionID={localStorage.getItem("sessionID")} />,
    module5: <Search sessionID={localStorage.getItem("sessionID")} />,
  };

  if (loading) return <Preloader />;

  return (
    <div className={styles.dashboard}>
      <NavBar
        isAuthenticated={isAuthenticated}
        user={user}
        handleLogout={handleLogout}
      />
      <div className={styles.content}>
        {isAuthenticated && user ? (
          <ModuleSelector
            user={user}
            activeModule={activeModule}
            setActiveModule={setActiveModule}
            modules={modules}
          />
        ) : (
          <div className={styles.welcome}>
            <h1>Witaj użytkowniku!</h1>
            <h2>Obecnie jesteś niezalogowany.</h2>
            <h2>
              Zaloguj się na swoje konto Spotify, aby korzystać z aplikacji.
            </h2>
            <Login />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
