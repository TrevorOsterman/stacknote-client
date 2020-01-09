import React from "react";
import ReactDOM from "react-dom";
import Section from "./Section";
import { MemoryRouter } from "react-router-dom";

describe("App component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Section />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
