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

describe("Display", () => {
  it("displays 'Closed' if the `closed` prop is `true`", () => {
    const { getByText } = render(<Display closed />);

    getByText(/closed/i);
  });

  it("displays 'Open' if the `closed` prop is `false`", () => {
    const { getByText } = render(<Display closed={false} />);

    getByText(/open/i);
  });

  it("displays 'Unlocked' if the `locked` prop is `false`", () => {
    const { getByText } = render(<Display locked={false} />);

    getByText(/unlocked/i);
  });

  it("displays 'Locked' if the `locked` prop is `true`", () => {
    const { getByText } = render(<Display locked />);

    getByText(/locked/i);
  });

  it("when unlocked or open, use the green-led class", () => {
    const { getByTestId } = render(<Display locked={false} closed={false} />);

    getByTestId(/green-led/i);
  });
});
