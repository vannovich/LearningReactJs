import React from "react";
import propTypes from "prop-types";
import "./UserGreeting.css";

function UserGreeting(props) {
  if (props.isLoggedIn) {
    return <h2 className="welcome-message">Welcome {props.username}</h2>;
  } else {
    return <h2 className="login-promt"> Please log in to continue</h2>;
  }
}

UserGreeting.propTypes = {
  isLoggedIn: propTypes.bool,
  username: propTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};
export default UserGreeting;
