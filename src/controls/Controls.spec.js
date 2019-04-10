// Test away!
import React from "react";
import { fireEvent, render, cleanup } from "react-testing-library";
import Controls from "./Controls";
import Dashboard from "../dashboard/Dashboard";

afterEach(() => {
  cleanup();
});

// the tests are checking for the presence of the buttons, thus not making it necessary to write a separate test for that
describe("Controls", () => {
  it("checks for correct rendering of the button and the locked toggle button is disabled if the gate is open", () => {
    const mockLock = jest.fn();
    const mockClose = jest.fn();

    const { getByText } = render(
      <Controls toggleLocked={mockLock} toggleClosed={mockClose} />
    );

    const lockBtn = getByText(/lock gate/i);
    const closeBtn = getByText(/close gate/i);

    fireEvent.click(lockBtn);
    fireEvent.click(closeBtn);

    expect(mockLock).toHaveBeenCalledTimes(0);
    expect(mockClose).toHaveBeenCalledTimes(1);
  });

  it("the closed toggle button is disabled if the gate is locked", () => {
    const mockLock = jest.fn();
    const mockClose = jest.fn();

    const { getByText } = render(
      <Controls toggleLocked={mockLock} toggleClosed={mockClose} locked />
    );

    const closeBtn = getByText(/close gate/i);

    fireEvent.click(closeBtn);
    expect(mockClose).toHaveBeenCalledTimes(0);
  });

  it("buttons' text changes to reflect the state the door will be in if clicked", () => {
    const { getByText } = render(<Dashboard />);

    const lockBtn = getByText(/lock gate/i);
    const closeBtn = getByText(/close gate/i);

    fireEvent.click(closeBtn);
    fireEvent.click(lockBtn);

    getByText(/unlock gate/i);
    getByText(/open gate/i);
  });
});
