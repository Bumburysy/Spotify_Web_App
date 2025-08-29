import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "@/views/notFound.jsx";
import Home from "@/views/home.jsx";
import Dashboard from "@/views/dashboard.jsx";
import Logout from "@/views/logout.jsx";
import LoginError from "@/views/loginError.jsx";
import Login from "@/components/hooks/loginWithSpotify.jsx";
import Callback from "@/components/hooks/callback.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login/callback" element={<Callback />} />
        <Route path="/login/error" element={<LoginError />} />
      </Routes>
    </BrowserRouter>
  );
}
