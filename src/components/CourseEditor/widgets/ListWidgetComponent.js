import React from "react";

const ListWidgetComponent = ({widget,editing,edit}) =>
            <div>
                <h2>List widget</h2>
                {
                    editing &&
                    <div>
                        <textarea defaultValue={widget.text} placeholder="Heading Text" className="w-100 my-3"
                                  onChange={(e)=>
                                      edit({
                                          text: e.target.value
                                      })
                                  }/>
                        <select className="w-100 float-right"
                                onChange={(e)=>edit({
                                    value: e.target.value
                                })}>
                            <option value="ul">Unordered list</option>
                            <option value="ol">Ordered list</option>
                        </select>
                        <input type="text" placeholder="Widget Name" className="w-100 my-3"
                               onChange={(e)=>edit({
                                   name: e.target.value
                               })}/>
                    </div>
                }
                <h3>Preview</h3>
                {
                    widget.value === "ul" &&
                    <ul className="mx-2">
                        {
                            widget.text.split("\n").map(line =>
                                <li key={Math.random()}>{line}</li>
                            )
                        }
                    </ul>
                }
                {
                    widget.value === "ol" &&
                    <ol>
                        {
                            widget.text.split("\n").map(line =>
                                <li>{line}</li>
                            )
                        }
                    </ol>
                }
            </div>;
export default ListWidgetComponent;
