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
    <div className="container mx-auto px-0 py-20">
      <div className="grid grid-cols-2 gap-16 items-center">
        {/* First Column: Heading and Text */}
        <div>
          <h2 className="text-5xl mb-8">{heading}</h2>
          <p className="text-[#ACA296] text-lg mb-8">{description}</p>
          <a
            href={buttonLink}
            className="font-semibold inline-flex items-center text-2xl text-[#262626] hover:text-[#414d43]"
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
        <div className="relative">
          <div
            className="bg-no-repeat bg-cover w-full aspect-[2/1]"
            style={{
              backgroundImage: `url(${mapImage})`,
            }}
          ></div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#262626] text-white p-4 rounded-lg flex items-center space-x-4">
            <img
              src={projectInfo.projectImage}
              alt="Project Preview"
              width={96}
              height={64}
              className="rounded"
            />
            <div>
              <p className="text-lg">{projectInfo.projectCount}</p>
              <p className="text-md text-[#ACA296]">
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
