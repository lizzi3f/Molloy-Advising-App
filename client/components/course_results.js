import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import CourseDetail from './course_detail';
import { Courses } from '../../imports/collections/courses';

const PER_PAGE = 20;

class CourseResults extends Component {
  componentWillMount() {
    this.page = 1;
  }

  render() {
    return (

      <div>
        <table>
          <div>
            <tr>
              <td><label>ID</label></td>
              <td><label>Code</label></td>
              <td><label>Name</label></td>
              <td><label>Description</label></td>
            </tr>
            <div className="course-list">
              {this.props.courses.map(course =>
                <CourseDetail key={course._id} course={course} />)}
            </div>
          </div>
        </table>
      </div>
    )
  }
}

export default withTracker(() => {
  // set up subscription
  Meteor.subscribe('courses', PER_PAGE);

  // return an object. Whatever we return will be sent to EmployeeList
  // as props
  return { courses: Courses.find({}).fetch() };
}) (CourseResults);
