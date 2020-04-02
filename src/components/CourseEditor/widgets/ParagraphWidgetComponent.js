import React from "react";

class ParagraphWidgetComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>Paragraph widget</h2>
                {
                    this.props.editing &&
                    <div>
                        <input type="text" defaultValue={this.props.widget.text} placeholder="Paragraph Text" className="w-100 my-3"
                               onChange={(e)=>{
                                   this.props.editContents({
                                       text: e.target.value
                                   });
                               }}/>
                        <input type="text" defaultValue={this.props.widget.name} placeholder="Widget Name" className="w-100 my-3"
                               onChange={(e)=>this.props.editContents({
                                   name: e.target.value
                               })}/>
                    </div>
                }
                <h3>Preview</h3>
                <p>{this.props.widget.text}</p>
            </div>
        )
    }
}

export default ParagraphWidgetComponent;
