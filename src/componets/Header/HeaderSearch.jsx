import React from "react";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterByName } from "../../store/actions/action";

export default function HeaderSearch() {
  const data = useSelector((state) => state.rootReducer);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    const newData = data?.products.filter((product) => {
      return product.title.toUpperCase().includes(value.toUpperCase());
    });
    dispatch(filterByName(newData));
  };

  return (
    <>
      <div className={styles.searchContainer}>
        <h4>Search by name:</h4>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            handleChange(event.target.value);
          }}
        />
      </div>
    </>
  );
}
