import React, { useState, useEffect } from "react";
import "./App.css";
import { Square } from "./Square";

const values = [
  {
    value: 0,
    move: null,
  },
  {
    value: 1,
    move: null,
  },
  {
    value: 2,
    move: null,
  },
  {
    value: 3,
    move: null,
  },
  {
    value: 4,
    move: null,
  },
  {
    value: 5,
    move: null,
  },
  {
    value: 6,
    move: null,
  },
  {
    value: 7,
    move: null,
  },
  {
    value: 8,
    move: null,
  },
];

const winMoves = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];

export default function App() {
  const [moves, setMoves] = useState(values);
  const [nextMove, setNextMove] = useState("O");
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    let x = [];
    let o = [];

    if (nextMove === "X") {
      setNextMove("O");
    } else if (nextMove === "O") {
      setNextMove("X");
    }

    const allMoves = moves.filter((item) => {
      return item.move !== null;
    });

    if (allMoves.length === 9) {
      setWinner("draw");
      x.length = 0;
      o.length = 0;
    }

    moves.map((item) => {
      if (item.move === "X") {
        x.push(Number(item.value));
      } else if (item.move === "O") {
        o.push(Number(item.value));
      }
    }),
      winMoves.map((moves) => {
        const winArrX = x.filter((value) => moves.includes(value));
        const winArrO = o.filter((value) => moves.includes(value));
        if (winArrX.length === 3) {
          setWinner("winner X");
          x.length = 0;
          o.length = 0;
        }
        if (winArrO.length === 3) {
          setWinner("winner O");
          x.length = 0;
          o.length = 0;
        }
      });

    // console.log(moves);
  }, [moves]);

  const restartClick = () => {
    setMoves(values);
    setNextMove("O");
    setWinner(false);
  };

  return (
    <>
      <h1>{(winner && winner) || <p>Next move is {nextMove}</p>}</h1>
      <div className="container">
        {moves.map((item, _, moves) => {
          return (
            <Square
              key={item.value}
              value={item.value}
              move={item.move}
              setMoves={setMoves}
              moves={moves}
              nextMove={nextMove}
              winner={winner}
            />
          );
        })}
      </div>
      <button className="button__restart" onClick={restartClick}>
        restart
      </button>
    </>
  );
}
