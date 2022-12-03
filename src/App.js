import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Layout from "./container/layout";
import Profil from "./pages/profil";
import Acara from "./pages/acara";
import Berita from "./pages/berita";
import Galeri from "./pages/galeri";
import Layanan from "./pages/layanan";
import Cmd from "./pages/events/cmd";
import Babak1 from "./pages/events/fast-typing/babak1";
import Babak2 from "./pages/events/fast-typing/babak2";
import Final from "./pages/events/fast-typing/final";

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
          <Route path="/acara/cmd/fast-typing/babak1" element={<Babak1 />} />
          <Route path="/acara/cmd/fast-typing/babak2" element={<Babak2 />} />
          <Route path="/acara/cmd/fast-typing/final" element={<Final />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
