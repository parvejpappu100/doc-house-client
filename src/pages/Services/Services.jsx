import React, { useState } from 'react';
import PageBanner from "../../components/PageBanner/PageBanner";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import chair from "../../assets/images/chair.png";
import "./Services.css";


const Services = () => {


    const [date, setDate] = useState(new Date());


    const handleDateChange = (value) => {
        setDate(value);
    };

    return (
        <div>
            <PageBanner currentPage={"Our Services"} previousPage={"Home"}></PageBanner>
            <div className='max-w-[1027px] mx-auto px-4 mb-24 flex items-center gap-10 lg:gap-0 flex-col lg:flex-row lg:justify-between'>
                <div className='lg:w-full '>
                    <Calendar
                        onChange={handleDateChange}
                        value={date}
                        className="custom-calendar"
                    />
                </div>
                <div className='w-full'>
                    <img src={chair} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Services;