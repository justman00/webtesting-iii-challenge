// Test away!
import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import Dashboard from "./Dashboard";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import { reducer } from "../index";

afterEach(cleanup);

describe("Dashboard", () => {
  it.skip("should render all the right things on mount", () => {
    const { getByText } = render(<Dashboard />);

    getByText(/unlocked/i);
    getByText(/open/i);
    getByText(/lock gate/i);
    getByText(/close gate/i);
  });
});

function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store
  };
}

describe("tests with redux", () => {
  it("still changes correctly if clicking close gate", () => {
    const { getByText } = renderWithRedux(<Dashboard />);

    fireEvent.click(getByText(/close gate/i));

    getByText(/open gate/i);
  });
});
