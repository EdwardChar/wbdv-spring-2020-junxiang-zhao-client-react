import React from "react";

class ListWidgetComponent extends React.Component {

    state = {
        text: [],
        ordered: "ul"
    }

    render() {
        return (
            <div>
                <h2>List widget</h2>
                <textarea placeholder="Heading Text" className="w-100 my-3"
                    onChange={(e)=>this.setState({
                        text: e.target.value.split("\n")
                    })}/>
                <select className="w-100 float-right"
                        onChange={(e)=>this.setState({
                            ordered: e.target.value
                        })}>
                    <option value="ul">Unordered list</option>
                    <option value="ol">Ordered list</option>
                </select>
                <input type="text" placeholder="Widget Name" className="w-100 my-3" />
                <h3>Preview</h3>
                {
                    this.state.ordered === "ul" &&
                    <ul className="mx-2">
                        {
                            this.state.text.map(line =>
                                <li>{line}</li>
                            )
                        }
                    </ul>
                }
                {
                    this.state.ordered === "ol" &&
                    <ol>
                        {
                            this.state.text.map(line =>
                                <li>{line}</li>
                            )
                        }
                    </ol>
                }
            </div>
        )
    }
}

export default ListWidgetComponent;
