import React from "react";

class HeadingWidgetComponent extends React.Component {

    state = {
        size: "h1",
        text: "Heading Text"
    }

    render() {
        return (
            <div>
                <h2>Heading widget</h2>
                <input type="text" placeholder="Heading Text" className="w-100 my-3"
                    onChange={(e)=>this.setState({
                        text: e.target.value
                    })}/>
                <select className="w-100 float-right"
                    onChange={(e)=>this.setState({
                        size: e.target.value
                    })}>
                    <option value="h1">Heading 1</option>
                    <option value="h2">Heading 2</option>
                    <option value="h3">Heading 3</option>
                    <option value="h4">Heading 4</option>
                    <option value="h5">Heading 5</option>
                    <option value="h6">Heading 6</option>
                </select>
                <input type="text" placeholder="Widget Name" className="w-100 my-3" />
                <h3>Preview</h3>
                {
                    this.state.size === "h1" &&
                    <h1>{this.state.text}</h1>
                }
                {
                    this.state.size === "h2" &&
                    <h2>{this.state.text}</h2>
                }
                {
                    this.state.size === "h3" &&
                    <h3>{this.state.text}</h3>
                }
                {
                    this.state.size === "h4" &&
                    <h4>{this.state.text}</h4>
                }
                {
                    this.state.size === "h5" &&
                    <h5>{this.state.text}</h5>
                }
                {
                    this.state.size === "h6" &&
                    <h6>{this.state.text}</h6>
                }
            </div>
        )
    }
}

export default HeadingWidgetComponent;
