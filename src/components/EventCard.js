import { Link } from "react-router-dom";
const EventCard = ({event}) => {
  return (
    <Link to={`/event/${event.id}`}>
    <div className="w-74 h-196 border border-gray-300 rounded-lg p-4">
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>{event.date}</p>
      <p>{event.time}</p>
      <p>{event.duration}</p>
      <div>
        <h3>Guests:</h3>
        {event.guests && event.guests.map((guest) => (
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
