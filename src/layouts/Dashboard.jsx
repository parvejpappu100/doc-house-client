import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleDown, FaBars, FaCalendarAlt, FaCartArrowDown, FaSquareFull, FaUsers, FaWallet } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { RiNotification2Fill } from "react-icons/ri";


const Dashboard = () => {

    const isAdmin = true;
    const isCoach = false;

    return (
        <div>
            <div className='bg-[#07332F] text-white py-5'>
                <div className=' flex items-center justify-between px-12 lg:px-24'>
                    <div>
                        <Link to={"/"} className='font-semibold text-xl'>Doc House</Link>
                    </div>
                    <div className="indicator">
                        <span className="indicator-item badge badge-secondary">99+</span>
                        <button className="btn"><RiNotification2Fill></RiNotification2Fill></button>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='text-2xl px-4  lg:px-24 my-4 font-semibold'>Dashboard</h3>
                <div className="drawer lg:drawer-open  ">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content ">
                        {/* Page content here */}
                        <Outlet></Outlet>
                        <label htmlFor="my-drawer-2" className="text-white top-8 left-2 text-3xl fixed drawer-button lg:hidden"><FaBars></FaBars></label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-white text-gray-500 font-semibold  min-h-full w-96 text-xl p-4 lg:px-24">
                            {/* Sidebar content here */}
                            <li>
                                <Link to={""}>Admin Home</Link>
                            </li>
                            <li>
                                <Link to={"/dashboard/allUsers"}>All Users</Link>
                            </li>
                            <li>
                                <Link>Add a Doctor</Link>
                            </li>
                            <li>
                                <Link>Manage Doctor</Link>
                            </li>
                            <h5 className='border border-green-950 my-4'></h5>
                            <li>
                                <Link to={"/"}>Home</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;