export const CREATE_WIDGET = "CREATE_WIDGET";
export const DELETE_WIDGET = "DELETE_WIDGET";
export const FIND_WIDGETS_FOR_TOPIC = "FIND_WIDGETS_FOR_TOPIC";
export const UPDATE_WIDGET = "UPDATE_WIDGET";
export const MOVE_WIDGET_UP = "MOVE_WIDGET_UP";
export const MOVE_WIDGET_DOWN = "MOVE_WIDGET_DOWN";

export const deleteWidget = (widgetId) => ({
    type: "DELETE_WIDGET",
    widgetId: widgetId
})

export const createWidget = (widget) => ({
    type: "CREATE_WIDGET",
    newWidget: widget
})

export const findWidgetsForTopic = (widget) => ({
    type: 'FIND_WIDGETS_FOR_TOPIC',
    widgets: widget
})

export const updateWidget = (widget) => ({
    type: "UPDATE_WIDGET",
    widgetId: widget.id,
    widget: widget
})
