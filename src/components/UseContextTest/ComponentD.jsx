import React, { useContext } from "react";
import "./components.css";
import { UserContext } from "./ComponentA";

function ComponentD() {
  const user = UserContext(UserContext);
  return (
    <div className="box">
      <h1>ComponentD</h1>
      <h2>{"bye " + { user }}</h2>
    </div>
  );
}
export default ComponentD;
