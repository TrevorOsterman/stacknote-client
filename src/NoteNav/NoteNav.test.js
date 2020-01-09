import React from "react";
import ReactDOM from "react-dom";
import NoteNav from "./NoteNav";
import { MemoryRouter } from "react-router-dom";

describe("App component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <NoteNav />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
