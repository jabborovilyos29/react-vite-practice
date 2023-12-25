import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByPrice } from "../../store/actions/action";
import styles from "./Header.module.css";

export function HeaderRange() {
  const filteredData = useSelector((state) => state.filterReducer);
  const data = useSelector((state) => state.rootReducer);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    const newData = data?.products?.filter((product) => {
      return Number(product.price) <= Number(value);
    });
    dispatch(filterByPrice({ value: value, products: [...newData] }));
  };

  return (
    <>
      <input
        className={styles.rangeInput}
        type="range"
        max={1000}
        min={1}
        value={filteredData.initialPrice}
        onChange={(event) => {
          handleChange(Number(event.target.value));
        }}
      />
      <div className={styles.span}>
        <span> {filteredData.initialPrice} $</span>
      </div>
    </>
  );
}
