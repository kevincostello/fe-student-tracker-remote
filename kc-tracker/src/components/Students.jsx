import React from "react";
import StudentList from "./StudentList";

export default function Students() {
  return (
    <div>
      <h2>List of Current Students</h2>
      <StudentList />
      <button>Show current block and starting cohort</button>
    </div>
  );
}
