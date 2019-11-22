import React from "react";
import "./Login.css";

export default class Login extends React.Component {
  render() {
    return (
      <div className="login-message">
        <p>
          <b>StackNote</b> is currently in early development and as such is not
          capable of user registry or management.
        </p>
        <p>
          If you would like to make a contribution to the project, please send
          an email to{" "}
          <a href="mailto:trevormosterman@gmail.com">
            <b>trevormosterman@gmail.com</b>
          </a>
          . Otherwise, please continue to check back for more progress!
        </p>
      </div>
    );
  }
}
