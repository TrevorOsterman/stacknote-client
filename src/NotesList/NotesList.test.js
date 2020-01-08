import React from "react";
import ReactDOM from "react-dom";
import NotesList from "./NotesList";
import { MemoryRouter } from "react-router-dom";

describe("App component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <NotesList />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
