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
  return (
    <div>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventCardList;
