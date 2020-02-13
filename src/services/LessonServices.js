import {LESSONS_API_URL, MODULES_LESSONS_API_URL} from "../common/constants";

export const findLessonsForModule = (lessonId) =>
    fetch(MODULES_LESSONS_API_URL(lessonId))
        .then(response => response.json())

export const createLesson = (lessonId, lesson) =>
    fetch(MODULES_LESSONS_API_URL(lessonId), {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const updateLesson = async (lesson) =>
{
    const response = await fetch(`${LESSONS_API_URL}/${lesson._id}`, {
        method: 'PUT',
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

export const deleteLesson = (lesson) =>
    fetch(`${LESSONS_API_URL}/${lesson._id}`, {
        method: "DELETE"
    })
        .then(response => response.json());