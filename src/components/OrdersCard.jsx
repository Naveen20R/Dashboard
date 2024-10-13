import React from 'react'

function OrdersCard({ele}) {
    return (
        <>
            <div className="orders d-flex my-2 p-2 rounded justify-content-between align-items-center note-list">
                <div className="d-flex gap-2">
                    <div className="report-img d-flex justify-content-center align-items-center" >
                        <img className='img-fluid w-100 h-100' src="/images/pdf-img1.png" alt="pdf image" />
                    </div>
                    <div className="">
                        <h6 className='order-title m-0'>{ele.title}</h6>
                        <p className='fw-medium p-0 m-0 order-desc'>send - {ele.date} </p>
                    </div>
                </div>
                <div className="">
                    <span className='order-code'>{ele.code} </span>
                </div>
            </div>
        </>
    )
}

export default OrdersCard