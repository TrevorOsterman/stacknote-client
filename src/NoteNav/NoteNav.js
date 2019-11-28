import React from "react";
import "./NoteNav.css";
import Context from "../Context";

export default class NoteNav extends React.Component {
  static contextType = Context;
  render(props) {
    return (
      <ul className="note-nav">
        {["Front-End", "Back-End", "Database", "Misc."].map(tab => {
          return (
            <li
              className="note-type"
              onClick={() => this.context.handleActiveTab(tab)}
            >
              {tab}
            </li>
          );
        })}
      </ul>
    );
  }
}
