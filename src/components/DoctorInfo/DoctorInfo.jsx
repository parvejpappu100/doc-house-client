import React, { useState } from 'react';

const DoctorInfo = ({ doctor }) => {

    const [info, setInfo] = useState(doctor?.overview);
    console.log(info)

    const [isActive, setIsActive] = useState("overviews");

    const handleShowOverviews = () => {
        setIsActive("overviews");
        setInfo(doctor?.overview);
    };

    const handleShowLocations = () => {
        setIsActive("location");
        setInfo(doctor?.location_details);
    };

    const handleShowReviews = () => {
        setIsActive("reviews");
        setInfo(doctor?.reviews);
    };

    const handleShowTime = () => {
        setIsActive("time");
        setInfo(doctor?.business_hours);
    };

    return (
        <div className='p-12'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0'>
                <button onClick={handleShowOverviews} className={isActive == "overviews" ? "bg-[#F7A582] text-white font-semibold py-3 rounded lg:rounded-t-lg " : " font-semibold"}>Overview</button>
                <button onClick={handleShowLocations} className={isActive == "location" ? "bg-[#F7A582] text-white font-semibold py-3 rounded lg:rounded-t-lg " : " font-semibold"}>Locations</button>
                <button onClick={handleShowReviews} className={isActive == "reviews" ? "bg-[#F7A582] text-white font-semibold py-3 rounded lg:rounded-t-lg " : " font-semibold"}>Reviews</button>
                <button onClick={handleShowTime} className={isActive == "time" ? "bg-[#F7A582] text-white font-semibold py-3 rounded lg:rounded-t-lg " : " font-semibold"}>Business Hours</button>
            </div>
            <hr />
            <div className='mt-8'>
                {
                    Array.isArray(info) ?
                        <div>
                            <h3>Review will be added later.</h3>
                        </div> :
                        <div>
                            {info}
                        </div>
                }

            </div>
        </div>
    );
};

export default DoctorInfo;