import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Nav from "./Nav/Nav";
import Logo from "./Logo/Logo";
import Notes from "./Notes/Notes";
import Lander from "./Lander/Lander";
import About from "./About/About";
import Resources from "./Resources/Resources";
import Context from "./Context";
import config from "./config.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      dataLoaded: false,
      subcategories: [],
      activeTab: {
        name: "",
        key: 1
      },
      activeNotes: [],
      modal: { shown: false, subId: "" }
    };
  }

  rerender = () => {
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
        this.setState({
          notes: res
        });
      });

    fetch(`${config.API_ENDPOINT}/api/subcategories`, {
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
        this.setState({
          subcategories: res,
          dataLoaded: true
        });
      });
  };

  componentDidMount() {
    this.rerender();
  }

  handleActiveTab = (tab, idx) => {
    this.setState({ activeTab: { name: tab, key: idx + 1 } });
  };

  handleModal = () => {
    if (this.state.modal.shown === false) {
      this.setState({ modal: { shown: true } });
    } else {
      this.setState({ modal: { shown: false } });
    }
  };

  editModal = sub => {
    if (this.state.modal.shown === false) {
      this.setState({ modal: { shown: true, subId: sub } });
    }
  };

  handleActiveNotes(notes) {
    this.state.notes.map(note => {
      if (note.category_id === this.state.activeTab.key) {
        this.setState({ activeNotes: [...this.state.activeNotes], note });
      }
    });
  }

  addNote = note => {
    this.setState({
      notes: {}
    });
  };

  render() {
    const value = {
      notes: this.state.notes,
      subcategories: this.state.subcategories,
      handleActiveTab: this.handleActiveTab,
      activeTab: this.state.activeTab,
      rerender: this.rerender,
      handleModal: this.handleModal,
      editModal: this.editModal,
      modal: this.state.modal,
      dataLoaded: this.state.dataLoaded
    };
    return (
      <div className="App">
        <Nav />
        <Logo />
        <Context.Provider value={value}>
          <Route exact path="/" component={Lander} />
          <Route path="/notes" component={Notes} />
          <Route path="/about" component={About} />
        </Context.Provider>
      </div>
    );
  }
}

export default App;
