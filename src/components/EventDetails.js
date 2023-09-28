import React from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  // Get the event id from the URL using the useParams hook
  const { id } = useParams();

  // Your existing dummy data
  const events = [
    {
      id: 1,
      title: "Event 1",
      description: "Description 1",
      date: "2023-11-01",
      time: "19:00",
      count: 80,
      minCount: 90,
    },
    {
      id: 2,
      title: "Event 2",
      description: "Description 2",
      date: "2023-08-02",
      time: "5:00",
      count: 70,
      minCount: 60,
    },
    {
      id: 3,
      title: "Event 3",
      description: "Description 2",
      date: "2023-12-02",
      time: "10:00",
      count: 60,
      minCount: 40,
    },
  ];

  // Find the event that matches the id from the URL
  const event = events.find((event) => event.id === Number(id));

  if (!event) {
    // Handle the case where the event is not found, e.g., display a message or redirect
    return <div>Event not found</div>;
  }

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
    <div className="container mx-auto p-4 mb-9">
      <h1 className="text-blue-800 text-4xl font-bold mb-4">Ongoing Events</h1>
      <div>
        <div className="flex justify-between">
          <div>
            <p className="font-semibold text-gray-600 text-base">
              {formattedDate}
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-600 text-base">
              STARTED: {formattedTime}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-1">
          <div>
            <p className="font-semibold text-blue-500 text-xl">{event.title}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800 text-xl">H: 5</p>
          </div>
        </div>
        <div className="flex justify-between mt-4 mb-4">
          <button className="h-25 w-105 bg-blue-800 text-white text-sm border border-blue-800 px-2 py-1 rounded-lg transition-colors hover:bg-blue-600 hover:text-gray-100 uppercase">
            Statistics
          </button>
          <button className="h-25 w-105 bg-gray-300 text-gray-600 text-sm border border-blue-800 px-2 py-1 rounded-lg transition-colors hover:bg-gray-400 hover:text-gray-800 uppercase">
            Event Details
          </button>
          <button className="h-25 w-105 bg-gray-300 text-gray-600 text-sm border border-blue-800 px-2 py-1 rounded-lg transition-colors hover:bg-gray-400 hover:text-gray-800 uppercase">
            Host Details
          </button>
        </div>

        <div className="my-1 border-t border-b border-gray-300"></div>
        <p>{event.count}</p>
        <p>{event.minCount} </p>
        
      </div>
    </div>
  );
};

export default EventDetails;
