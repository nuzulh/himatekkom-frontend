import { NavLink } from "react-router-dom";

const SectionLabel = ({ title, link }) => {
  return (
    <section className="flex justify-between items-center my-4 pt-8">
      <p className="md:text-lg font-bold text-primary md:text-xl">{title}</p>
      {link && (
        <NavLink to={link}>
          <button className="md:bg-blue rounded-lg text-sm md:shadow-md px-4 py-3 md:text-[white] underline md:no-underline">
            Lihat selengkapnya <i className="fa-solid fa-chevron-right" />
          </button>
        </NavLink>
      )}
    </section>
  );
};

export default SectionLabel;
