import React from "react";

export default function StudentCard(props) {
  const { name, startingCohort, currentBlock } = props.student;
  return (
    <li>
      <h3>{name}</h3>
      <p>Starting Cohort: {startingCohort}</p>
      <p>Current Block: {currentBlock}</p>
    </li>
  );
}
