import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { COLOR_SELECT } from "../../store/actions/action";

const gradients = [
  {
    id: 1,
    background:
      "linear-gradient(113.06deg, #141313 7.79%, #61605e 30.47%, #36312b 55%, #464646 78.6%,  #757573 96.64% )",
    svgColor: "white",
  },
  {
    id: 2,
    background: "linear-gradient(45deg, black, white)",
    svgColor: "white",
  },

  {
    id: 3,
    background: "linear-gradient(45deg, black, gold)",
    svgColor: "gold",
  },

  {
    id: 4,
    background: "linear-gradient(45deg, gold, white)",
    svgColor: "black",
  },
  {
    id: 5,
    background: "linear-gradient(45deg, gold, black)",
    svgColor: "black",
  },
];

export function ColorsButtons() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cardReducer);

  const handleClick = (gradient) => {
    dispatch({ type: COLOR_SELECT, payload: gradient });
    // setColor(gradient);
  };

  return (
    <div className="colors__buttons">
      {data.gradients.map((gradient) => {
        return (
          <button
            key={gradient.id}
            className="color__button"
            value={gradient.svgColor}
            style={{ background: gradient.background }}
            onClick={() => handleClick(gradient)}
          >
            {" "}
          </button>
        );
      })}
    </div>
  );
}
