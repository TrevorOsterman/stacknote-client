import React from "react";
import ReactDOM from "react-dom";
import Section from "./Section";
import { MemoryRouter } from "react-router-dom";
import Context from "../Context";

describe("Section component", () => {
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
          <Section />
        </Context.Provider>
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
