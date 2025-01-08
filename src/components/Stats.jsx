import React from "react";
import content from "../data/content.json";

function Stats() {
  const { introText, statsData, description } = content.stats;

  return (
    <div className="container mx-auto px-0 py-20">
      <p className="text-2xl mb-16 max-w-2xl font-semibold">
        <span className="text-[#ACA296]">We are a team of entrepreneurs</span>{" "}
        {introText}
      </p>

      <div className="grid grid-cols-2 gap-8 items-center mb-16 text-left">
        <div className="grid grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <div key={index}>
              <p className="text-lg text-[#ACA296] mb-2">{stat.label}</p>
              <p className="text-6xl font-semibold">{stat.value}</p>
            </div>
          ))}
        </div>
        <div className="container mx-auto px-6 py-8 text-right">
          <div className="flex justify-end">
            <p className="text-[#ACA296] text-lg max-w-lg text-right">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
