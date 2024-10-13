import React from 'react'

function HeaderIcon({ ele }) {
    return (
        <>
            <div className={`header-icons ${ele.bg == "blue" && 'bg-blue'}  d-flex justify-content-center align-items-center rounded-circle`}>
                <i className={ele.icon} aria-hidden="true"></i>
                <div className="header-hover-content">
                    <div className="header-note">
                        <div className="triangle-up"></div>
                        <span className='text-grays note-text fs-6 fw-medium'>{ele.value}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderIcon