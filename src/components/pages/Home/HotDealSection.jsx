import React from "react";
import Image from "next/image";

const HotDealSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid md:grid-cols-2 text-center gap-4 md:px-1">
        <div className="mt-14 md:mt-24">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Hot Deal ! Sale Up To{" "}
            <span className="text-[#e53e29]">25% Off</span>
          </h1>

          <p className="text-lg text-gray-700 mb-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            consequatur sequi quisquam, aspernatur nulla minima.
          </p>

          <div className="bg-white shadow-xl flex justify-center gap-10 p-8 w-11/12 lg:w-8/12 mx-auto border border-[#e53e29]">
            <div>
              <h2 className="text-4xl font-bold mb-5">00</h2>
              <h4 className="text-xl text-gray-700 font-medium">Days</h4>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-5">00</h2>
              <h4 className="text-xl text-gray-700 font-medium">Hrs</h4>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-5">00</h2>
              <h4 className="text-xl text-gray-700 font-medium">Mins</h4>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-5">00</h2>
              <h4 className="text-xl text-gray-700 font-medium">Secs</h4>
            </div>
          </div>
        </div>
        <div className="w-full mt-7 md:mt-0 md:h-[615px]">
          <Image
            src="/image/man.webp"
            alt=""
            width={530}
            height={700}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HotDealSection;
