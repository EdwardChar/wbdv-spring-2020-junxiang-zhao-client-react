import {
    TOPICS_API_URL,
    LESSONS_TOPICS_API_URL,
} from "../common/Constants";

export const findTopicsForLesson = (lesson) =>
    fetch(LESSONS_TOPICS_API_URL(lesson._id))
        .then(response => response.json());

export const createTopic = (lesson, topic) =>
    fetch(LESSONS_TOPICS_API_URL(lesson._id), {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const updateTopic = async (topic) =>
{
    const response = await fetch(`${TOPICS_API_URL}/${topic._id}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

export const deleteTopic = (topic) =>
    fetch(`${TOPICS_API_URL}/${topic._id}`, {
        method: "DELETE"
    })
        .then(response => response.json());