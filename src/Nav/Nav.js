import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import "./hamburgicon.png";

export default function Nav() {
  return (
    <nav className="navigation">
      <div className="hamburg-menu">
        <Link to="/notes">Notes</Link>
        <Link to="/questions">Questions</Link>
        <Link to="/resources">Resources</Link>
      </div>
      <Link className="login-link" to="/login">
        Login
      </Link>
    </nav>
  );
}
