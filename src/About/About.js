import React from "react";
import "./About.css";

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="about-section">
        <p>
          StackNote is a standard note-taking app for students beginning to
          learn the fundementals of full stack web development
        </p>
        <p>
          The notes sections are broken down by by <b>Front-End</b>,{" "}
          <b>Back-End</b>, <b>Database</b>, and <b>Misc.</b> for any notes that
          do not fall strictly under one category.
        </p>
        <p>
          This application is an ongoing project by Trevor Osterman, and as
          such, will receive the implementation of new features over time
        </p>
        <p>Please feel free to get started taking notes, and happy hacking!</p>
      </div>
    );
  }
}
