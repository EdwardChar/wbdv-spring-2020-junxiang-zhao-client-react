import {CREATE_MODULE, DELETE_MODULE, FIND_MODULES_FOR_COURSE, UPDATE_MODULE} from "../actions/ModuleActions";

const initialState = {
    modules: [
        // {_id: "123", title: "Module 1 123"},
        // {_id: "234", title: "Module 2 234"},
        // {_id: "345", title: "Module 3 345"}
    ]
}

const moduleReducer = (state = initialState, action) => {
    switch(action.type) {
        case FIND_MODULES_FOR_COURSE:
            return {
                modules: action.modules
            }
        case CREATE_MODULE:
            return {
                modules: [
                    ...state.modules,
                    action.newModule
                ]
            }
        case DELETE_MODULE:
            return {
                modules: state.modules.filter(module => module._id !== action.moduleId)
            }
        case UPDATE_MODULE:
            return {
                modules: state.modules.map(module =>
                    module._id === action.moduleId ? action.module : module
                )
            }
        default:
            return state
    }
}

export default moduleReducer