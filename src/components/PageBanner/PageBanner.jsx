import React from 'react';
import img from "../../assets/images/7.png"

const pageBanner = ({currentPage, previousPage}) => {
    return (
        <div className='bg-[#07332F] mb-24'>
            <div className='max-w-[1140px] py-5 m-auto text-white px-4 flex justify-between items-center'>
                <div>
                    <p>{previousPage} / {currentPage}</p>
                    <h3 className='text-xl md:text-3xl mt-2 font-medium'>{currentPage}</h3>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default pageBanner;