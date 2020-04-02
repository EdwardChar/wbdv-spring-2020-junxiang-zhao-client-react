import React from "react";

const HeadingWidgetComponent = ({widget,editing,edit}) =>
            <div>
                <h2>Heading widget</h2>
                {
                    editing &&
                        <div>
                            <input type="text" defaultValue={widget.text} placeholder="Heading Text" className="w-100 my-3"
                                   onChange={(e)=>
                                       edit({
                                           text: e.target.value
                                       })
                                   }/>
                            <select className="w-100 float-right"
                                    onChange={(e)=>edit({
                                        size: parseInt(e.target.value)
                                    })}>
                                <option value={1}>Heading 1</option>
                                <option value={2}>Heading 2</option>
                                <option value={3}>Heading 3</option>
                                <option value={4}>Heading 4</option>
                                <option value={5}>Heading 5</option>
                                <option value={6}>Heading 6</option>
                            </select>
                            <input type="text" defaultValue={widget.name} placeholder="Widget Name" className="w-100 my-3"
                                   onChange={(e)=>edit({
                                       name: e.target.value
                                   })}/>
                        </div>
                }
                <h3>Preview</h3>
                {
                    widget.size === 1 &&
                    <h1>{widget.text}</h1>
                }
                {
                    widget.size === 2 &&
                    <h2>{widget.text}</h2>
                }
                {
                    widget.size === 3 &&
                    <h3>{widget.text}</h3>
                }
                {
                    widget.size === 4 &&
                    <h4>{widget.text}</h4>
                }
                {
                    widget.size === 5 &&
                    <h5>{widget.text}</h5>
                }
                {
                    widget.size === 6 &&
                    <h6>{widget.text}</h6>
                }
            </div>;

export default HeadingWidgetComponent;
