import React from "react";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory } from "../../store/actions/action";

export function HeaderCategory() {
  const products = useSelector((state) => state.rootReducer.products);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    if (value === "All products") {
      dispatch(filterByCategory({ value: value, products: [...products] }));
    } else {
      const filteredProducts = products?.filter((product) => {
        return product.category.name === value;
      });
      dispatch(
        filterByCategory({ value: value, products: [...filteredProducts] }),
      );
    }
  };

  return (
    <>
      <select
        className={styles.selectContainer}
        onChange={(event) => {
          handleChange(event.target.value);
        }}
      >
        <option value={"All products"} label="All products" />
        <option value={"Shoes "} label="Shoes" />
        <option value={"Miscellaneous"} label="Miscellaneous" />
        <option value={"Electronics"} label="Electronics" />
        <option value={"Clothes"} label="Clothes" />
      </select>
    </>
  );
}
