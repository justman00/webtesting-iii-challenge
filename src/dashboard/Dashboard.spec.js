// Test away!
import React from "react";
import { fireEvent, render, cleanup } from "react-testing-library";
import Dashboard from "./Dashboard";

afterEach(() => {
  cleanup();
});

describe("Dashboard", () => {
  it("should render all the right things on mount", () => {
    const { getByText } = render(<Dashboard />);

    getByText(/unlocked/i);
    getByText(/open/i);
    getByText(/lock gate/i);
    getByText(/close gate/i);
  });
});
