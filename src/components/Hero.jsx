import React from "react";
import content from "../data/content.json";

function Hero() {
  const { backgroundImage, circleText, description, headline, subHeadline } =
    content.hero;

  return (
    <div className="relative h-auto md:h-[85vh] rounded-3xl overflow-hidden">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Modern Kitchen Interior"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Rotating Circle */}
      <div className="absolute top-8 left-8 sm:top-6 sm:left-6 md:top-4 md:left-4">
        <div className="relative w-20 h-20 sm:w-16 sm:h-16 md:w-12 md:h-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 sm:w-12 sm:h-12 bg-[#e8e5e0]/80 rounded-full flex items-center justify-center">
              <span className="text-[#262626] text-sm sm:text-xs">⌂</span>
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
              <text fill="#e8e5e0" fontSize="5">
                <textPath href="#circle">{circleText}</textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* Description: Top Right */}
      <div className="absolute top-8 right-8 max-w-[200px] sm:max-w-[250px] md:max-w-[300px] sm:top-6 sm:right-6 sm:max-w-sm">
        <p className="text-[#e8e5e0] text-xs sm:text-sm md:text-base text-right leading-relaxed break-words">
          Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>

      {/* Headline: Bottom Left */}
      <div className="absolute bottom-8 left-8 sm:bottom-6 sm:left-6 md:bottom-4 md:left-4 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2 leading-tight">
          {headline}
        </h1>
        <div className="flex flex-col">
          <span className="text-xl sm:text-2xl md:text-3xl italic">
            {subHeadline.italicText}
          </span>
          <span className="text-2xl sm:text-4xl md:text-5xl font-semibold">
            {subHeadline.boldText}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
