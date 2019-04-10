// Test away!
import React from "react";
import { fireEvent, render, cleanup } from "react-testing-library";
import Display from "./Display";

afterEach(() => {
  cleanup();
});

describe("Gate", () => {
  it("should default to unlocked and open", () => {
    const { getByText } = render(<Display />);

    getByText(/unlocked/i);
    getByText(/open/i);
  });

  it("should not be closed or opened if it is locked", () => {});
});
