import React from "react";
import NoteNav from "../NoteNav/NoteNav";
import NotesList from "../NotesList/NotesList";
import Context from "../Context";

export default class Notes extends React.Component {
  static contextType = Context;
  render() {
    return (
      <div className="notes-comp">
        <NoteNav />
        <NotesList />
      </div>
    );
  }
}
