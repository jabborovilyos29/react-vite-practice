import React from "react";
import { svgData } from "../../data/data";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_DATA } from "../../store/actions/action";

export function SvgSelector() {
  const dispatch = useDispatch();

  const handleFilter = (value) => {
    dispatch({ type: FILTER_DATA, payload: value });
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
