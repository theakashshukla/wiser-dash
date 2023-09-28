import React from "react";
import EventCard from "./EventCard";

const EventCardList = () => {
  const events = [
    {
      id: 1,
      title: "Event 1",
      description: "Description 1",
      date: "2023-11-01",
      time: "19:00",
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
      date: "2023-08-02",
      time: "5:00",
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
      date: "2023-12-02",
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
  return (
    <div>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventCardList;
