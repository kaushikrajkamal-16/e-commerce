import React from "react";
import { CgChevronRight } from "react-icons/cg";
import { Link } from "react-router";
import ProductCard from "./ProductCard";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./SliderArrow";

const BestDeal = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <section className='py-32'>
        <div className='container'>
          <div className='border-b-2 border-b-primary/20 pb-4 flex justify-between items-center  relative after:absolute after:top-12.5 after:bg-brand   sm:after:w-[400px] sm:after:max-w-[400px]  after:h-1 after:rounded-full'>
            <h2 className='heading'>
              Grab the best deal on
              <span className='text-brand ml-2'>Smartphones</span>
            </h2>
            <Link to='/BestDeal' className='flex items-center  text-lg gap-1.5'>
              View All
              <CgChevronRight className='text-brand hidden sm:block' />
            </Link>
          </div>
          <div className='mt-10 hidden md:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
            <ProductCard
              className='hover:shadow-xl transition duration-400'
              source='/bestdealproduct1.png'
            />
            <ProductCard
              className='hover:shadow-xl transition duration-400'
              source='/bestdealproduct2.png'
            />
            <ProductCard
              className='hover:shadow-xl transition duration-400'
              source='/bestdealproduct3.png'
            />
            <ProductCard
              className='hover:shadow-xl transition duration-400'
              source='/bestdealproduct4.png'
            />
            <ProductCard
              className='hover:shadow-xl transition duration-400'
              source='/bestdealproduct5.png'
            />
          </div>
          {/* Mobile Best Deal Slider */}
          <div className='visible md:hidden'>
            <Slider {...settings}>
              <div className='w-full'>
                <ProductCard
                  className='hover:shadow-xl transition duration-400'
                  source='/bestdealproduct1.png'
                />
              </div>
              <div className='w-full'>
                <ProductCard
                  className='hover:shadow-xl transition duration-400'
                  source='/bestdealproduct2.png'
                />
              </div>
              <div className='w-full'>
                <ProductCard
                  className='hover:shadow-xl transition duration-400'
                  source='/bestdealproduct3.png'
                />
              </div>
              <div className='w-full'>
                <ProductCard
                  className='hover:shadow-xl transition duration-400'
                  source='/bestdealproduct4.png'
                />
              </div>
              <div className='w-full'>
                <ProductCard
                  className='hover:shadow-xl transition duration-400'
                  source='/bestdealproduct5.png'
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestDeal;
