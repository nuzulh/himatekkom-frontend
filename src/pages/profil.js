import himatekkom2 from "../assets/img/himatekkom2-teks.png";

const Profil = () => {
  return (
    <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full p-4 text-primary md:flex items-center">
      <img
        src={himatekkom2}
        alt="himatekkom-teks"
        width={"85%"}
        className="opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:hidden"
      />
      <div className="hidden md:flex justify-center items-center">
        <img src={himatekkom2} alt="himatekkom-teks" className="w-7/12" />
      </div>
      <div className="text-center md:text-left md:p-12 text-primary">
        <p className="text-2xl md:text-4xl font-bold">HIMATEKKOM</p>
        <p className="lg:text-lg">Himpunan Mahasiswa Teknik Komputer</p>
        <p className="text-sm lg:text-lg">Universitas Syiah Kuala</p>
        <p className="mt-4 text-justify text-sm lg:text-lg">
          Himpunan Mahasiswa Teknik Komputer merupakan sebuah lembaga yang
          mewadahi Program Studi Teknik Komputer. Program studi ini bernaung
          pada Fakultas Teknik Universitas Syiah Kuala. HIMATEKKOM memiliki
          tujuan untuk menampung segala aspirasi serta meningkatkan kualitas
          mahasiswa di dalam lingkungan Program Studi Teknik Komputer
          Universitas Syiah Kuala.
        </p>
      </div>
    </main>
  );
};

export default Profil;
