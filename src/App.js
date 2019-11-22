import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Nav from "./Nav/Nav";
import Logo from "./Logo/Logo";
import NoteNav from "./NoteNav/NoteNav";
import Notes from "./Notes/Notes";
import Lander from "./Lander/Lander";
import Questions from "./Questions/Questions";
import Resources from "./Resources/Resources";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Logo />
        <Route exact path="/" component={Lander} />
        <Route path="/notes" component={NoteNav} />
        <Route path="/notes" component={Notes} />
        <Route path="/questions" component={Questions} />
        <Route path="/resources" component={Resources} />
      </div>
    );
  }
}

export default App;
