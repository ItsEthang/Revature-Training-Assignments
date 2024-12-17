import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount((count) => (count += 1));
  };
  const handleDecrease = () => {
    setCount((count) => (count -= 1));
  };
  return (
    <>
      <div data-testid="counter">{count}</div>
      <button data-testid="increment" onClick={handleIncrease}>
        increase
      </button>
      <button data-testid="decrement" onClick={handleDecrease}>
        decrease
      </button>
    </>
  );
};

export default Counter;
