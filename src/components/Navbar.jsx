import React from 'react'
import logo from '../assets/logo.png'
import { FaArrowRight, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='w-full px-10 py-2 shadow flex justify-between items-center bg-white'>
      <div className=''>
        <img src={logo} alt="logo" className='w-30 h-6'/>
      </div>
      <div className='flex gap-7 font-medium'>
        <p>Product <FaChevronDown className='inline'/></p>
        <p>company <FaChevronDown className='inline'/></p>
      </div>
      <div>
        <button className='px-3 py-2 bg-[#05b055] rounded-full text-white font-heading'>
          Schedule a demo
          <FaArrowRight className='inline'/>
        </button>
      </div>
    </div>
  )
}

export default Navbar