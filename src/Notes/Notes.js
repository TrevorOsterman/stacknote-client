import React from "react";
import "./Notes.css";

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="note-headers">
        <ul className="notes">
          <ul className="note-header">
            Fundementals
            <li className="note">Note 1 content</li>
            <li className="note">Note 2 content</li>
          </ul>
          <ul className="note-header">
            React
            <li className="note">Note 1 content</li>
            <li className="note">Note 2 content</li>
          </ul>
        </ul>
      </div>
    );
  }
}
