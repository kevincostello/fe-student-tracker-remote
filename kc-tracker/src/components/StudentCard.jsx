import React from "react";

export default function StudentCard(props) {
  const { name, startingCohort, currentBlock } = props.student;
  const { showMoreInfo } = props;
  return (
    <li>
      {showMoreInfo ? (
        <>
          <h3>{name}</h3>
          <p>Starting Cohort: {startingCohort}</p>
          <p>Current Block: {currentBlock}</p>{" "}
        </>
      ) : (
        <h3>{name}</h3>
      )}
    </li>
  );
}
