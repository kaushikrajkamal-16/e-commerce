import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function NextArrow({ className, onClick }) {
  return (
    <div
      className={`${className}   absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-1 hidden sm:flex justify-center items-center rounded-full cursor-pointer`}
      onClick={onClick}
    >
      <div className='rounded-full bg-[#F3F9FB]'>
        <BiChevronRight className=' w-12 h-12 p-4' />
      </div>
    </div>
  );
}

function PrevArrow({ className, onClick }) {
  return (
    <div
      className={`${className}  absolute z-50 left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-1 hidden sm:flex justify-center items-center rounded-full cursor-pointer`}
      onClick={onClick}
    >
      <div className='rounded-full bg-[#F3F9FB]'>
        <BiChevronLeft className=' w-12 h-12 p-4' />
      </div>
    </div>
  );
}

export { NextArrow, PrevArrow };
