"use client";
import {
  FaCheckCircle,
  FaChevronDown,
  FaCommentAlt,
  FaMapMarkedAlt,
  FaUser,
} from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCheckmarkSharp } from "react-icons/io5";
import { useState } from "react";
const ContactForm = () => {
  const [isActive, setIsActive] = useState(false);

  const handleCheckboxChange = () => {
    setIsActive(!isActive); // Toggle button activation
  };

  return (
    <div className="mt-28 mb-28 lg:-mb-24 relative">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="flex justify-center items-center border-2 h-[350px]">
          <div className="text-center">
            <div className="relative">
              <div>
                <MdEmail
                  size={100}
                  className="mx-auto hover:text-[#e53e29] transition-all"
                />
              </div>
              <div className="flex justify-center items-center bg-[#e53e29] rounded-full h-10 w-10 absolute top-0 right-12">
                <IoCheckmarkSharp size={24} className="text-white" />
              </div>
            </div>
            <div className="mt-6">
              <h1 className="text-3xl font-medium mb-2">Email Address</h1>
              <h4>info@webmail.com</h4>
              <h4>jobs@webexample.com</h4>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center border-2 h-[350px]">
          <div className="text-center">
            <div className="relative">
              <div>
                <FaPhoneVolume
                  size={100}
                  className="mx-auto hover:text-[#e53e29] transition-all"
                />
              </div>
              <div className="flex justify-center items-center bg-[#e53e29] rounded-full h-10 w-10 absolute top-0 right-12">
                <IoCheckmarkSharp size={24} className="text-white" />
              </div>
            </div>
            <div className="mt-6">
              <h1 className="text-3xl font-medium mb-2">Phone Number</h1>
              <h4>+0123-456789</h4>
              <h4>+987-6543210</h4>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center border-2 h-[350px]">
          <div className="text-center">
            <div className="relative">
              <div>
                <FaMapMarkedAlt
                  size={100}
                  className="mx-auto hover:text-[#e53e29] transition-all"
                />
              </div>
              <div className="flex justify-center items-center bg-[#e53e29] rounded-full h-10 w-10 absolute top-0 right-12">
                <IoCheckmarkSharp size={24} className="text-white" />
              </div>
            </div>
            <div className="mt-6">
              <h1 className="text-3xl font-medium mb-2">Office Address</h1>
              <h4>18/A, New Born Town Hall</h4>
              <h4>New York, US</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28 border shadow-xl p-8 md:p-16 bg-white">
        <h1 className="text-4xl font-medium mb-10">Get A Quote</h1>
        <form className="flex flex-col gap-5">
          <div className="md:flex items-center gap-8">
            <div className="relative w-full">
              <FaUser
                size={18}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#e53e29]"
              />
              <input
                type="text"
                placeholder="Your Name"
                className="border-2 p-3 w-full rounded-sm focus:outline-none focus:ring-1 focus:ring-[#e53e29]"
              />
            </div>
            <div className="relative w-full mt-8 md:mt-0">
              <MdEmail
                size={18}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#e53e29]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border-2 p-3 w-full rounded-sm focus:outline-none focus:ring-1 focus:ring-[#e53e29]"
              />
            </div>
          </div>

          <div className="md:flex items-center gap-8 mt-6">
            <div className="relative w-full">
              <select className="appearance-none w-full bg-white border-2 p-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#e53e29]">
                <option value="">Select Service Type</option>
                <option value="Car-Repair">Car Repair</option>
                <option value="Engine-Repairing ">Engine Repairing </option>
                <option value="Oil-Change">Oil Change</option>
                <option value="Car-Wash">Car Wash</option>
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#e53e29]" />
            </div>
            <div className="relative w-full mt-8 md:mt-0">
              <FaPhoneVolume
                size={18}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#e53e29]"
              />
              <input
                type="number"
                placeholder="Your Phone Number"
                className="border-2 p-3 w-full rounded-sm focus:outline-none focus:ring-1 focus:ring-[#e53e29]"
              />
            </div>
          </div>

          <div className="mt-6">
            <div className="relative w-full">
              <FaCommentAlt className="absolute text-[#e53e29] top-3 right-3 " />
              <textarea
                placeholder="Enter Your Message..."
                className="w-full border-2 p-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#e53e29] resize-none"
                rows="4"
              />
            </div>
          </div>

          <div className="mt-8">
            {/* Checkbox to toggle button state */}
            <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                onChange={handleCheckboxChange}
                className="w-6 h-6 accent-[#e53e29]"
              />
              <span className="text-md ms-2">Save my name, email, and website in this browser for the next time
              I comment.</span>
            </label>

            {/* Submit button */}
            <button
              disabled={isActive}
              className={`flex items-center justify-center gap-2 mt-6 px-10 py-4 rounded-sm text-white font-medium transition ${
                isActive
                  ? "bg-[#e53e29] hover:bg-[#c32b1e]"
                  : "bg-[#fa8c7d] cursor-not-allowed"
              }`}
            >
              {isActive ? "Submit" : "Submit"}
              {isActive && <FaCheckCircle className="text-white" />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
