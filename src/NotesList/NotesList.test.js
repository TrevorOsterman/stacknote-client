import React from "react";
import ReactDOM from "react-dom";
import NotesList from "./NotesList";
import { MemoryRouter } from "react-router-dom";
import Context from "../Context.js";

describe("App component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const value = {
      notes: [],
      subcategories: [],
      activeTab: {
        name: "",
        key: 1
      },
      activeNotes: [],
      modal: { shown: false, subId: "" }
    };
    ReactDOM.render(
      <MemoryRouter>
        <Context.Provider value={value}>
          <NotesList />
        </Context.Provider>
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
