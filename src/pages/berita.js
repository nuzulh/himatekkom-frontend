import BeritaCard from "../components/berita-card";
import SectionLabel from "../components/section-label";

const Berita = () => {
  return (
    <main>
      <div className="flex flex-col py-8 items-center text-center">
        <p className="text-2xl font-bold text-blue md:text-4xl my-4">
          HIMATEKKOM
        </p>
        <p className="text-primary md:text-lg md:w-7/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
          tincidunt sapien. Aenean purus neque, pharetra vitae ex vitae,
          venenatis tristique nulla.
        </p>
      </div>
      <SectionLabel title="Berita Terkini" link="/semua-berita" />
      <div className="flex flex-wrap">
        <BeritaCard
          kategori="KATEGORI"
          time="4 menit"
          title="judul berita"
          link="#"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
          tincidunt sapien. Aenean purus neque, pharetra vitae ex vitae,
          venenatis tristique nulla."
        />
        <BeritaCard
          kategori="KATEGORI"
          time="4 menit"
          title="judul berita"
          link="#"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
          tincidunt sapien. Aenean purus neque, pharetra vitae ex vitae,
          venenatis tristique nulla."
        />
        <BeritaCard
          kategori="KATEGORI"
          time="4 menit"
          title="judul berita"
          link="#"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
          tincidunt sapien. Aenean purus neque, pharetra vitae ex vitae,
          venenatis tristique nulla."
        />
        <BeritaCard
          kategori="KATEGORI"
          time="4 menit"
          title="judul berita"
          link="#"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
          tincidunt sapien. Aenean purus neque, pharetra vitae ex vitae,
          venenatis tristique nulla."
        />
      </div>
      <SectionLabel title="Artikel Terkini" link="/semua-artikel" />
      <div className="flex flex-wrap">
        <BeritaCard
          kategori="KATEGORI"
          time="4 menit"
          title="judul berita"
          link="#"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
          tincidunt sapien. Aenean purus neque, pharetra vitae ex vitae,
          venenatis tristique nulla."
        />
        <BeritaCard
          kategori="KATEGORI"
          time="4 menit"
          title="judul berita"
          link="#"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
          tincidunt sapien. Aenean purus neque, pharetra vitae ex vitae,
          venenatis tristique nulla."
        />
        <BeritaCard
          kategori="KATEGORI"
          time="4 menit"
          title="judul berita"
          link="#"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
          tincidunt sapien. Aenean purus neque, pharetra vitae ex vitae,
          venenatis tristique nulla."
        />
        <BeritaCard
          kategori="KATEGORI"
          time="4 menit"
          title="judul berita"
          link="#"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
          tincidunt sapien. Aenean purus neque, pharetra vitae ex vitae,
          venenatis tristique nulla."
        />
        <BeritaCard
          kategori="KATEGORI"
          time="4 menit"
          title="judul berita"
          link="#"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
          tincidunt sapien. Aenean purus neque, pharetra vitae ex vitae,
          venenatis tristique nulla."
        />
      </div>
    </main>
  );
};

export default Berita;
