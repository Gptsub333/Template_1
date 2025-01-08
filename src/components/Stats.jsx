import React from "react";
import content from "../data/content.json";

function Stats() {
  const { introText, statsData, description } = content.stats;

  return (
    <div className="container mx-auto px-4 sm:px-6 py-10">
      {/* Intro Text */}
      <p className="text-2xl mb-16 max-w-2xl font-semibold text-center">
        <span className="text-[#ACA296]">We are a team of entrepreneurs</span>{" "}
        {introText}
      </p>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center text-center">
        {/* Stats Data */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-lg text-[#ACA296] mb-2">{stat.label}</p>
              <p className="text-4xl sm:text-6xl font-semibold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="px-4 sm:px-6 py-8 text-center">
          <p className="text-[#ACA296] text-lg max-w-lg mx-auto">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
