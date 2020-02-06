import React from "react";
import './courseEditor.style.css'
import ModuleListComponent from "./ModuleListComponent.js";
import LessonTabComponent from "./LessonTabComponent.js";
import TopicPillsComponent from "./TopicPillsComponent.js";
import WidgetListComponent from "./WidgetListComponent.js";


const CourseEditorComponent = ({hideCourseEditor}) =>
    <div>
        <LessonTabComponent hideCourseEditor={hideCourseEditor}/>
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