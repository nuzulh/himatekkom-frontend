import { useNavigate } from "react-router-dom";
import { months } from "../data/defaultValues";

const EventCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <section
      style={{
        cursor: "pointer",
      }}
      onClick={() =>
        navigate(item.link, {
          state: item,
        })
      }
      className="p-4 my-4 md:p-8 flex w-full shadow-lg rounded-2xl bg-[white]"
    >
      <div className="flex flex-col font-bold text-secondary items-center">
        <p>{months[item.date.getMonth()]}</p>
        <p className="text-4xl">{item.date.getDate()}</p>
        <p>{item.date.getFullYear()}</p>
      </div>
      <div className="ml-4 md:ml-8">
        <p className="font-bold text-lg text-primary">{item.title}</p>
        <p className="text-sm text-secondary">{item.detail}</p>
      </div>
    </section>
  );
};

export default EventCard;
