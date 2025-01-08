import React from "react";
import content from "../data/content.json";

function Services() {
  const { heading, buttonText, servicesList } = content.services;

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Heading and Button */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 space-y-4 md:space-y-0">
        <h2 className="text-4xl md:text-6xl font-semibold text-center md:text-left">
          {heading}
        </h2>
        <button className="text-lg px-6 py-2 bg-[#262626] text-white rounded-2xl hover:bg-[#414d43]">
          {buttonText}
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {servicesList.map((service, index) => (
          <div key={index} className="group relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover"
              />
              {index === 0 && (
                <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8">
                  {/* Updated Button Styling */}
                  <div className="bg-white/80 rounded-full w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center group-hover:bg-[#262626] transition-colors duration-300 border-2 border-[#262626] shadow-lg hover:shadow-2xl">
                    <span className="text-sm sm:text-md text-[#262626] group-hover:text-white font-semibold tracking-wide">
                      VIEW PORTFOLIO
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-4 text-center md:text-left">
              <h3 className="text-lg sm:text-xl">{service.title}</h3>
              <p className="text-sm sm:text-lg text-[#ACA296]">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
