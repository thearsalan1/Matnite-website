import React, { useState, useEffect } from "react";

const steps = [
  {
    step: "Step 01",
    ac: "#e05038",
    title: "All platforms in one",
    desc: "Replace 10+ disconnected tools with a single, unified solution that actually works.",
    icon: (color) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: 20, height: 20 }}
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    step: "Step 02",
    ac: "#16a34a",
    title: "Seamless integration",
    desc: "Effortlessly connect your existing systems and streamline every workflow.",
    icon: (color) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: 20, height: 20 }}
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    step: "Step 03",
    ac: "#2563eb",
    title: "Scalable solutions",
    desc: "Built to grow alongside your business — from startup to enterprise.",
    icon: (color) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: 20, height: 20 }}
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    step: "Step 04",
    ac: "#d97706",
    title: "24/7 reliable support",
    desc: "Our team is always here when you need us, any time, any day.",
    icon: (color) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: 20, height: 20 }}
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

const blobColors = [
  { primary: "#f86c09", secondary: "#e05038" },
  { primary: "#16a34a", secondary: "#22c55e" },
  { primary: "#2563eb", secondary: "#1c63f6" },
  { primary: "#d97706", secondary: "#f59e0b" },
];

const WhyUs = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const { primary, secondary } = blobColors[active];

  return (
    <section className="w-full flex flex-col lg:flex-row  shadow-red-300 shadow-md">
      {/* LEFT */}
      <div className="w-full lg:w-1/2 px-6 md:px-8 py-8 bg-amber-50 relative flex items-center justify-center overflow-hidden min-h-[220px]">
        <div className="absolute top-[40px] left-[20px] w-[180px] h-[180px] bg-[#f86c09] opacity-10 blur-[70px] rounded-full" />
        <div className="absolute bottom-[30px] right-0 w-[160px] h-[160px] bg-[#1c63f6] opacity-10 blur-[70px] rounded-full" />

        <span className="hidden md:block absolute top-[5%] left-[2%] text-9xl font-bold text-[#f86c09] opacity-10 leading-none select-none">
          Why
        </span>
        <span className="hidden md:block absolute top-[38%] left-[12%] text-9xl font-bold text-gray-800 opacity-[0.06] leading-none select-none">
          Choose
        </span>
        <span className="hidden md:block absolute bottom-[5%] right-[2%] text-9xl font-bold text-green-700 opacity-[0.06] leading-none select-none">
          Us ??
        </span>

        <div className="text-center z-10">
          <h2 className="text-3xl md:text-7xl font-semibold text-[#3d3322] font-heading">
            Why <span className="matOrange font-bold">Matnite</span> ?
          </h2>
          <p className="mt-2 text-xs tracking-widest uppercase matGreen font-semibold ">
            The smarter way to work
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/2 bg-gray-50 px-6 md:px-10 py-8 flex items-center justify-center relative overflow-hidden">
        {/* Dynamic blobs */}
        <div
          className="absolute top-[-40px] right-[-40px] w-[200px] h-[200px] rounded-full blur-[80px] transition-all duration-700 opacity-20 pointer-events-none"
          style={{ backgroundColor: primary }}
        />
        <div
          className="absolute bottom-[-30px] left-[-30px] w-[160px] h-[160px] rounded-full blur-[70px] transition-all duration-700 opacity-15 pointer-events-none"
          style={{ backgroundColor: secondary }}
        />
        <div
          className="absolute top-[40%] left-[30%] w-[120px] h-[120px] rounded-full blur-[60px] transition-all duration-700 opacity-10 pointer-events-none"
          style={{ backgroundColor: primary }}
        />

        <div className="flex flex-col w-full ml-10 relative z-10">
          {steps.map(({ step, ac, title, desc, icon }, i) => {
            const isActive = active === i;
            return (
              <div
                key={i}
                className="flex items-start gap-4 cursor-pointer"
                onClick={() => setActive(i)}
              >
                {/* spine */}
                <div className="flex flex-col items-center flex-shrink-0 w-[46px]">
                  <div
                    className="w-[46px] h-[46px] rounded-full flex items-center justify-center border-2 transition-all duration-500"
                    style={{
                      borderColor: isActive ? ac : "#e0e0e0",
                      background: isActive ? ac : "#fff",
                    }}
                  >
                    {icon(isActive ? "#fff" : "#ccc")}
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="w-[2px] flex-1 min-h-[28px] transition-colors duration-500"
                      style={{ background: isActive ? ac : "#e0e0e0" }}
                    />
                  )}
                </div>

                {/* text */}
                <div className="pt-2 pb-6 flex-1">
                  <p
                    className=" font-medium tracking-widest uppercase mb-1 transition-colors duration-500"
                    style={{ color: isActive ? ac : "#bbb" }}
                  >
                    {step}
                  </p>
                  <h3
                    className="text-[15px] font-medium mb-1 transition-colors duration-500"
                    style={{ color: isActive ? "#1a1a1a" : "#bbb" }}
                  >
                    {title}
                  </h3>
                  <p className="text-[12px] text-gray-400 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
