import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Layout from "./container/layout";
import Profil from "./pages/profil";
import Acara from "./pages/acara";
import Berita from "./pages/berita";
import Galeri from "./pages/galeri";
import Layanan from "./pages/layanan";
import Cmd from "./pages/events/cmd";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* LINK */}
          <Route path="/" element={<Navigate to="/profil" replace />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/acara" element={<Acara />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/layanan" element={<Layanan />} />
          {/* SUB-LINK */}
          <Route path="/acara/cmd" element={<Cmd />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
