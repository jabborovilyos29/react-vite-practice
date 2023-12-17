import React, { useEffect } from "react";

export function IntervalCnt({ number, setNumber }) {
  useEffect(() => {
    const id = setInterval(() => {
      setNumber((prev) => {
        return prev + Math.floor(Math.random() * 20);
      });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h1>Number: {number}</h1>
    </div>
  );
}
