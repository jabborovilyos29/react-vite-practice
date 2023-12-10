import React from "react";

export function Square({ value, move, setMoves, nextMove, winner }) {
  const handleClick = (value) => {
    console.log(value);
    setMoves((prev) => {
      return prev.map((item) => {
        if (item.value == value) {
          return {
            ...item,
            move: nextMove,
          };
        } else {
          return {
            ...item,
          };
        }
      });
    });
  };

  return (
    <>
      <button
        className="container__inner"
        value={value}
        onClick={(evt) => {
          !winner && handleClick(evt.target.value);
        }}
      >
        {move !== null && move}
      </button>
    </>
  );
}
