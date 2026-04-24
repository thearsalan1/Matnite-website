import React from "react";
import { FaArrowRight, FaChartBar } from "react-icons/fa";
import {
  IoBagCheckOutline,
  IoCodeSlash,
  IoShieldCheckmarkOutline,
} from "react-icons/io5";
import { RiRobot3Line } from "react-icons/ri";
import { GiGraduateCap } from "react-icons/gi";

const List = [
  {
    heading: "AI solutions",
    text: "Intelligent AI products and services to transform your business operations and drive growth.",
    logo: <RiRobot3Line />,
    bg: "#1c63f6",
  },
  {
    heading: "CRM & ERP systems",
    text: "Customized CRM and ERP solutions to streamline your business processes and enhance efficiency.",
    logo: <FaChartBar />,
    bg: "#04b06e",
  },
  {
    heading: "Internships",
    text: "Hands-on internship to gain real-world experience and industry exposure.",
    logo: <IoBagCheckOutline />,
    bg: "#f86c09",
  },
  {
    heading: "DIY Tech projects",
    text: "Build real-world projects and sharpen your practical tech skills.",
    logo: <IoCodeSlash />,
    bg: "#1c63f6",
  },
  {
    heading: "Coding for coders",
    text: "Fun interactive coding classes for beginners to advanced learners.",
    logo: <GiGraduateCap />,
    bg: "#04b06e",
  },
];

const Home = () => {
  return (
    <section className="w-[90%] mx-auto my-10 bg-white rounded-3xl p-10 flex flex-col md:flex-row gap-10 relative shadow-lg shadow-orange-500/40">
      {/* decoration */}
      <div
        className="absolute top-[-50px] right-[-50px] w-[300px] h-[300px] 
bg-[#04b06e] opacity-30 blur-[120px] rounded-full pointer-events-none"
      ></div>
      <div
        className="absolute top-[-50px] left-[-20px] w-[300px] h-[300px] 
bg-[#1c63f6] opacity-30 blur-[120px] rounded-full pointer-events-none"
      ></div>

      {/* LEFT */}
      <div className="w-full md:w-1/2">
        <div
          className="border border-[#04b06e]/30 bg-[#04b06e]/10 text-[#04b06e] 
        px-4 py-1.5 rounded-full text-sm font-heading font-semibold w-fit mb-10"
        >
          India's fastest growing AI Tech company
        </div>

        <h1 className="text-5xl font-heading font-semibold tracking-tight leading-tight mb-5 capitalize">
          Powering <span className="text-[#04b06e]">Businesses &</span>
          <br />
          Learners with innovative <br />
          <span className="text-[#1c63f6]">tech solutions.</span>
        </h1>

        <p className="text-sm font-sans text-gray-700 leading-relaxed tracking-tight mb-10">
          We build powerful tech solutions for businesses and institutions. From
          custom <span className="text-[#1c63f6]">CRM & ERP systems</span>{" "}
          <span className="text-[#04b06e]">to real-life industry projects</span>
          , hands-on <span className="text-[#f86c09]">internships</span>, fun{" "}
          <span className="text-[#1c63f6]">coding classes</span> for coder,{" "}
          <span className="text-[#f86c09]">DIY tech projects</span>, and
          intelligent AI products — everything under one roof.
        </p>

        <div className="flex gap-5 flex-wrap">
          <button
            className="bg-[#1c63f6] text-white px-6 py-2.5 rounded-full 
          font-heading font-semibold hover:bg-[#1a54d9] transition"
          >
            Schedule Demo <FaArrowRight className="inline-block ml-2" />
          </button>

          <button
            className="border border-[#04b06e] text-[#04b06e] px-6 py-2.5 
          rounded-full font-heading font-semibold hover:bg-[#04b06e] 
          hover:text-white transition"
          >
            Schedule Demo <FaArrowRight className="inline-block ml-2" />
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-6 mt-10 text-xs text-gray-700">
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
      <div className="w-full md:w-1/2 flex flex-col gap-1">
        {List.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 rounded-2xl p-4 shadow-sm hover:shadow-md transition text-white"
            style={{ backgroundColor: item.bg }}
          >
            <div
              className="text-3xl bg-white p-4 rounded-2xl"
              style={{ color: item.bg }}
            >
              {item.logo}
            </div>

            <div>
              <h3 className="text-lg font-heading font-semibold mb-1">
                {item.heading}
              </h3>
              <p className="text-sm text-white/90">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
