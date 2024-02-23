import React from 'react';
import doctors from "../../../assets/images/doc.png";
import circle from "../../../assets/images/circle.png"
import long from "../../../assets/images/long.png";
import rotate from "../../../assets/images/7.png"

const Banner = () => {
    return (
        <div className='bg-[#07332F] text-white pt-16 lg:pt-24 pb-[26px]'>
            <div className='max-w-[1140px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between  '>
                <div className='max-w-[280px] mx-auto lg:mx-0 lg:max-w-[595px] text-center lg:text-start mb-12 lg:mb-0 relative '>
                    <h3 className='font-semibold text-2xl lg:text-5xl'>Your Best Medical  Help Center</h3>
                    <p className='my-4 lg:my-8'>Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
                    <button className='bg-[#F7A582] text-white  font-semibold px-7 py-3 rounded-lg hover:bg-[#F7A582] hover:text-black duration-500'>All Service</button>
                    <div className='hidden md:block absolute '>
                        <img src={rotate} alt="" />
                    </div>
                    <div className='md:hidden lg:block absolute bottom-0 right-0'>
                        <img src={long} alt="" />
                    </div>
                </div>
                <div className='relative'>
                    <div>
                        <img src={circle} alt="" />
                    </div>
                    <div className=' lg:pt-0 absolute top-0'>
                        <img src={doctors} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;