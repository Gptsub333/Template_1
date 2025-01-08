import React from "react";
import content from "../data/content.json";

function Navbar() {
  const { links, buttons } = content.navbar;

  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <div className="flex text-lg items-center space-x-8 font-semibold">
        {links.map((link, index) => (
          <div key={index} className="relative group">
            <a
              href={link.path}
              className="text-[#262626] hover:text-[#414d43] flex items-center"
            >
              {link.name}
              {link.dropdownIcon && (
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </a>
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-4 text-lg">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`px-6 py-2 rounded-full ${
              button.style === "border"
                ? "border border-[#262626] hover:bg-[#e8e5e0]"
                : "bg-[#262626] text-white hover:bg-[#414d43]"
            }`}
          >
            {button.text}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
