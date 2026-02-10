import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LuBadgePercent } from "react-icons/lu";
import { Link } from "react-router";

const Topbar = () => {
  return (
    // <<<<<<<<<<<<<<<<For xs>>>>>>>>>>>>>>>>>>>>>>>

    <div className='bg-[#F5F5F5] max-w-full hidden sm:block'>
      <div className='container lg:flex lg:justify-between lg:items-center '>
        <div className='sm:mb-3.5 lg:mb-0'>
          <p className='text-primary text-center text-[14px]'>
            Welcome to worldwide Megamart!
          </p>
        </div>
        <div className='flex justify-between items-center align-middle lg:gap-4'>
          <Link
            className='text-[12px] flex items-center gap-1 text-primary  relative after:absolute after:h-full after:bg-y_border after:w-0.5 after:top-0 after:-right-2  sm:after:-right-14 lg:after:-right-2'
            to='/About'
          >
            <CiLocationOn className='text-brand' />
            Deliver to 423651
          </Link>
          <Link
            className='text-[14px] flex justify-between items-center gap-1.5 text-primary text-sm relative after:absolute after:h-full after:bg-y_border after:w-0.5 after:top-0 after:-right-10 sm:after:-right-14 lg:after:-right-2'
            to='/About'
          >
            <LiaShippingFastSolid className='text-brand text-xl' />
            Track your order
          </Link>
          <Link
            className='text-[12px] flex justify-between items-center gap-1.5 text-primary text-sm '
            to='/About'
          >
            <LuBadgePercent className='text-brand text-xl' />
            All Offers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
