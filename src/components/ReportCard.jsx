import React from 'react'

function ReportCard({ele}) {
    return (
        <>
            <div className="reports d-flex p-2 rounded justify-content-between align-items-center note-list">
                <div className="d-flex gap-2">
                    <div className="report-img d-flex justify-content-center align-items-center" >
                        <img className='img-fluid w-100 h-100' src="/images/pdf-img1.png" alt="pdf image" />
                    </div>
                    <div className="">
                        <h6 className='report-title m-0'>{ele.title} - {ele.date}</h6>
                        <p className='fw-medium p-0 m-0 report-desc'>{ele.desc}</p>
                    </div>
                </div>
                <div className="">
                    <a href="/Report.pdf" download>
                        <i className="fa fa-download  fs-5 report-download" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </>
    )
}

export default ReportCard