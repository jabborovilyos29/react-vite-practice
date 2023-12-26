import React, { useRef, useState } from "react";
import styles from "./ProductCard.module.css";

export function ProductCard({ product }) {
  const ref = useRef();

  const [slideCnt, setslideCnt] = useState(0);

  const nextSlide = (value) => {
    if (slideCnt === product.images.length - 1) {
      setslideCnt(0);
    } else {
      setslideCnt((prev) => prev + value);
    }
  };

  const prevSlide = (value) => {
    if (slideCnt === 0) {
      setslideCnt(2);
    } else {
      setslideCnt((prev) => prev - value);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.images}>
          <button value={1} onClick={(e) => nextSlide(Number(e.target.value))}>
            -prev
          </button>
          <img
            ref={ref}
            className={styles.img}
            src={product.images[slideCnt]}
            alt={product.title}
          />
          <button value={1} onClick={(e) => prevSlide(Number(e.target.value))}>
            next -
          </button>
        </div>
        <div className={styles.product}>
          <h1 className={styles.h1}>{product.title}</h1>
          <p className={styles.p}>category: {product.category.name}</p>
          <h2 className={styles.h2}>{product.price} $</h2>
          <p className={styles.desc}>{product.description}</p>
          <div className={styles.buttons}>
            <button className={styles.moreInf}>more info</button>
            <div className={styles.cntGroup}>
              <button className={styles.addCnt}>+</button>
              <h2 className={styles.productCnt}>0</h2>
              <button className={styles.addCnt}>-</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
