import React from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  IoBagCheckOutline,
  IoShieldCheckmarkOutline,
} from "react-icons/io5";
import { RiRobot3Line } from "react-icons/ri";

const Hero = ({ List }) => {
  return (
    <>
      <section
        className="
        w-[90%] mx-auto my-6 md:my-10 
        bg-white rounded-3xl 
        p-6 md:p-10 
        flex flex-col md:flex-row 
        gap-8 md:gap-10 
        relative 
        shadow-lg shadow-orange-500/40
      "
      >
        {/* decoration */}
        <div
          className="
          absolute top-[-50px] right-[0px] 
          w-[180px] md:w-[300px] h-[180px] md:h-[300px]
          bg-[#04b06e] opacity-20 md:opacity-30 
          blur-[80px] md:blur-[120px] 
          rounded-full pointer-events-none
        "
        ></div>

        <div
          className="
          absolute top-[-50px] left-[0px] 
          w-[180px] md:w-[300px] h-[180px] md:h-[300px]
          bg-[#1c63f6] opacity-20 md:opacity-30 
          blur-[80px] md:blur-[120px] 
          rounded-full pointer-events-none
        "
        ></div>

        {/* LEFT */}
        <div className="w-full md:w-1/2">
          <div
            className="
            border border-[#04b06e]/30 bg-[#04b06e]/10 text-[#04b06e] 
            px-3 md:px-4 py-1 md:py-1.5 
            rounded-full 
            text-xs md:text-sm 
            font-heading font-semibold 
            w-fit mb-6 md:mb-10
          "
          >
            India's fastest growing AI Tech company
          </div>

          <h1
            className="
            text-3xl sm:text-4xl md:text-5xl 
            font-heading font-semibold 
            tracking-tight leading-tight 
            mb-4 md:mb-5 capitalize
          "
          >
            Powering <span className="text-[#04b06e]">Businesses &</span>
            <br />
            Learners with innovative <br />
            <span className="text-[#1c63f6]">tech solutions.</span>
          </h1>

          <p
            className="
            text-sm 
            font-sans text-gray-700 
            leading-relaxed tracking-tight 
            mb-6 md:mb-10
          "
          >
            We build powerful tech solutions for businesses and institutions.
            From custom{" "}
            <span className="text-[#1c63f6]">CRM & ERP systems</span>{" "}
            <span className="text-[#04b06e]">
              to real-life industry projects
            </span>
            , hands-on <span className="text-[#f86c09]">internships</span>, fun{" "}
            <span className="text-[#1c63f6]">coding classes</span> for coder,{" "}
            <span className="text-[#f86c09]">DIY tech projects</span>, and
            intelligent AI products — everything under one roof.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
            <button
              className="
              bg-[#1c63f6] text-white 
              px-5 md:px-6 py-2.5 
              rounded-full 
              text-sm
              font-heading font-semibold 
              hover:bg-[#1a54d9] transition
              w-full sm:w-auto
            "
            >
              Schedule Demo <FaArrowRight className="inline-block ml-2" />
            </button>

            <button
              className="
              border border-[#04b06e] text-[#04b06e] 
              px-5 md:px-6 py-2.5 
              rounded-full 
              text-sm
              font-heading font-semibold 
              hover:bg-[#04b06e] hover:text-white transition
              w-full sm:w-auto
            "
            >
              Schedule Demo <FaArrowRight className="inline-block ml-2" />
            </button>
          </div>

          {/* TRUST ROW */}
          <div
            className="
            flex flex-col sm:flex-row 
            gap-3 sm:gap-6 
            mt-6 md:mt-10 
            text-xs text-gray-700
          "
          >
            <p>
              <IoShieldCheckmarkOutline className="inline mr-1 text-[#04b06e]" />
              Trusted by 500+ institutions & companies
            </p>
            <p>
              <IoBagCheckOutline className="inline mr-1 text-[#f86c09]" />
              Real project delivery
            </p>
            <p>
              <RiRobot3Line className="inline mr-1 text-[#1c63f6]" />
              Innovative AI solutions
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 flex flex-col gap-3 md:gap-1">
          {List.map((item, index) => (
            <div
              key={index}
              className="
              flex items-center gap-3 md:gap-4 
              rounded-2xl p-3 md:p-4 
              shadow-sm hover:shadow-md transition 
              text-white
            "
              style={{ backgroundColor: item.bg }}
            >
              <div
                className="
                text-2xl md:text-3xl 
                bg-white p-3 md:p-4 
                rounded-2xl
              "
                style={{ color: item.bg }}
              >
                {item.logo}
              </div>

              <div>
                <h3 className="text-base md:text-lg font-heading font-semibold mb-1">
                  {item.heading}
                </h3>
                <p className="text-xs md:text-sm text-white/90">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;