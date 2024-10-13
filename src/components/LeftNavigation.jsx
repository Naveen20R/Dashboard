import React from 'react';
import "../styles/NavbarStyle.css"

function LeftNavigation({ ele }) {
    return (
        <>
            <div className="row sidebar-links align-items-center">
                <div className="col-auto sidenav-icon d-flex justify-content-center align-items-center">
                    <i className={ele.icon} aria-hidden="true"></i>
                </div>
                <div className="col sidenav-content">
                    <span className="text-truncate">{ele.value.length > 18 ? `${ele.value.slice(0, 18)}..` : ele.value}</span>
                </div>
                <div className="left-style"></div>
            </div>
        </>
    )
}

export default LeftNavigation