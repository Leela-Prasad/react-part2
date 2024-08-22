import { useReducer, useState } from "react";

interface Action {
  type: "INCREMENT" | "RESET";
}

function counterReducer(state: number, action: Action): number {
  if (action.type === "INCREMENT") return state + 1;

  if (action.type === "RESET") return 0;

  return state;
}

function Counter() {
  const [value, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      Counter {value}
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        className="btn btn-primary mx-2"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "RESET" })}
        className="btn btn-primary"
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
