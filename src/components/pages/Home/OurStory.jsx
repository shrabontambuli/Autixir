import NewsFeeds from "@/components/NewsFeeds/NewsFeeds";
import { BiSupport } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";
import { IoRibbonOutline } from "react-icons/io5";


const OurStory = () => {
    return (
        <div>
      <div className="max-w-screen-xl mx-auto my-24">
        <NewsFeeds/>
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
              <p className="mt-3 w-60">
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
              <p className="mt-3 w-60">
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
              <p className="mt-3 w-60">
                Return product within 3 days for any product you buy
              </p>
            </div>
          </div>
          <div className=" flex items-center gap-6 shadow-xl lg:shadow-none p-3 lg:px-2">
            <div>
              <BiSupport
                size={50}
                className="hover:text-[#e53e29] transition-all"
              />
            </div>
            <div>
              <h3 className="text-2xl font-medium">Online Support</h3>
              <p className="mt-3 w-60">
                We ensure the product quality that you can trust easily
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default OurStory;