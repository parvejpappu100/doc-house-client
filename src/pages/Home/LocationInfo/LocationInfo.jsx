import React from 'react';
import time from "../../../assets/images/icons/time.png";
import loc from "../../../assets/images/icons/loc.png";
import phone from "../../../assets/images/icons/phone.png";

const LocationInfo = () => {
    return (
        <div className='max-w-[1140px] mx-auto px-4  flex flex-col lg:flex-row gap-8'>
            <div className='bg-[#07332F] py-7 px-5 rounded-md flex gap-5 items-start w-full'>
                <div>
                    <img src={time} alt="" />
                </div>
                <div className='text-white'>
                    <h5 className='text-xl font-semibold'>Opening Hours</h5>
                    <p className='text-[13px] mt-3'>Open 9.00 am to 5.00pm Everyday</p>
                </div>
            </div>
            <div className='bg-[#F7A582] py-7 px-5 rounded-md flex gap-5 items-start w-full'>
                <div>
                    <img src={loc} alt="" />
                </div>
                <div className='text-white'>
                    <h5 className='text-xl font-semibold'>Our Locations</h5>
                    <p className='text-[13px] mt-3'>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
                </div>
            </div>
            <div className='bg-[#07332F] py-7 px-5 rounded-md flex gap-5 items-start w-full'>
                <div>
                    <img src={phone} alt="" />
                </div>
                <div className='text-white'>
                    <h5 className='text-xl font-semibold'>Contact Us</h5>
                    <p className='text-[13px] mt-3'>+88 01750 00 00 00 <br /> +88 01750 00 00 00</p>
                </div>
            </div>
        </div>
    );
};

export default LocationInfo;