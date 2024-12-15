import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // Uses the CURRENT state to calculate the NEXT state.
    // set function do not trigger an update
    // React batches together state updates for performance
    // NEXT state becomes the CURRENT state after an update
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);

    // Takes the PENDING state to calculate NEXT state.
    // React puts your updater function in a queue (waiting list)
    // During the next render, it will call them in the same order
  };
  const decrement = () => {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-elements">
      <p className="count-display">{count}</p>
      <button className="counter-button" onClick={decrement}>
        Decrement
      </button>
      <button className="counter-button" onClick={reset}>
        reset
      </button>
      <button className="counter-button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
