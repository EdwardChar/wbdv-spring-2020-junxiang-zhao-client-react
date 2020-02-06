import React from "react";
import {updateCourse} from "../services/CourseServices";

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
                        <h5 className="card-title">{this.state.course.title}</h5>
                        <p className="card-text">Modified 8:00 AM</p>
                        {
                            !this.state.editing &&
                            <div>
                                <div className="float-right wbdv-row wbdv-button wbdv-delete"
                                    onClick={() => this.props.deleteCourse(this.props.course)}>
                                    <i className="fas fa-trash-alt"></i>
                                </div>
                                <div className="float-right wbdv-row wbdv-button mx-2">
                                    <i className="fas fa-pencil-alt"></i>
                                </div>
                            </div>
                        }
                        {
                            this.state.editing &&
                            <div className="float-right wbdv-row wbdv-button wbdv-delete">
                                <i className="fas fa-check-alt"></i>
                            </div>
                        }

                    </div>
                </div>
            </div>
            );
    }

}
export default CourseCardComponent;