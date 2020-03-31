import React from "react";
import './courseEditor.style.css'
import ModuleListComponent from "./ModuleListComponent.js";
import LessonTabComponent from "./LessonTabComponent.js";
import TopicPillsComponent from "./TopicPillsComponent.js";
import WidgetListComponent from "./WidgetListComponent.js";
import moduleReducer from "../../reducers/ModuleReducer";
import lessonReducer from "../../reducers/LessonReducer";
import topicReducer from "../../reducers/TopicReducer";
import WidgetReducer from "../../reducers/WidgetReducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const rootReducer = combineReducers({
    modules: moduleReducer,
    lessons: lessonReducer,
    topics: topicReducer,
    widgets: WidgetReducer
});

const store = createStore(rootReducer);

const CourseEditorComponent = ({match, history, courseId, moduleId, lessonId, topicId}) =>
    <Provider store={store}>
        <div>
            <LessonTabComponent courseId={courseId} moduleId={moduleId} history={history}/>
            <div className="row mainArea">
                <ModuleListComponent courseId={courseId} history={history}/>
                <div className="col my-3">
                    <TopicPillsComponent lessonId={lessonId} moduleId={moduleId} courseId={courseId} history={history}/>
                    <WidgetListComponent topicId={topicId} lessonId={lessonId} moduleId={moduleId} courseId={courseId} history={history}/>
                </div>
            </div>
        </div>
    </Provider>

export default CourseEditorComponent;