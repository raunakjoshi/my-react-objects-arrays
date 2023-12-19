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
            <strong>Name:</strong> <strong>{student.name}</strong>,
            <strong>age:</strong> <strong>{student.age}</strong>,
            <strong>courses:</strong>
            <strong>
              {student.courses[0]},{student.courses[1]}
            </strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
