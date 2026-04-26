import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 mt-20">

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-4 gap-10">

        {/* LEFT */}
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-heading font-bold tracking-tight">
            <span className="text-[#1c63f6]">MAT</span>
            <span className="text-[#f86c09]">NITE</span>
          </h1>

          <p className="text-gray-600 text-sm leading-relaxed">
            Building intelligent real-world products in AI, safety and education.
          </p>

          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <MdEmail />
            contact@matnite.com
          </div>

          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <MdLocationOn />
            India
          </div>

          <button className="mt-2 w-fit px-5 py-2.5 rounded-full text-white text-sm font-semibold flex items-center gap-2 bg-gradient-to-r from-[#1c63f6] to-[#04b06e] hover:opacity-90 transition">
            Request Demo
            <FaArrowRight size={12} />
          </button>
        </div>

        {/* PRODUCTS */}
        <div>
          <h3 className="text-gray-900 font-heading font-semibold mb-4">
            Products
          </h3>
          <ul className="flex flex-col gap-3 text-gray-600 text-sm">
            <li className="hover:text-[#1c63f6] cursor-pointer transition">ABBAS</li>
            <li className="hover:text-[#1c63f6] cursor-pointer transition">Vartalap AI Chat</li>
            <li className="hover:text-[#1c63f6] cursor-pointer transition">HARIS</li>
            <li className="hover:text-[#1c63f6] cursor-pointer transition">MAT TEST</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-gray-900 font-heading font-semibold mb-4">
            Company
          </h3>
          <ul className="flex flex-col gap-3 text-gray-600 text-sm">
            <li className="hover:text-[#1c63f6] cursor-pointer transition">About</li>
            <li className="hover:text-[#1c63f6] cursor-pointer transition">Vision & Research</li>
            <li className="hover:text-[#1c63f6] cursor-pointer transition">Careers</li>
            <li className="hover:text-[#1c63f6] cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h3 className="text-gray-900 font-heading font-semibold mb-4">
            Legal
          </h3>
          <ul className="flex flex-col gap-3 text-gray-600 text-sm">
            <li className="hover:text-[#1c63f6] cursor-pointer transition">Privacy Policy</li>
            <li className="hover:text-[#1c63f6] cursor-pointer transition">Terms of Service</li>
            <li className="hover:text-[#1c63f6] cursor-pointer transition">Cookies</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-200 py-6 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-4">
          <div className="p-2 rounded-lg bg-white border hover:bg-gray-100 cursor-pointer transition">
            <FaInstagram />
          </div>
          <div className="p-2 rounded-lg bg-white border hover:bg-gray-100 cursor-pointer transition">
            <FaGithub />
          </div>
          <div className="p-2 rounded-lg bg-white border hover:bg-gray-100 cursor-pointer transition">
            <FaLinkedin />
          </div>
        </div>

        <p className="text-gray-500 text-sm">
          © 2026 MATNITE. All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;