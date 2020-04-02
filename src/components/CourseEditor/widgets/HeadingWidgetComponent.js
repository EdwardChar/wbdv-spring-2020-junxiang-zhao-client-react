import React from "react";

class HeadingWidgetComponent extends React.Component {

    state = {
        size: `"${this.props.widget.size}"`,
        text: this.props.widget.text
    }

    render() {
        return (
            <div>
                <h2>Heading widget</h2>
                {
                    this.props.editing &&
                        <div>
                            <input type="text" placeholder="Heading Text" className="w-100 my-3"
                                   onChange={(e)=>{
                                       this.setState({
                                           text: e.target.value
                                       });
                                       this.props.editContents({
                                           text: e.target.value
                                       })
                                   }}/>
                            <select className="w-100 float-right"
                                    onChange={(e)=>this.setState({
                                        size: e.target.value
                                    })}>
                                <option value="1">Heading 1</option>
                                <option value="2">Heading 2</option>
                                <option value="3">Heading 3</option>
                                <option value="4">Heading 4</option>
                                <option value="5">Heading 5</option>
                                <option value="6">Heading 6</option>
                            </select>
                            <input type="text" placeholder="Widget Name" className="w-100 my-3" />
                        </div>
                }
                <h3>Preview</h3>
                {
                    this.state.size === "1" &&
                    <h1>{this.state.text}</h1>
                }
                {
                    this.state.size === "2" &&
                    <h2>{this.state.text}</h2>
                }
                {
                    this.state.size === "3" &&
                    <h3>{this.state.text}</h3>
                }
                {
                    this.state.size === "4" &&
                    <h4>{this.state.text}</h4>
                }
                {
                    this.state.size === "5" &&
                    <h5>{this.state.text}</h5>
                }
                {
                    this.state.size === "6" &&
                    <h6>{this.state.text}</h6>
                }
            </div>
        )
    }
}

export default HeadingWidgetComponent;
