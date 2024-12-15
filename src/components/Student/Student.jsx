import React from "react";
import propTypes from "prop-types";
import "./Student.css";

function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {!props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
Student.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
  isStudent: propTypes.bool,
};
Student.defaultProps = {
  name: "Guess",
  age: 0,
  isStudent: true,
};

export default Student;
