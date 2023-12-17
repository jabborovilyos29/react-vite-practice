import { useState } from "react";

export function useCounter(value) {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + value);
  };
  const decrement = () => {
    setCounter((prev) => prev - value);
  };

  return {
    increment,
    decrement,
    counter,
  };
}
