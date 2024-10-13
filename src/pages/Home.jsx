import React, { useState } from 'react';
import "../styles/NavbarStyle.css"
import "../styles/requiringStyle.css"
import LeftNavigation from '../components/LeftNavigation';
import { leftnavigator, headerIconData, headerData, actioncardData, reportCardData, orderCardData, activityCardData } from '../datas/headerData';
import HeaderIcon from '../components/HeaderIcon';
import Header from '../components/Header';
import ActionCard from '../components/ActionCard';
import NoteCard from '../components/NoteCard';
import ReportCard from '../components/ReportCard';
import OrdersCard from '../components/OrdersCard';
import ActivityCard from '../components/ActivityCard';
import WeatherCard from '../components/WeatherCard';
import PieChartCard from '../components/PieChartCard';

function Home() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };



    return (
        <>
            <div className="container-fluid">
                <div className="row " >
                    <div className={`col-auto p-0 ${window.innerWidth <= 600 ? (isSidebarVisible ? 'sidebar-hidden' : 'sidebar-visible') : isSidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'}`}>
                        <div className="sidenavbar container-fluid">
                            {
                                leftnavigator.map((ele) => {
                                    return (
                                        < LeftNavigation ele={ele} />
                                    )
                                })
                            }
                        </div>
                        {

                            !isSidebarVisible && window.innerWidth <= 600 && (
                                <div className="sidenav-close d-flex">
                                    <i className="fa fa-window-close fs-3 mx-auto my-auto" onClick={toggleSidebar} aria-hidden="true"></i>
                                </div>
                            )
                        }
                    </div>
                    <div className={`col ${isSidebarVisible ? 'content-with-sidebar' : 'content-full'}`}>
                        <div className="row py-2 w-100 main-header">
                            <div className="col-6 col-md-3">
                                <div className="d-flex justify-content-start mt-2  justify-content-md-center  align-items-center">
                                    <div className="">
                                        <i className="fa fa-bars toggle-bar fs-2" onClick={toggleSidebar} aria-hidden="true"></i>
                                    </div>
                                    <div className="mx-auto d-none d-lg-inline">
                                        <h3 className='text-dark-gray fw-bold m-0'>Overview</h3>
                                        <span className='text-grays fw-medium'>Cebu Towers</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-9" >
                                <div className="d-flex mt-md-3 justify-content-end gap-4 align-items-center">
                                    <div className="d-flex my-auto header-icons-styles justify-content-end gap-4 align-items-center">
                                        {
                                            headerIconData.map((ele) => {
                                                return (
                                                    <HeaderIcon ele={ele} />
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="my-auto">
                                        <div className="dropdown">
                                            <button className="btn d-flex justify-content-center fw-semibold align-items-center gap-2  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <div className="user-profile">
                                                    <img className='img-fluid w-100 h-100' src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png" alt="user Image" />
                                                </div> {window.innerWidth <= 600 ? "Naveen" : 'Building Management'}
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><button className="dropdown-item" type="button">About Profile</button></li>
                                                <li><button className="dropdown-item" type="button">Setting</button></li>
                                                <li><button className="dropdown-item" type="button">Logout</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid">

                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex justify-content-between flex-wrap">
                                        <div className="d-flex justify-content-evenly flex-wrap align-items-center">
                                            {
                                                headerData.map((ele) => {
                                                    return (
                                                        <Header ele={ele} />
                                                    )
                                                })
                                            }
                                        </div>

                                        <div className="my-2 my-md-auto">
                                            <div className="date-dropdown bg-white ps-2 rounded d-flex justify-content-center align-items-center">
                                                <i className="fa fa-calendar calender-blue me-2" aria-hidden="true"></i>
                                                <select className="form-select d-flex justify-content-center border-0 fw-semibold align-items-center gap-2" aria-label="Date Select">
                                                    <option value="1">Monday, Oct 15th 2018</option>
                                                    <option value="2">Tuesday, Oct 16th 2018</option>
                                                    <option value="3">Wednesday, Oct 17th 2018</option>
                                                    <option value="4">Thursday, Oct 18th 2018</option>
                                                    <option value="5">Friday, Oct 19th 2018</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6  col-lg-4 mb-4">
                                    <div className="requiring py-2 h-100 px-3 rounded">
                                        <h5 className='text-white fw-bold py-2'>Items Requiring Action</h5>
                                        {
                                            actioncardData.map((ele) => {
                                                return (
                                                    <ActionCard ele={ele} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 mb-4">
                                    <NoteCard />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 mb-4">
                                    <div className="row mb-4">
                                        <div className="col-6">
                                            <WeatherCard />
                                        </div>
                                        <div className="col-6">
                                            <div className="rounded py-3 h-100 text-white d-flex justify-content-center 
                                            align-items-center flex-column caller" style={{ minHeight: "100px" }}>
                                                <i className="fa fs-1 fa-phone" aria-hidden="true"></i>
                                                <p className='fw-medium'>Important <br /> Numbers</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 h-100">
                                            <PieChartCard />
                                            {/* <div className="py-2 bg-white px-3 rounded">
                                                <h5 className='py-2 fw-bold text-dark-gray'>Cases Graph</h5>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-4 mb-4">
                                    <div className="bg-white h-100 py-2 px-3 rounded" >
                                        <h5 className='py-2 fw-bold text-dark-gray'>Management Reports Generated</h5>
                                        {
                                            reportCardData.map((ele) => {
                                                return (
                                                    <ReportCard ele={ele} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 mb-4">
                                    <div className="bg-white h-100 py-2 px-3 rounded" >
                                        <h5 className='py-2 fw-bold text-dark-gray'>Latest Work Orders Sent</h5>
                                        {
                                            orderCardData.map((ele) => {
                                                return (
                                                    <OrdersCard ele={ele} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-4 mb-4">
                                    <div className="bg-white h-100 py-2 px-3 rounded" >
                                        <h5 className='py-2 fw-bold text-dark-gray'>Acitivity Feed</h5>

                                        {
                                            activityCardData.map((ele) => {
                                                return (
                                                    <ActivityCard ele={ele} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home