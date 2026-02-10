import React, { Children, useEffect, useRef, useState } from "react";
import { CgChevronDown, CgChevronRight } from "react-icons/cg";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { IoChevronDown } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router";

const Navbar = () => {
  const [dropdown, setDropDown] = useState("");
  const [isopen, setIsOpen] = useState(false);
  const sideref = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (sideref.current && !sideref.current.contains(e.target)) {
        setIsOpen(false);
      }
    });
  }, [sideref]);

  const categories = [
    {
      title: "Groceries",
      to: "/Groceries",
      Children: [
        {
          title: "Nokia",
          to: "/Nokia",
        },
        {
          title: "Iphone",
          to: "/Iphone",
        },
        {
          title: "Samsung",
          to: "/Samsung",
        },
        {
          title: "IQoo",
          to: "/IQoo",
        },
        {
          title: "Motrola",
          to: "/Motrola",
        },
      ],
    },
    {
      title: "Premium Fruits",
      to: "/Premium Fruits",

      Children: [
        {
          title: "Nokia",
          to: "/Nokia",
        },
        {
          title: "Iphone",
          to: "/Iphone",
        },
        {
          title: "Samsung",
          to: "/Samsung",
        },
        {
          title: "IQoo",
          to: "/IQoo",
        },
        {
          title: "Motrola",
          to: "/Motrola",
        },
      ],
    },
    {
      title: "Home & Kitchen",
      to: "/Home & Kitchen",
      Children: [
        {
          title: "Nokia",
          to: "/Nokia",
        },
        {
          title: "Iphone",
          to: "/Iphone",
        },
        {
          title: "Samsung",
          to: "/Samsung",
        },
        {
          title: "IQoo",
          to: "/IQoo",
        },
        {
          title: "Motrola",
          to: "/Motrola",
        },
      ],
    },
    {
      title: "Fashion",
      to: "/Fashion",
      Children: [
        {
          title: "Nokia",
          to: "/Nokia",
        },
        {
          title: "Iphone",
          to: "/Iphone",
        },
        {
          title: "Samsung",
          to: "/Samsung",
        },
        {
          title: "IQoo",
          to: "/IQoo",
        },
        {
          title: "Motrola",
          to: "/Motrola",
        },
      ],
    },
    {
      title: "Electronics",
      to: "/Electronics",
      Children: [
        {
          title: "Nokia",
          to: "/Nokia",
        },
        {
          title: "Iphone",
          to: "/Iphone",
        },
        {
          title: "Samsung",
          to: "/Samsung",
        },
        {
          title: "IQoo",
          to: "/IQoo",
        },
        {
          title: "Motrola",
          to: "/Motrola",
        },
      ],
    },
  ];

  return (
    <header>
      <nav>
        {/* Desktop Navbar */}
        <div className='container  py-8 hidden lg:flex  justify-between items-center'>
          <div className='flex items-center gap-2.5'>
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
        <div className='lg:hidden container  '>
          <div className='py-4 flex flex-col'>
            <div className='flex justify-between items-center'>
              <button
                onClick={() => setIsOpen(true)}
                className='visible 5xl:invisible cursor-pointer text-2xl bg-[#F3F9FB] p-2 rounded-lg text-brand 3xl'
              >
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
      {/* Product Category Desktop Start  */}
      <section className='hidden lg:block  border-y-2 border-[#EDEDED] py-4'>
        <div className='container flex  gap-3.5'>
          {categories.map((item) => (
            <div key={item.title} className='group relative'>
              <Link
                className='inline-block px-3.5 rounded-3xl py-2.5  bg-secondary hover:bg-brand hover:text-white transition  '
                to={item.to}
              >
                <div className='flex items-center gap-3.5 text-sm'>
                  <div>
                    <p>{item.title}</p>
                  </div>
                  <div>
                    <button>
                      <IoChevronDown className='inline-block text-brand   group-hover:text-white' />
                    </button>
                  </div>
                </div>
              </Link>
              <ul className='absolute z-50 bg-white top-full left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100  w-48 shadow rounded-2xl'>
                {item.Children.map((child) => (
                  <li key={child.title}>
                    <Link
                      to={child.to}
                      className='hover:bg-brand hover:text-white block p-2 rounded-2xl transition '
                    >
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      {/* Mobile Sidebar */}
      <div
        className={`fixed ${isopen ? "visible z-50  opacity-100" : "invisible  opacity-0"} transition top-0 left-0 w-full h-screen bg-primary/25 backdrop-blur-[1px]`}
      >
        <div
          ref={sideref}
          className={`${isopen ? "translate-x-0" : "-translate-x-full"} duration-500 transition-all w-4/5 md:w-2/4 h-full bg-white`}
        >
          <div className='bg-[#c9e9f6]/30 p-3 flex justify-between items-center'>
            <h4 className='text-3xl text-primary font-bold'>MainMenu</h4>
            <button onClick={() => setIsOpen(false)} className='cursor-pointer'>
              <ImCross className='text-2xl mt-1 text-primary' />
            </button>
          </div>
          <ul className='space-y-2 text-2xl text-primary font-bold p-4 mb-3 border-b-2 border-primary/50'>
            {categories.map((item) => (
              <li key={item.title}>
                <div className='flex justify-between items-center'>
                  <Link to={item.to} className='bg-white'>
                    {item.title}
                  </Link>
                  <button
                    onClick={() => setDropDown(item.title)}
                    className={`${dropdown == item.title ? "hidden" : "block"} `}
                  >
                    <CgChevronRight className='mt-2' />
                  </button>
                  <button
                    onClick={() => setDropDown(null)}
                    className={`${dropdown == item.title ? "block" : "hidden"}`}
                  >
                    <CgChevronDown className='mt-2' />
                  </button>
                </div>

                <ul
                  className={`${dropdown == item.title ? "block" : "hidden"} text-xl space-y-1 text-primary/90 font-semibold px-2`}
                >
                  {item.Children.map((child) => (
                    <li key={child.title}>
                      <Link to={child.to}>-{child.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <Link className='px-4  text-2xl font-bold text-primary '>
            Sign Up/Sign In
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
