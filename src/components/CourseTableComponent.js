import React from "react";
import CourseTableRow from "./CourseRowComponent.js";
import "./CourseTable.css";

const CourseTableComponent = ({courses, deleteCourse, showCourseEditor}) =>
    <div>
        <ul>
            {
                courses.map(function(course, index) {
                    return <CourseTableRow
                        showCourseEditor={showCourseEditor}
                        deleteCourse={deleteCourse}
                        key={course._id}
                        course={course}/>
                })

            }
        </ul>
    </div>

export default CourseTableComponent