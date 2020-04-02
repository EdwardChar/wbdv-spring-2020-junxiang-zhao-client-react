import React from "react";

class HeadingWidgetComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>Heading widget</h2>
                {
                    this.props.editing &&
                        <div>
                            <input type="text" placeholder="Heading Text" className="w-100 my-3"
                                   onChange={(e)=>
                                       this.props.edit({
                                           text: e.target.value
                                       })
                                   }/>
                            <select className="w-100 float-right"
                                    onChange={(e)=>this.props.edit({
                                        size: e.target.value
                                    })}>
                                <option value={1}>Heading 1</option>
                                <option value={2}>Heading 2</option>
                                <option value={3}>Heading 3</option>
                                <option value={4}>Heading 4</option>
                                <option value={5}>Heading 5</option>
                                <option value={6}>Heading 6</option>
                            </select>
                            <input type="text" placeholder="Widget Name" className="w-100 my-3" />
                        </div>
                }
                <h3>Preview</h3>
                {
                    this.props.widget.size === 1 &&
                    <h1>{this.props.widget.text}</h1>
                }
                {
                    this.props.widget.size === 2 &&
                    <h2>{this.props.widget.text}</h2>
                }
                {
                    this.props.widget.size === 3 &&
                    <h3>{this.props.widget.text}</h3>
                }
                {
                    this.props.widget.size === 4 &&
                    <h4>{this.props.widget.text}</h4>
                }
                {
                    this.props.widget.size === 5 &&
                    <h5>{this.props.widget.text}</h5>
                }
                {
                    this.props.widget.size === 6 &&
                    <h6>{this.props.widget.text}</h6>
                }
            </div>
        )
    }
}

export default HeadingWidgetComponent;
