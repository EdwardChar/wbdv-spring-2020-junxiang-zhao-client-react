import React from "react";

const ModuleListComponent = () =>
    <div className="col-3 pl-4 pr-3 py-3 sideArea wbdv-module-list">
        <div className="card text-white bg-secondary my-2 wbdv-module-item">
            <div className="card-body">
                <span className="wbdv-module-item-title">Module 1 - jQuery</span>
                <button type="button" className="close wbdv-module-item-delete-btn" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
        <div className="card text-white bg-secondary my-2 wbdv-module-item">
            <div className="card-body">
                <span className="wbdv-module-item-title">Module 2 - React</span>
                <button type="button" className="close wbdv-module-item-delete-btn" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
        <div className="card text-white bg-secondary my-2 wbdv-module-item">
            <div className="card-body">
                <span className="wbdv-module-item-title">Module 3 - Redux</span>
                <button type="button" className="close wbdv-module-item-delete-btn" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
        <button type="button" className="btn btn-danger float-right wbdv-module-item-add-btn"><i
            className="fas fa-plus"></i></button>
    </div>

export default ModuleListComponent;