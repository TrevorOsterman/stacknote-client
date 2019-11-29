import React from "react";
import Context from "../Context";

export default class Section extends React.Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      header: this.props.section.header,
      list: this.props.section.list
    };
  }

  createNote(note) {
    this.setState({ list: [...this.state.list, note] });
  }

  render() {
    return (
      <div>
        <ul className="note-header">
          {this.props.section.header}
          {this.props.section.list.map(i => {
            return <li className="note">{i}</li>;
          })}
        </ul>
        <input type="text" placeholder="new note" />
        <button onClick={() => this.createNote("test")} />
      </div>
    );
  }
}
