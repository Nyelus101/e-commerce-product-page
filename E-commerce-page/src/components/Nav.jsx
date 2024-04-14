import React, { useState, useEffect } from 'react';
import logo from "../images/logo.svg";
import { AiOutlineShoppingCart, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import avatar from "../images/image-avatar.png";
import Cart from './Cart';

const Nav = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [cartIsOpen, setCartIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Set nav to false when the screen size is above a certain breakpoint
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    };

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Remove the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className='flex items-center justify-between p-8 md:border-b border-slate-400 max-w-5xl mx-auto'>
      <div onClick={handleNav} className='-mr-32 block md:hidden relative z-50'>
          {nav ? <AiOutlineClose size={20} className="relative z-50"/> : <AiOutlineMenu size={20} className="relative z-50"/>}
      </div>
      <div className='flex items-center justify-start gap-4'>
        <img src={logo} alt="" className='p-0'/>
        <nav>
          <ul className={`${nav ? 'block absolute left-0 top-0 w-[60%] h-full bg-white pt-32 pl-8 space-y-4' : '  hidden md:flex'}  items-center justify-start gap-4`}>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div>
        <ul className='flex items-center justify-start gap-4'>
          <li><button onClick={() => setCartIsOpen(!cartIsOpen)}>
                <AiOutlineShoppingCart className="text-2xl text-slate-600" />
              </button></li>
              <li>{cartIsOpen && <Cart />}</li>
          <li>
            <img src={avatar} alt="" className='w-10
            '/>
          </li>
        </ul>
      </div>
      </div>
    </>
  )
}

export default Nav