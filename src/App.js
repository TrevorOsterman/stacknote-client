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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: { name: "frontEnd", key: 0 },
      notes: {
        frontEnd: [
          {
            header: "Fundamentals",
            list: ["Item 1", "Item 2"]
          },
          {
            header: "React",
            list: ["Re", "Act"]
          }
        ],
        backEnd: [
          {
            header: "Node.js",
            list: ["Item 1", "Item 2"]
          }
        ],
        database: [
          {
            header: "DBeaver",
            list: ["Item 1", "Item 2"]
          }
        ],
        misc: [
          {
            header: "AAAAAA",
            list: ["AAAAAA"]
          }
        ]
      }
    };
  }

  handleActiveTab = (tab, idx) => {
    if (tab === "Front-End") {
      this.setState({ activeTab: { name: "frontEnd", key: idx } });
    } else if (tab === "Back-End") {
      this.setState({ activeTab: { name: "backEnd", key: idx } });
    } else if (tab === "Database") {
      this.setState({ activeTab: { name: "database", key: idx } });
    } else {
      this.setState({ activeTab: { name: "misc", key: idx } });
    }
    // this.setState({ activeTab: { name: tab, key: idx } });
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
