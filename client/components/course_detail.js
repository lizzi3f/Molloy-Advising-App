import React, { Component } from 'react';

const CourseDetail = ({ course }) => {
  const { course_id, code, course_Name, course_Description } = course;

  return (
    <div>
      <tr>
        <td><label>{course_id}</label></td>
        <td><label>{code}</label></td>
        <td><label>{course_Name}</label></td>
        <td><label>{course_Description}</label></td>
      </tr>
    </div>
  );
};

export default CourseDetail;
