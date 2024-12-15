import React from "react";
import style from "./Button.module.css";

function Button() {
  const handleClick = (e) => (e.target.textContent = "OUCH! 🤕");

  return (
    <button className={style.button} onClick={(e) => handleClick(e)}>
      Click me 😊
    </button>
  );
}
export default Button;
