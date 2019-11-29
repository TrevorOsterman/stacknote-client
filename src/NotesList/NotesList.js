import React from "react";
import "./NotesList.css";
import Context from "../Context.js";
import Section from "../Section/Section";

export default class NotesList extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const active = this.context.activeTab.name;
    console.log(active);
    const notesList = this.context.notes[active];
    console.log(notesList);
    return (
      <div className="note-headers">
        {notesList.map((sect, idx) => {
          return <Section section={sect} index={idx} />;
        })}
        <span>
          <b>+ Create new section</b>
        </span>
      </div>
    );
  }
}
