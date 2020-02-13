import {COURSES_MODULES_API_URL, MODULES_API_URL} from '../common/Constants'

export const findModuleForCourse = (courseId) =>
    fetch(COURSES_MODULES_API_URL(courseId))
        .then(response => response.json());


export const deleteModule = (moduleId) =>
    fetch(`${MODULES_API_URL}/${moduleId}`, {
        method: "DELETE"
    })
        .then(response => response.json());

export const updateModule = async (moduleId,module) =>
{
    const response = await fetch(`${MODULES_API_URL}/${moduleId}`, {
        method: 'PUT',
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export const createModule = (courseId) =>
    fetch(COURSES_MODULES_API_URL(courseId), {
        method: "POST",
        body: JSON.stringify({title: "New Module"}),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())


export default {
    deleteModule,
    findModuleForCourse,
    updateModule,
    createModule
}
