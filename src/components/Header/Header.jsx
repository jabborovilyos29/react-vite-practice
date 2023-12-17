import React, { useContext } from "react";
import { inputText } from "../../App";

export function Header() {
  const [text] = useContext(inputText);

  return (
    <div className="header">
      <div className="header__inner">
        <input type="text" />
        <h2>Your text: {text}</h2>
      </div>
    </div>
  );
}
