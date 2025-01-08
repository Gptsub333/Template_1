import React from "react";
import content from "../data/content.json";

function Hero() {
  const { backgroundImage, circleText, description, headline, subHeadline } =
    content.hero;

  return (
    <div className="relative h-screen rounded-3xl overflow-hidden">
      <img
        src={backgroundImage}
        alt="Modern Kitchen Interior"
        className="w-full h-full"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute top-8 left-8">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-[#e8e5e0]/80 rounded-full flex items-center justify-center">
              <span className="text-[#262626]">⌂</span>
            </div>
          </div>
          <div className="absolute inset-0 animate-spin-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                id="circle"
                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
                stroke="#e8e5e0"
                strokeWidth="1"
              />
              <text fill="#e8e5e0" fontSize="8">
                <textPath href="#circle">{circleText}</textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute top-20 right-14 max-w-xs">
        <p className="text-[#e8e5e0] text-md">{description}</p>
      </div>

      <div className="absolute bottom-32 left-12 text-white">
        <h1 className="text-7xl font-semibold mb-4">{headline}</h1>
        <div className="flex items-center space-x-4">
          <span className="text-5xl italic">{subHeadline.italicText}</span>
          <span className="text-7xl font-semibold">{subHeadline.boldText}</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
