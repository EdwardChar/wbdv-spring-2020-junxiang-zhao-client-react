import React from "react";

const ParagraphWidgetComponent = ({widget,editing,edit}) => (
    <div>
        <h2>Paragraph widget</h2>
        {
            editing &&
            <div>
                <input type="text" defaultValue={widget.text} placeholder="Paragraph Text"
                       className="w-100 my-3"
                       onChange={(e) => {
                           edit({
                               text: e.target.value
                           });
                       }}/>
                <input type="text" defaultValue={widget.name} placeholder="Widget Name" className="w-100 my-3"
                       onChange={(e) => edit({
                           name: e.target.value
                       })}/>
            </div>
        }
        <h3>Preview</h3>
        <p>{widget.text}</p>
    </div>
);

export default ParagraphWidgetComponent;
