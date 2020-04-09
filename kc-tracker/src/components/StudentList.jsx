import React, { Component } from "react";
import StudentCard from "./StudentCard";

export default class StudentList extends Component {
  state = {
    students: [
      {
        _id: "5e8da2c82269080e5ec9a2d5",
        name: "Kenny Pfannerstill",
        startingCohort: 1,
        currentBlock: "grad",
      },
      {
        _id: "5e8da2c82269080e5ec9a2d6",
        name: "Mozell Cassin",
        startingCohort: 1,
        currentBlock: "grad",
      },
      {
        _id: "5e8da2c82269080e5ec9a2d7",
        name: "Reynold Muller",
        startingCohort: 1,
        currentBlock: "grad",
      },
    ],
  };
  render() {
    const { students } = this.state;
    return (
      <ul>
        {students.map((student) => {
          return <StudentCard student={student} key={student._id} />;
        })}
      </ul>
    );
  }

  fetchStudents = () => {};
}
