import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa";
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
        <div className="flex justify-between items-center mb-1">
          <div>
            <h1 className="font-bold text-blue-500 text-2xl">{event.title}</h1>
            <p className="text-gray-800 text-sm">Host Name</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800 text-sm">
              <p>{formattedDate}</p>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-1">
          <div>
            <p>STARTED: {formattedTime}</p>
          </div>
          <div className="flex space-x-4">
            <div className="h-55 w-62 bg-blue-800 border border-blue-800 px-2 py-1 rounded-lg transition-colors hover:bg-blue-600 hover:text-gray-100 uppercase">
              <h1 className="p-4 text-lg text-white">{event.minCount}</h1>
            </div>

            <div className="h-55 w-62 bg-blue-800 border border-blue-800 px-2 py-1 rounded-lg transition-colors hover:bg-blue-600 hover:text-gray-100 uppercase">
              <h1 className="p-4 text-lg text-white">{event.count}</h1>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <div>
            <p className="font-semibold text-gray-800 text-xl">H: 5</p>
          </div>
          <button className="h-25 w-105 bg-gray-300 text-gray-600 text-sm border border-blue-800 px-2 py-1 rounded-lg transition-colors hover:bg-gray-400 hover:text-gray-800 uppercase">
            <div className="flex items-center">
              <FaBell className="mr-2 text-blue-800" />{" "}
              {/* Add the bell icon and set text color to blue */}
              <span className="text-blue-800">2</span>{" "}
              {/* Set text color to blue */}
            </div>
          </button>
          <button className="h-30 w-155 bg-blue-800 text-white text-lg border border-blue-800 px-2 py-1 rounded-lg transition-colors hover:bg-blue-600 hover:text-gray-100 uppercase">
            Manage Event
          </button>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
