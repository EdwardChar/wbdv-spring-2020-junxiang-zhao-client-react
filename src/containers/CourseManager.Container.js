import React from "react";
import "./CourseManager.css"
import {deleteCourse, createCourse, findAllCourses} from "../services/CourseServices.js";
import CourseTableComponent from "../components/CourseTableComponent.js";
import CourseGridComponent from "../components/CourseGridComponent.js";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent.js";

class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        editingCourse: false,
        newCourseTitle: 'New Course Title',
        courses: []
    };

    componentDidMount = async () => {

        const allCourses = await findAllCourses();
        this.setState({
            courses: allCourses
        })
    };

    addCourse = async () =>
    {
        const newCourse = {
            title: this.state.newCourseTitle
        };
        const actualCourse = await createCourse(newCourse);
        const allCourses = await findAllCourses();
        this.setState({
            courses: allCourses
        })
    };

    deleteCourse = async (deletedCourse) => {
        const status = await deleteCourse(deletedCourse._id)
        const courses = await findAllCourses()
        this.setState({
            courses: courses
        })
    };

    showCourseEditor = () =>
        this.setState({
            editingCourse: true
        });

    hideCourseEditor = () =>
        this.setState({
            editingCourse: false
        });

    toggle = () => {
        this.setState((prevState) => {
            if (prevState.layout === 'grid') {
                return {
                    layout: 'table'
                }
            } else {
                return {
                    layout: 'grid'
                }
            }
        })
    }

    updateForm = (e) =>
        this.setState({
            newCourseTitle: e.target.value
        })

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <i className="fas fa-bars mr-3 wbdv-field wbdv-hamburger"></i>
                    <label htmlFor="newCourse" className="navbar-brand wbdv-label wbdv-course-manager" href="#">Course
                        Manager</label>
                    <form className="form-inline my-2 my-lg-0 w-100">
                        <input className="form-control mr-sm-2" id="newCourse"
                               placeholder="New Course Title"
                               onChange={
                                   (e) => this.setState({
                                        newCourseTitle: e.target.value
                                    }
                                    )}/>
                        <button className="btn bg-transparent my-2 my-sm-0 align-right wbdv-button wbdv-add-course"
                                onClick={this.addCourse}>
                            <span className="fa-stack">
                            <i className="fas fa-circle fa-stack-2x text-danger"></i>
                            <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                            </span>
                        </button>
                    </form>
                </nav>
                {
                    this.state.editingCourse
                    && <CourseEditorComponent hideCourseEditor={this.hideCourseEditor}/>
                }
                    {
                        !this.state.editingCourse &&
                        <div>
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
                                            <a className="nav-link text-secondary wbdv-button wbdv-grid-layout" onClick={this.toggle} href="#"><i
                                                className="fas fa-grip-horizontal"></i></a>
                                        </div>
                                        <div className="nav-item col">
                                            <a className="nav-link text-secondary wbdv-header wbdv-sort" href="#"><i
                                                className="fas fa-sort-alpha-down"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            {this.state.layout === 'table' &&
                            <CourseTableComponent
                                showCourseEditor={this.showCourseEditor}
                                deleteCourse={this.deleteCourse}
                                courses={this.state.courses}/>}
                            {this.state.layout === 'grid' &&
                            <CourseGridComponent
                                showCourseEditor={this.showCourseEditor}
                                deleteCourse={this.deleteCourse}
                                courses={this.state.courses}/>}
                        </div>
                    }


            </div>
        );
    }
}

export default CourseManagerContainer;