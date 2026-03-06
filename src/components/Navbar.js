import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>College Event Manager</h2>
      <Link to="/">Home</Link>
      <Link to="/events">Events</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}

export default Navbar;