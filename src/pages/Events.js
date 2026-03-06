import React, { useEffect, useState } from "react";
import eventsData from "../data/events";
import EventCard from "../components/EventCard";

function Events() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  return (
    <div>

      <h1>Upcoming Events</h1>

      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

    </div>
  );
}

export default Events;