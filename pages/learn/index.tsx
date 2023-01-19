import React, { useReducer } from "react";

interface State {
  count: number
}

interface Action {
  type: 'increment' | 'decrement'
}

const initialState: State = {
  count: 0
}

const reducer = (state: State, action: Action): State => {
  switch(action.type) {
    case 'increment':
      return { count: state.count + 1}
    case 'decrement':
      return { count: state.count - 1}
    default:
      return state
  }
}

const Learn: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <center>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
      </center>
    </>
  )
}

export default Learn;