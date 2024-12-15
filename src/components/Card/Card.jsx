import React from "react";
import profilePic from "../../assets/314857.png";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile-pic" />
      <h2 className="card-title">Vanstoke</h2>
      <p className="card-text">I make Youtube vidoes and play games</p>
    </div>
  );
}
export default Card;
