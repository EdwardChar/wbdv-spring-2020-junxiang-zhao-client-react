import {
    WIDGETS_API_URL,
    TOPICS_WIDGETS_API_URL,
} from "../common/Constants";

const findWidgetsForTopic = (topicId) =>
    fetch(TOPICS_WIDGETS_API_URL(topicId))
        .then(response => response.json());

const createWidget = (topicId, order) =>
    fetch(TOPICS_WIDGETS_API_URL(topicId), {
        method: "POST",
        body: JSON.stringify({
            title: "New Widget",
            ordering: order
        }),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

const updateWidget = async (widgetId, widget) =>
{
    const response = await fetch(`${WIDGETS_API_URL}/${widgetId}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

const deleteWidget = (widgetId) =>
    fetch(`${WIDGETS_API_URL}/${widgetId}`, {
        method: "DELETE"
    })
        .then(response => response.json());

export default {
    createWidget,
    deleteWidget,
    updateWidget,
    findWidgetsForTopic
}