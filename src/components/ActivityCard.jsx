import React from 'react'

function ActivityCard({ ele }) {
    return (
        <>
            <div className="activity mb-2 d-flex gap-5 rounded justify-content-between align-items-start">
                <div className="">
                    <h6 className='activity-date m-0'>{ele.main.date}</h6>
                    {
                        ele.sub.map((ele,index) => {
                            return (

                                <p key={index} className='fw-medium p-0 m-0 activity-time'>{ele.time}</p>
                            )
                        })
                    }
                </div>
                <div className="">
                    <h6 className='activity-title m-0'>{ele.main.title}</h6>
                    {
                        ele.sub.map((ele,index) => {
                            return (
                                <p key={index} className='fw-medium p-0 m-0 activity-desc'>{ele.desc}</p>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ActivityCard