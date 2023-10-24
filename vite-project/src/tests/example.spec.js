import { render, screen } from "@testing-library/react";

import { App } from "vite-project/src/App.jsx"

describe("Examples", () => {
  it("should be a teapot", () => {
    expect(1).toBe(1);
  });

  it("should render App", () => {
    render(<App />);
    screen.debug();
  });
});
