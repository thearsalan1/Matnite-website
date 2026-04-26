import React from "react";
import { BsStars } from "react-icons/bs";
import { CiMicrochip } from "react-icons/ci";
import { FaRegLightbulb, FaArrowRight } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { IoBagOutline, IoCodeSlash } from "react-icons/io5";
import { MdOutlineSettingsApplications } from "react-icons/md";

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

// helper
const hexToRGBA = (hex, opacity) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const Application = () => {
  return (
    <section className="w-full py-20 px-5 md:px-10 bg-gray-50 relative overflow-hidden">

      {/* 🌈 Background Glow */}
      <div className="absolute top-[-50px] left-[-50px] w-[300px] h-[300px] bg-[#1c63f6] opacity-20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-50px] right-[-50px] w-[300px] h-[300px] bg-[#04b06e] opacity-20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-5">

        {/* Badge */}
        <div className="px-4 py-2 bg-blue-50 text-blue-600 text-sm rounded-full font-semibold flex items-center gap-2">
          <MdOutlineSettingsApplications size={18} />
          Application Automation
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center font-heading leading-tight">
          <span className="matBlue">Intelligent</span>{" "}
          Application{" "}
          <span className="matRed">Management</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 text-center max-w-xl text-base">
          Streamline your workflows with automation — from form handling to smart process management.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">

          {cards.map((card, index) => (
            <div
              key={index}
              className="
                group
                p-6
                rounded-2xl
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                backdrop-blur-md
              "
              style={{
                backgroundColor: hexToRGBA(card.color, 0.06),
                border: `1px solid ${hexToRGBA(card.color, 0.2)}`,
              }}
            >

              {/* ICON */}
              <div
                className="w-14 h-14 flex items-center justify-center rounded-xl mb-5 transition-all duration-300"
                style={{
                  backgroundColor: hexToRGBA(card.color, 0.15),
                  color: card.color,
                }}
              >
                {React.cloneElement(card.icon, { size: 26 })}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold font-heading mb-3 text-gray-900">
                {card.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {card.description}
              </p>

              {/* BUTTON */}
              <button
                className="
                  group/btn
                  inline-flex items-center gap-2
                  text-sm font-semibold
                  transition-all duration-300
                "
                style={{ color: card.color }}
              >
                Learn More

                <FaArrowRight
                  className="
                    opacity-0
                    -translate-x-2
                    transition-all duration-300
                    group-hover/btn:opacity-100
                    group-hover/btn:translate-x-0
                  "
                  size={14}
                />
              </button>

              {/* HOVER GLOW */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl pointer-events-none"
                style={{
                  boxShadow: `0 0 40px ${hexToRGBA(card.color, 0.25)}`,
                }}
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Application;