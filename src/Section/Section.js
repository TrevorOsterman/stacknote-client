import React from "react";
import Context from "../Context";
import EditModal from "../Modal/EditModal";
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

  handleEdit(sub) {
    this.context.editModal(sub);
  }

  render() {
    const notesList = this.context.notes;
    return (
      <div className="section">
        <div className="buttons">
          <button
            className="header-button"
            onClick={() => this.handleEdit(this.props.index)}
          >
            edit
          </button>
          {this.context.modal.shown &&
            this.context.modal.subId === this.props.index && (
              <EditModal
                kind="Section"
                title={this.props.section}
                subId={this.props.index}
              />
            )}
          <button
            className="header-button"
            onClick={() => this.deleteSection(this.props.index)}
          >
            delete
          </button>
        </div>
        <ul className="note-header">
          {this.props.section}

          {notesList.map(note => {
            if (note.subcategory_id === this.props.index) {
              return (
                <li className="note">
                  <span>{note.content}</span>
                  <button
                    className="delete-button"
                    onClick={() => this.deleteNote(note.id)}
                  >
                    x
                  </button>
                </li>
              );
            }
          })}
          <div className="new-note-section">
            <div className="input-field">
              <span className="plus-symbol">+</span>
              <input
                className="note-input"
                type="text"
                placeholder="new note"
                value={this.state.newNote}
                onChange={e => this.setState({ newNote: e.target.value })}
              />
            </div>
            <button
              className="add-button"
              onClick={() => this.createNote(this.props.index)}
            >
              add
            </button>
          </div>
        </ul>
      </div>
    );
  }
}
