import React from "react";

export function Increment({ increment }) {
  return (
    <button className="button__cnt" onClick={increment}>
      increment
    </button>
  );
}
