import React from "react";
import {connect} from "react-redux";
import {createModule, deleteModule, findModuleForCourse, updateModule} from "../../actions/ModuleActions.js";
import moduleService from '../../services/ModuleServices.js'

class ModuleListComponent extends React.Component {
    componentDidMount() {
        let courses = this.props.findModuleForCourse(this.props.courseId);
        console.log(courses);
    }

    state = {
        activeModuleId: '',
        editingModuleId: '',
        editingModule: {
            _id: '',
            title: ''
        }
    }

    render() {
        return (
            <div className="col-3 pl-4 pr-3 py-3 sideArea wbdv-module-list">
                {this.props.modules && this.props.modules.map(module =>
                    <div className={`card text-white my-2 wbdv-module-item ${module._id === this.state.activeModuleId?"bg-primary":"bg-secondary"}`}
                         key={module._id}
                         onClick={() => {
                             this.setState({
                                 activeModuleId: module._id
                             });
                             this.props.history.push(`/course-editor/${this.props.courseId}/module/${module._id}`)
                         }}>
                    {
                        module._id !== this.state.editingModuleId &&
                        <div className="card-body">
                            <span className="wbdv-module-item-title">{module.title}</span>
                            <button
                                type="button"
                                className="close wbdv-module-item-delete-btn"
                                onClick={() => this.props.deleteModule(module._id)}>
                                <i className="fas fa-times"></i>
                            </button>
                            <button
                                type="button"
                                className="close mx-2 wbdv-module-item-edit-btn"
                                onClick={() => {
                                    this.setState({
                                        editingModuleId: module._id,
                                        editingModule: module
                                    });
                                    this.props.history.push(`/course-editor/${this.props.courseId}/module/${module._id}`)
                                }}>
                                <i className="fas fa-pencil-alt"></i>
                            </button>
                        </div>
                    }
                    {
                        module._id === this.state.editingModuleId &&
                        <div className="card-body">
                            <input type="text" className="w-75 wbdv-module-item-title"
                                onChange={(e) => this.setState({
                                    editingModule: {
                                       ...this.state.editingModule,
                                       title: e.target.value
                                    }
                                })}/>
                            <button type="button" className="close wbdv-module-item-delete-btn" onClick={() => {
                                this.props.updateModule(module._id,this.state.editingModule);
                                this.setState({
                                    editingModuleId: ''
                                });
                            }}>
                                <i className="fas fa-check"></i>
                            </button>
                        </div>
                    }
                    </div>
                )}
                <button type="button" className="btn btn-danger float-right wbdv-module-item-add-btn" onClick={
                    () => this.props.createModule(this.props.courseId)}>
                    <i className="fas fa-plus"></i></button>
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
                .then(actualModules => dispatch(findModuleForCourse(actualModules))),
        deleteModule: (moduleId) =>
            moduleService.deleteModule(moduleId)
                .then(status =>
                    dispatch(deleteModule(moduleId))),
        createModule: (courseId) =>
            moduleService.createModule(courseId)
                .then(actualModule =>
                    dispatch(createModule(actualModule))),
        updateModule: (moduleId, module) => {
            moduleService.updateModule(moduleId, module)
                .then(status =>
                    dispatch(updateModule(module)))
        }
    }
}

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(ModuleListComponent)