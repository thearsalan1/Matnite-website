import React, { useState } from "react";
import Card from "./Cards";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const cards = [
  {
    name: "Arsalan Khan",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    color: "#f86c09",
  },
  {
    name: "Sara Ahmed",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    color: "#04b06e",
  },
  {
    name: "Ali Raza",
    role: "AI Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    color: "#1c63f6",
  },
  {
    name: "Zain Malik",
    role: "Backend Engineer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    color: "#e31e23",
  },
  {
    name: "Hina Noor",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    color: "#1c63f6",
  },
];

const Team = () => {
  const [active, setActive] = useState(2);

  return (
    <section className="w-full py-20">
      <div className="relative w-[90%] mx-auto bg-gray-100 rounded-3xl overflow-hidden py-10 flex flex-col items-center shadow-orange-300 shadow-md">

        {/* SOFT BACKGROUND GLOW */}
        <div className="absolute top-0 left-[-80px] w-[280px] h-[280px] bg-[#1c63f6] opacity-15 blur-[120px] rounded-full" />
        <div className="absolute top-0 right-[-80px] w-[280px] h-[280px] bg-[#04b06e] opacity-15 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#f86c09] opacity-15 blur-[140px] rounded-full" />

        {/* HEADING */}
        <h1 className="text-center text-6xl md:text-7xl font-bold tracking-tight font-heading mb-2 capitalize">
          <span className="matOrange">M</span>a
          <span className="matGreen">t</span>
          <span className="matRed">n</span>it
          <span className="matBlue">e</span>s
        </h1>

        <p className="text-gray-500 text-center mb-5 max-w-xl">
          Meet the people building powerful tech solutions and shaping the future.
        </p>

        {/* CAROUSEL */}
        <div className="relative w-full max-w-6xl h-[520px]">

          {/* LEFT ARROW */}
          <button
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-30 
            bg-white/80 backdrop-blur-md border border-gray-200 
            p-3 rounded-full shadow-md hover:scale-110 transition"
            onClick={() => setActive((prev) => Math.max(prev - 1, 0))}
          >
            <FaArrowLeft />
          </button>

          {/* CARDS */}
          {cards.map((card, idx) => {
            const offset = idx - active;

            return (
              <div
                key={idx}
                className="absolute top-1/2 left-1/2 transition-all duration-500 ease-out"
                style={{
                  transform: `
                    translate(-50%, -50%)
                    translateX(${offset * 300}px)
                    scale(${offset === 0 ? 1 : offset === -1 || offset === 1 ? 0.85 : 0.7})
                  `,
                  opacity:
                    Math.abs(offset) > 2
                      ? 0
                      : offset === 0
                      ? 1
                      : 0.5,
                  filter: offset === 0 ? "blur(0px)" : "blur(2px)",
                  zIndex: 10 - Math.abs(offset),
                }}
              >
                <Card card={card} isActive={offset === 0} />
              </div>
            );
          })}

          {/* RIGHT ARROW */}
          <button
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-30 
            bg-white/80 backdrop-blur-md border border-gray-200 
            p-3 rounded-full shadow-md hover:scale-110 transition"
            onClick={() =>
              setActive((prev) => Math.min(prev + 1, cards.length - 1))
            }
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;