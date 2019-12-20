import React from "react";
import "./NotesList.css";
import Context from "../Context.js";
import Section from "../Section/Section";

export default class NotesList extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      activeNotes: this.props.notes
    };
  }

  componentDidMount() {
    const notes = this.props.notes;
    const activeCategory = this.props.activeTab;
    console.log(activeCategory);
    console.log(notes);
    notes.map(note => {
      if (note.category_id === activeCategory) {
        this.setState({
          activeNotes: [...this.state.activeNotes],
          note
        });
      }
    });
  }

  render() {
    const active = this.context.activeTab.key;
    const notesList = this.context.notes;
    const activeNotes = [];
    console.log(active);
    console.log(notesList);
    return (
      <div className="note-headers">
        {notesList.map((note, idx) => {
          if (note.category_id === active) {
            activeNotes.push(note);

            return (
              <Section
                section={note.subcategory_name}
                index={note.subcategory_id}
                content={note.content}
              />
            );

            console.log(activeNotes);
          }
        })}
        <span>
          <b>+ Create new section</b>
        </span>
      </div>
    );
  }
}
