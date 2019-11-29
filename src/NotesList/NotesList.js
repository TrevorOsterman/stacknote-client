import React from "react";
import "./NotesList.css";
import Context from "../Context.js";

export default class NotesList extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      newSection: {
        name: "",
        clicked: false
      }
    };
  }

  render() {
    const notesList = Object.values(this.props.notes)[0];

    return (
      <div className="note-headers">
        {notesList.map(cat => {
          return (
            <ul className="note-header">
              {cat.header}
              {cat.list.map(i => {
                return <li className="note">{i}</li>;
              })}
              <li>
                <input type="text" placeholder="new note" />
              </li>
            </ul>
          );
        })}
        <span>
          <b>+ Create new section</b>
        </span>
      </div>
    );
  }
}
