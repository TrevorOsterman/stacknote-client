import React from "react";
import NoteNav from "../NoteNav/NoteNav";
import NotesList from "../NotesList/NotesList";
import Context from "../Context";

export default class Notes extends React.Component {
  static contextType = Context;
  render() {
    const noteList = this.context.notes;
    return (
      <div className="notes-comp">
        <NoteNav />
        <NotesList notes={noteList} activeTab={this.context.activeTab.key} />
      </div>
    );
  }
}
