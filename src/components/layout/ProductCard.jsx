import React from "react";
import { Link } from "react-router";

const ProductCard = ({ className, source }) => {
  return (
    <div
      className={`${className}  bg-primary/20 border-2 border-[#EDEDED] relative  overflow-hidden   w-full  rounded-xl`}
    >
      <Link to='/bestdeal' className='flex items-center justify-center  py-4'>
        <img
          src={source}
          alt='bestdealproduct1'
          className='w-auto h-30 max-h-30 object-contain max-w-full'
        />
      </Link>
      <div className='bg-white p-4'>
        <p className='text-lg font-semibold'>Galaxy S22 Ultra</p>
        <div className='text-base flex gap-3 py-2.5 border-b-2 border-b-primary/20'>
          <p className='font-bold'>₹32999</p>
          <p className='line-through'>₹74999</p>
        </div>
        <p className='text-green-600 text-base mt-2.5'>Save - ₹32999</p>
      </div>
      <div className='bg-brand text-white font-semibold absolute top-0 right-0 w-14 rounded-bl-xl p-2.5'>
        <p className='text-sm text-center '>56% OFF</p>
      </div>
    </div>
  );
};

export default ProductCard;
