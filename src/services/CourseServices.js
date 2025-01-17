const API_URL = "https://wbdv-generic-server.herokuapp.com/api/mcuks/courses";

export const updateCourse = async (courseId, course) => {
    const response = await fetch(`${API_URL}/${courseId}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

export const deleteCourse = async (courseId) => {
    const response = await fetch(`${API_URL}/${courseId}`, {
        method: 'DELETE'
    })
    return await response.json()
}

export const createCourse = async (course) =>
{
    const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

export const findAllCourses = () => {
    return fetch(API_URL)
        .then(response => response.json())
}

export const findCourse = async (courseId) => {
    const response = await fetch(`${API_URL}/${courseId}`, {
        method: 'GET'
    })
    return await response.json()
}
