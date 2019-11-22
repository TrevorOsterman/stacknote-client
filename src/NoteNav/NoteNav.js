import React from "react";
import "./NoteNav.css";

export default class NoteNav extends React.Component {
  render() {
    return (
      <ul className="note-nav">
        <li className="note-type">Front-End</li>
        <li className="note-type">Back-End</li>
        <li className="note-type">Database</li>
        <li className="note-type">Misc.</li>
      </ul>
    );
  }
}
