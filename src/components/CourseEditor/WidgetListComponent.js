import React from "react";
import {connect} from "react-redux";
import widgetService from "../../services/WidgetServices";
import {createWidget, deleteWidget, findWidgetsForTopic, updateWidget} from "../../actions/WidgetActions";
import Widget from "./widgets/Widget";
class WidgetPillsComponent extends React.Component{
    componentDidMount = async () => {
        if(this.props.topicId)
            await this.props.findWidgetsForTopic(this.props.topicId);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.topicId && this.props.topicId !== prevProps.topicId) {
            this.props.findWidgetsForTopic(this.props.topicId)
        }
    }

    state = {
        editingWidgetId: '',
        editingWidget: {
            id: '',
            title: ''
        }
    };

    moveUp = (targetWidget) => {
        let widgets = [...this.props.widgets];
        if(widgets.length >= 2){
            for (let i = 1; i < widgets.length; i++){
                if(targetWidget.id === widgets[i].id){
                    widgets[i].ordering--;
                    widgets[i-1].ordering++;
                    this.props.moveWidget(widgets[i].id,widgets[i],widgets[i-1].id,widgets[i-1],this.props.topicId);
                    break;
                }
            }
        }
    };

    moveDown = (targetWidget) => {
        let widgets = [...this.props.widgets];
        if(widgets.length >= 2){
            for (let i = 0; i < widgets.length - 1; i++){
                if(targetWidget.id === widgets[i].id){
                    widgets[i].ordering++;
                    widgets[i+1].ordering--;
                    this.props.moveWidget(widgets[i].id,widgets[i],widgets[i+1].id,widgets[i+1],this.props.topicId);
                    break;
                }
            }
        }
    };

    edit = (content) => {
        this.setState(prevState => ({
            editingWidget:{
                ...prevState.editingWidget,
                ...content
            }
        }))
    };
    render(){
        return(
            <div>
                {
                    this.props.topicId && this.props.widgets && this.props.widgets.map(widget =>
                    <div className="card my-3" key={widget.id}>
                        <div className="card-body">
                            {
                                this.state.editingWidgetId === widget.id &&
                                    <span>
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
                                                defaultValue={widget.type}
                                                className="custom-select float-right mx-2"
                                                onChange={(e)=>
                                                    this.edit( {
                                                        type: e.target.value
                                                    })
                                                }>
                                            <option value="HEADING">Heading</option>
                                            <option value="PARAGRAPH">Paragraph</option>
                                            <option value="LIST">List</option>
                                            <option value="IMAGE">Image</option>
                                        </select>
                                    </span>
                            }
                            {
                                this.state.editingWidgetId !== widget.id &&
                                <button type="button"
                                        className="btn btn-secondary float-right wbdv-module-item-edit-btn ml-2"
                                        onClick={() => {
                                            this.setState({
                                                editingWidgetId: widget.id,
                                                editingWidget: widget
                                                }
                                            )
                                        }}>
                                    edit
                                </button>
                            }
                            {
                                widget.ordering > 0 &&
                                <button type="button"
                                    className="btn btn-warning float-right wbdv-new-page-btn"
                                    onClick={() => this.moveUp(widget)}>
                                <i className="fas fa-arrow-up"></i></button>
                            }
                            {
                                widget.ordering < this.props.widgets.length - 1 &&
                                <button type="button"
                                    className="btn btn-warning float-right wbdv-new-page-btn"
                                    onClick={() => this.moveDown(widget)}>
                                <i className="fas fa-arrow-down"></i></button>}
                            <Widget widget={this.state.editingWidgetId === widget.id ? this.state.editingWidget : widget}
                                                    editing={this.state.editingWidgetId === widget.id} edit={this.edit}/>
                        </div>
                    </div>
                    )
                }
                {
                    this.props.topicId &&
                        <button type="button" id="add-widget"
                                className="btn btn-danger float-right wbdv-module-item-add-btn"
                                onClick={() => {this.props.createWidget(this.props.topicId, this.props.widgets.length)}}>
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
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findWidgetsForTopic: (topicId) =>
            widgetService.findWidgetsForTopic(topicId)
                .then(actual => dispatch(findWidgetsForTopic(actual))),
        deleteWidget: (widgetId) =>
            widgetService.deleteWidget(widgetId)
                .then(status =>
                    dispatch(deleteWidget(widgetId))),
        createWidget: (topicId, order) =>
            widgetService.createWidget(topicId, order)
                .then(actual =>
                    dispatch(createWidget(actual))),
        updateWidget: (widgetId, widget) => {
            widgetService.updateWidget(widgetId, widget)
                .then(status =>
                    dispatch(updateWidget(widget)))
        },
        moveWidget: (targetId, target, movedId, moved, topicId) => {
            widgetService.updateWidget(targetId, target)
                .then(status => widgetService.updateWidget(movedId, moved))
                    .then(status => widgetService.findWidgetsForTopic(topicId))
                        .then(actual => dispatch(findWidgetsForTopic(actual)))
        }
    }
};

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