import React from "react";
import Context from "../Context";
import Modal from "../Modal/Modal";
import config from "../config.js";
import "./Section.css";

export default class Section extends React.Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      newNote: ""
    };
  }

  createNote(subId) {
    const note = {
      content: this.state.newNote,
      subcategory_id: subId
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(note)
    };

    fetch(`${config.API_ENDPOINT}/api/notes`, options)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then(note => {
        this.setState({ newNote: "" });
      })
      .then(this.context.rerender);
  }

  deleteNote(noteId) {
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    };

    fetch(`${config.API_ENDPOINT}/api/notes/${noteId}`, options)
      .then(res => {
        if (!res.ok) {
          throw new Error("Could not delete");
        }
        return res;
      })
      .then(this.context.rerender);
  }

  deleteSection(sectionId) {
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    };

    fetch(`${config.API_ENDPOINT}/api/subcategories/${sectionId}`, options)
      .then(res => {
        if (!res.ok) {
          throw new Error("Could not delete");
        }
        return res;
      })
      .then(this.context.rerender);
  }

  render() {
    const notesList = this.context.notes;
    return (
      <div>
        <ul className="note-header">
          {this.props.section}
          <button onClick={this.context.handleModal}>edit</button>
          {this.context.modal && (
            <Modal kind="Section" title={this.props.section} />
          )}
          <button onClick={() => this.deleteSection(this.props.index)}>
            delete
          </button>
          {notesList.map(note => {
            if (note.subcategory_id === this.props.index) {
              return (
                <li className="note">
                  <span>{note.content}</span>
                  <button onClick={() => this.deleteNote(note.id)}>x</button>
                </li>
              );
            }
          })}
        </ul>
        <input
          type="text"
          placeholder="new note"
          value={this.state.newNote}
          onChange={e => this.setState({ newNote: e.target.value })}
        />
        <button onClick={() => this.createNote(this.props.index)} />
      </div>
    );
  }
}
