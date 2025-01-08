import React from "react";
import content from "../data/content.json";

const Footer = () => {
  const { heading, subHeading, links, copyright } = content.footer;

  return (
    <footer className="relative bg-white text-[#262626]">
      <div className="container mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-6xl font-semibold mb-6">
            <span className="font-serif italic">Let's</span> {heading}
          </h2>
          <a
            href={`mailto:${subHeading}`}
            className="text-xl flex items-center hover:text-[#414d43] transition-colors duration-300"
          >
            <svg
              className="w-6 h-6 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            <span className="text-xl mx-2">{subHeading}</span>
          </a>
        </div>

        {/* Add vertical space */}
        <div className="h-60"></div>

        {/* Bottom Section */}
        <div className="relative flex flex-col">
          {/* Footer Links Section */}
          <div
            className="absolute bottom-0 right-0 flex gap-12 mb-4 mr-20"
            style={{ paddingRight: 40 }}
          >
            {links.map((linkCategory, index) => (
              <div key={index}>
                <h3 className="text-[#ACA296] text-lg mb-2">
                  {linkCategory.category}
                </h3>
                <ul className="space-y-2">
                  {linkCategory.items.map((item, i) => (
                    <li key={i}>
                      <a
                        href={item.href}
                        className="text-lg hover:text-[#414d43] transition-colors duration-300 font-semibold"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Copyright Section */}
          <div className="absolute bottom-0 left-0 mb-4 ml-6">
            <p className="text-lg text-[#ACA296]">{copyright}</p>
          </div>

          {/* Go Up Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute bottom-0 right-0 w-12 h-12 border-black border text-black rounded-full flex items-center justify-center hover:bg-[#414d43] transition-colors duration-300 mb-4 mr-6"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
