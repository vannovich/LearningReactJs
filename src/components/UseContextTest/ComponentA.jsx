import React, { useState, createContext } from "react";
import "./components.css";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("Vanstoke");

  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h2>{"Hello " + user}</h2>
      <UserContext.Provider value={user}></UserContext.Provider>
      <ComponentB />
    </div>
  );
}
export default ComponentA;
