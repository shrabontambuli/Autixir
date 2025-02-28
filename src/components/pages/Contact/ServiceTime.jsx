import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const ServiceTime = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="lg:flex gap-5 lg:pt-40">
        <div className="bg-[url('/image/contact-bg2.jpg')] bg-center bg-cover lg:w-5/12 h-[650px]">
          <div
            className="w-full h-full border-b-8 border-[#e53e29]"
            style={{ backgroundColor: "rgba(7, 28, 31, .9)" }}
          >
            <div className="px-5 md:px-20 py-10">
              <div>
                <h3 className="text-lg text-[#e53e29] font-bold mb-2">
                  Time Shedule
                </h3>
                <h1 className="text-3xl text-white font-bold mb-6">
                  Meet In Timeline.
                </h1>
              </div>
              <div className="overflow-x-auto mt-10">
                <table className="min-w-full border-b">
                  <tbody>
                    <tr className="text-white h-16">
                      <td className="py-2 px-4 border-b">Monday</td>
                      <td className="py-2 px-4 border-b">07:00AM - 20:00PM</td>
                    </tr>
                    <tr className="text-white h-16">
                      <td className="py-2 px-4 border-b">Tuesday</td>
                      <td className="py-2 px-4 border-b">07:00AM - 20:00PM</td>
                    </tr>
                    <tr className="text-white h-16">
                      <td className="py-2 px-4 border-b">Wednesday</td>
                      <td className="py-2 px-4 border-b">07:00AM - 20:00PM</td>
                    </tr>
                    <tr className="text-white h-16">
                      <td className="py-2 px-4 border-b">Thursday</td>
                      <td className="py-2 px-4 border-b">07:00AM - 20:00PM</td>
                    </tr>
                    <tr className="text-white h-16">
                      <td className="py-2 px-4 border-b">Friday</td>
                      <td className="py-2 px-4 border-b">07:00AM - 20:00PM</td>
                    </tr>
                    <tr className="text-white h-16">
                      <td className="py-2 px-4 border-b">Saturday</td>
                      <td className="py-2 px-4 border-b">07:00AM - 20:00PM</td>
                    </tr>
                    <tr className="text-white h-16">
                      <td className="py-2 px-4 border-b">Sunday</td>
                      <td className="py-2 px-4 border-b">Official Holiday</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex gap-5">
          <div className="px-5 py-20">
            <div>
              <h1 className="text-3xl text-white font-bold mb-6">Services.</h1>
            </div>
            <div className="mt-10 md:w-96">
              <table className="min-w-full">
                <tbody>
                  <tr className="text-[#c5c5c5fd] h-12">
                    <td className="py-2 contact-li">Engine Diagnostics</td>
                    <td className="py-2 contact-li">Car Wash & Cleaning</td>
                  </tr>
                  <tr className="text-[#c5c5c5fd] h-12">
                    <td className="py-2 contact-li">Vehicles Damaged</td>
                    <td className="py-2 contact-li">Choose your Repairs</td>
                  </tr>
                  <tr className="text-[#c5c5c5fd] h-12">
                    <td className="py-2 contact-li">Air Conditioning Evac</td>
                    <td className="py-2 contact-li">Free Consultancy</td>
                  </tr>
                  <tr className="text-[#c5c5c5fd] h-12">
                    <td className="py-2 contact-li">Anti Lock Brake Service</td>
                    <td className="py-2 contact-li">Emergency Time</td>
                  </tr>
                  <tr className="text-[#c5c5c5fd] h-12">
                    <td className="py-2 contact-li">Computer Diagnostics</td>
                  </tr>
                  <tr className="text-[#c5c5c5fd] h-12">
                    <td className="py-2 contact-li">Performance Upgrades</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="pb-20 md:py-20">
              <div className="px-5 md:px-0 md:pe-5 lg:pe-0">
                <h1 className="text-3xl text-white font-bold mb-6">
                  News Feeds.
                </h1>

                <div className="mt-12 border-b h-32">
                  <p className="flex items-center gap-2 text-[#c5c5c5fd] font-medium">
                    <span className="text-[#e53e29]">
                      <FaCalendarAlt />
                    </span>
                    June 22, 2025
                  </p>
                  <p className="text-white hover:text-[#e53e29] transition-all text-lg mt-4">
                    The branch of biology that deals with the normal.
                  </p>
                </div>
                <div className="mt-12 border-b h-32">
                  <p className="flex items-center gap-2 text-[#c5c5c5fd] font-medium">
                    <span className="text-[#e53e29]">
                      <FaCalendarAlt />
                    </span>
                    June 22, 2025
                  </p>
                  <p className="text-white hover:text-[#e53e29] transition-all text-lg mt-4">
                    Electric Car Maintenance, Servicing & repairs
                  </p>
                </div>
                <div className="mt-12">
                  <p className="flex items-center gap-2 text-[#c5c5c5fd] font-medium">
                    <span className="text-[#e53e29]">
                      <FaCalendarAlt />
                    </span>
                    June 22, 2025
                  </p>
                  <p className="text-white hover:text-[#e53e29] transition-all text-lg mt-4">
                    The branch of biology that deals with the normal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTime;
