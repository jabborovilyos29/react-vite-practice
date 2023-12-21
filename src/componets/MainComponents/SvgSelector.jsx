import React from "react";
import { svgData } from "../../data/data";

export function SvgSelector({ setFilterData }) {
  const handleFilter = (value) => {
    if (value === "all") {
      setFilterData(svgData);
    } else {
      const newData = svgData.filter((data) => {
        return data.category === value;
      });
      setFilterData(newData);
    }
  };

  return (
    <div className="select__container">
      <fieldset>
        <h2>Выбери категорию</h2>
        <select
          className="select"
          onClick={(evt) => {
            handleFilter(evt.target.value);
          }}
        >
          <option value={"all"} label="Все" />
          <option value={"patriot"} label="Патриот" />
          <option value={"web"} label="Веб разработка" />
          <option value={"football"} label="Футбол" />
        </select>
      </fieldset>
    </div>
  );
}
