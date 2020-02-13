import React from "react";
import {updateCourse} from "../services/CourseServices.js";

class CourseCardComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        selected: false,
        editing: false,
        course: this.props.course
    };

    render() {
        return (
            <div>
                <div className="card m-2">
                    <div className="card-body">
                        {   !this.state.editing &&
                        <div>
                            <h5 className="card-title"><a href={`/course-editor/${this.state.course._id}`}>{this.state.course.title}</a></h5>
                        </div>
                        }
                        {
                            this.state.editing &&
                            <input className="w-100"
                                   onChange={(e) => this.setState({
                                       course: {
                                           ...this.state.course,
                                           title: e.target.value
                                       }
                                   })}
                                   value={this.state.course.title}/>
                        }
                        <p className="card-text">Modified 8:00 AM</p>
                        {
                            !this.state.editing &&
                            <div>
                                <div className="float-right wbdv-row wbdv-button wbdv-delete"
                                    onClick={() => this.props.deleteCourse(this.props.course)}>
                                    <i className="fas fa-trash-alt"></i>
                                </div>
                                <div className="float-right wbdv-row wbdv-button mx-2" onClick={() => this.setState({editing: true})}>
                                    <i className="fas fa-pencil-alt"></i>
                                </div>
                            </div>
                        }
                        {
                            this.state.editing &&
                            <div className="float-right wbdv-row wbdv-button" onClick={(e) => {
                                updateCourse(this.state.course._id, this.state.course).then(status => {});
                                this.setState({
                                    editing: false
                                })
                            }}>
                                <i className="fas fa-check"></i>
                            </div>
                        }

                    </div>
                </div>
            </div>
            );
    }

}
export default CourseCardComponent;