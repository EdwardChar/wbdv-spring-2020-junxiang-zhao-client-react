import React from "react";
import './courseEditor.style.css'

const CourseEditor = ({hideCourseEditor}) =>
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button type="button" className="close navbar-brand wbdv-course-editor wbdv-close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <a className="navbar-brand wbdv-course-title" href="#">CS5610 - Web Dev</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link wbdv-page-tab" href="#">Build</a>
                    <a className="nav-item nav-link wbdv-page-tab" href="#">Pages</a>
                    <a className="nav-item nav-link wbdv-page-tab" href="#">Theme</a>
                    <a className="nav-item nav-link wbdv-page-tab" href="#">Store</a>
                    <a className="nav-item nav-link wbdv-page-tab" href="#">Apps</a>
                    <a className="nav-item nav-link wbdv-page-tab" href="#">Settings</a>
                    <button type="button" className="btn btn-secondary wbdv-new-page-btn"><i className="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </nav>
        <div className="row mainArea">
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
            <div className="col my-3">
                <div className="btn-group wbdv-topic-pill-list" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary wbdv-topic-pill">Topic 1</button>
                    <button type="button" className="btn btn-secondary wbdv-topic-pill">Topic 2</button>
                    <button type="button" className="btn btn-secondary wbdv-topic-pill">Topic 3</button>
                    <button type="button" className="btn btn-secondary wbdv-topic-pill">Topic 4</button>
                    <button type="button" className="btn btn-secondary wbdv-topic-add-btn"><i className="fas fa-plus"></i>
                    </button>
                </div>
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
            </div>
        </div>
    </div>

export default CourseEditor