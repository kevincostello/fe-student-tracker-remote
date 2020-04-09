import React, { Component } from "react";
import StudentCard from "./StudentCard";
import axios from "axios";

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
    isLoading: true,
  };
  render() {
    const { students, isLoading } = this.state;
    if (isLoading) return <p>The list of students is loading....</p>;
    return (
      <ul>
        {students.map((student) => {
          return <StudentCard student={student} key={student._id} />;
        })}
      </ul>
    );
  }

  componentDidMount() {
    this.fetchStudents().then((students) => {
      this.setState({ students, isLoading: false });
    });
  }

  fetchStudents = () => {
    return axios
      .get("https://nc-student-tracker.herokuapp.com/api/students")
      .then(({ data }) => {
        return data.students;
      });
  };
}
