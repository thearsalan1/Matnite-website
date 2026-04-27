import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { CiMicrochip } from "react-icons/ci";
import { GiGraduateCap } from "react-icons/gi";
import { IoBagOutline, IoCodeSlash } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

const cards = [
  {
    icon: <CiMicrochip size={28} />,
    title: "CRM & ERP Solutions",
    description:
      "Custom CRM and ERP systems to automate operations and scale efficiently.",
    color: "#f86c09",
  },
  {
    icon: <GiGraduateCap size={28} />,
    title: "Real Life Projects",
    description:
      "Industry-level projects including web apps, AI tools, and automation systems.",
    color: "#04b06e",
  },
  {
    icon: <IoBagOutline size={28} />,
    title: "Internship Programs",
    description:
      "Hands-on internships with real-world exposure in Web Dev and AI.",
    color: "#1c63f6",
  },
  {
    icon: <IoCodeSlash size={28} />,
    title: "Coding for Coders",
    description:
      "Interactive coding programs from basics to advanced development.",
    color: "#e31e23",
  },
  {
    icon: <FaRegLightbulb size={28} />,
    title: "DIY Tech Projects",
    description:
      "Build IoT devices, robotics kits, and innovative tech solutions.",
    color: "#1c63f6",
  },
  {
    icon: <BsStars size={28} />,
    title: "AI Innovations",
    description:
      "AI-powered products for automation, safety, and smart systems.",
    color: "#04b06e",
  },
];

const hexToRGBA = (hex, opacity) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const Expertise = () => {
  return (
    <div className="relative w-full flex flex-col items-center bg-gray-50 py-10 gap-8 overflow-hidden">
      {/* Balanced Background Glow */}
      <div className="absolute top-10 left-[-50px] w-[300px] h-[300px] bg-[#1c63f6] opacity-20 blur-[100px] rounded-full" />
      <div className="absolute top-10 right-[0px] w-[300px] h-[300px] bg-[#04b06e] opacity-20 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-[30%] w-[300px] h-[300px] bg-[#f86c09] opacity-20 blur-[120px] rounded-full" />
      <div
        className="
    absolute 
    top-50 
    left-1/2 
    -translate-x-1/2 
    -translate-y-1/2
    w-[350px] h-[350px]
    bg-gray-300
    opacity-10
    blur-[140px]
    rounded-full
    z-0
    pointer-events-none
  "
      />

      {/* Badge */}
      <div className="text-sm font-semibold py-2 px-4 rounded-full bg-blue-50 text-blue-600 flex items-center gap-2">
        <HiMiniUserGroup size={18} />
        Our Expertise
      </div>

      {/* Heading */}
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold font-heading tracking-tight leading-tight">
          <span className="matOrange">Powerful</span> Tech Solutions
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold font-heading mt-2">
          For <span className="matBlue">Business</span> &{" "}
          <span className="matGreen">Future</span>
        </h2>
      </div>

      {/* Subtext */}
      <p className="text-gray-600 text-center max-w-2xl text-base leading-relaxed">
        From enterprise software to hands-on learning — we deliver complete
        technology solutions for modern businesses.
      </p>

      {/*  Auto Scroll Cards */}
      <div className="relative overflow-hidden w-[90%] mx-auto">
        {/* LEFT FADE */}
        <div
          className="
  pointer-events-none absolute left-0 top-0 h-full z-10
  w-12 sm:w-16 md:w-20
  bg-gradient-to-r from-gray-50 to-transparent
"
        />

        {/* RIGHT FADE */}
        <div
          className="
  pointer-events-none absolute right-0 top-0 h-full z-10
  w-12 sm:w-16 md:w-20
  bg-gradient-to-l from-gray-50 to-transparent
"
        />

        <div className="flex  w-max gap-10 py-10 animate-card-scroll ">
          {[...cards, ...cards].map((card, index) => (
            <div
              key={index}
              className="
    flex-shrink-0
    w-[340px] md:w-[380px]
    p-8
    rounded-2xl
    transition-all duration-300
    hover:-translate-y-3
    hover:shadow-2xl
    flex flex-col justify-between
  "
              style={{
                backgroundColor: hexToRGBA(card.color, 0.07),
                border: `1px solid ${hexToRGBA(card.color, 0.15)}`,
              }}
            >
              {/* Icon */}
              <div
                className="w-fit p-4 rounded-xl mb-5"
                style={{
                  backgroundColor: hexToRGBA(card.color, 0.15),
                  color: card.color,
                }}
              >
                {React.cloneElement(card.icon, { size: 32 })}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold mb-3 font-heading text-gray-900 leading-snug">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed">
                {card.description}
              </p>

              {/* Button */}
              <button
                className="
      group
      mt-6
      inline-flex
      items-center
      gap-2
      text-white
      py-3 px-5
      rounded-full
      text-sm font-semibold
      transition-all duration-300
      hover:scale-105
    "
                style={{ backgroundColor: card.color }}
              >
                Learn More
                <FaArrowRight
                  className="
        opacity-0
        -translate-x-2
        transition-all duration-300
        group-hover:opacity-100
        group-hover:translate-x-0
      "
                  size={14}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
