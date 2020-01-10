import React from "react";
import ReactDOM from "react-dom";
import Logo from "./Logo";
import { MemoryRouter } from "react-router-dom";

describe("Logo component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
