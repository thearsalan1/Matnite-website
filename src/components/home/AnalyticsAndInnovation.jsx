import React, { useRef } from "react";
import { FaBook, FaArrowLeft, FaArrowRight, FaRegLightbulb } from "react-icons/fa";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { CiMicrochip } from "react-icons/ci";
import { GiGraduateCap } from "react-icons/gi";
import { IoBagOutline, IoCodeSlash } from "react-icons/io5";
import { BsStars } from "react-icons/bs";

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

const Analytics = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 py-16 px-4 md:px-10">

      {/* LEFT SECTION */}
      <section className="w-full lg:w-1/2 p-6 md:p-8 bg-white rounded-3xl flex flex-col items-center gap-6 relative overflow-hidden shadow-md shadow-green-500/30">

        <div className="absolute top-[-50px] left-[-50px] w-[200px] h-[200px] bg-[#1c63f6] opacity-10 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-50px] right-[-50px] w-[200px] h-[200px] bg-[#04b06e] opacity-10 blur-[100px] rounded-full" />

        <h1 className="text-2xl md:text-4xl font-bold text-center font-heading tracking-tight">
          Compliance & Analytics
        </h1>

        <p className="text-gray-600 text-center max-w-md text-sm md:text-base">
          Stay compliant and make{" "}
          <span className="matOrange">data-driven decisions</span> with our{" "}
          <span className="matBlue">advanced reporting suite</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 w-full mt-5">

          <div className="flex-1 p-5 md:p-6 rounded-2xl transition hover:-translate-y-2 hover:shadow-xl"
            style={{
              backgroundColor: "rgba(28, 99, 246, 0.06)",
              border: "1px solid rgba(28, 99, 246, 0.2)",
            }}
          >
            <div className="w-fit rounded-xl p-4 mb-4 bg-blue-500/20 text-blue-600">
              <FaBook size={24} />
            </div>

            <h2 className="text-base md:text-lg font-semibold font-heading mb-2">
              DEB-Compliant Software
            </h2>

            <p className="text-sm text-gray-600">
              Fully compliant with Department of Education Board regulations.
            </p>
          </div>

          <div className="flex-1 p-5 md:p-6 rounded-2xl transition hover:-translate-y-2 hover:shadow-xl"
            style={{
              backgroundColor: "rgba(4, 176, 110, 0.06)",
              border: "1px solid rgba(4, 176, 110, 0.2)",
            }}
          >
            <div className="w-fit rounded-xl p-4 mb-4 bg-green-500/20 text-green-600">
              <FaBook size={24} />
            </div>

            <h2 className="text-base md:text-lg font-semibold font-heading mb-2">
              Smart Reporting System
            </h2>

            <p className="text-sm text-gray-600">
              Generate insights and analytics for better decisions.
            </p>
          </div>

        </div>
      </section>

      {/* RIGHT SECTION */}
      <section className="w-full lg:w-1/2 p-6 md:p-8 bg-white rounded-3xl shadow-md shadow-blue-500/30 relative overflow-hidden">

        <div className="px-4 py-2 bg-blue-50 text-blue-600 text-sm rounded-full font-semibold flex items-center gap-2 w-fit mx-auto mb-3">
          <MdOutlineSettingsApplications size={18} />
          AI-Powered Products
        </div>

        <h1 className="text-2xl md:text-4xl font-bold text-center font-heading mb-4 text-gray-700">
          Intelligent Innovations
        </h1>

        <p className="text-gray-600 text-center mb-6 text-sm md:text-base">
          Extend your platform with{" "}
          <span className="matRed">AI</span> &{" "}
          <span className="matGreen">automation</span>.
        </p>

        {/* ARROWS */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-white shadow hover:scale-110 transition"
        >
          <FaArrowLeft size={14} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-white shadow hover:scale-110 transition"
        >
          <FaArrowRight size={14} />
        </button>

        {/* SCROLL AREA */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-6"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 w-[260px] md:w-[280px] p-5 md:p-6 rounded-2xl transition hover:-translate-y-2 hover:shadow-xl"
              style={{
                backgroundColor: `${card.color}10`,
                border: `1px solid ${card.color}30`,
              }}
            >
              <div
                className="w-fit p-4 rounded-xl mb-4"
                style={{
                  backgroundColor: `${card.color}20`,
                  color: card.color,
                }}
              >
                {React.cloneElement(card.icon, { size: 24 })}
              </div>

              <h3 className="text-base md:text-lg font-semibold font-heading mb-2">
                {card.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
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