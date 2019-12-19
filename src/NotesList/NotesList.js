import React from "react";
import "./NotesList.css";
import Context from "../Context.js";
import Section from "../Section/Section";

export default class NotesList extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      notesList: []
    };
  }

  render() {
    const active = this.context.activeTab.key;
    const notesList = this.context.notes;

    return (
      <div className="note-headers">
        {notesList.map(note => {
          if (note.category_id === active) {
            return (
              <Section
                section={note.subcategory_name}
                index={note.subcategory_id}
                content={note.content}
              />
            );
          }
        })}
        <span>
          <b>+ Create new section</b>
        </span>
      </div>
    );
  }
}
