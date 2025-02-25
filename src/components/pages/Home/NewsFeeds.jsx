import FlipCard from "@/components/FlipCard/FlipCard";
import { BiSupport } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoRibbonOutline } from "react-icons/io5";
import { GiReturnArrow } from "react-icons/gi";
const NewsFeeds = () => {
  const news = [0, 1, 2, 3, 4, 5];

  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-24">
        <div className="text-center my-24">
          <h3 className="text-lg text-[#e53e29] font-bold mb-2">
            [ blog & insights ]
          </h3>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">News Feeds.</h1>
        </div>
        {/* Newsfeed Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 mt-24">
          {/* Newsfeed Item */}
          {news.map((item) => (
            <div key={item}>
              <FlipCard />
            </div>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <button className="hover:bg-[#e53e29] border-2 border-[#e53e29] transition-all w-32 h-12 mx-auto md:mx-0 hover:text-white font-medium flex justify-center items-center gap-2">
            SEE MORE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:shadow-2xl bg-white md:p-6 p-2 my-20 lg:-mb-16">

          <div className=" flex items-center gap-6 shadow-xl lg:shadow-none lg:border-e-2 p-3 lg:px-2">
            <div>
              <CiDeliveryTruck
                size={50}
                className="hover:text-[#e53e29] transition-all"
              />
            </div>
            <div>
              <h3 className="text-2xl font-medium">Free home delivery</h3>
              <p className="mt-3">
                Provide free home delivery for all product over $100
              </p>
            </div>
          </div>
          <div className=" flex items-center gap-6 shadow-xl lg:shadow-none lg:border-e-2 p-3 lg:px-2">
            <div>
              <IoRibbonOutline
                size={50}
                className="hover:text-[#e53e29] transition-all"
              />
            </div>
            <div>
              <h3 className="text-2xl font-medium">Quality Products</h3>
              <p className="mt-3">
                We ensure the product quality that is our main goal
              </p>
            </div>
          </div>
          <div className=" flex items-center gap-6 shadow-xl lg:shadow-none lg:border-e-2 p-3 lg:px-2">
            <div>
              <GiReturnArrow
                size={50}
                className="hover:text-[#e53e29] transition-all"
              />
            </div>
            <div>
              <h3 className="text-2xl font-medium">3 Days Return</h3>
              <p className="mt-3">
                Return product within 3 days for any product you buy
              </p>
            </div>
          </div>
          <div className=" flex items-center gap-6 shadow-xl lg:shadow-none lg:border-e-2 p-3 lg:px-2">
            <div>
              <BiSupport
                size={50}
                className="hover:text-[#e53e29] transition-all"
              />
            </div>
            <div>
              <h3 className="text-2xl font-medium">Online Support</h3>
              <p className="mt-3">
                We ensure the product quality that you can trust easily
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeeds;
