import React, { useState } from "react";

export default function Input({ username, setUsername }) {
  return (
    <div className="input__container">
      <h2>Введите имя</h2>
      <input
        type="text"
        value={username}
        onChange={(evt) => {
          setUsername(evt.target.value);
        }}
      />
    </div>
  );
}
