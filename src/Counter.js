import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    setCount((prev) => prev + 1);
  };
  const onDecrease = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </>
  );
};

export default Counter;
