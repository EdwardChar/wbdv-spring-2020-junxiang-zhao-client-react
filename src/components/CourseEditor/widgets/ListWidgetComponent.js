import React from "react";

class ListWidgetComponent extends React.Component {

    state = {
        ordered: "ul",
        text: this.props.widget.text
    }

    render() {
        return (
            <div>
                <h2>List widget</h2>
                {
                    this.props.editing &&
                    <div>
                        <textarea placeholder="Heading Text" className="w-100 my-3"
                                  onChange={(e)=>{
                                      this.props.editContents({
                                          text: e.target.value
                                      });
                                      this.setState({
                                          text: e.target.value
                                      })
                                  }}/>
                        <select className="w-100 float-right"
                                onChange={(e)=>this.setState({
                                    ordered: e.target.value
                                })}>
                            <option value="ul">Unordered list</option>
                            <option value="ol">Ordered list</option>
                        </select>
                        <input type="text" placeholder="Widget Name" className="w-100 my-3"
                               onChange={(e)=>this.props.editContents({
                                   name: e.target.value
                               })}/>
                    </div>
                }
                <h3>Preview</h3>
                {
                    this.state.ordered === "ul" &&
                    <ul className="mx-2">
                        {
                            this.state.text.split("\n").map(line =>
                                <li key={Math.random()}>{line}</li>
                            )
                        }
                    </ul>
                }
                {
                    this.state.ordered === "ol" &&
                    <ol>
                        {
                            this.state.text.split("\n").map(line =>
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
