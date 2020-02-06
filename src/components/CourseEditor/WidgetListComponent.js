import React from "react";
const WidgetListComponent = () =>
    <div className="card my-3">
        <div className="card-body">
            <button type="button" className="btn btn-danger float-right wbdv-module-item-add-btn"><i
                className="fas fa-times"></i></button>
            <select id="widget" className="custom-select float-right mx-2">
                <option value="1">Heading</option>
            </select>
            <button type="button" className="btn btn-warning float-right wbdv-new-page-btn"><i
                className="fas fa-arrow-up"></i></button>
            <button type="button" className="btn btn-warning float-right wbdv-new-page-btn"><i
                className="fas fa-arrow-down"></i></button>
            <h2>Heading widget</h2>
            <input type="text" placeholder="Heading Text" className="w-100 my-3" />
            <input type="text" placeholder="Heading 1" className="w-100 my-3" />
            <input type="text" placeholder="Widget Name" className="w-100 my-3" />
            <h3>Preview</h3>
            <h1>Heading Text</h1>
        </div>
    </div>
export default WidgetListComponent;