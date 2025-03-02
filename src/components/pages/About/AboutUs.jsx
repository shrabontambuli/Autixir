"use client";
import NewsFeeds from "@/components/NewsFeeds/NewsFeeds";
import ServiceTime from "@/components/ServiceTime/ServiceTime";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  const data = [
    { label: "Car Repair", value: 72 },
    { label: "Car Rental Service", value: 74 },
    { label: "Car Cleaning & Parts", value: 81 },
  ];

  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-1">
          <div className="relative">
            <div className="w-full lg::h-[615px]">
              <Image
                src="/image/about.webp"
                alt=""
                width={615}
                height={700}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="bg-[#e53e29] flex justify-center items-center w-48 h-48 border-8 absolute bottom-0 md:bottom-24 lg:bottom-0 right-0 md:right-0 lg:right-2">
              <div className="text-white">
                <h1 className="text-2xl font-medium">
                  <span className="text-6xl">25</span>+
                </h1>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
          <div>
            <div className="px-3">
              <h3 className="text-lg text-[#e53e29] font-bold mb-2">
                About Us
              </h3>
              <h1 className="text-4xl lg:text-6xl font-bold mt-6">
                Safety Is Our First & Main Priority <span className="text-[#e53e29]">.</span>
              </h1>
              <div className="mt-10 md:mt-6 border-s-2 border-[#e53e29] ps-10 lg:p-3">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
              <p className="mt-10 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed
                do eius mod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad min im veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequ at.
              </p>
              <div className="mt-14 ">
                <button className="hover:bg-[#e53e29] border-2 border-[#e53e29] transition-all px-6 py-4 hover:text-white font-medium">
                  OUR SERVICES
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 pt-16 text-center">
        <p className="text-[#e53e29] font-semibold"> FEATURES </p>
        <h2 className="text-4xl md:text-6xl font-bold mt-6">
          Why Choose Us <span className="text-[#e53e29]">.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto my-28">
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-xl font-semibold">All Kind Brand</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Brake Fluid Exchange</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Maintenance Package</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-[#e53e29] text-white py-10">
          <p className="text-lg font-medium">
            24/7 Availability, Make{" "}
            <Link href="/contact" className="underline font-bold">
              An Appointment
            </Link>
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 p-1 my-28">
          <div>
            <div className="px-3">
              <h3 className="text-lg text-[#e53e29] font-bold mb-2">Skills</h3>
              <h1 className="text-4xl md:text-2xl lg:text-6xl font-bold mt-6">
                We Have A Skillest Team Ever <span className="text-[#e53e29]">.</span>
              </h1>
              <div className="mt-10 md:mt-6 lg:mt-10 border-s-2 border-[#e53e29] ps-10 md:ps-4 lg:p-3">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
              <div className="space-y-8 md:space-y-4 lg:space-y-8 mt-16 md:mt-10">
                {data.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-bold">{item.label}</span>
                      <span className="text-red-600 font-bold">
                        {item.value}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-red-600 rounded-full"
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden">
            <iframe
              className="w-full lg:w-[560px] h-full"
              src="https://www.youtube.com/embed/eWUxqVFBq74?si=fyA_vg1IzyOc1DsH"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="my-28">
          <NewsFeeds />
        </div>
      </div>
      <div>
        <ServiceTime />
      </div>
    </div>
  );
};

export default AboutUs;
