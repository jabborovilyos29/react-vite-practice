import React, { useState } from "react";
// import { svgData } from "../../data/data.jsx";
import { CreditCard } from "./CreditCard.jsx";
import { SvgSelector } from "./SvgSelector.jsx";
import { ColorsButtons } from "./ColorsButtons.jsx";
import { SVG_SELECT } from "../../store/actions/action.js";
import Input from "./Input.jsx";
import { useDispatch, useSelector } from "react-redux";

// const defaultColor = {
//   id: 1,
//   background:
//     "linear-gradient(113.06deg, #141313 7.79%, #61605e 30.47%, #36312b 55%, #464646 78.6%,  #757573 96.64% )",
//   svgColor: "white",
// };

export default function SvgComponent() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cardReducer);

  console.log("svg", data);

  const [username, setUsername] = useState("CARD HOLDER");
  // const [filterData, setFilterData] = useState(data.data);

  const handleClick = (id) => {
    dispatch({ type: SVG_SELECT, payload: id });
  };

  return (
    <>
      <SvgSelector  />
      <div className="svgbox">
        <div>
          <h2 style={{ height: 39 }}>Выбери свой дизайн</h2>
          <div className="svg__controller">
            <div className="svg__container">
              {data.data.map((svg) => {
                return (
                  <div
                    key={svg.id}
                    className="svg__container__inner"
                    onClick={() => handleClick(svg.id)}
                    style={{
                      border:
                        data.svgSelect !== null &&
                        data.svgSelect[0].id === svg.id &&
                        "2px solid tomato",
                    }}
                  >
                    <svg
                      viewBox="-22 -5 300.000000 300.000000"
                      style={{
                        width: "150px",
                        height: "80px",
                        // fill: `${color}`,
                      }}
                    >
                      {svg.content}
                    </svg>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <ColorsButtons />
          <div className="svg__container">
            <CreditCard
              svg={data.svgSelect}
              color={data.defaultColor}
              username={username}
            />
          </div>
        </div>
      </div>
      <Input username={username} setUsername={setUsername} />
    </>
  );
}
