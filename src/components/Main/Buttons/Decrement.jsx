import React from "react";

export function Decrement({ decrement }) {
  return (
    <button className="button__cnt" onClick={decrement}>
      decrement
    </button>
  );
}
