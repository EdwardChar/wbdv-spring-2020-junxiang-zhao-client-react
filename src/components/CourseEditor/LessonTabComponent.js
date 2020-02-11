import React from "react";

const LessonTabComponent = ({courseId}) =>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a href="/"
                className="close navbar-brand wbdv-course-editor wbdv-close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </a>
        <a className="navbar-brand wbdv-course-title" href="#">{courseId}</a>
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

export default LessonTabComponent;
