import React from "react";
import Context from "../Context.js";
import "./Modal.css";
import config from "../config.js";

export default class Modal extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.title
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const subcategory = {
      subcategory_name: this.state.name,
      category_id: this.context.activeTab.key
    };
    console.log(subcategory);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(subcategory)
    };

    fetch(`${config.API_ENDPOINT}/api/subcategories`, options)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
      })
      .then(this.setState({ name: "" }))
      .then(this.context.handleModal)
      .then(this.context.rerender);
  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({ name: "" });
    this.context.handleModal();
  }

  componentDidMount(props) {
    this.setState({ name: this.props.title });
  }

  render() {
    return (
      <div className="modal">
        <form className="modal-main">
          <label>{this.props.kind} Title:</label>
          <input
            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <button onClick={e => this.handleSubmit(e)}>submit</button>
          <button onClick={e => this.handleCancel(e)}>cancel</button>
        </form>
      </div>
    );
  }
}
