import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import "./hamburgicon.png";

export default function Nav() {
  return (
    <nav className="navigation">
      <div className="hamburg-menu">
        <Link to="/notes">Notes</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
