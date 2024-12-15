import React from "react";
import profilePic from "../../assets/314857.png";

function ProfilePicture() {
  //   const imageURl = "../../assets/314857.png";
  const handleClick = (e) => (e.target.style.display = "none");
  return (
    <div>
      <img onClick={(e) => handleClick(e)} src={profilePic} alt="" />
    </div>
  );
}

export default ProfilePicture;
