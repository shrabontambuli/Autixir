import Image from "next/image";
import Link from "next/link";
import { FaBehance, FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const NewsSideContent = () => {
  const categories = [
    { name: "Business", count: 6 },
    { name: "Consultant", count: 5 },
    { name: "Creative", count: 4 },
    { name: "UI/UX", count: 4 },
    { name: "Technology", count: 4 },
  ];

  
  return (
    <div>
      <aside className="space-y-10">
        {/* About Me Widget */}
        <div className="bg-white p-10 border hover:shadow-xl transition-all">
          <h3 className="text-xl font-bold text-gray-800 flex items-center">
            <span className="text-[#e53e29] mr-2">—</span> About Me
          </h3>
          <div className="flex flex-col items-center mt-10">
            <Image
              src="/image/author.webp"
              alt="Rosalina D. Williamson"
              width={100}
              height={100}
              className="rounded-full"
            />
            <h4 className="text-md font-semibold text-gray-800 mt-6">
              Rosalina D. Williamson
            </h4>
            <p className="text-sm text-gray-600 text-center mt-3 w-72 mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veritatis
              distinctio, odio, eligendi suscipit reprehenderit atque.
            </p>
            <div className="flex space-x-6 mt-8">
              <Link href="#" className="text-gray-500 hover:text-[#e53e29]">
                <FaFacebookF size={20} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#e53e29]">
                <IoLogoTwitter size={20} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#e53e29]">
                <FaLinkedin size={20} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#e53e29]">
                <FaBehance size={20} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#e53e29]">
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Search Widget */}
        <div className="bg-white p-10 border hover:shadow-xl transition-all">
          <h3 className="text-xl font-bold text-gray-800 flex items-center">
            <span className="text-[#e53e29] mr-2">—</span> Search Objects
          </h3>
          <form className="mt-10 flex items-center">
            <input
              type="email"
              placeholder="Search your keyword..."
              className="w-full h-14 px-5 py-3 text-sm text-gray-600 rounded-s-md focus:outline-none border focus:ring-1 focus:ring-[#e53e29]"
            />
            <button
              type="submit"
              className="px-4 py-3 h-14 text-sm font-bold text-white bg-[#e53e29] rounded-e-md hover:bg-slate-800 transition-all"
            >
              <IoSearch size={20} />
            </button>
          </form>
        </div>

        {/* Popular Feeds Widget */}
        <div className="bg-white p-10 border hover:shadow-xl transition-all">
          <h3 className="text-xl font-bold text-gray-800 flex items-center">
            <span className="text-[#e53e29] mr-2">—</span> Popular Feeds
          </h3>
          <ul className="space-y-10 mt-10">
            {[
              "How and when to replace brake rotors",
              "Electric Car Maintenance, Servicing & repairs",
              "How to Prepare for your First Track Day!",
              "How to Make Your Tires Last Longer",
            ].map((post, index) => (
              <li key={index} className="flex items-center">
                <Image
                  src="/image/author.webp"
                  alt="Post image"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-800 hover:text-[#e53e29] cursor-pointer">
                    {post}
                  </h4>
                  <p className="text-xs text-[#e53e29]">📅 June 22, 2025</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <aside className=" mt-10">
        {/* Categories */}
        <section className="mb-6 bg-white p-10 border hover:shadow-xl transition-all">
          <h3 className="text-xl font-bold flex items-center gap-2 pb-2 mb-4">
            <span className="text-red-500">—</span> Categories
          </h3>
          <ul>
            {categories.map((category) => (
              <li
                key={category.name}
                className="flex justify-between items-center bg-[#071c1f] hover:bg-[#e53e29] text-white p-3 mb-2 rounded transition-all"
              >
                <span>{category.name}</span>
                <span className="bg-[#ffffff27] py-2 px-5 rounded">
                  {category.count}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Social Media Links */}
        <section className="mb-6 bg-white p-10 border hover:shadow-xl transition-all mt-10">
          <h3 className="text-xl font-bold flex items-center gap-2 pb-2 mb-4">
            <span className="text-red-500">—</span> Never Miss News
          </h3>
          <div className="flex space-x-6 mt-8">
              <Link href="#" className="text-gray-500 hover:text-white border p-2 hover:bg-[#e53e29] transition-all">
                <FaFacebookF size={20} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white border p-2 hover:bg-[#e53e29] transition-all">
                <IoLogoTwitter size={20} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white border p-2 hover:bg-[#e53e29] transition-all">
                <FaLinkedin size={20} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white border p-2 hover:bg-[#e53e29] transition-all">
                <FaBehance size={20} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white border p-2 hover:bg-[#e53e29] transition-all">
                <FaYoutube size={20} />
              </Link>
            </div>
        </section>
      </aside>
    </div>
  );
};

export default NewsSideContent;
