import React from "react";
import CourseCardComponent from "./CourseCardComponent.js";

const CourseGridComponent = ({courses, deleteCourse, showCourseEditor}) =>
    <div>
        <nav className="navbar navbar-expand-lg d-none d-lg-flex navbar-light bg-light">
            <div className="collapse navbar-collapse container">
                <div className="navbar-nav mx-auto w-100 row font-weight-bold">
                    <div className="nav-item col-5">
                        <a className="nav-link text-secondary wbdv-header wbdv-title" href="#">Title </a>
                    </div>
                    <div className="nav-item col-2 dropdown">
                        <a className="nav-link dropdown-toggle text-secondary wbdv-header wbdv-owner" href="#">Owned
                            by </a>
                    </div>
                    <div className="nav-item col-2">
                        <a className="nav-link text-secondary wbdv-header wbdv-last-modified" href="#">Last
                            modified </a>
                    </div>
                    <div className="nav-item col-1">
                        <a className="nav-link text-secondary wbdv-button wbdv-grid-layout" href="/table"><i
                            className="fas fa-grip-horizontal"></i></a>
                    </div>
                    <div className="nav-item col">
                        <a className="nav-link text-secondary wbdv-header wbdv-sort" href="#"><i
                            className="fas fa-sort-alpha-down"></i></a>
                    </div>
                </div>
            </div>
        </nav>
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 row-cols-xl-12">
                {
                    courses.map(function(course, index) {
                        return <CourseCardComponent
                            showCourseEditor={showCourseEditor}
                            deleteCourse={deleteCourse}
                            key={course._id}
                            course={course}/>
                    })
                }
            </div>
        </div>
    </div>
export default CourseGridComponent;