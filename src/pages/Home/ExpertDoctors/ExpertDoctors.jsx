import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { LuMapPin } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { TbCoinTaka } from "react-icons/tb";
import { FaBangladeshiTakaSign } from "react-icons/fa6";




const ExpertDoctors = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch("/doctors.json")
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);

    const options = { weekday: 'short', day: '2-digit', month: 'long' };

    // * Date Formate:
    // const options = { weekday: 'short', day: '2-digit', month: 'long', year: 'numeric' };

    return (
        <div className='max-w-[1140px] mx-auto px-4 mb-28'>
            <SectionTitle title={"Our Expert Doctors"} subTitle={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}></SectionTitle>
            <div className='my-24 grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    doctors.slice(0,3).map(doctor => <div key={doctor._id} className='border-2 p-5 rounded-lg'>
                        <div>
                            <img src={doctor.image} alt="" />
                            <h3 className='mt-4 font-semibold text-xl'>{doctor.name}</h3>
                            <p>{doctor.category}</p>
                            <div className='flex items-center gap-2 my-3'>
                                <Rating style={{ maxWidth: 120 }} value={doctor.rating} readOnly />
                            </div>
                            <hr />
                            <div className='flex items-center gap-3 mt-5'>
                                <LuMapPin />
                                <p>{doctor.location}</p>
                            </div>
                            <div className='flex items-center gap-3 my-3'>
                                <CiCalendar />
                                <p>Available on {new Date(doctor.available_date).toLocaleDateString("en-US", options)}</p>
                            </div>
                            <div className='flex items-center gap-3 my-3'>
                                <TbCoinTaka />
                                <div className='flex items-center '>
                                    <FaBangladeshiTakaSign />
                                    <p>{doctor.price}</p>
                                </div>
                            </div>
                            <button className='w-full border border-[#F7A582] rounded-md py-3 font-medium text-[#F7A582] text-xl hover:text-white hover:bg-[#F7A582] duration-500 '>View Profile</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ExpertDoctors;