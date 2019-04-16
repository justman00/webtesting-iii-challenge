import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";

import Dashboard from "./dashboard/Dashboard";

//const store = createStore(reducer);

export function reducer(store = { closed: false, locked: false }, action) {
  switch (action.type) {
    case "toggleLocked": {
      return { ...store, locked: !store.locked };
    }
    case "toggleClosed": {
      return { ...store, closed: !store.closed };
    }
    default:
      return store;
  }
}

// ReactDOM.render(
//   //<Provider store={store}>
//   <Dashboard />,
//   //</Provider>
//   document.getElementById("root")
// );
