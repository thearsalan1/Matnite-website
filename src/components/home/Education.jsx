import React from "react";
import { ImBooks } from "react-icons/im";
import { FaRegLightbulb, FaArrowRight } from "react-icons/fa";
import { IoBagOutline, IoCodeSlash } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { GiGraduateCap } from "react-icons/gi";
import { CiMicrochip } from "react-icons/ci";

const cards = [
  {
    icon: <CiMicrochip />,
    title: "CRM & ERP Solutions",
    description: "Custom CRM and ERP systems to automate operations and scale efficiently.",
    color: "#f86c09",
  },
  {
    icon: <GiGraduateCap />,
    title: "Real Life Projects",
    description: "Industry-level projects including web apps, AI tools, and automation systems.",
    color: "#04b06e",
  },
  {
    icon: <IoBagOutline />,
    title: "Internship Programs",
    description: "Hands-on internships with real-world exposure in Web Dev and AI.",
    color: "#1c63f6",
  },
  {
    icon: <IoCodeSlash />,
    title: "Coding for Coders",
    description: "Interactive coding programs from basics to advanced development.",
    color: "#e31e23",
  },
  {
    icon: <FaRegLightbulb />,
    title: "DIY Tech Projects",
    description: "Build IoT devices, robotics kits, and innovative tech solutions.",
    color: "#1c63f6",
  },
  {
    icon: <BsStars />,
    title: "AI Innovations",
    description: "AI-powered products for automation, safety, and smart systems.",
    color: "#04b06e",
  },
];

const hexToRGBA = (hex, opacity) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const Education = () => {
  return (
    <section className="w-full py-10 md:py-16">
      <div
        className="w-[92%] mx-auto bg-white rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col-reverse md:flex-row gap-8 md:gap-12 min-h-fit md:min-h-[70vh] relative overflow-hidden"
        style={{ boxShadow: "0 8px 40px rgba(28, 99, 246, 0.2)" }}
      >
        {/* Blobs */}
        <div className="absolute top-[100px] left-[100px] w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-[#f86c09] opacity-20 blur-[80px] md:blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute top-10 right-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-[#1c63f6] opacity-20 blur-[80px] md:blur-[100px] rounded-full pointer-events-none" />

        {/* LEFT - Auto Scrolling Cards */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-[70vh] overflow-hidden relative">
          <div className="space-y-4 md:space-y-6 pr-2 md:pr-4 animate-vertical-card-scroll">
            {[...cards, ...cards].map((card, index) => (
              <div
                key={index}
                className="group p-5 md:p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border"
                style={{
                  backgroundColor: hexToRGBA(card.color, 0.06),
                  borderColor: hexToRGBA(card.color, 0.15),
                }}
              >
                <div
                  className="w-fit p-2.5 md:p-3 rounded-xl mb-3 md:mb-4"
                  style={{
                    backgroundColor: hexToRGBA(card.color, 0.15),
                    color: card.color,
                  }}
                >
                  {React.cloneElement(card.icon, { size: 24 })}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">{card.title}</h3>
                <p className="text-gray-600 mt-2 text-xs md:text-sm leading-relaxed">{card.description}</p>
                <button
                  className="mt-4 md:mt-5 flex items-center gap-2 text-white px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all group-hover:gap-3"
                  style={{ backgroundColor: card.color }}
                >
                  Learn More <FaArrowRight size={11} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-5 md:gap-6 text-center">

          {/* Badge */}
          <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 md:px-5 py-2 rounded-full font-semibold text-xs md:text-sm">
            <ImBooks size={15} /> Education ERP Suite
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Complete{" "}
            <span className="text-orange-500">Institution</span>{" "}
            <span className="text-green-600">Management</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xs md:max-w-sm">
            Everything you need to run your institution efficiently — from
            admissions to library management.
          </p>

          {/* Divider */}
          <div className="w-14 md:w-16 h-1 rounded-full bg-orange-400 mx-auto" />

          {/* Stats Row */}
          <div className="flex gap-5 md:gap-8 mt-1 md:mt-2">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-gray-900">500+</span>
              <span className="text-xs text-gray-500 mt-1">Institutions</span>
            </div>
            <div className="w-px bg-gray-200" />
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-gray-900">50k+</span>
              <span className="text-xs text-gray-500 mt-1">Students</span>
            </div>
            <div className="w-px bg-gray-200" />
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-gray-900">98%</span>
              <span className="text-xs text-gray-500 mt-1">Satisfaction</span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="mt-1 md:mt-2 px-6 md:px-8 py-2.5 md:py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold text-sm transition-all flex items-center gap-2">
            Get Started <FaArrowRight size={12} />
          </button>

        </div>
      </div>
    </section>
  );
};

export default Education;