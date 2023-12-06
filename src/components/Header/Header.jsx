import React from "react";
import style from "./Header.module.css";

export function Header({
  firstName = "Savlatshoh",
  lastName = "Shodizoda",
  role = "admin",
}) {
  return (
    <header className={style.header}>
      <h3>Добро пожаловать !</h3>
      <div className={style.header__info}>
        <h3>{firstName}</h3>
        <h3>{lastName}</h3>
      </div>
      <h4>
        role: <u>{role}</u>
      </h4>
    </header>
  );
}
