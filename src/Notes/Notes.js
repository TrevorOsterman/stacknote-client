import React from "react";
import NoteNav from "../NoteNav/NoteNav";
import NotesList from "../NotesList/NotesList";

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="notes-comp">
        <NoteNav />
        <NotesList />
      </div>
    );
  }
}
