// src/components/StudentList.jsx
import React from "react";
import studentsData from "../students.json";

const StudentList = () => {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {studentsData.map((student) => (
          <li key={student.id}>
            <strong>Name:</strong> {student.name},<strong>age:</strong>
            {student.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
