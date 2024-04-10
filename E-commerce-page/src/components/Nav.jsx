import React from 'react';
import logo from "../images/logo.svg";
import {AiOutlineShoppingCart} from "react-icons/ai"
import avatar from "../images/image-avatar.png"

const Nav = () => {
  return (
    <>
      <div className='flex items-center justify-between p-8 border-b border-slate-400 max-w-5xl mx-auto'>
      <div className='flex items-center justify-start gap-4'>
        <img src={logo} alt="" />
        <nav>
          <ul className='flex items-center justify-start gap-4'>
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
            <img src={avatar} alt="" className='w-12' />
          </li>
        </ul>
      </div>
      </div>
    </>
  )
}

export default Nav