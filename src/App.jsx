import { useEffect, useState } from "react";
import styles from "./App.module.css";

const moves = [
  {
    name: "rock",
    dominates: "scrissors",
  },
  {
    name: "scrissors",
    dominates: "paper",
  },
  {
    name: "paper",
    dominates: "rock",
  },
];

const pc = {
  points: 0,
  totalScore: 0,
  move: null,
};

const user = {
  points: 0,
  totalScore: 0,
  move: null,
};

function App() {
  const [pcState, setPcState] = useState(pc);
  const [userState, setUserState] = useState(user);
  const [winStatus, setWinStatus] = useState(false);

  if (pcState.points === 3) {
    setPcState((prev) => {
      return {
        ...prev,
        points: 0,
        totalScore: prev.totalScore + 1,
      };
    });
    setUserState((prev) => {
      return {
        ...prev,
        points: 0,
      };
    });
  }
  if (userState.points === 3) {
    setUserState((prev) => {
      return {
        ...prev,
        points: 0,
        totalScore: prev.totalScore + 1,
      };
    });
    setPcState((prev) => {
      return {
        ...prev,
        points: 0,
      };
    });
  }

  const handleClick = (value) => {
    const pcMove = moves[Math.floor(Math.random() * 3)];
    if (value === pcMove.name) {
      setWinStatus("draw");
      setPcState((prev) => {
        return {
          ...prev,
          move: pcMove.name,
        };
      });
      setUserState((prev) => {
        return {
          ...prev,
          move: value,
        };
      });
    } else if (value === pcMove.dominates) {
      setWinStatus("You win");
      setUserState((prev) => {
        return {
          ...prev,
          points: prev.points + 1,
          move: value,
        };
      });
      setPcState((prev) => {
        return {
          ...prev,
          move: pcMove.name,
        };
      });
    } else {
      setWinStatus("PC win");
      setPcState((prev) => {
        return {
          ...prev,
          points: prev.points + 1,
          move: pcMove.name,
        };
      });
      setUserState((prev) => {
        return {
          ...prev,
          move: value,
        };
      });
    }
  };

  return (
    <>
      <div className={styles.container}>
        {winStatus && <div className={styles.win}>{winStatus}</div>}
        <h1>PC:&#128187;</h1>
        <div className={styles.gameBlock}>
          {pcState.move === "rock" && <p>&#9994;</p>}
          {pcState.move === "paper" && <p>&#9996;</p>}
          {pcState.move === "scrissors" && <p>&#9995;</p>}
        </div>
        <div className={styles.gameBlock}>
          {userState.move === "rock" && <p>&#9994;</p>}
          {userState.move === "paper" && <p>&#9996;</p>}
          {userState.move === "scrissors" && <p>&#9995;</p>}
        </div>
        <div className={styles.moves}>
          <h5>You: </h5>
          <button
            value="rock"
            onClick={(evt) => {
              handleClick(evt.target.value);
            }}
          >
            &#9994;
          </button>
          <button
            value="paper"
            onClick={(evt) => {
              handleClick(evt.target.value);
            }}
          >
            &#9996;
          </button>
          <button
            value="scrissors"
            onClick={(evt) => {
              handleClick(evt.target.value);
            }}
          >
            &#9995;
          </button>
        </div>
        <div className={styles.scoreBar}>
          <h3>
            Score:
            <p>
              PC {pcState.points} - {userState.points} user
            </p>
          </h3>
          <h3>
            Total score:
            <p>
              PC {pcState.totalScore} - {userState.totalScore} user
            </p>
          </h3>
        </div>
      </div>
    </>
  );
}

export default App;
