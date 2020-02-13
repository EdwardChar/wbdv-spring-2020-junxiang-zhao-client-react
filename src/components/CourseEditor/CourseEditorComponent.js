import React from "react";
import './courseEditor.style.css'
import ModuleListComponent from "./ModuleListComponent.js";
import LessonTabComponent from "./LessonTabComponent.js";
import TopicPillsComponent from "./TopicPillsComponent.js";
import WidgetListComponent from "./WidgetListComponent.js";
import moduleReducer from "../../reducers/ModuleReducer";
import lessonReducer from "../../reducers/LessonReducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const rootReducer = combineReducers({
    modules: moduleReducer,
    lessons: lessonReducer
});

const store = createStore(rootReducer);

const CourseEditorComponent = ({match, history, courseId, moduleId, lessonId}) =>
    <Provider store={store}>
        <div>
            <LessonTabComponent courseId={courseId} moduleId={moduleId}/>
            <div className="row mainArea">
                <ModuleListComponent courseId={courseId} history={history}/>
                <div className="col my-3">
                    <TopicPillsComponent lessonId={lessonId} moduleId={moduleId} courseId={courseId}/>
                    <WidgetListComponent/>
                    <button type="button" id="add-widget" className="btn btn-danger float-right wbdv-module-item-add-btn"><i
                        className="fas fa-plus"></i></button>
                </div>
            </div>
        </div>
    </Provider>

export default CourseEditorComponent;