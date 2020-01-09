import React from "react";
import ReactDOM from "react-dom";
import EditModal from "./EditModal";
import NewModal from "./NewModal";
import { MemoryRouter } from "react-router-dom";

describe("Modal components", () => {
  it("New Modal renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <NewModal />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("EditModal renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <EditModal />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
