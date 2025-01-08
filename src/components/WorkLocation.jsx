import React from "react";
import content from "../data/content.json";

function WorkLocation() {
  const {
    heading,
    description,
    buttonText,
    buttonLink,
    mapImage,
    projectInfo,
  } = content.workLocation;

  return (
    <div className="container mx-auto px-4 py-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* First Column: Heading and Text */}
        <div>
          <h2 className="text-4xl md:text-5xl mb-4 md:mb-8">{heading}</h2>
          <p className="text-[#ACA296] text-lg mb-4 md:mb-8">{description}</p>
          <a
            href={buttonLink}
            className="font-semibold inline-flex items-center text-xl md:text-2xl text-[#262626] hover:text-[#414d43]"
          >
            {buttonText}
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* Second Column: Map and Project Info */}
        <div className="relative mt-8 md:mt-0">
          <div
            className="bg-no-repeat bg-cover w-full aspect-[2/1]"
            style={{
              backgroundImage: `url(${mapImage})`,
            }}
          ></div>

          <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 bg-[#262626] text-white p-3 md:p-4 rounded-lg flex items-center space-x-4 w-[80%] sm:w-[65%] md:w-auto">
            <img
              src={projectInfo.projectImage}
              alt="Project Preview"
              width={80}
              height={56}
              className="rounded"
            />
            <div className="break-words whitespace-normal">
              <p className="text-lg">{projectInfo.projectCount}</p>
              <p className="text-md text-[#ACA296] leading-tight">
                {projectInfo.projectLocation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkLocation;
