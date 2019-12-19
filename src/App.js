import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Nav from "./Nav/Nav";
import Logo from "./Logo/Logo";
import Notes from "./Notes/Notes";
import Lander from "./Lander/Lander";
import Questions from "./Questions/Questions";
import Resources from "./Resources/Resources";
import Login from "./Login/Login";
import Context from "./Context";
import config from "./config.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      activeTab: {
        name: "",
        key: 1
      }
    };
  }

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/api/notes`, {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(res => {
        this.setState({ notes: res });
      });
  }

  handleActiveTab = (tab, idx) => {
    this.setState({ activeTab: { name: tab, key: idx + 1 } });
  };

  addNote = note => {
    this.setState({
      notes: {}
    });
  };

  render() {
    const test = "activeTab";
    console.log(this.state[test]);
    const value = {
      notes: this.state.notes,
      handleActiveTab: this.handleActiveTab,
      activeTab: this.state.activeTab
      // frontEndNotes: Object.values(this.state.notes[0]),
      // backEndNotes: Object.values(this.state.notes[1]),
      // databaseNotes: Object.values(this.state.notes[1]),
      // miscNotes: Object.values(this.state.notes[2])
    };
    return (
      <div className="App">
        <Nav />
        <Logo />
        <Context.Provider value={value}>
          <Route exact path="/" component={Lander} />
          <Route path="/notes" component={Notes} />
          <Route path="/questions" component={Questions} />
          <Route path="/resources" component={Resources} />
          <Route path="/login" component={Login} />
        </Context.Provider>
      </div>
    );
  }
}

export default App;
