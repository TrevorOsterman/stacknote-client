import React from "react";
import Context from "../Context";

export default class Section extends React.Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const notesList = this.context.notes;
    return (
      <div>
        <ul className="note-header">
          {this.props.section}
          {notesList.map(note => {
            if (note.subcategory_id === this.props.index) {
              return <li>{note.content}</li>;
            }
          })}
        </ul>
        <input type="text" placeholder="new note" />
        <button onClick={() => this.createNote("test")} />
      </div>
    );
  }
}
