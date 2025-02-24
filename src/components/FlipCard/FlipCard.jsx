import { FaCalendarAlt, FaRegUser, FaTags } from "react-icons/fa";
import "./FlipCard.css";

const FlipCard = () => {
  return (
    <div className="flip-card w-96 h-96">
      <div className="flip-card-inner">
        {/* Front Side */}
        <div
          className="flip-card-front shadow-xl bg-center bg-cover w-full h-full p-6 border border-[#e53e29]"
          // style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div>
            <div className="flex items-center gap-6 text-sm">
              <p className="flex items-center gap-2 font-medium">
                <span className="text-[#e53e29]">
                  <FaRegUser />
                </span>
                by: Admin
              </p>
              <p className="flex items-center gap-2 font-medium">
                <span className="text-[#e53e29]">
                  <FaTags />
                </span>
                Business
              </p>
            </div>
            <h1 className="mt-6 text-3xl font-medium">
              Common Engine Oil Problems and Solutions
            </h1>
            <p className="mt-6">
              Common engine oil problems, like low oil pressure, low engine
              performance, and engine wear and tear, can be addressed through
              proper maintenance, oil changes
            </p>
            <div className="border border-[#929191] mt-6"></div>
            <div className="flex justify-between items-center gap-6 text-sm mt-6">
              <p className="flex items-center gap-2 font-medium">
                <span className="text-[#e53e29]">
                  <FaCalendarAlt />
                </span>
                June 22, 2025
              </p>
              <a to="/" className="text-[#e53e29] uppercase font-medium">
                Read more
              </a>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="flip-card-back shadow-xl bg-[url('/image/man.webp')] bg-center bg-cover w-full h-full p-6 border border-[#e53e29]">
          <div className="">
            <div className="flex items-center gap-6 text-sm">
              <p className="flex items-center gap-2 font-medium">
                <span className="text-[#e53e29]">
                  <FaRegUser />
                </span>
                by: Admin
              </p>
              <p className="flex items-center gap-2 font-medium">
                <span className="text-[#e53e29]">
                  <FaTags />
                </span>
                Business
              </p>
            </div>
            <h1 className="mt-6 text-3xl font-medium">
              Common Engine Oil Problems and Solutions
            </h1>
            <p className="mt-6">
              Common engine oil problems, like low oil pressure, low engine
              performance, and engine wear and tear, can be addressed through
              proper maintenance, oil changes
            </p>
            <div className="border border-[#929191] mt-6"></div>
            <div className="flex justify-between items-center gap-6 text-sm mt-6">
              <p className="flex items-center gap-2 font-medium">
                <span className="text-[#e53e29]">
                  <FaCalendarAlt />
                </span>
                June 22, 2025
              </p>
              <a to="/" className="text-[#e53e29] uppercase font-medium">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
