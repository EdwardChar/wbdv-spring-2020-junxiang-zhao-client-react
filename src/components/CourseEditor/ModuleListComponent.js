import React from "react";
import {connect} from "react-redux";
import {CREATE_MODULE, createModule, DELETE_MODULE, deleteModule} from "../../actions/ModuleActions.js";
import moduleService, {findModuleForCourse} from '../../services/ModuleServices.js'

class ModuleListComponent extends React.Component {
    componentDidMount() {
        this.props.findModuleForCourse(this.props.courseId)
    }

    render() {
        return (
            <div className="col-3 pl-4 pr-3 py-3 sideArea wbdv-module-list">
                {this.props.modules && this.props.modules.map(module =>
                    <div className="card text-white bg-secondary my-2 wbdv-module-item" key={module._id}>
                        <div className="card-body">
                        <span className="wbdv-module-item-title">Module 1 - jQuery</span>
                            <button type="button" className="close wbdv-module-item-delete-btn" aria-label="Close" onClick={
                                () => this.props.deleteModule(module._id)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                )}
                <li>
                    <button onClick={
                        () => this.props.createModule(this.props.courseId)}>
                        Create</button>
                </li>
            </div>
        );
    }
}

const stateToPropertyMapper = (state) => {
    return {
        modules: state.modules.modules
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findModuleForCourse: (courseId) =>
            moduleService.findModuleForCourse(courseId)
                .then(actualModules => dispatch({
                    type: 'FIND_MODULES_FOR_COURSE',
                    modules: actualModules
                })),
        findAllModules: () =>
            // TODO: move all server access to ModuleService.js
            fetch("https://wbdv-generic-server.herokuapp.com/api/jannunzi/modules")
                .then(response => response.json())
                .then(actualModules =>
                    dispatch({
                        type: "FIND_ALL_MODULES",
                        modules: actualModules
                    })),
        deleteModule: (moduleId) =>
            moduleService.deleteModule()
                .then(status =>
                    dispatch(deleteModule(moduleId))),
        createModule: (courseId) => {
            fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses/${courseId}/modules`, {
                method: "POST",
                body: JSON.stringify({title: "New Module"}),
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(actualModule =>
                    dispatch(createModule(actualModule)))
        }
    }
}

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(ModuleListComponent)