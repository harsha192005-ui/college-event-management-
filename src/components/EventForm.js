import React, { useState } from "react";

function EventForm() {

  const [name, setName] = useState("");
  const [event, setEvent] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>

      {!submitted ? (

        <form onSubmit={handleSubmit}>

          <h2>Event Registration</h2>

          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <select
            value={event}
            onChange={(e) => setEvent(e.target.value)}
            required
          >
            <option value="">Select Event</option>
            <option>Hackathon</option>
            <option>Tech Talk</option>
            <option>Coding Contest</option>
          </select>

          <button type="submit">Register</button>

        </form>

      ) : (

        <h3>✅ {name} successfully registered for {event}</h3>

      )}

    </div>
  );
}

export default EventForm;