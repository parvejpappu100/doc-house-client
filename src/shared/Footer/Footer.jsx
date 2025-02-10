import React from 'react';
import blackLogo from "../../assets/images/icons/black.png";

const Footer = () => {
    return (
        <div className='bg-[#F3F3F3]'>
            <div className='max-w-[1140px] mx-auto px-4 py-20 lg:py-32'>
                <footer className="footer text-black">
                    <aside>
                        <img src={blackLogo} alt="" />
                        <p className='my-4'> Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. has been <br /> since the printer took.</p>
                        <button className='text-xl text-[#F7A582]  font-semibold px-7 py-3 rounded-lg hover:bg-[#F7A582]  duration-500 border hover:text-white border-[#F7A582]'>Appointment</button>
                    </aside>
                    <nav className='space-y-2'>
                        <h6 className=" text-xl font-bold mb-5">Quick Links</h6>
                        <a className="link link-hover">About Us</a>
                        <a className="link link-hover">Services</a>
                        <a className="link link-hover">Doctors</a>
                        <a className="link link-hover">Departments</a>
                        <a className="link link-hover">Online Payments</a>
                        <a className="link link-hover">Contact Us</a>
                        <a className="link link-hover">My Payment</a>
                    </nav>
                    <nav className='space-y-2'>
                        <h6 className=" text-xl font-bold mb-5">Doc House Services</h6>
                        <a className="link link-hover">Pediatric Clinic</a>
                        <a className="link link-hover">Diagnosis Clinic</a>
                        <a className="link link-hover">Cardiac Clinic</a>
                        <a className="link link-hover">Laboratory Analysis</a>
                        <a className="link link-hover">Gynecological Clinic</a>
                        <a className="link link-hover">Personal Counseling</a>
                        <a className="link link-hover">Dental Clinic</a>
                    </nav>
                    <nav className='space-y-2'>
                        <h6 className=" text-xl font-bold mb-5">Working Hours</h6>
                        <p className="">Monday - 10 am to 7 pm</p>
                        <p className="">Tuesday - 10 am to 7 pm</p>
                        <p className="">Wednesday - 10 am to 7 pm</p>
                        <p className="">Thursday - 10 am to 7 pm</p>
                        <p className="">Friday - 10 am to 7 pm</p>
                        <p className="">Saturday - 10 am to 7 pm</p>
                        <p className="">Sunday - 10 am to 7 pm</p>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;