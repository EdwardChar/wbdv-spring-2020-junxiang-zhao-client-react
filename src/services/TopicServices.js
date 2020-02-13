import {
    TOPICS_API_URL,
    LESSONS_TOPICS_API_URL,
} from "../common/Constants";

const findTopicsForLesson = (lessonId) =>
    fetch(LESSONS_TOPICS_API_URL(lessonId))
        .then(response => response.json());

const createTopic = (lessonId) =>
    fetch(LESSONS_TOPICS_API_URL(lessonId), {
        method: "POST",
        body: JSON.stringify({title: "New Topic"}),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

const updateTopic = async (topicId, topic) =>
{
    const response = await fetch(`${TOPICS_API_URL}/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

const deleteTopic = (topicId) =>
    fetch(`${TOPICS_API_URL}/${topicId}`, {
        method: "DELETE"
    })
        .then(response => response.json());

export default {
    createTopic,
    deleteTopic,
    updateTopic,
    findTopicsForLesson
}