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
    showMoreInfo: false,
  };
  render() {
    const { students, isLoading, showMoreInfo } = this.state;
    console.log(showMoreInfo);

    if (isLoading) return <p>The list of students is loading....</p>;
    return (
      <>
        <button onClick={this.flipStudentInfo}>
          Show current block and starting cohort
        </button>
        <ul>
          {students.map((student) => {
            return (
              <StudentCard
                student={student}
                key={student._id}
                showMoreInfo={showMoreInfo}
              />
            );
          })}
        </ul>
      </>
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

  flipStudentInfo = () => {
    this.setState((currentState) => {
      return { showMoreInfo: !currentState.showMoreInfo };
    });
  };
}
