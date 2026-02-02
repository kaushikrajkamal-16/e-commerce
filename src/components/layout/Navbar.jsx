import React, { Children } from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoChevronDown } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router";

const Navbar = () => {
  const categories = [
    {
      title: "Groceries",
      Children: ["Nokia", "Iphone", "Samsung", "IQoo", "Motrola"],
    },
    {
      title: "Premium Fruits",
      Children: ["Nokia", "Iphone", "Samsung", "IQoo", "Motrola"],
    },
    {
      title: "Home & Kitchen",
      Children: ["Nokia", "Iphone", "Samsung", "IQoo", "Motrola"],
    },
    {
      title: "Fashion",
      Children: ["Nokia", "Iphone", "Samsung", "IQoo", "Motrola"],
    },
    {
      title: "Electronics",
      Children: ["Nokia", "Iphone", "Samsung", "IQoo", "Motrola"],
    },
    {
      title: "Beauty",
      Children: ["Nokia", "Iphone", "Samsung", "IQoo", "Motrola"],
    },
    {
      title: "Home Improvement",
      Children: ["Nokia", "Iphone", "Samsung", "IQoo", "Motrola"],
    },
    {
      title: "Sports, Toys & Luggage",
      Children: ["Nokia", "Iphone", "Samsung", "IQoo", "Motrola"],
    },
  ];

  return (
    <>
      <nav>
        {/* Desktop Navbar */}
        <div className='container px-3.5 py-8 hidden 3xl:flex  justify-between items-center'>
          <div className='flex items-center gap-2.5'>
            <button className='cursor-pointer text-2xl bg-[#F3F9FB] p-2 rounded-lg text-brand 3xl'>
              <RxHamburgerMenu />
            </button>
            <Link to='/'>
              <img src='/logo.png' alt='logo' />
            </Link>
          </div>
          <div className='bg-[#F3F9FB] flex items-center gap-2.5 p-4  w-full max-w-lg rounded-xl'>
            <CiSearch className='text-3xl text-brand' />
            <input
              type='text'
              className='w-full outline-0'
              placeholder='Search essentials, groceries and more...'
            />
          </div>
          <div className='flex items-center gap-10 '>
            <Link
              to='/login'
              className='flex items-center gap-1.5 font-bold text-primary relative after:absolute after:h-full after:w-0.5 after:bg-[#D9D9D9] after:-right-5'
            >
              <LuUser className='text-brand text-xl' />
              Sign Up/Sign In
            </Link>
            <Link
              to='/login'
              className='flex items-center gap-1.5 font-bold text-primary'
            >
              <CiShoppingCart className='text-brand text-xl' />
              Cart
            </Link>
          </div>
        </div>
        {/* Mobile Navbar */}
        <div className='3xl:hidden container px-3.5 '>
          <div className='py-4 flex flex-col'>
            <div className='flex justify-between items-center'>
              <button className='cursor-pointer text-2xl bg-[#F3F9FB] p-2 rounded-lg text-brand'>
                <RxHamburgerMenu />
              </button>
              <Link to='/'>
                <img src='/logo.png' alt='logo' className='xxs:w-35' />
              </Link>
              <Link
                to='/login'
                className='flex items-center gap-1.5 text-2xl  text-primary'
              >
                <CiShoppingCart className='text-brand  ' />
              </Link>
            </div>
            <div className='bg-[#F3F9FB] flex items-center gap-2.5 p-2 mt-3  w-full rounded-xl'>
              <CiSearch className='text-3xl text-brand' />
              <input
                type='text'
                className='outline-0 w-full'
                placeholder='Search essentials, groceries and more...'
              />
            </div>
          </div>
        </div>
      </nav>
      {/* Product Category Start  */}
      <section className='hidden 5xl:block  border-y-2 border-[#EDEDED] py-4 px-3.5'>
        <div className='container flex gap-3.5'>
          {categories.map((item) => (
            <div key={item.title} className='group relative'>
              <Link
                className='inline-block px-3.5 rounded-3xl py-2.5  bg-secondary hover:bg-brand hover:text-white transition  '
                to='/Product'
              >
                <div className='flex items-center gap-3.5 text-sm'>
                  <div>
                    <p>{item.title}</p>
                  </div>
                  <div>
                    <IoChevronDown className='inline-block text-brand   group-hover:text-white' />
                  </div>
                </div>
              </Link>
              <ul className='absolute bg-white top-full left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100  w-48 shadow rounded-2xl'>
                {item.Children.map((grandchild) => (
                  <li>
                    <Link className='hover:bg-brand hover:text-white block p-2 rounded-2xl transition '>
                      {grandchild}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Product Category End  */}
    </>
  );
};

export default Navbar;
