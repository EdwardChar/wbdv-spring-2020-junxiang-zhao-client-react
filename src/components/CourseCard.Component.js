import React from "react";
import {updateCourse} from "../services/CourseServices";

const CourseCardComponent = ({course, deleteCourse, showCourseEditor}) =>
    <div>
        <div className="card m-2">
            <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">Modified 8:00 AM</p>
                <div className="float-right wbdv-row wbdv-button wbdv-delete">
                    <i className="fas fa-trash-alt"></i>
                </div>
                <div className="float-right wbdv-row wbdv-button mx-2">
                    <i className="fas fa-pencil-alt"></i>
                </div>
            </div>
        </div>
    </div>

export default CourseCardComponent;