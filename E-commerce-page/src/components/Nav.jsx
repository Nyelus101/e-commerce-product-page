import React, { useState } from 'react';
import logo from "../images/logo.svg";
import { AiOutlineShoppingCart, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import avatar from "../images/image-avatar.png";

const Nav = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className='flex items-center justify-between p-8 md:border-b border-slate-400 max-w-5xl mx-auto bg-red-500'>
      <div onClick={handleNav} className='-mr-32 block md:hidden relative z-50'>
          {nav ? <AiOutlineClose size={20} className="relative z-50"/> : <AiOutlineMenu size={20} className="relative z-50"/>}
      </div>
      <div className='flex items-center justify-start gap-4'>
        <img src={logo} alt="" className='p-0'/>
        <nav>
          {/* <ul className={` ${nav ? 'block absolute left-0 top-0 w-[60%] h-full bg-white pt-32 pl-8 space-y-4' : 'hidden md:flex items-center justify-start gap-4'}`}> */}
          <ul className={` ${nav ? 'block absolute left-0 top-0 w-[60%] h-full bg-white pt-32 pl-8 space-y-4' : 'hidden md:flex items-center justify-start gap-4'}`}>
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
          <li><button>
                <AiOutlineShoppingCart />
              </button></li>
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