import React from "react";
import ReactDOM from "react-dom";
import Notes from "./Notes";
import { MemoryRouter } from "react-router-dom";
import Context from "../Context";

describe("App component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const value = {
      activeTab: { key: 1 },
      notes: [],
      subcategories: [],
      modal: { shown: false }
    };
    ReactDOM.render(
      <MemoryRouter>
        <Context.Provider value={value}>
          <Notes />
        </Context.Provider>
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
