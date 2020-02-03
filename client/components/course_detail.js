import React, { Component } from 'react';

const CourseDetail = ({ course }) => {
  const { _id, course_id, code, course_Name, course_Description } = course;

  return (
    <div>
      <tr>
        <td><label className="courseId">{course_id}</label></td>
        <td><label className="code">{code}</label></td>
        <td><label className="courseName">{course_Name}</label></td>
        <td><label className="courseDescription">{course_Description}</label></td>
        <td><button
        //onClick={{course}.handleButtonClick.bind(addedCourses)}
        id="add-course">
        Add
        </button></td>
      </tr>
    </div>
  );
};

export default CourseDetail;
