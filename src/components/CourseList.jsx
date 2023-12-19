import React from "react";
import coursesData from "../courses.json";

const CourseList = () => {
  return (
    <div>
      <h2>Course List</h2>
      <ul>
        {coursesData.map((course) => (
          <li key={course.id}>
            <strong>Name:</strong> {course.name}, ,{" "}
            <strong>CourseInstructor:</strong> {course.instructor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
