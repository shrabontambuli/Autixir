import Image from "next/image";
import { FaArrowRight, FaCalendarAlt, FaRegEye } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";

const NewsCard = () => {
  return (
    <div>
      <div className="w-full bg-white border hover:shadow-xl transition-all">
        <div className="relative w-full" style={{ height: "458px" }}>
          <Image
            src="/image/31.webp"
            alt="Mechanic working on engine"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="py-14 px-5 md:px-10">
          <span className="inline-block bg-[#e53e29] hover:bg-[#071c1f] text-white font-semibold px-6 py-2 uppercase transition-all">
            Business
          </span>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800 hover:text-[#e53e29] transition-all mt-6">
            Common Engine Oil Problems and Solutions
          </h2>
          <div className="flex items-center text-gray-500 mt-6 space-x-8">
            <span className="flex items-center text-xs md:text-base hover:text-[#e53e29] transition-all font-semibold">
              <FaRegEye size={18} className="text-[#e53e29] me-4 md:me-3" />
              232 Views
            </span>
            <span className="flex items-center text-xs md:text-base hover:text-[#e53e29] transition-all font-semibold">
              <IoChatbubblesOutline size={18} className="text-[#e53e29] me-3" />
              03 Comments
            </span>
            <span className="flex items-center text-xs md:text-base hover:text-[#e53e29] transition-all font-semibold">
              <FaCalendarAlt size={18} className="text-[#e53e29] me-3" />
              June 22, 2025
            </span>
          </div>
          <p className="text-gray-600 mt-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore ...
          </p>
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center">
              <Image
                src="/image/author.webp"
                alt="Author's picture"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="ml-2 font-semibold text-gray-700">
                By: Ethan
              </span>
            </div>
            <a
              href="#"
              className="text-[#071c1f] hover:text-[#e53e29] inline-flex items-center justify-between w-24 transition-all font-semibold"
            >
                <FaArrowRight />
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
