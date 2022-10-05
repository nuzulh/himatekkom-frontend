const EventCard = ({ date, title, detail }) => {
  return (
    <section className="p-4 my-4 md:p-8 flex w-full shadow-lg rounded-2xl bg-[white]">
      <div className="flex flex-col font-bold text-secondary items-center">
        <p>{date.month}</p>
        <p className="text-4xl">{date.day}</p>
        <p>{date.year}</p>
      </div>
      <div className="ml-4 md:ml-8">
        <p className="font-bold text-lg text-primary">{title}</p>
        <p className="text-sm text-secondary">{detail}</p>
      </div>
    </section>
  );
};

export default EventCard;
