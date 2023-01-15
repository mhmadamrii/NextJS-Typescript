import React from "react";
import { createStore } from "redux";

interface State {
  count: number;
}

interface Action {
  type: string;
  payload?: any;
}

const initialState = {
  count: 0
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export const store = createStore(reducer, initialState);
