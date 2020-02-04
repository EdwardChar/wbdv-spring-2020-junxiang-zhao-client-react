import React from "react";
import {deleteCourse, createCourse, findAllCourses} from "../services/CourseServices.js";

class CourseManager extends React.Component {
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
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <span style="color: white;"><i className="fas fa-bars mr-3 wbdv-field wbdv-hamburger"></i></span>
                <label htmlFor="newCourse" className="navbar-brand wbdv-label wbdv-course-manager" href="#">Course
                    Manager</label>
                <form className="form-inline my-2 my-lg-0 w-100">
                    <input className="form-control mr-sm-2" style="width: 85%;" id="newCourse"
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
        );
    }
}

export default CourseManager;