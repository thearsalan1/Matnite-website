import React from "react";

const Card = ({ card, isActive }) => {
  return (
    <div
      className={`
        w-[280px] md:w-[320px] h-[420px]
        rounded-3xl overflow-hidden
        transition-all duration-500
        ${isActive ? "shadow-2xl" : "shadow-md"}
      `}
      style={{
        backgroundColor: `${card.color}10`,
        border: `1px solid ${card.color}30`,
      }}
    >
      {/* BIG IMAGE */}
      <div className="w-full h-[70%] overflow-hidden">
        <img
          src={card.image}
          alt={card.name}
          className={`
            w-full h-full object-cover
            transition-all duration-500
            ${isActive ? "scale-100 blur-0" : "scale-110 blur-sm opacity-70"}
          `}
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col items-center text-center">
        <h2 className="text-xl font-heading font-semibold text-gray-900">
          {card.name}
        </h2>
        <p
          className="text-sm mt-1 font-medium"
          style={{ color: card.color }}
        >
          {card.role}
        </p>
      </div>
    </div>
  );
};

export default Card;
