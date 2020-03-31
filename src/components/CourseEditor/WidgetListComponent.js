import React from "react";
import {connect} from "react-redux";
import widgetService from "../../services/WidgetServices";
import {createWidget, deleteWidget, findWidgetsForTopic, updateWidget} from "../../actions/WidgetActions";
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import ParagraphWidgetComponent from "./ParagraphWidgetComponent";
import ListWidgetComponent from "./ListWidgetComponent";
import ImageWidgetComponent from "./ImageWidgetComponent";
class WidgetPillsComponent extends React.Component{
    componentDidMount = async () => {
        if(this.props.topicId)
            await this.props.findWidgetsForTopic(this.props.topicId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.topicId !== prevProps.topicId) {
            this.props.findWidgetsForTopic(this.props.topicId)
        }
    }

    state = {
        editingWidgetId: '',
        editingWidget: {
            id: '',
            title: ''
        }
    }

    render(){
        return(
            <div>
                {
                    this.props.widgets && this.props.widgets.map(widget =>
                    <div className="card my-3">
                        <div className="card-body" key={widget.id}>
                            {
                                this.state.editingWidgetId === widget.id &&
                                <button type="button"
                                        className="btn btn-secondary float-right wbdv-module-item-save-btn ml-2"
                                        onClick={() => {
                                            this.props.updateWidget(widget.id,this.state.editingWidget);
                                            this.setState({
                                                editingWidgetId: '',
                                                editingWidget: {
                                                    id: '',
                                                    title: ''
                                                }
                                            })
                                        }}>
                                    save
                                </button>
                            }
                            <button type="button"
                                    className="btn btn-danger float-right wbdv-module-item-delete-btn"
                                    onClick={() => {
                                        this.props.deleteWidget(widget.id);
                                        this.setState({
                                            editingWidgetId: '',
                                            editingWidget: {
                                                id: '',
                                                title: ''
                                            }
                                        })
                                    }}>
                                <i className="fas fa-times"></i></button>
                            <select id="widget"
                                    className="custom-select float-right mx-2"
                                    onChange={(e)=>this.setState({
                                        editingWidgetId:widget.id,
                                        editingWidget: {
                                            ...widget,
                                            type: e.target.value
                                        }}
                                    )}>
                                <option value="HEADING" selected={widget.type === "HEADING"?"selected":""}>Heading</option>
                                <option value="PARAGRAPH" selected={widget.type === "PARAGRAPH"?"selected":""}>Paragraph</option>
                                <option value="LIST" selected={widget.type === "LIST"?"selected":""}>List</option>
                                <option value="IMAGE" selected={widget.type === "IMAGE"?"selected":""}>Image</option>
                            </select>
                            <button type="button" className="btn btn-warning float-right wbdv-new-page-btn"><i
                                className="fas fa-arrow-up"></i></button>
                            <button type="button" className="btn btn-warning float-right wbdv-new-page-btn"><i
                                className="fas fa-arrow-down"></i></button>
                            {widget.type === "HEADING" &&
                                <HeadingWidgetComponent/>
                            }
                            {widget.type === "PARAGRAPH" &&
                                <ParagraphWidgetComponent/>
                            }
                            {widget.type === "LIST" &&
                                <ListWidgetComponent/>
                            }
                            {widget.type === "IMAGE" &&
                                <ImageWidgetComponent/>
                            }
                        </div>
                    </div>
                    )
                }
                {
                    this.props.topicId &&
                        <button type="button" id="add-widget"
                                className="btn btn-danger float-right wbdv-module-item-add-btn"
                                onClick={() => this.props.createWidget(this.props.topicId)}>
                            <i className="fas fa-plus"></i>
                        </button>
                }
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => {
    return {
        widgets: state.widgets.widgets
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findWidgetsForTopic: (topicId) =>
            widgetService.findWidgetsForTopic(topicId)
                .then(actual => dispatch(findWidgetsForTopic(actual))),
        deleteWidget: (widgetId) =>
            widgetService.deleteWidget(widgetId)
                .then(status =>
                    dispatch(deleteWidget(widgetId))),
        createWidget: (topicId) =>
            widgetService.createWidget(topicId)
                .then(actual =>
                    dispatch(createWidget(actual))),
        updateWidget: (widgetId, widget) => {
            widgetService.updateWidget(widgetId, widget)
                .then(status =>
                    dispatch(updateWidget(widget)))
        }
    }
}

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)(WidgetPillsComponent);



// original
//
//
// import React from "react";
// const WidgetListComponent = () =><div>xx</div>;
//
// export default WidgetListComponent;