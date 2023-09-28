import { Link } from "react-router-dom";
const EventCard = ({ event }) => {
  const eventDate = new Date(`${event.date} ${event.time}`);

  // Format the date and time
  const formattedDate = eventDate.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const formattedTime = eventDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <Link to={`/event/${event.id}`} className="hover:border-blue-800">
      <div className="w-196 h-374 border border-gray-300 rounded-lg p-4 mb-5">
        <h1>{event.title}</h1>
        <p>{event.description}</p>
        <p>{formattedDate}</p>
        <p>STARTED: {formattedTime}</p>
        <p>{event.duration}</p>
        <div>
          <h3>Guests:</h3>
          {event.guests &&
            event.guests.map((guest) => (
              <div key={guest.id}>
                <p>{guest.name}</p>
                <p>{guest.email}</p>
              </div>
            ))}
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
