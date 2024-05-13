import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// IYcYD9rPVqxY2fyu

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Carousel = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-slate-700 relative">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <img
              className="rounded w-full"
              src="https://i.ibb.co/5hwBV0W/New-Project-20.jpg"
              alt=""
            />
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%]
            translate-y-[-50%] text-center">
              <h1 className="text-white text-[40px]">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="text-white text-[16px] max-w-[900px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                nam possimus libero, quas et ex dicta facere voluptates autem
                eveniet!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-slate-700 relative">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <img
              className="rounded w-full"
              src="https://i.ibb.co/RHsSwFq/New-Project-19.jpg"
              alt=""
            />
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%]
            translate-y-[-50%] text-center">
              <h1 className="text-white text-[40px]">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="text-white text-[16px] max-w-[900px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                nam possimus libero, quas et ex dicta facere voluptates autem
                eveniet!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-slate-700 relative">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <img
              className="rounded w-full"
              src="https://i.ibb.co/sPDFRhZ/New-Project-18.jpg"
              alt=""
            />
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%]
            translate-y-[-50%] text-center">
              <h1 className="text-white text-[40px]">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="text-white text-[16px] max-w-[900px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                nam possimus libero, quas et ex dicta facere voluptates autem
                eveniet!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
