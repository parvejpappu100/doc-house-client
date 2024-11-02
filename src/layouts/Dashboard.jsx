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
                        <h3 className='font-semibold text-xl'>Doc House</h3>
                    </div>
                    <div className="indicator">
                        <span className="indicator-item badge badge-secondary">99+</span>
                        <button className="btn"><RiNotification2Fill></RiNotification2Fill></button>
                    </div>
                </div>
            </div>
            <div>
                {/* <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content relative">
                        <Outlet></Outlet>
                        <label htmlFor="my-drawer-2" className=" top-2 left-2 text-3xl fixed drawer-button lg:hidden"><FaBars></FaBars></label>

                    </div>
                    <div className="drawer-side bg-[#F5E1DA]">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80  text-base-content uppercase font-semibold text-base">
                            <div className='text-center font-bold uppercase font-family py-16'>
                                <p className='text-3xl '>GoalGurus</p>
                                <p className='  text-xl md:tracking-wider '>Football Academy</p>
                            </div>
                            {
                                isAdmin && <>
                                    <li>
                                        <Link to="/dashboard/manageClasses"><FaSquareFull></FaSquareFull>Manage Classes</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/allUsers"><FaUsers></FaUsers>Manage Users</Link>
                                    </li>
                                </> || isCoach && <>
                                    <li>
                                        <Link to="/dashboard/addClass"><FaArrowAltCircleDown></FaArrowAltCircleDown>Add Class</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/myClasses"><FaWallet></FaWallet>My Classes</Link>
                                    </li>
                                </> || <>
                                    <li>
                                        <Link to="/dashBoard/myCart"><FaCartArrowDown></FaCartArrowDown> My Selected Classes <span className=" badge badge-secondary">+5</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/enrolledClasses"><FaCalendarAlt></FaCalendarAlt>My Enrolled Classes</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/paymentHistory"><FaWallet></FaWallet> Payment History</Link>
                                    </li>
                                </>
                            }
                            <div className="divider bg-white h-1"></div>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/allClass">Classes</Link>
                            </li>
                            <li>
                                <Link to="/coaches">Coaches</Link>
                            </li>
                        </ul>
                    </div>
                </div> */}
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
                                <Link to={"/dashboard/allUsers"}>All Users</Link>
                            </li>
                            <li>
                                <Link>Add a Doctor</Link>
                            </li>
                            <li>
                                <Link>Manage Doctor</Link>
                            </li>
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