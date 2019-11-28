import React from "react";
import "./NotesList.css";
import Context from "../Context.js";

export default class NotesList extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      notes: {
        frontEnd: [
          {
            header: "Fundamentals",
            list: ["Item 1", "Item 2"],
            clicked: false
          }
        ]
      }
    };
  }

  render() {
    const notesList = this.state.notes.frontEnd;

    return (
      <div className="note-headers">
        {notesList.map(cat => {
          return (
            <ul className="note-header">
              {cat.header}
              {cat.list.map(i => {
                return <li className="note">{i}</li>;
              })}
            </ul>
          );
        })}
      </div>
    );
  }
}
