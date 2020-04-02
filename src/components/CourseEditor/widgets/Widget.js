import React from "react";
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import ParagraphWidgetComponent from "./ParagraphWidgetComponent";
import ListWidgetComponent from "./ListWidgetComponent";
import ImageWidgetComponent from "./ImageWidgetComponent";

export default class Widget extends React.Component {
    render() {
        return(
            <div>
                {
                    this.props.widget.type === "HEADING" &&
                    <HeadingWidgetComponent
                        editing={this.props.editing}
                        edit={this.props.edit}
                        widget={this.props.widget}/>
                }
                {
                    this.props.widget.type === "IMAGE" &&
                    <ImageWidgetComponent
                        editing={this.props.editing}
                        edit={this.props.edit}
                        widget={this.props.widget}/>
                }
                {
                    this.props.widget.type === "LIST" &&
                    <ListWidgetComponent
                        editing={this.props.editing}
                        edit={this.props.edit}
                        widget={this.props.widget}/>
                }
                {
                    this.props.widget.type === "PARAGRAPH" &&
                    <ParagraphWidgetComponent
                        editing={this.props.editing}
                        edit={this.props.edit}
                        widget={this.props.widget}/>
                }
            </div>
        )
    }
}