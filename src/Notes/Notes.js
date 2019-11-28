import React from "react";
import NoteNav from "../NoteNav/NoteNav";
import NotesList from "../NotesList/NotesList";

export default class Notes extends React.Component {
  render() {
    return (
      <div className="notes-comp">
        <NoteNav />
        <NotesList />
      </div>
    );
  }
}
