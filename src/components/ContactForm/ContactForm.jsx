import React, { useState } from 'react';
import { FiPhoneOutgoing } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";


const ContactForm = () => {

    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = event => {
        setSelectedCategory(event.target.value);
    }

    return (
        <div className='max-w-[1140px] mx-auto px-4 mb-28 bg-[#07332F] p-10 lg:p-24 lg:rounded-lg text-white flex flex-col lg:flex-row items-center gap-12'>
            <div>
                <h3 className='text-2xl md:text-3xl lg:text-5xl font-semibold '>Contact With Us</h3>
                <p className='my-9'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
                <div className='flex items-center gap-5 text-xl font-thin'>
                    <FiPhoneOutgoing />
                    <p>+88 01608190770</p>
                </div>
                <div className='flex items-center gap-5 text-xl mt-5 font-thin'>
                    <LuMapPin />
                    <p>Dhanmondi, Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='w-full'>
                <form className="">
                    <div className='flex flex-col lg:flex-row items-center lg:gap-5'>
                        <div className='w-full'>
                            <div className="form-control mt-8 ">
                                <input type="text" placeholder="Name" className=" input input-bordered bg-[#0f4e48]" required />
                            </div>
                            <div className="form-control mt-8">
                                <input type="text" placeholder="Mobile Number" className=" input input-bordered bg-[#0f4e48]" required />
                            </div>
                            <div className="form-control mt-8">
                                <input type="date" placeholder="Date" className="input  input-bordered bg-[#0f4e48]" required />
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className="form-control mt-8">
                                <input type="email" placeholder="Email" className="input  input-bordered bg-[#0f4e48]" required />
                            </div>
                            <div className="form-control mt-8">
                                <input type="text" placeholder="Doctor Name" className="input  input-bordered bg-[#0f4e48]" required />
                            </div>
                            <div className="form-control mt-8">
                                <select required className="select  w-full bg-[#0f4e48] " value={selectedCategory} onChange={handleCategoryChange}>
                                    <option disabled value="">Time</option>
                                    <option value="Sports Car">10 AM TO 11 AM</option>
                                    <option value="Regular Car">11 AM TO 12 AM</option>
                                    <option value="Truck">1:30 PM TO 2:30 PM</option>
                                    <option value="Mini Police Car">2:30 PM TO 3:30 PM</option>
                                    <option value="Mini Police Car">3:30 PM TO 4:30 PM</option>
                                    <option value="Mini Police Car">4:30 PM TO 5:30 PM</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="'w-full border border-[#F7A582] rounded-md py-3 font-medium  text-xl text-white bg-[#F7A582]  ">Book Now</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;