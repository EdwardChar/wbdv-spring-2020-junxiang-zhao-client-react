import {CREATE_TOPIC, DELETE_TOPIC, FIND_TOPICS_FOR_LESSON, UPDATE_TOPIC} from "../actions/TopicActions";

const initialState = {
    topics: [
    ]
}

const topicReducer = (state = initialState, action) => {
    switch(action.type) {
        case FIND_TOPICS_FOR_LESSON:
            return {
                topics: action.topics
            }
        case CREATE_TOPIC:
            return {
                topics: [
                    ...state.topics,
                    action.newTopic
                ]
            }
        case DELETE_TOPIC:
            return {
                topics: state.topics.filter(topic => topic.id !== action.topicId)
            }
        case UPDATE_TOPIC:
            return {
                topics: state.topics.map(topic =>
                    topic.id === action.topicId ? action.topic : topic
                )
            }
        default:
            return state
    }
}

export default topicReducer