import React from "react";
import {connect} from "react-redux";
import {CREATE_MODULE, createModule, DELETE_MODULE, deleteModule} from "../../actions/moduleActions";
import moduleService, {findModuleForCourse} from '../../services/ModuleService'

class ModuleList extends React.Component {
    componentDidMount() {
        this.props.findModuleForCourse(this.props.courseId)
    }

    render() {
        return (
            <ul>
                {this.props.modules && this.props.modules.map(module =>
                    <li key={module._id}>
                        <button onClick={
                            () => this.props.deleteModule(module._id)}>
                            Delete
                        </button>
                        {module.title}
                    </li>
                )}
                <li>
                    <button onClick={
                        () => this.props.createModule(this.props.courseId)}>
                        Create</button>
                </li>
            </ul>
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
(ModuleList)

const ModuleListComponent = () =>
    <div className="col-3 pl-4 pr-3 py-3 sideArea wbdv-module-list">

        <div className="card text-white bg-secondary my-2 wbdv-module-item">
            <div className="card-body">
                <span className="wbdv-module-item-title">Module 2 - React</span>
                <button type="button" className="close wbdv-module-item-delete-btn" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
        <div className="card text-white bg-secondary my-2 wbdv-module-item">
            <div className="card-body">
                <span className="wbdv-module-item-title">Module 3 - Redux</span>
                <button type="button" className="close wbdv-module-item-delete-btn" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
        <button type="button" className="btn btn-danger float-right wbdv-module-item-add-btn"><i
            className="fas fa-plus"></i></button>
    </div>

export default ModuleListComponent;