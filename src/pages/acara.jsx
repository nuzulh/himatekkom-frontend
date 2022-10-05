import EventCard from "../components/event-card";

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
        <EventCard
          date={{
            month: "JAN",
            day: "12",
            year: "2022",
          }}
          title="Judul Acara 1"
          detail="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum facere voluptate beatae autem ullam quod voluptatem alias illo molestias doloremque. Sit eum vel nostrum dolorum omnis quia accusamus ad tenetur."
        />
        <EventCard
          date={{
            month: "JAN",
            day: "27",
            year: "2022",
          }}
          title="Judul Acara 2"
          detail="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum facere voluptate beatae autem ullam quod voluptatem alias illo molestias doloremque. Sit eum vel nostrum dolorum omnis quia accusamus ad tenetur."
        />
        <EventCard
          date={{
            month: "JAN",
            day: "18",
            year: "2022",
          }}
          title="Judul Acara 3"
          detail="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum facere voluptate beatae autem ullam quod voluptatem alias illo molestias doloremque. Sit eum vel nostrum dolorum omnis quia accusamus ad tenetur."
        />
      </div>
    </main>
  );
};

export default Acara;
