import React from "react";
import {findCourse} from "../../services/CourseServices.js";
import {connect} from "react-redux";
import lessonService from "../../services/LessonServices";
import {createLesson, deleteLesson, findLessonsForModule, updateLesson} from "../../actions/LessonActions";

class LessonTabComponent extends React.Component{
    componentDidMount = async () => {
        let course = await findCourse(this.props.courseId);
        this.setState({
            CourseTitle: course.title
        });
        await this.props.findLessonsForModule(this.props.moduleId);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.moduleId !== prevProps.moduleId) {
            this.props.findLessonsForModule(this.props.moduleId)
        }
    }

    state = {
        CourseTitle: "",
        editingLessonId: '',
        editingLesson: {
            _id: '',
            title: ''
        },
        activeLessonId:''
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
                        {this.props.lessons && this.props.lessons.map(lesson =>
                        <div className={`nav-item nav-link wbdv-page-tab ${lesson._id === this.state.activeLessonId? "bg-primary":"bg-secondary"}`}
                             key={lesson._id}
                             onClick={() => {
                                 this.setState({
                                     activeLessonId: lesson._id
                                 });
                                 this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${lesson._id}`)
                             }}>
                            {
                                lesson._id !== this.state.editingLessonId &&
                                <div>
                                    <span className="wbdv-module-item-title">{lesson.title}</span>
                                    <button
                                        type="button"
                                        className="close wbdv-module-item-delete-btn"
                                        onClick={() => this.props.deleteLesson(lesson._id)}>
                                        <i className="fas fa-times"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="close mx-2 wbdv-module-item-edit-btn"
                                        onClick={() => {
                                            this.setState({
                                                editingLessonId: lesson._id,
                                                editingLesson: lesson
                                            });
                                            this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${lesson._id}`)
                                        }}>
                                        <i className="fas fa-pencil-alt"></i>
                                    </button>
                                </div>
                            }
                            {
                                lesson._id === this.state.editingLessonId &&
                                <div className="card-body">
                                    <input type="text" className="w-75 wbdv-module-item-title"
                                           onChange={(e) => this.setState({
                                               editingLesson: {
                                                   ...this.state.editingLesson,
                                                   title: e.target.value
                                               }
                                           })}/>
                                    <button type="button" className="close wbdv-module-item-delete-btn" onClick={() => {
                                        this.props.updateLesson(lesson._id,this.state.editingLesson);
                                        this.setState({
                                            editingLessonId: ''
                                        });
                                    }}>
                                        <i className="fas fa-check"></i>
                                    </button>
                                </div>
                            }
                        </div>
                    )}
                        {
                            this.props.moduleId &&
                            <button type="button"
                                    className="btn btn-secondary wbdv-new-page-btn ml-1"
                                    onClick={() => this.props.createLesson(this.props.moduleId)}>
                                <i className="fas fa-plus"></i>
                            </button>
                        }

                    </div>
                </div>
            </nav>)
    }
}

const stateToPropertyMapper = (state) => {
    return {
        lessons: state.lessons.lessons
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findLessonsForModule: (moduleId) =>
            lessonService.findLessonsForModule(moduleId)
                .then(actual => dispatch(findLessonsForModule(actual))),
        deleteLesson: (lessonId) =>
            lessonService.deleteLesson(lessonId)
                .then(status =>
                    dispatch(deleteLesson(lessonId))),
        createLesson: (moduleId) =>
            lessonService.createLesson(moduleId)
                .then(actual =>
                    dispatch(createLesson(actual))),
        updateLesson: (lessonId, lesson) => {
            lessonService.updateLesson(lessonId, lesson)
                .then(status =>
                    dispatch(updateLesson(lesson)))
        }
    }
}

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(LessonTabComponent)
