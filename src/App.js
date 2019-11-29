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
      activeTab: { name: "Front-End", key: 0 },
      notes: [
        {
          frontEnd: [
            {
              header: "Fundamentals",
              list: ["Item 1", "Item 2"]
            }
          ]
        },
        {
          backEnd: [
            {
              header: "Node.js",
              list: ["Item 1", "Item 2"]
            }
          ]
        },
        {
          database: [
            {
              header: "DBeaver",
              list: ["Item 1", "Item 2"]
            }
          ]
        },
        {
          misc: [
            {
              header: "AAAAAA",
              list: ["AAAAAA"]
            }
          ]
        }
      ]
    };
  }

  handleActiveTab = (tab, idx) => {
    this.setState({ activeTab: { name: tab, key: idx } });
  };

  render() {
    const value = {
      notes: this.state.notes,
      handleActiveTab: this.handleActiveTab,
      activeTab: this.state.activeTab
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
