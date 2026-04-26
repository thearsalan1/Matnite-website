import React from "react";
import { FaBook } from "react-icons/fa";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CiMicrochip } from "react-icons/ci";
import { GiGraduateCap } from "react-icons/gi";
import { IoBagOutline, IoCodeSlash } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { useRef } from "react";

const cards = [
  {
    icon: <CiMicrochip />,
    title: "CRM & ERP Solutions",
    description:
      "Custom CRM and ERP systems to automate operations and scale efficiently.",
    color: "#f86c09",
  },
  {
    icon: <GiGraduateCap />,
    title: "Real Life Projects",
    description:
      "Industry-level projects including web apps, AI tools, and automation systems.",
    color: "#04b06e",
  },
  {
    icon: <IoBagOutline />,
    title: "Internship Programs",
    description:
      "Hands-on internships with real-world exposure in Web Dev and AI.",
    color: "#1c63f6",
  },
  {
    icon: <IoCodeSlash />,
    title: "Coding for Coders",
    description:
      "Interactive coding programs from basics to advanced development.",
    color: "#e31e23",
  },
  {
    icon: <FaRegLightbulb />,
    title: "DIY Tech Projects",
    description:
      "Build IoT devices, robotics kits, and innovative tech solutions.",
    color: "#1c63f6",
  },
  {
    icon: <BsStars />,
    title: "AI Innovations",
    description:
      "AI-powered products for automation, safety, and smart systems.",
    color: "#04b06e",
  },
];

const Analytics = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -350 : 350,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 py-20 px-5 md:px-10 ">
      {/* LEFT SECTION */}
      <section className="w-full lg:w-1/2 p-8 bg-white rounded-3xl shadow-sm flex flex-col items-center gap-6 relative overflow-hidden">
        {/* subtle glow */}
        <div className="absolute top-[-50px] left-[-50px] w-[200px] h-[200px] bg-[#1c63f6] opacity-10 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-50px] right-[-50px] w-[200px] h-[200px] bg-[#04b06e] opacity-10 blur-[100px] rounded-full" />

        <h1 className="text-3xl md:text-4xl font-bold text-center font-heading tracking-tight">
          Compliance & Analytics
        </h1>

        <p className="text-gray-600 text-center max-w-md">
          Stay compliant and make data-driven decisions with our advanced
          reporting suite.
        </p>

        {/* CARDS */}
        <div className="flex flex-col sm:flex-row gap-5 w-full mt-5">
          {/* CARD 1 */}
          <div
            className="group flex-1 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            style={{
              backgroundColor: "rgba(28, 99, 246, 0.06)",
              border: "1px solid rgba(28, 99, 246, 0.2)",
            }}
          >
            <div
              className="w-fit rounded-xl p-4 mb-4"
              style={{
                backgroundColor: "rgba(28, 99, 246, 0.15)",
                color: "#1c63f6",
              }}
            >
              <FaBook size={26} />
            </div>

            <h2 className="text-lg font-semibold font-heading mb-2">
              DEB-Compliant Software
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed">
              Fully compliant with Department of Education Board regulations and
              standards.
            </p>
          </div>

          {/* CARD 2 */}
          <div
            className="group flex-1 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            style={{
              backgroundColor: "rgba(4, 176, 110, 0.06)",
              border: "1px solid rgba(4, 176, 110, 0.2)",
            }}
          >
            <div
              className="w-fit rounded-xl p-4 mb-4"
              style={{
                backgroundColor: "rgba(4, 176, 110, 0.15)",
                color: "#04b06e",
              }}
            >
              <FaBook size={26} />
            </div>

            <h2 className="text-lg font-semibold font-heading mb-2">
              Smart Reporting System
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed">
              Generate insights, analytics, and reports to drive better
              decisions.
            </p>
          </div>
        </div>
      </section>

      {/* RIGHT SECTION (unchanged placeholder) */}
      <section className="w-full lg:w-1/2 p-8 bg-white rounded-3xl shadow-sm relative overflow-hidden">

  {/* Badge */}
  <div className="px-4 py-2 bg-blue-50 text-blue-600 text-sm rounded-full font-semibold flex items-center gap-2 w-fit mx-auto mb-3">
    <MdOutlineSettingsApplications size={18} />
    AI-Powered Products
  </div>

  {/* Heading */}
  <h1 className="text-3xl md:text-4xl font-bold text-center font-heading mb-4">
    Intelligent Innovations
  </h1>

  <p className="text-gray-600 text-center mb-8">
    Extend your platform with purpose-built AI and automation products.
  </p>

  {/* 🔥 ARROWS (CENTER LEFT/RIGHT) */}
  <button
    onClick={() => scroll("left")}
    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-md hover:scale-110 transition"
  >
    <FaArrowLeft />
  </button>

  <button
    onClick={() => scroll("right")}
    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-md hover:scale-110 transition"
  >
    <FaArrowRight />
  </button>

  {/* SCROLL AREA */}
  <div
    ref={scrollRef}
    className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth  "
  >
    {cards.map((card, index) => (
      <div
        key={index}
        className="
          w-1/2
          p-6
          rounded-2xl
          flex-shrink-0
          transition-all duration-300
          hover:-translate-y-2
          hover:shadow-xl
        "
        style={{
          backgroundColor: `${card.color}10`,
          border: `1px solid ${card.color}30`,
        }}
      >
        {/* ICON */}
        <div
          className="w-fit p-4 rounded-xl mb-4"
          style={{
            backgroundColor: `${card.color}20`,
            color: card.color,
          }}
        >
          {React.cloneElement(card.icon, { size: 26 })}
        </div>

        {/* TITLE */}
        <h3 className="text-lg font-semibold font-heading mb-2">
          {card.title}
        </h3>

        {/* DESC */}
        <p className="text-sm text-gray-600 leading-relaxed ">
          {card.description}
        </p>
      </div>
    ))}
  </div>
</section>
    </div>
  );
};

export default Analytics;
