import React from 'react';
import { useParams } from 'react-router-dom';
import PageBanner from '../../components/PageBanner/PageBanner';
import useDoctors from '../../hooks/useDoctors';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { LuMapPin } from "react-icons/lu";

const DoctorProfile = () => {

    const [doctors, loading] = useDoctors();
    const { id } = useParams();

    const doctor = doctors?.find(doc => doc._id == id);

    const options = { weekday: 'short', day: '2-digit', month: 'long', year: 'numeric' };


    // * TO DO: ADD PREVIOUS PAGE DYNAMICALLY
    return (
        <div>
            <PageBanner currentPage={"Doctor Profile"} previousPage={"Home"}></PageBanner>
            <div className='bg-white rounded shadow-sm px-4 max-w-[1140px]  m-auto mb-24'>
                <div className='p-12 flex items-center flex-col lg:flex-row gap-8'>
                    <div>
                        <img src={doctor?.image} alt="" />
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold'>{doctor?.name}</h3>
                        <p className='my-2'>{doctor?.degree}</p>
                        <p className='mb-1'>{doctor?.category}</p>
                        <div className='flex items-center gap-2'>
                            <Rating style={{ maxWidth: 120 }} value={doctor?.rating} readOnly />
                            <p>( {doctor?.reviews.length} )</p>
                        </div>
                        <div className='flex items-center gap-3 mt-2'>
                            <LuMapPin />
                            <p>{doctor?.location} - <span className='text-[#F7A582] cursor-pointer'>Get Direction</span></p>
                        </div>
                        <p className='mt-2'>Book an appointment on Date {new Date(doctor?.available_date).toLocaleDateString("en-US", options)}:-</p>
                        <div className='mt-2'>
                            {
                                doctor?.available_slot?.map(slot => <div key={slot._id} className='grid grid-cols-3 md:grid-cols-6 gap-3 text-[11px]'>
                                    <button disabled={!slot.one} data-tip={slot.one == true ? "Book This Time" : "Not Available"} className='bg-[#07332F] tooltip  text-white px-5 rounded-lg py-1 disabled:bg-gray-500 disabled:cursor-not-allowed'>10:00<br />11:00</button>

                                    <button disabled={!slot.two} data-tip={slot.two == true ? "Book This Time" : "Not Available"} className='bg-[#07332F] tooltip  text-white px-5 rounded-lg py-1 disabled:bg-gray-500 disabled:cursor-not-allowed'>11:00<br />12:00</button>

                                    <button disabled={!slot.three} data-tip={slot.three == true ? "Book This Time" : "Not Available"} className='bg-[#07332F] tooltip  text-white px-5 rounded-lg py-1 disabled:bg-gray-500 disabled:cursor-not-allowed'>13:30<br />14:30</button>

                                    <button disabled={!slot.four} data-tip={slot.four == true ? "Book This Time" : "Not Available"} className='bg-[#07332F] tooltip  text-white px-5 rounded-lg py-1 disabled:bg-gray-500 disabled:cursor-not-allowed'>14:30<br />15:30</button>

                                    <button disabled={!slot.five} data-tip={slot.five == true ? "Book This Time" : "Not Available"} className='bg-[#07332F] tooltip  text-white px-5 rounded-lg py-1 disabled:bg-gray-500 disabled:cursor-not-allowed'>15:30<br />16:30</button>

                                    <button disabled={!slot.six} data-tip={slot.six == true ? "Book This Time" : "Not Available"} className='bg-[#07332F] tooltip  text-white px-5 rounded-lg py-1 disabled:bg-gray-500 disabled:cursor-not-allowed'>16:30<br />17:30</button>
                                </div>)
                            }
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfile;