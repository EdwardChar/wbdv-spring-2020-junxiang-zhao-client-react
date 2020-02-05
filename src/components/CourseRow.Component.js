import React from "react";
import "./CourseManager.css"
import {deleteCourse, createCourse, findAllCourses} from "../services/CourseServices.js";
import CourseTableContainer from "./CourseTable.Container";

class CourseManagerContainer extends React.Component {
    state = {
        course: "CS5610",
    };

    componentDidMount = async () => {

        const allCourses = await findAllCourses()
        this.setState({
            courses: allCourses
        })

        // findAllCourses()
        //     .then(courses => this.setState({
        //         courses: courses
        //     }))
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <i className="fas fa-bars mr-3 wbdv-field wbdv-hamburger"></i>
                    <label htmlFor="newCourse" className="navbar-brand wbdv-label wbdv-course-manager" href="#">Course
                        Manager</label>
                    <form className="form-inline my-2 my-lg-0 w-100">
                        <input className="form-control mr-sm-2" id="newCourse"
                               placeholder="New Course Title" />
                        <button className="btn bg-transparent my-2 my-sm-0 align-right wbdv-button wbdv-add-course"
                                type="submit">
                                <span className="fa-stack">
                                <i className="fas fa-circle fa-stack-2x text-danger"></i>
                                <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                                </span>
                        </button>
                    </form>
                </nav>
                <CourseTableContainer/>
            </div>
        );
    }
}

export default CourseManagerContainer;