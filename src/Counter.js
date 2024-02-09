import React, { useState } from "react";
import OddEvenResult from "./OddEvenResult";

const Counter = ({ initalValue }) => {
  const [count, setCount] = useState(initalValue);
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
      <OddEvenResult count={count} />
    </>
  );
};

export default Counter;
