import React from "react";

class ListWidgetComponent extends React.Component {

    render() {
        return (
            <div>
                <h2>List widget</h2>
                {
                    this.props.editing &&
                    <div>
                        <textarea placeholder="Heading Text" className="w-100 my-3"
                                  onChange={(e)=>
                                      this.props.edit({
                                          text: e.target.value
                                      })
                                  }/>
                        <select className="w-100 float-right"
                                onChange={(e)=>this.setState({
                                    ordered: e.target.value
                                })}>
                            <option value="ul">Unordered list</option>
                            <option value="ol">Ordered list</option>
                        </select>
                        <input type="text" placeholder="Widget Name" className="w-100 my-3"
                               onChange={(e)=>this.props.edit({
                                   name: e.target.value
                               })}/>
                    </div>
                }
                <h3>Preview</h3>
                {
                    this.props.widget.ordered === "ul" &&
                    <ul className="mx-2">
                        {
                            this.props.widget.text.split("\n").map(line =>
                                <li key={Math.random()}>{line}</li>
                            )
                        }
                    </ul>
                }
                {
                    this.props.widget.ordered === "ol" &&
                    <ol>
                        {
                            this.props.widget.text.split("\n").map(line =>
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
