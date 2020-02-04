import React from "react";
import './courseEditor.style.css'
import ModuleList from "./ModuleList";
import LessonTab from "./LessonTab";
import TopicPills from "./TopicPills";
import WidgetList from "./WidgetList";


const CourseEditor = ({hideCourseEditor}) =>
    <div>
        <LessonTab/>
        <div className="row mainArea">
            <ModuleList/>
            <div className="col my-3">
                <TopicPills/>
                <WidgetList/>
                <button type="button" id="add-widget" className="btn btn-danger float-right wbdv-module-item-add-btn"><i
                    className="fas fa-plus"></i></button>
            </div>
        </div>
    </div>

export default CourseEditor;