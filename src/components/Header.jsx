import React from 'react'

function Header({ ele }) {
    return (
        <>


            <div className="col-12 col-md-auto mb-3 header-titles">
                <h6 className="text-grays text-center text-md-start fs-6">{ele.value}
                    {
                        ele.symbol == "equal" && <span className="text-orange fw-bold px-2">=</span>
                    }
                    {
                        ele.symbol == "up" && <span className="text-orange fw-bold px-2"><i className="fa fa-caret-up up-arrow" aria-hidden="true"></i></span>
                    }
                    {
                        ele.symbol == "down" && <span className="text-orange fw-bold px-2"><i className="fa fa-caret-down up-down" aria-hidden="true"></i></span>
                    }
                </h6>
                <h3 className="text-dark-gray  text-center text-md-startfs-3 fw-medium">{ele.count}</h3>
            </div>
        </>
    )
}

export default Header