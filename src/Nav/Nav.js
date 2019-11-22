import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navigation">
      <Link to="/notes">Notes</Link>
      <Link to="/questions">Questions</Link>
      <Link to="/resources">Resources</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}
