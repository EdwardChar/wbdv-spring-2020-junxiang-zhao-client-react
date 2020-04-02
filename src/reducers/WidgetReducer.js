import {CREATE_WIDGET, DELETE_WIDGET, FIND_WIDGETS_FOR_TOPIC, UPDATE_WIDGET} from "../actions/WidgetActions";

const initialState = {
    widgets: [
    ]
};

const compare = (a,b) => a.ordering - b.ordering;

const widgetReducer = (state = initialState, action) => {
    switch(action.type) {
        case FIND_WIDGETS_FOR_TOPIC:
            return {
                widgets: action.widgets.sort(compare)
            }
        case CREATE_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    action.newWidget
                ].sort(compare)
            }
        case DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId).sort(compare)
            }
        case UPDATE_WIDGET:
            return {
                widgets: state.widgets.map(widget =>
                    widget.id === action.widgetId ? action.widget : widget
                ).sort(compare)
            }
        default:
            return state
    }
}


export default widgetReducer