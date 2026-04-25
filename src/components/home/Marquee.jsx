import React from "react";

const items = [
  "500+ Institutions",
  "50,000+ Learners",
  "1000+ Projects",
  "200+ Mentors",
  "AI Powered",
];

const Marquee = () => {
  return (
    <div className="relative overflow-hidden w-full mx-auto py-6">

      {/* LEFT FADE */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-100 bg-gradient-to-r from-[#dddedf] to-transparent z-10" />

      {/* RIGHT FADE */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-100 bg-gradient-to-l from-[#dddedf] to-transparent z-10" />

      {/* Scrolling */}
      <div className="flex w-max animate-marquee gap-16">

        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="marquee-item px-6 py-3 bg-white rounded-xl shadow text-lg font-semibold text-gray-700 marquee-item font-[var(--font-marquee)]"
          >
            {item}
          </div>
        ))}

      </div>
    </div>
  );
};

export default Marquee;