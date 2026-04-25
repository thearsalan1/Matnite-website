import React from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  IoBagCheckOutline,
  IoShieldCheckmarkOutline,
} from "react-icons/io5";
import { RiRobot3Line } from "react-icons/ri";

const Hero = ({ List }) => {
  return (
    <section className="
      w-[92%] md:w-[90%]
      mx-auto
      my-6 md:my-10
      bg-white
      rounded-2xl md:rounded-3xl
      p-6 sm:p-8 md:p-10
      flex flex-col md:flex-row
      gap-10
      relative
      shadow-lg shadow-orange-500/30
      overflow-hidden
    ">

      {/* 🌈 Decorations */}
      <div className="absolute top-[-40px] right-[-40px] w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-[#04b06e] opacity-30 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-[-40px] left-[-20px] w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-[#1c63f6] opacity-30 blur-[100px] rounded-full pointer-events-none" />

      {/* LEFT */}
      <div className="w-full md:w-1/2 relative z-10">

        {/* Badge */}
        <div className="
          border border-[#04b06e]/30 bg-[#04b06e]/10 text-[#04b06e]
          px-3 sm:px-4 py-1.5
          rounded-full
          text-xs sm:text-sm
          font-heading font-semibold
          w-fit
          mb-6 md:mb-8
        ">
          India's fastest growing AI Tech company
        </div>

        {/* Heading */}
        <h1 className="
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          font-heading font-semibold
          tracking-tight
          leading-tight
          mb-4 md:mb-6
        ">
          Powering <span className="text-[#04b06e]">Businesses &</span>
          <br className="hidden sm:block" />
          Learners with innovative
          <br className="hidden sm:block" />
          <span className="text-[#1c63f6]">tech solutions.</span>
        </h1>

        {/* Text */}
        <p className="
          text-sm sm:text-base
          text-gray-700
          leading-relaxed
          mb-6 md:mb-8
        ">
          We build powerful tech solutions for businesses and institutions.
          From <span className="text-[#1c63f6]">CRM & ERP systems</span> to{" "}
          <span className="text-[#04b06e]">real-life projects</span>,{" "}
          <span className="text-[#f86c09]">internships</span>, coding classes,
          and AI products — everything under one roof.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">

          <button className="
            group
            bg-[#1c63f6]
            text-white
            px-5 sm:px-6 py-2.5 sm:py-3
            rounded-full
            font-heading font-semibold
            text-sm sm:text-base
            flex items-center justify-center
            gap-2
            transition-all duration-300
            hover:scale-105 hover:bg-[#1a54d9]
          ">
            Schedule Demo
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>

          <button className="
            group
            border border-[#04b06e]
            text-[#04b06e]
            px-5 sm:px-6 py-2.5 sm:py-3
            rounded-full
            font-heading font-semibold
            text-sm sm:text-base
            flex items-center justify-center
            gap-2
            transition-all duration-300
            hover:bg-[#04b06e] hover:text-white hover:scale-105
          ">
            Explore Services
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Info Row */}
        <div className="
          flex flex-col sm:flex-row
          gap-3 sm:gap-6
          mt-6 md:mt-8
          text-xs sm:text-sm
          text-gray-700
        ">
          <p>
            <IoShieldCheckmarkOutline className="inline mr-1 text-[#04b06e]" />
            Trusted by 500+ institutions
          </p>
          <p>
            <IoBagCheckOutline className="inline mr-1 text-[#f86c09]" />
            Real project delivery
          </p>
          <p>
            <RiRobot3Line className="inline mr-1 text-[#1c63f6]" />
            AI-driven solutions
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full md:w-1/2 flex flex-col gap-3 relative z-10">

        {List.map((item, index) => (
          <div
            key={index}
            className="
              flex items-start sm:items-center
              gap-3 sm:gap-4
              rounded-2xl
              p-4 sm:p-5
              shadow-sm hover:shadow-md
              transition-all duration-300
              text-white
            "
            style={{ backgroundColor: item.bg }}
          >
            <div
              className="
                text-xl sm:text-2xl
                bg-white
                p-3 sm:p-4
                rounded-xl
                flex-shrink-0
              "
              style={{ color: item.bg }}
            >
              {item.logo}
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-heading font-semibold mb-1">
                {item.heading}
              </h3>
              <p className="text-xs sm:text-sm text-white/90">
                {item.text}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Hero;