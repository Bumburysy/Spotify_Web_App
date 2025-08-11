import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home.jsx";
import Login from "./views/Login.jsx";
import NotFound from "./views/NotFound";
import Dashboard from "./views/Dashboard.jsx";
import Logout from "./views/Logout.jsx";
import Analytics from "./views/Modules/Analytics.jsx";
import Generator from "./views/Modules/PlaylistGenerator.jsx";
import Manager from "./views/Modules/PlaylistManager.jsx";
import Rec from "./views/Modules/Recommendations.jsx";
import Search from "./views/Modules/Search.jsx";
import Callback from "./views/Callback.jsx";
import LoginWithSpotify from "./components/LoginWithSpotify.jsx";
import LoginError from "./views/LoginError.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<LoginWithSpotify />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login/callback" element={<Callback />} />
        <Route path="/login/error" element={<LoginError />} />
        <Route path="/modules/analytics" element={<Analytics />} />
        <Route path="/modules/playlistgenerator" element={<Generator />} />
        <Route path="/modules/playlistmanager" element={<Manager />} />
        <Route path="/modules/recommendations" element={<Rec />} />
        <Route path="/modules/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}
