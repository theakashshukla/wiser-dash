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
      date: "2021-08-01",
      time: "10:00",
      duration: 60,
      guests: [
        {
          id: 1,
          name: "Guest 1",
          email: "test@gmail.com",
        },
      ],
    },
    {
      id: 2,
      title: "Event 2",
      description: "Description 2",
      date: "2021-08-02",
      time: "10:00",
      duration: 60,
      guests: [
        {
          id: 1,
          name: "Guest 1",
          email: "test2@gmail.com",
        },
        {
          id: 2,
          name: "Guest 2",
          email: "test3@gmail.com",
        },
      ],
    },
    {
      id: 3,
      title: "Event 3",
      description: "Description 2",
      date: "2021-08-02",
      time: "10:00",
      duration: 60,
      guests: [
        {
          id: 1,
          name: "Guest 1",
          email: "test2@gmail.com",
        },
      ],
    },
  ];

  // Find the event that matches the id from the URL
  const event = events.find((event) => event.id === Number(id));

  if (!event) {
    // Handle the case where the event is not found, e.g., display a message or redirect
    return <div>Event not found</div>;
  }
  return (
    <div className="container mx-auto p-4 mb-9">
      <h1 className="text-blue-800 text-4xl font-bold mb-4">Ongoing Events</h1>
      <div>
        <div className="flex justify-between">
          <div>
            <p className="font-semibold text-gray-600 text-base">
              Date: {event.date}
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-600 text-base">
              Time: {event.time}
            </p>
          </div>
        </div>
        <h1>{event.title}</h1>
        <p>{event.description}</p>
        
        <p>Duration: {event.duration} minutes</p>
        <div>
          <h3>Guests:</h3>
          <ul>
            {event.guests.map((guest) => (
              <li key={guest.id}>
                {guest.name} - {guest.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
