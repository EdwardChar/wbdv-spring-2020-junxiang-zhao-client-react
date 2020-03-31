export const CREATE_TOPIC = "CREATE_TOPIC";
export const DELETE_TOPIC = "DELETE_TOPIC";
export const FIND_TOPICS_FOR_LESSON = "FIND_TOPICS_FOR_LESSON";
export const UPDATE_TOPIC = "UPDATE_TOPIC";

export const deleteTopic = (topicId) => ({
    type: "DELETE_TOPIC",
    topicId: topicId
})

export const createTopic = (topic) => ({
    type: "CREATE_TOPIC",
    newTopic: topic
})

export const findTopicsForLesson = (topic) => ({
    type: 'FIND_TOPICS_FOR_LESSON',
    topics: topic
})

export const updateTopic = (topic) => ({
    type: "UPDATE_TOPIC",
    topicId: topic.id,
    topic: topic
})