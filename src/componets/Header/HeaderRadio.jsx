import React from "react";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterRadio } from "../../store/actions/action";

export function HeaderRadio() {
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(filterRadio(value));
  };

  return (
    <>
      <div className={styles.radioContainer}>
        <div className={styles.radioItems}>
          <p>price </p>
          <input
            name="radio"
            type="radio"
            value={"price"}
            defaultChecked
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          />
        </div>
        <div className={styles.radioItems}>
          <p>category </p>
          <input
            name="radio"
            type="radio"
            value={"category"}
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
}
