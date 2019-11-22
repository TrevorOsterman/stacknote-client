import React from "react";
import "./Questions.css";

export default class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="preguntas">
        <ul className="questions-list">
          <li className="question">How do you get a database live?</li>
          <li className="question">
            How do you make a full stack application?
          </li>
          <li className="new-question">
            <input type="text" />
            <button>Add</button>
          </li>
        </ul>
      </div>
    );
  }
}
