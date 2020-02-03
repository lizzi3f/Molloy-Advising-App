import React, { Component } from 'react';
import '../CSS/main';
import '../CSS/media';
import '../CSS/login';
import '../CSS/logout';

const Schedule = () => {
    return(
        <div>
            <div className="column" className="right">
                <tr id="list1">
                    <td>Advisor: <a href = "schanker.html">Dr. Jason Schanker</a></td>
                    <td>Major: Computer Science</td>
                    <td>Minor: Computer Information Systems</td>
                </tr>
            </div>
            <div className="column" className="left">
                <table id="schedule">
                  <tr>
                    <th>Course</th>
                    <th>Title</th>
                    <th>Start</th>
                    <th>End</th>
                  </tr>
                  <tr>
                    <td>CSC 3230 01</td>
                    <td>Assembly Language</td>
                    <td>3:25 PM</td>
                    <td>4:50 PM</td>
                  </tr>
                  <tr>
                    <td>CSC 4600 01</td>
                    <td>Internship I</td>
                    <td>5:00 PM</td>
                    <td>6:25 PM</td>
                  </tr>
                  <tr>
                    <td>CSC 4900 01</td>
                    <td>Capstone Seminar</td>
                    <td>12:15 PM</td>
                    <td>1:40 PM</td>
                  </tr>
                  <tr>
                    <td>MAT 2310 01</td>
                    <td>Discrete Math CS</td>
                    <td>12:15 PM</td>
                    <td>1:40 PM</td>
                  </tr>
                </table>
            </div>
        </div>
    )
}
export default Schedule;
