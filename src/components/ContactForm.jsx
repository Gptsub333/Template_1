import React from "react";
import content from "../data/content.json";

const ContactForm = () => {
  const { heading, subHeading, address, contact, formFields, submitButton } =
    content.contactForm;

  return (
    <div className="container bg-[#414d43] text-[#e8e5e0] mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-16 md:py-20 rounded-3xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between h-full gap-8">
          {/* Left Column */}
          <div className="lg:w-1/3 flex flex-col justify-between">
            {/* "Get in touch" section */}
            <div className="mb-8">
              <p className="text-lg sm:text-xl text-[#ACA296]">{subHeading}</p>
            </div>

            {/* Address and Contact Section */}
            <div className="mt-auto space-y-8">
              <div>
                <h3 className="text-md sm:text-lg mb-2 text-[#ACA296]">
                  {address.title}
                </h3>
                <p className="text-lg sm:text-xl whitespace-pre-line">
                  {address.details}
                </p>
              </div>
              <div>
                <h3 className="text-md sm:text-lg mb-2 text-[#ACA296]">
                  {contact.title}
                </h3>
                <p className="text-lg sm:text-xl">{contact.email}</p>
                <p className="text-lg sm:text-xl">{contact.phone}</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-2/3">
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 sm:mb-12">
                {heading}
              </h2>
              <form>
                {formFields.map((field, index) => (
                  <div key={index} className="mb-6 text-[#ACA296]">
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="text-md sm:text-lg w-full bg-transparent border-b border-[#e8e5e0] py-2 placeholder-[#ACA296] focus:outline-none"
                    />
                  </div>
                ))}
                <button
                  type="submit"
                  className="text-lg w-full py-4 rounded-full font-semibold transition-colors duration-300"
                  style={{
                    backgroundColor: submitButton.style.bgColor,
                    color: submitButton.style.textColor,
                  }}
                >
                  {submitButton.text}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
