import React from "react";
import {connect} from "react-redux";
import topicService from "../../services/TopicServices";
import {createTopic, deleteTopic, findTopicsForLesson, updateTopic} from "../../actions/TopicActions";

class TopicPillsComponent extends React.Component{
    componentDidMount = async () => {
        await this.props.findTopicsForLesson(this.props.lessonId);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.lessonId !== prevProps.lessonId) {
            this.props.findTopicsForLesson(this.props.lessonId)
        }
    }

    state = {
        editingTopicId: '',
        editingTopic: {
            id: '',
            title: ''
        },
        activeTopicId: ''
    };

    render(){
        return(
            <div className="btn-group wbdv-topic-pill-list">
                {this.props.topics && this.props.topics.map(topic =>
                    <div className={`btn wbdv-topic-pill ${topic.id === this.state.activeTopicId? "btn-primary":"btn-secondary"}`}
                         key={topic.id}
                         onClick={() => {
                             this.setState({
                                 activeTopicId: topic.id
                             });
                             this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${topic.id}`)}}>
                        {
                            topic.id !== this.state.editingTopicId &&
                            <div>
                                <span className="wbdv-module-item-title">{topic.title}</span>
                                <button
                                    type="button"
                                    className="close wbdv-module-item-delete-btn"
                                    onClick={() => this.props.deleteTopic(topic.id)}>
                                    <i className="fas fa-times"></i>
                                </button>
                                <button
                                    type="button"
                                    className="close mx-2 wbdv-module-item-edit-btn"
                                    onClick={() => {
                                        this.setState({
                                            editingTopicId: topic.id,
                                            editingTopic: topic
                                        });
                                        this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${topic.id}`)
                                    }}>
                                    <i className="fas fa-pencil-alt"></i>
                                </button>
                            </div>
                        }
                        {
                            topic.id === this.state.editingTopicId &&
                            <div className="card-body">
                                <input type="text" className="w-75 wbdv-module-item-title"
                                    onChange={(e) => this.setState({
                                        editingTopic: {
                                            ...this.state.editingTopic,
                                            title: e.target.value
                                        }
                                    })}/>
                                <button type="button" className="close wbdv-module-item-delete-btn" onClick={() => {
                                    this.props.updateTopic(topic.id,this.state.editingTopic);
                                    console.log(this.state.editingTopic);
                                    this.setState({
                                        editingTopicId: ''
                                    });
                                }}>
                                    <i className="fas fa-check"></i>
                                </button>
                            </div>
                        }
                    </div>
                )}
                {
                    this.props.lessonId &&
                    <button type="button"
                            className="btn btn-secondary wbdv-new-page-btn ml-1"
                            onClick={() => this.props.createTopic(this.props.lessonId)}>
                        <i className="fas fa-plus"></i>
                    </button>
                }

            </div>
        )
    }
}

const stateToPropertyMapper = (state) => {
    return {
        topics: state.topics.topics
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findTopicsForLesson: (lessonId) =>
            topicService.findTopicsForLesson(lessonId)
                .then(actual => dispatch(findTopicsForLesson(actual))),
        deleteTopic: (topicId) =>
            topicService.deleteTopic(topicId)
                .then(status =>
                    dispatch(deleteTopic(topicId))),
        createTopic: (lessonId) =>
            topicService.createTopic(lessonId)
                .then(actual =>
                    dispatch(createTopic(actual))),
        updateTopic: (topicId, topic) => {
            topicService.updateTopic(topicId, topic)
                .then(status =>
                    dispatch(updateTopic(topic)))
        }
    }
}

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)(TopicPillsComponent);