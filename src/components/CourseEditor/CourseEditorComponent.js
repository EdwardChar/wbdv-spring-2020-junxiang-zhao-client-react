import React from "react";
import './courseEditor.style.css'
import ModuleListComponent from "./ModuleListComponent";
import LessonTabComponent from "./LessonTabComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import WidgetListComponent from "./WidgetListComponent";


const CourseEditorComponent = ({hideCourseEditor}) =>
    <div>
        <LessonTabComponent/>
        <div className="row mainArea">
            <ModuleListComponent/>
            <div className="col my-3">
                <TopicPillsComponent/>
                <WidgetListComponent/>
                <button type="button" id="add-widget" className="btn btn-danger float-right wbdv-module-item-add-btn"><i
                    className="fas fa-plus"></i></button>
            </div>
        </div>
    </div>

export default CourseEditorComponent;