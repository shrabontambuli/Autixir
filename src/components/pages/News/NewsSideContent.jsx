import Image from "next/image";
import Link from "next/link";
import { FaBehance, FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const NewsSideContent = () => {
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
                <IoLogoTwitter size={20}/>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#e53e29]">
                <FaLinkedin size={20}/>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#e53e29]">
                <FaBehance size={20}/>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#e53e29]">
                <FaYoutube size={20}/>
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
    </div>
  );
};

export default NewsSideContent;
