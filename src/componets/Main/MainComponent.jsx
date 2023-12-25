import React, { useEffect, useState } from "react";
import styles from "./MainComponent.module.css";
import { ProductCard } from "./ProductCard";
import { Loader } from "./Loader";
import {
  allProducts,
  fetchProducts,
  loadingFunc,
} from "../../store/actions/action";
import { useDispatch, useSelector } from "react-redux";
import { Empty } from "./Empty";

export function MainComponent() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.rootReducer);
  const filteredProducts = useSelector(
    (state) => state.filterReducer.filteredProducts,
  );
  const categoryTitle = useSelector(
    (state) => state.filterReducer.initialCategory,
  );

  const fetchData = () => {
    return async (dispatch) => {
      dispatch(loadingFunc(true));
      try {
        await fetch("https://api.escuelajs.co/api/v1/products")
          .then((res) => res.json())
          .then((data) => {
            dispatch(fetchProducts(data));
            dispatch(allProducts(data));
          });
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(loadingFunc(false));
      }
    };
  };

  useEffect(() => {
    return () => {
      dispatch(fetchData());
    };
  }, []);

  return (
    <>
      <main className={styles.mainContainer}>
        <h2 className={styles.title}>
          {filteredProducts?.length !== 0 && categoryTitle}
        </h2>
        <div className={styles.mainContainerInner}>
          {(data.loading && <Loader />) ||
            (filteredProducts?.length === 0 && <Empty />) ||
            filteredProducts.map((product) => {
              return <ProductCard key={Math.random()} product={product} />;
            })}
        </div>
      </main>
    </>
  );
}
