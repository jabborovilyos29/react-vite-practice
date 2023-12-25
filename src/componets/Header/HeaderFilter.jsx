import React from "react";
import styles from "./Header.module.css";
import { HeaderRadio } from "./HeaderRadio";
import { HeaderRange } from "./HeaderRange";
import { useSelector } from "react-redux";
import { HeaderCategory } from "./HeaderCategory";
import HeaderSearch from "./HeaderSearch";

export function HeaderFilter() {
  const filterValue = useSelector((state) => state.filterReducer.filterBy);

  return (
    <>
     <div className={styles.filterContainer}>
        <HeaderSearch />
      </div>
      <div className={styles.filterContainer}>
        <div className={styles.rangeContainer}>
          <p className={styles.rangeTitle}>filter by:</p>
          <HeaderRadio />
          {filterValue === "price" && <HeaderRange />}
          {filterValue === "category" && <HeaderCategory />}
        </div>
      </div>
     
    </>
  );
}
