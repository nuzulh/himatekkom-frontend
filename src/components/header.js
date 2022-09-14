import { useState } from "react";
import profil from "../assets/img/profil.png";
import acara from "../assets/img/acara.png";
import berita from "../assets/img/berita.png";
import galeri from "../assets/img/galeri.png";
import layanan from "../assets/img/layanan.png";
import usk from "../assets/img/usk.png";
import himatekkom from "../assets/img/himatekkom.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("profil");

  return (
    <>
      <header className="hidden md:flex justify-between w-screen px-12 h-24 shadow-md">
        <div className="flex items-center">
          <img src={usk} alt="usk" className="h-12" />
          <img src={himatekkom} alt="himatekkom" className="h-12" />
          <div className="border-l-2 border-primary px-2 mx-2">
            <p className="text-[0.8rem]">HIMPUNAN MAHASISWA</p>
            <p className="text-xl font-bold">TEKNIK KOMPUTER</p>
          </div>
        </div>
        <nav className="flex items-center gap-6 text-secondary">
          <NavLink
            to="/profil"
            onClick={() => setIsActive("profil")}
            className={`flex gap-2 items-center ${
              isActive === "profil" ? "opacity-100" : "opacity-50"
            }`}
          >
            <img src={profil} alt="profil" className="h-4" />
            <p>Profil</p>
          </NavLink>
          <NavLink
            to="/acara"
            onClick={() => setIsActive("acara")}
            className={`flex gap-2 items-center ${
              isActive === "acara" ? "opacity-100" : "opacity-50"
            }`}
          >
            <img src={acara} alt="profil" className="h-4" />
            <p>Acara</p>
          </NavLink>
          <NavLink
            to="/berita"
            onClick={() => setIsActive("berita")}
            className={`flex gap-2 items-center ${
              isActive === "berita" ? "opacity-100" : "opacity-50"
            }`}
          >
            <img src={berita} alt="profil" className="h-4" />
            <p>Berita</p>
          </NavLink>
          <NavLink
            to="/galeri"
            onClick={() => setIsActive("galeri")}
            className={`flex gap-2 items-center ${
              isActive === "galeri" ? "opacity-100" : "opacity-50"
            }`}
          >
            <img src={galeri} alt="profil" className="h-4" />
            <p>Galeri</p>
          </NavLink>
          <NavLink
            to="/layanan"
            onClick={() => setIsActive("layanan")}
            className={`flex gap-2 items-center ${
              isActive === "layanan" ? "opacity-100" : "opacity-50"
            }`}
          >
            <img src={layanan} alt="profil" className="h-4" />
            <p>Layanan</p>
          </NavLink>
        </nav>
      </header>
      <header className="flex md:hidden justify-between items-center p-4 w-full h-14 text-primary shadow-md text-xl">
        <div className="flex gap-2">
          <img src={usk} alt="usk" className="h-8" />
          <img src={himatekkom} alt="himatekkom" className="h-8" />
        </div>
        <i
          onClick={() => setIsOpen(!isOpen)}
          className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
        />
      </header>
      <nav
        className={`${
          isOpen ? "left-0" : "-left-60"
        } flex flex-col justify-start text-center py-14 w-60 h-screen bg-primary absolute transition-all ease-in-out duration-300 overflow-x-hidden text-[white]`}
      >
        <NavLink
          to="/profil"
          className="p-4 w-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          Profil
        </NavLink>
        <NavLink
          to="/acara"
          className="p-4 w-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          Acara
        </NavLink>
        <NavLink
          to="/berita"
          className="p-4 w-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          Berita
        </NavLink>
        <NavLink
          to="/galeri"
          className="p-4 w-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          Galeri
        </NavLink>
        <NavLink
          to="/layanan"
          className="p-4 w-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          Layanan
        </NavLink>
      </nav>
    </>
  );
};

export default Header;
