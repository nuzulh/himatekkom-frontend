import EventCard from "../components/event-card";
import events from "../data/events";

const Acara = () => {
  return (
    <main>
      <div className="flex flex-col py-20 items-center">
        <p className="text-xl text-secondary">Event - Event</p>
        <p className="text-2xl font-bold text-primary md:text-4xl">
          HIMATEKKOM
        </p>
        <a href="#events">
          <button className="rounded-full shadow-md hover:opacity-70 transition-all duration-300 bg-blue px-6 py-2 mt-12 text-[white] text-sm">
            Lihat <i className="fa-solid fa-arrow-down" />
          </button>
        </a>
      </div>
      <div className="h-screen" id="events">
        {events.map((item, index) => (
          <EventCard key={index} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Acara;
