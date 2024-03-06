import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FaQuoteLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const ClientSays = () => {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch("clientSays.json")
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    return (
        <div className='max-w-[1140px] mx-auto px-4 my-28'>
            <SectionTitle title={"What Our Patients Says"} subTitle={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}></SectionTitle>
            <div className='mt-24 '>
                <Swiper
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={true}
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    spaceBetween={10}

                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                    }}
                    className="mySwiper "
                >
                    {
                        testimonials?.map(review => <SwiperSlide
                            className='pb-8'
                            key={review._id}
                        >
                            <div className=' border border-gray-300  p-7 rounded-lg'>
                                <div className='flex justify-between'>
                                    <div className='flex gap-5 items-center'>
                                        <div>
                                            <img className='w-[70px] h-[70px] rounded-full' src={review.img} alt="" />
                                        </div>
                                        <div>
                                            <h5 className='text-xl font-bold'>{review.name}</h5>
                                            <p className='text-[14px]'>{review.from}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <FaQuoteLeft className='text-5xl text-[#F7A582]' />
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <p>{review.details}</p>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default ClientSays;