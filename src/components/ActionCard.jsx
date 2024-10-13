import React from 'react';
import "../styles/requiringStyle.css"


function ActionCard({ ele }) {

    return (
        <>
            <div className="d-flex px-3 mb-2 py-2 justify-content-between align-items-center rounded text-white requiring-list">
                <div className="">
                    <i className={`${ele.icon} fs-3`} aria-hidden="true"></i>
                    <p className='fw-bold my-2 p-0 m-0'>{ele.value}</p>
                </div>
                <div className="">
                    <h3>{ele.count}</h3>
                </div>
            </div>
        </>
    )
}

export default ActionCard