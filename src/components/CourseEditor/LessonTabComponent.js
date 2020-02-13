import React from "react";
import {findCourse} from "../../services/CourseServices.js";

class LessonTabComponent extends React.Component{
    componentDidMount = async () => {
        let course = await findCourse(this.props.courseId);
        console.log(course);
        this.setState({
            CourseTitle: course.title
        })
    }

    state = {
        CourseTitle: ""
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a href="/"
                        className="close navbar-brand wbdv-course-editor wbdv-close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </a>
                <a className="navbar-brand wbdv-course-title" href="#">{this.state.CourseTitle}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav card">
                        <a className="nav-item nav-link bg-secondary wbdv-page-tab" href="#">Build</a>
                        <a className="nav-item nav-link bg-secondary wbdv-page-tab" href="#">Pages</a>
                        <a className="nav-item nav-link bg-secondary wbdv-page-tab" href="#">Theme</a>
                        <a className="nav-item nav-link bg-secondary wbdv-page-tab" href="#">Store</a>
                        <a className="nav-item nav-link bg-secondary wbdv-page-tab" href="#">Apps</a>
                        <a className="nav-item nav-link bg-secondary wbdv-page-tab" href="#">Settings</a>
                        <button type="button" className="btn btn-secondary wbdv-new-page-btn ml-1"><i className="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </nav>)
    }
}
export default LessonTabComponent;
