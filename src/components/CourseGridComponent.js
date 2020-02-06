import React from "react";
import CourseCardComponent from "./CourseCardComponent.js";

const CourseGridComponent = ({courses, deleteCourse, showCourseEditor}) =>
    <div className="container">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 row-cols-xl-12">
            {
                courses.map(function(course, index) {
                    return <CourseCardComponent
                        showCourseEditor={showCourseEditor}
                        deleteCourse={deleteCourse}
                        key={course._id}
                        course={course}/>
                })
                }
    </div>
    </div>
export default CourseGridComponent;