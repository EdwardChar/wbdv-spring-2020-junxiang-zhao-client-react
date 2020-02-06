import React from "react";
import {updateCourse} from "../services/CourseServices";

class CourseTableRow extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        selected: false,
        editing: false,
        course: this.props.course
    };

    select = () => {
        this.setState({
            selected: !this.state.selected
        })
    };

    render() {
        return (
            <li onClick={this.select} className={this.state.selected ? "list-group-item active" : "list-group-item"}>
                <div className="row wbdv-row wbdv-course">
                    <div className="ml-3 wbdv-row wbdv-icon">
                        <i className="fas fa-file-alt"></i>
                    </div>
                    <div onClick={this.props.showCourseEditor} className="col-5 wbdv-row wbdv-title">
                        {this.props.course.title}
                    </div>
                    <div className="col-2 wbdv-row wbdv-owner">
                        me
                    </div>
                    <div className="col-1 wbdv-row wbdv-modified-date">
                        6:00 PM
                    </div>
                    <div className="justify-content-end col">
                        <div className="float-right wbdv-row wbdv-button wbdv-delete">
                            <i className="fas fa-trash-alt"></i>
                        </div>
                        <div className="float-right wbdv-row wbdv-button mx-2">
                            <i className="fas fa-pencil-alt"></i>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default CourseTableRow;