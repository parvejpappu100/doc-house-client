import React from 'react';
import logo from "../../assets/images/icons/Group 2.png";
import vector from "../../assets/images/Vector.png"
import { Link } from 'react-router-dom';
import ActiveLink from '../../components/ActiveLink/ActiveLink';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { FaUserCircle } from "react-icons/fa";


const Navbar = () => {

    const { user, logOut } = useAuth();


    const handleLogout = () => {
        logOut()
            .then(result => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Logout successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch()
    }

    const navOptions = <>

        <li>
            <ActiveLink to="/">Home</ActiveLink>
        </li>
        <li><a>About</a></li>
        <li><a>Appointment</a></li>
        <li><a>Our Doctors</a></li>
        <li><a>Contact Us</a></li>
        {
            user ? <li className='flex flex-row '>
                <Link onClick={handleLogout}>Logout</Link>
                <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                    {
                        user.photoURL ? <img className="rounded-full h-10 w-10" src={user.photoURL}></img> : <FaUserCircle className="h-10 w-10"></FaUserCircle>
                    }
                </div>
            </li> : <li>
                <ActiveLink to="/login">Login</ActiveLink>
            </li>
        }

    </>

    return (
        <div className='bg-[#07332F] text-white relative'>
            <div className='absolute'>
                <img className='w-1/2 lg:w-full' src={vector} alt="" />
            </div>
            <div className="drawer max-w-[1140px] mx-auto px-4 pt-8">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 pe-2 me-2">
                            <img className='w-[140px] lg:w-[180px]' src={logo} alt="" />
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                {navOptions}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="drawer-side z-40">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-[#07332F] text-white">
                        {/* Sidebar content here */}
                        {navOptions}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;