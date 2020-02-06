import React from "react";
import './courseEditor.style.css'
import ModuleListComponent from "./ModuleList.Component";
import LessonTabComponent from "./LessonTab.Component";
import TopicPillsComponent from "./TopicPills.Component";
import WidgetListComponent from "./WidgetList.Component";


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