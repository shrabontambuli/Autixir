import Image from "next/image";
import Link from "next/link";
import { FaBehance, FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { IoSearch, IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const ShopSideContent = () => {
  const [priceRange, setPriceRange] = useState([50, 1500]);
  const categories = [
    "Body",
    "Interior",
    "Lights",
    "Parts",
    "Tires",
    "Uncategorized",
    "Wheel",
  ];

  const pd = [0, 1, 2, 3];

  return (
    <div>
      <aside className="space-y-10">
        {/* About Me Widget */}
        <div className="bg-white p-10 border hover:shadow-xl transition-all">
          {/* Product Categories */}
          <div className="">
            <h2 className="font-bold text-lg flex items-center gap-2">
              <span className="text-[#e53e29]">—</span>
              Product Categories
            </h2>
            <ul className="mt-10 space-y-2">
              {categories.map((category) => (
                <li
                  key={category}
                  className="flex justify-between items-center cursor-pointer font-semibold text-lg hover:text-[#e53e29]"
                >
                  {category}
                  <span className="text-gray-400">→</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Search Widget */}
        <div className="bg-white p-10 border hover:shadow-xl transition-all">
          <h2 className="font-bold text-lg flex items-center gap-2">
            <span className="text-[#e53e29]">—</span>
            Filter By Price
          </h2>
          <p className="mt-10 text-lg mb-4">
            Your range:{" "}
            <span className="font-bold">
              ${priceRange[0]} - ${priceRange[1]}
            </span>
          </p>
          <Slider
            range
            min={50}
            max={1500}
            step={10}
            value={priceRange}
            onChange={setPriceRange}
            trackStyle={[{ backgroundColor: "#e53e29" }]}
            handleStyle={[
              { borderColor: "#e53e29" },
              { borderColor: "#e53e29" },
            ]}
          />
        </div>

        {/* Popular Feeds Widget */}
        <div className="bg-white p-10 border hover:shadow-xl transition-all">
          <h2 className="font-bold text-lg flex items-center gap-2">
            <span className="text-[#e53e29]">—</span>
            Top Rated Product
          </h2>
          {pd.map((p) => (
            <div
              key={p}
              className="flex justify-center items-center border-b hover:shadow-2xl hover:border-none transition-all mt-6"
            >
              <div className="w-24 h-24">
                <Image
                  src="/image/1.webp"
                  alt="img"
                  width={100}
                  height={100}
                  style={{ objectFit: "cover" }}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="p-4">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-yellow-500 hover:text-[#e53e29]">
                      <IoStar size={16} />
                    </p>
                    <p className="text-sm font-medium text-yellow-500 hover:text-[#e53e29]">
                      <IoStar size={16} />
                    </p>
                    <p className="text-sm font-medium text-yellow-500 hover:text-[#e53e29]">
                      <IoStar size={16} />
                    </p>
                    <p className="text-sm font-medium text-yellow-500 hover:text-[#e53e29]">
                      <IoStarHalf size={16} />
                    </p>
                    <p className="text-sm font-medium text-yellow-500 hover:text-[#e53e29]">
                      <IoStarOutline size={16} />
                    </p>
                  </div>
                  <h2 className="text-base font-semibold hover:text-[#e53e29] mt-2">
                    Wheel Bearing Reta
                  </h2>
                  <h4 className="text-base text-[#e53e29] font-medium mt-2">
                    $118.26{" "}
                    <span className="line-through text-[#eea69c] ms-2">
                      $162.00{" "}
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>
      <aside className=" mt-10">
        {/* Social Media Links */}
        <section className="mb-6 bg-white p-10 border hover:shadow-xl transition-all mt-10">
          <h3 className="text-xl font-bold flex items-center gap-2 pb-2 mb-4">
            <span className="text-red-500">—</span> Never Miss News
          </h3>
          <div className="flex space-x-6 mt-8">
            <Link
              href="#"
              className="text-gray-500 hover:text-white border p-2 hover:bg-[#e53e29] transition-all"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-white border p-2 hover:bg-[#e53e29] transition-all"
            >
              <IoLogoTwitter size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-white border p-2 hover:bg-[#e53e29] transition-all"
            >
              <FaLinkedin size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-white border p-2 hover:bg-[#e53e29] transition-all"
            >
              <FaBehance size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-white border p-2 hover:bg-[#e53e29] transition-all"
            >
              <FaYoutube size={20} />
            </Link>
          </div>
        </section>
      </aside>
    </div>
  );
};

export default ShopSideContent;
