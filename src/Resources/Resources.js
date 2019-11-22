import React from "react";
import "./Resources.css";

export default class Resources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="resources-section">
        <div className="pm-info">
          <span>
            <b>Academic Success Manager:</b> Sally Joe
          </span>
          <span>
            <b>Email:</b> dummy@fake.com
          </span>
        </div>
        <div className="mentor-info">
          <span>
            <b>Mentor:</b> Smarty Joe
          </span>
          <span>
            <b>Email:</b> fake@dummy.com
          </span>
        </div>
      </div>
    );
  }
}
