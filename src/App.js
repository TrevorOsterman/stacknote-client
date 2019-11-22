import React from "react";
import "./App.css";
import Logo from "./Logo/Logo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Logo />
      </div>
    );
  }
}

export default App;
