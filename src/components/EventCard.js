import React from "react";

function EventCard({ event }) {
  return (
    <div className="card">
      <h3>{event.name}</h3>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
    </div>
  );
}

export default EventCard;