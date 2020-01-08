import React from "react";
import ReactDOM from "react-dom";
import Notes from "./Notes";
import { MemoryRouter } from "react-router-dom";

describe("App component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Notes />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
