import React from "react";

const ImageWidgetComponent = ({widget,editing,editContents}) =>
    <div>
        <h2>Image widget</h2>
        {
            editing &&
                <span>
                    <input type="text" defaultValue={widget.url} placeholder="Image link" className="w-100 my-3"
                             onChange={(e)=>editContents({
                                 url: e.target.value
                             })}/>
                    <input type="text" defaultValue={widget.name} placeholder="Widget Name" className="w-100 my-3"
                           onChange={(e)=>editContents({
                               name: e.target.value
                           })}/>
                </span>

        }
        <h3>Preview</h3>
        <img src={widget.url} alt="Image widget"/>
    </div>


export default ImageWidgetComponent;
