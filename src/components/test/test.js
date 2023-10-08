"use client";
{
  /*"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Test() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className=" h-[calc(60vh)] bg-[#f7c552] w-full flex items-center justify-center">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <p className="bg-white text-gray-500 p-5">
            “ Quisque ullamcorper odio a nisl lacinia dictum. Vestibulum
            malesuada ipsum in turpis finibus, ut sagittis erat scelerisque.
            Curabitur non risus fringilla libero accumsan molestie et quis
            justo. ”
          </p>
          <h4 className="text-white">George Rich</h4>
          <span className="text-white">Marketing Head</span>
        </SwiperSlide>

        <SwiperSlide>
          <p className="bg-white text-gray-500 p-5">
            “ Suspendisse magna mauris, convallis vel finibus eget, lobortis
            dictum neque. Nam tincidunt metus nec eros dignissim consectetur. ”
          </p>
          <h4 className="text-white">John Henry</h4>
          <span className="text-white">Art Director</span>
        </SwiperSlide>
        <SwiperSlide>
          <p className="bg-white text-gray-500 p-5">
            “ Aenean semper aliquam est ut maximus. Fusce id diam eget orci
            lobortis ultricies at ac velit. Curabitur laoreet massa et fringilla
            sagittis. ”
          </p>
          <h4 className="text-white">Danny Cute</h4>
          <span className="text-white">Founder</span>
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> 
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
*/
}
