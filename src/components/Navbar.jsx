import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaArrowRight, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="
      w-full
      px-4 sm:px-6 md:px-10
      py-3
      flex justify-between items-center
      bg-white
      shadow
      relative
      z-50
    ">
      
      {/* LOGO */}
      <img src={logo} alt="logo" className="w-28 sm:w-32 h-auto" />

      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-8 font-medium text-gray-700">
        <p className="flex items-center gap-1 cursor-pointer hover:text-black">
          Product <FaChevronDown size={12} />
        </p>
        <p className="flex items-center gap-1 cursor-pointer hover:text-black">
          Company <FaChevronDown size={12} />
        </p>
      </div>

      {/* DESKTOP BUTTON */}
      <div className="hidden md:block">
        <button className="
          group
          px-5 py-2.5
          bg-[#05b055]
          rounded-full
          text-white
          font-heading
          flex items-center gap-2
          transition-all duration-300
          hover:scale-105 hover:bg-[#049a4c]
        ">
          Schedule Demo
          <FaArrowRight className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* MOBILE MENU ICON */}
      <div className="md:hidden text-xl cursor-pointer" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* MOBILE MENU */}
      <div className={`
        absolute top-full left-0 w-full bg-white shadow-md
        flex flex-col items-center gap-6 py-6
        transition-all duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}
      `}>
        
        <p className="flex items-center gap-1 text-gray-700">
          Product <FaChevronDown size={12} />
        </p>

        <p className="flex items-center gap-1 text-gray-700">
          Company <FaChevronDown size={12} />
        </p>

        <button className="
          flex items-center gap-2
          px-5 py-2.5
          bg-[#05b055]
          text-white
          rounded-full
          font-heading
        ">
          Schedule Demo
          <FaArrowRight />
        </button>
      </div>

    </nav>
  );
};

export default Navbar;