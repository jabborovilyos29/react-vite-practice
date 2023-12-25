import React from "react";
import styles from "./Header.module.css";
import { HeaderFilter } from "./HeaderFilter";


export function Header() {
  return (
    <>
      <header className={styles.navbar}>
        <h4 className={styles.navbarLogo}>Welcome</h4>
        <HeaderFilter />
        
      </header>
    </>
  );
}
