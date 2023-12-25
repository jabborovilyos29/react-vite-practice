import React from "react";
import styles from "./MainComponent.module.css";

export function Empty() {
  return (
    <div className={styles.emptyContainer}>
      <h1>no products found</h1>
    </div>
  );
}
