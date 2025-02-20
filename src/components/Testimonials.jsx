import React, { useState } from "react";
import content from "../data/content.json";

function Testimonials() {
  const { sectionHeading, subHeading, testimonialsList } = content.testimonials;
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonialsList.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length
    );
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Subheading */}
      <h3 className="text-lg md:text-xl text-[#ACA296] mb-4 text-center">
        {subHeading}
      </h3>

      <div className="relative">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-6xl font-semibold text-center mb-8">
          {sectionHeading}
        </h2>

        {/* Testimonial Content */}
        <div className="max-w-xl md:max-w-3xl mx-auto mb-12">
          <p className="text-sm md:text-lg text-[#414D43] text-center mb-8">
            {testimonialsList[currentSlide].text}
          </p>

          {/* Testimonial Details */}
          <div className="flex flex-col md:flex-row items-center justify-center">
            {/* Image */}
            <img
              src={testimonialsList[currentSlide].image}
              alt={testimonialsList[currentSlide].name}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover mb-4 md:mb-0 md:mr-4"
            />

            {/* Name and Ratings */}
            <div>
              <div className="flex items-center space-x-1 mb-2 justify-center md:justify-start">
                {[...Array(testimonialsList[currentSlide].rating)].map(
                  (_, i) => (
                    <svg
                      key={i}
                      className="w-4 md:w-5 h-4 md:h-5 text-[#262626]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  )
                )}
              </div>
              <p className="text-lg md:text-xl text-center md:text-left">
                {testimonialsList[currentSlide].name}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-8 md:space-x-16">
          <button
            onClick={prevSlide}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#262626] flex items-center justify-center hover:bg-[#262626] hover:text-white transition-colors duration-300"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#262626] flex items-center justify-center hover:bg-[#262626] hover:text-white transition-colors duration-300"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
