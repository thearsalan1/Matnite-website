import React from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="w-full relative overflow-hidden py-28 flex items-center justify-center ">

      {/* 🌈 SOFT MATNITE GLOW */}
      <div className="absolute left-[-80px] top-0 w-[300px] h-[300px] bg-[#f86c09] opacity-20 blur-[120px] rounded-full" />
      <div className="absolute right-[-80px] top-[20%] w-[300px] h-[300px] bg-[#1c63f6] opacity-20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-100px] left-[30%] w-[300px] h-[300px] bg-[#04b06e] opacity-20 blur-[140px] rounded-full" />

      {/* ✨ MAIN CARD */}
      <div className="relative z-10 max-w-3xl w-full mx-6 p-10 md:p-14 rounded-3xl bg-white shadow-xl border border-gray-100 text-center">

        {/* 🔥 BADGE */}
        <div className="inline-block mb-4 px-4 py-2 rounded-full text-sm font-semibold 
          bg-gradient-to-r from-[#f86c09]/10 to-[#1c63f6]/10 text-gray-700 border border-gray-200">
          🚀 Start Your Growth Journey
        </div>

        {/* 🎯 HEADING */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
          Transform Your Institution{" "}
          <span className="bg-gradient-to-r from-[#f86c09] via-[#1c63f6] to-[#04b06e] bg-clip-text text-transparent">
            Today
          </span>
        </h1>

        {/* 📝 SUBTEXT */}
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Start your journey with MATNITE. Book a personalized demo and see how
          it simplifies operations, boosts efficiency, and scales your institution.
        </p>

        {/* 🚀 CTA BUTTON */}
        <button className="
          group relative inline-flex items-center gap-3
          px-8 py-4 rounded-xl font-semibold text-white
          bg-gradient-to-r from-[#f86c09] via-[#1c63f6] to-[#04b06e]
          hover:scale-105 transition-all duration-300 shadow-lg
        ">
          Book Your Free Demo
          <FaArrowRight className="group-hover:translate-x-1 transition" />

          {/* glow */}
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#f86c09] via-[#1c63f6] to-[#04b06e] blur-xl opacity-30 group-hover:opacity-50 transition -z-10"></span>
        </button>

        {/* ✅ FEATURES */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 text-sm text-gray-600">

          <div className="flex items-center gap-2">
            <FaCheck className="text-[#04b06e]" />
            <span>30-minute session</span>
          </div>

          <div className="flex items-center gap-2">
            <FaCheck className="text-[#1c63f6]" />
            <span>No credit card required</span>
          </div>

          <div className="flex items-center gap-2">
            <FaCheck className="text-[#f86c09]" />
            <span>Personalized walkthrough</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;