import React from "react";
import "./CourseManager.css"
import {deleteCourse, createCourse, findAllCourses} from "../services/CourseServices.js";
import CourseTableComponent from "../components/CourseTableComponent.js";
import CourseGridComponent from "../components/CourseGridComponent.js";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent.js";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


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
        }
        const actualCourse = await createCourse(newCourse)
        console.log(actualCourse)
        const allCourses = await findAllCourses()
        this.setState({
            courses: allCourses
        })
    }

    deleteCourse = async (deletedCourse) => {
        const status = await deleteCourse(deletedCourse._id)
        const courses = await findAllCourses()
        this.setState({
            courses: courses
        })
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
                <Router>
                    <Route
                        path="/course-editor/:courseId"
                        exact={true}
                        render={(props) =>
                            <CourseEditorComponent
                                courseId={props.match.params.courseId}
                                {...props}/>
                        }/>
                    <Route
                        path="/course-editor/:courseId/module/:moduleId"
                        exact={true}
                        render={(props) =>
                            <CourseEditorComponent
                                courseId={props.match.params.courseId}
                                moduleId={props.match.params.moduleId}
                                {...props}/>
                        }/>
                    <Route
                        path="/course-editor/:courseId/module/:moduleId/lesson/:lessonId"
                        exact={true}
                        render={(props) =>
                            <CourseEditorComponent
                                courseId={props.match.params.courseId}
                                moduleId={props.match.params.moduleId}
                                lessonId={props.match.params.lessonId}
                                {...props}/>
                        }/>
                    <Route
                        path="/course-editor/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId"
                        exact={true}
                        render={(props) =>
                            <CourseEditorComponent
                                courseId={props.match.params.courseId}
                                moduleId={props.match.params.moduleId}
                                lessonId={props.match.params.lessonId}
                                topicId={props.match.params.topicId}
                                {...props}/>
                        }/>
                    <Route
                        path="/"
                        exact={true}
                        render={() =>
                            <CourseTableComponent
                                deleteCourse={this.deleteCourse}
                                courses={this.state.courses}/>
                        }/>
                    <Route
                        path="/table"
                        exact={true}
                        render={() =>
                            <CourseTableComponent
                                deleteCourse={this.deleteCourse}
                                courses={this.state.courses}/>
                        }/>
                    <Route
                        path="/grid"
                        exact={true}
                        render={() =>
                            <CourseGridComponent
                                deleteCourse={this.deleteCourse}
                                courses={this.state.courses}/>
                        }/>
                </Router>

            </div>
        );
    }
}

export default CourseManagerContainer;