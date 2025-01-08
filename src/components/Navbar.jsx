import React, { useState } from "react";
import content from "../data/content.json";

function Navbar() {
  const { links, buttons } = content.navbar;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="px-6 py-4  shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">Template</div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-[#262626]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Links for Desktop */}
        <div className="hidden lg:flex items-center space-x-8 font-semibold">
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

        {/* Buttons for Desktop */}
        <div className="hidden lg:flex items-center space-x-4 text-lg">
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
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 space-y-4 bg-white shadow-md rounded-lg p-4">
          {/* Links for Mobile */}
          <div className="flex flex-col space-y-4">
            {links.map((link, index) => (
              <a
                key={index}
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
            ))}
          </div>

          {/* Buttons for Mobile */}
          <div className="flex flex-col space-y-4">
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
        </div>
      )}
    </nav>
  );
}

export default Navbar;
