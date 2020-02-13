export const CREATE_MODULE = "CREATE_MODULE";
export const DELETE_MODULE = "DELETE_MODULE";
export const FIND_MODULES_FOR_COURSE = "FIND_MODULES_FOR_COURSE";
export const UPDATE_MODULE = "UPDATE_MODULE";

export const deleteModule = (moduleId) => ({
    type: "DELETE_MODULE",
    moduleId: moduleId
})

export const createModule = (module) => ({
    type: "CREATE_MODULE",
    newModule: module
})

export const findModuleForCourse = (module) => ({
        type: 'FIND_MODULES_FOR_COURSE',
        modules: module
})

export const updateModule = (module) => ({
    type: "UPDATE_MODULE",
    moduleId: module._id,
    module: module
})