import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./SliderArrow";
const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul className='flex  absolute bottom-4 sm:bottom-6 lg:bottom-10 left-10 md:left-13 lg:left-18 xl:left-23 gap-4  '>
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className='cursor-pointer  sm:max-w-8 sm:max-h-4 bg-white p-1  sm:p-2 rounded-full'></div>
    ),
  };

  return (
    <>
      <div className='mt-5'>
        <div className='container'>
          <Slider {...settings}>
            <div className='w-full'>
              <img src='banner-1.png' alt='banner-1' className='w-full' />
            </div>
            <div className='w-full'>
              <img src='banner-2.png' alt='banner-2' className='w-full' />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Banner;
