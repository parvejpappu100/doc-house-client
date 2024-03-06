import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import gas from "../../../assets/images/icons/Group 8.png";
import Orthopedic from "../../../assets/images/icons/_x31_1.png";
import Gynecology from "../../../assets/images/icons/Group.png";
import Neorology from "../../../assets/images/icons/Group 1.png";
import Dental from "../../../assets/images/icons/_x37_8.png";
import Cosmetic from "../../../assets/images/icons/Group (2).png";
import gastic from "../../../assets/images/react.png"

const OurServices = () => {
    return (
        <div className='max-w-[1140px] mx-auto px-4 my-32'>
            <SectionTitle
                title={"Our Services"}
                subTitle={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}
            ></SectionTitle>
            <div className='grid grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5 my-16'>
                <div className=' p-8 flex flex-col justify-center items-center rounded border border-gray-200 shadow-sm'>
                    <img src={gas} alt="" />
                    <p className='text-center pt-4 text-[12px] font-semibold'>Gastrology</p>
                </div>
                <div className='bg-white p-8 flex flex-col justify-center items-center rounded border border-gray-200 shadow-sm'>
                    <img src={Orthopedic} alt="" />
                    <p className='text-center pt-4 text-[12px] font-semibold'>Orthopedic</p>
                </div>
                <div className='bg-white p-8 flex flex-col justify-center items-center rounded border border-gray-200 shadow-sm'>
                    <img src={Gynecology} alt="" />
                    <p className='text-center pt-4 text-[12px] font-semibold'>Gynecology</p>
                </div>
                <div className='bg-white p-8 flex flex-col justify-center items-center rounded border border-gray-200 shadow-sm'>
                    <img src={Neorology} alt="" />
                    <p className='text-center pt-4 text-[12px] font-semibold'>Neorology</p>
                </div>
                <div className='bg-white p-8 flex flex-col justify-center items-center rounded border border-gray-200 shadow-sm'>
                    <img src={Dental} alt="" />
                    <p className='text-center pt-4 text-[12px] font-semibold'>Dental Care</p>
                </div>
                <div className='bg-white p-8 flex flex-col justify-center items-center rounded border border-gray-200 shadow-sm'>
                    <img src={Cosmetic} alt="" />
                    <p className='text-center pt-4 text-[12px] font-semibold'>Cosmetic Surgery</p>
                </div>
            </div>
            <div className='flex items-center gap-12'>
                <div className='w-full'>
                    <img src={gastic} alt="" />
                </div>
                <div className='w-full'>
                    <h3 className='text-3xl font-semibold'>Electro  Gastrology Therapy</h3>
                    <p className='mt-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                    <p className='my-4'>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <button className='bg-white text-[#F7A582]  font-semibold px-7 py-3 rounded-lg hover:bg-[#F7A582]  duration-500 border hover:text-white border-[#F7A582]'>More Details</button>
                </div>
            </div>
        </div>
    );
};

export default OurServices;