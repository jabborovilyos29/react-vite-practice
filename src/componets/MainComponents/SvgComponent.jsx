import React, { useState } from "react";
import { svgData } from "../../data/data.jsx";
import { CreditCard } from "./CreditCard.jsx";
import { SvgSelector } from "./SvgSelector.jsx";
import { ColorsButtons } from "./ColorsButtons.jsx";
import Input from "./Input.jsx";

const defaultColor = {
  id: 1,
  background:
    "linear-gradient(113.06deg, #141313 7.79%, #61605e 30.47%, #36312b 55%, #464646 78.6%,  #757573 96.64% )",
  svgColor: "white",
};

export default function SvgComponent() {
  const [color, setColor] = useState(defaultColor);
  const [svgSelect, setSvgSelect] = useState(null);
  const [username, setUsername] = useState("CARD HOLDER");
  const [filterData, setFilterData] = useState(svgData);

  const handleClick = (id) => {
    const selectedSvg = svgData.filter((svg) => {
      return svg.id === id;
    });
    setSvgSelect(selectedSvg);
  };

  return (
    <>
      <SvgSelector filterData={filterData} setFilterData={setFilterData} />
      <div className="svgbox">
        <div>
          <h2 style={{ height: 39 }}>Выбери свой дизайн</h2>
          <div className="svg__controller">
            <div className="svg__container">
              {filterData.map((svg) => {
                return (
                  <div
                    key={svg.id}
                    className="svg__container__inner"
                    onClick={() => handleClick(svg.id)}
                    style={{
                      border:
                        svgSelect !== null &&
                        svgSelect[0].id === svg.id &&
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
          <ColorsButtons setColor={setColor} />
          <div className="svg__container">
            <CreditCard svg={svgSelect} color={color} username={username} />
          </div>
        </div>
      </div>
      <Input username={username} setUsername={setUsername} />
    </>
  );
}
