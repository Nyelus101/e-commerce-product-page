import React, { useState, useEffect } from 'react';
import logo from "../images/logo.svg";
import { AiOutlineShoppingCart, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import avatar from "../images/image-avatar.png";
import Cart from './Cart';
import { useFigure } from '../FigureContext';

const Nav = () => {

  const { figure } = useFigure();

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
      <div className='flex items-center justify-between p-5 md:border-b border-slate-400 max-w-4xl mx-auto'>
      <div onClick={handleNav} className='-mr-32 block md:hidden relative z-[3000]'>
          {nav ? <AiOutlineClose size={20} className="relative"/> : <AiOutlineMenu size={20} className="relative"/>}
      </div>
      <div className='flex items-center justify-start gap-4'>
        <img src={logo} alt="" className='p-0'/>
        <nav className='z-[2050]'>
          <ul className={`${nav ? 'block absolute left-0 top-0 w-[60%] h-full bg-white pt-24 pl-5 space-y-4' : '  hidden md:flex '}  items-center justify-start gap-4`}>
            <li className='lg:hover:border-b-2 border-orange-400'>Collections</li>
            <li className='lg:hover:border-b-2 border-orange-400'>Men</li>
            <li className='lg:hover:border-b-2 border-orange-400'>Women</li>
            <li className='lg:hover:border-b-2 border-orange-400'>About</li>
            <li className='lg:hover:border-b-2 border-orange-400'>Contact</li>
          </ul>
        </nav>
      </div>
      <div>
        <ul className='flex items-center justify-start gap-4'>
          <div className='relative' >
          <li><button onClick={() => setCartIsOpen(!cartIsOpen)}>
                <AiOutlineShoppingCart className="text-2xl text-slate-600" />
              </button></li>
              <li>{cartIsOpen && <Cart />}</li>
              {figure > 0 ? <div className='w-4 h-4 bg-orange-500 text-white rounded-full absolute -top-1 -right-2 flex items-center justify-center text-xs'>{figure} </div> : null}

          </div>
          <li>
              <img src={avatar} alt="" className='w-10 rounded-full hover:border-2 border-orange-400'/>
          </li>
        </ul>
      </div>
      </div>
    </>
  )
}

export default Nav