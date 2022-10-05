import { NavLink } from "react-router-dom";

const BeritaCard = ({ image, kategori, time, title, link, detail }) => {
  return (
    <NavLink to={link} className="md:w-4/12 flex flex-col">
      <div className="p-4 my-2 mr-4 min-h-[12rem] shadow-lg hover:scale-105 transition-all duration-300 bg-[white] rounded-xl">
        <img src={image} alt="" className="w-full rounded-lg" />
        <div className="flex items-center gap-2 mb-3">
          <p className="px-2 py-1 rounded-md backdrop-opacity-90 bg-info/20 text-sm text-info">
            {kategori}
          </p>
          <div className="flex items-center gap-1 text-secondary text-sm ">
            <i className="fa-solid fa-clock" />
            <p>{time}</p>
          </div>
        </div>
        <p className="font-bold">{title}</p>
        <p className="text-sm">{detail}</p>
      </div>
    </NavLink>
  );
};

export default BeritaCard;
