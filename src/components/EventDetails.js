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
  ];

  // Find the event that matches the id from the URL
  const event = events.find((event) => event.id === Number(id));

  if (!event) {
    // Handle the case where the event is not found, e.g., display a message or redirect
    return <div>Event not found</div>;
  }
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <div className="w-74 h-196 border border-gray-300 rounded-lg p-4">
        <h1>{event.title}</h1>
        <p>{event.description}</p>
        <p>Date: {event.date}</p>
        <p>Time: {event.time}</p>
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
