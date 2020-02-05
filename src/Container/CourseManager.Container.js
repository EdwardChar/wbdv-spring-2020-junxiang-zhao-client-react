import React from "react";
import "./CourseManager.css"
import {deleteCourse, createCourse, findAllCourses} from "../services/CourseServices.js";
import CourseTableContainer from "./CourseTable.Container";

class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        editingCourse: false,
        newCourseTitle: 'Whatever',
        courses: []
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
                <nav className="navbar navbar-expand-lg d-none d-lg-flex navbar-light bg-light">
                    <div className="collapse navbar-collapse container">
                        <div className="navbar-nav mx-auto w-100 row font-weight-bold">
                            <div className="nav-item col-5">
                                <a className="nav-link text-secondary wbdv-header wbdv-title" href="#">Title </a>
                            </div>
                            <div className="nav-item col-2 dropdown">
                                <a className="nav-link dropdown-toggle text-secondary wbdv-header wbdv-owner" href="#">Owned
                                    by </a>
                            </div>
                            <div className="nav-item col-2">
                                <a className="nav-link text-secondary wbdv-header wbdv-last-modified" href="#">Last
                                    modified </a>
                            </div>
                            <div className="nav-item col-1">
                                <a className="nav-link text-secondary wbdv-button wbdv-grid-layout" href="#"><i
                                    className="fas fa-grip-horizontal"></i></a>
                            </div>
                            <div className="nav-item col">
                                <a className="nav-link text-secondary wbdv-header wbdv-sort" href="#"><i
                                    className="fas fa-sort-alpha-down"></i></a>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className = "container" >
                <CourseTableContainer/>
                </div>
            </div>
        );
    }
}

export default CourseManagerContainer;