import React from "react";
import "./NotesList.css";
import Context from "../Context.js";
import Section from "../Section/Section";
import NewModal from "../Modal/NewModal";

export default class NotesList extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      activeNotes: this.props.notes,
      modal: false
    };
  }

  handleModal = () => {};

  componentDidMount() {
    const notes = this.props.notes;
    const activeCategory = this.props.activeTab;
    this.setState({ modal: this.context.HandleModal });

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
    const subsList = this.context.subcategories;

    return (
      <div className="note-headers">
        {subsList.map(sub => {
          if (sub.category_id === active) {
            return <Section section={sub.subcategory_name} index={sub.id} />;
          }
        })}
        <span>
          <b onClick={this.context.handleModal}>+ Create new section</b>
        </span>
        {this.context.modal.shown && !this.context.modal.subId && (
          <NewModal submit={this.context.handleModal} kind={"Section"} />
        )}
      </div>
    );
  }
}
