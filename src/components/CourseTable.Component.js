import React from "react";
import CourseTableRow from "./CourseRow.Component.js";
import "./CourseTable.css";

const CourseTableComponent = ({courses, deleteCourse, showCourseEditor}) =>
    <div>
        <ul>
            {
                // courses.map(function(course, index) {
                //     return <CourseTableRow
                //         showCourseEditor={showCourseEditor}
                //         deleteCourse={deleteCourse}
                //         key={course._id}
                //         course={course}/>
                // })
                <CourseTableRow
                    showCourseEditor={showCourseEditor}
                    deleteCourse={deleteCourse}
                    key="00001"
                    course={
                        {
                            title: "CS5000"
                        }
                    }/>
            }
        </ul>
    </div>
export default CourseTableComponent