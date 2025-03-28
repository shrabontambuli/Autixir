"use client";
import { useState } from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const BannerCarousel = () => {
  const banners = [
    {
      id: 1,
      sub_title: "Welcome to our shop",
      title: "Get $250 In Total Discounts On A New Set Of Tires",
      description:
        "Predictive analytics is drastically changing the real estate industry. In the past, providing data for quick",
      imageUrl: "/image/1.webp", // Replace with your image URLs
    },
    {
      id: 2,
      sub_title: "Welcome to our shop",
      title: "The Parts Of Shock Absorbers Assembly",
      description:
        "Predictive analytics is drastically changing the real estate industry. In the past, providing data for quick",
      imageUrl: "/image/9.webp",
    },
    {
      id: 3,
      sub_title: "Welcome to our shop",
      title: "Get $250 In Total Discounts On A New Set Of Tires",
      description:
        "Predictive analytics is drastically changing the real estate industry. In the past, providing data for quick",
      imageUrl: "/image/11.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + banners.length) % banners.length
    );
  };

  // useEffect(() => {
  //   AOS.init({duration :1000});
  // }, []);
  // data-aos="fade-up"

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
        {/* Text Section */}
        <div className="flex flex-col justify-center text-center md:text-left p-4 h-[430px]">
          <h3 className="text-xl text-[#e53e29] font-bold mb-6">
            {banners[currentIndex].sub_title}
          </h3>
          <h1 className="text-2xl lg:text-5xl font-bold mb-6">
            {banners[currentIndex].title}
          </h1>
          <p className="text-lg text-gray-700 mb-10 w-full md:w-10/12">
            {banners[currentIndex].description}
          </p>
          <button className="bg-[#e53e29] w-40 h-16 mx-auto md:mx-0 text-white font-medium">
            SHOP NOW
          </button>
          <div>
            <button
              onClick={prevSlide}
              className="px-4 py-4 border hover:bg-[#e53e29] transition-all mr-2 absolute lg:top-[50%] posi lg:-left-64 opacity-0 btn-hover hover:text-white"
            >
              <FaArrowLeft size={18}/>
              {/* Previous */}
            </button>
            <button
              onClick={nextSlide}
              className="px-4 py-4 border hover:bg-[#e53e29] transition-all absolute lg:top-[50%] posi2 lg:-right-64 opacity-0  btn-hover2 hover:text-white"
            >
              <FaArrowRight size={18}/>
              {/* Next */}
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-full ">
          <Image
            src={banners[currentIndex].imageUrl}
            alt={banners[currentIndex].title}
            width={700}
            height={700}
            style={{ objectFit: 'cover' }}
            // className=" object-cover rounded"
          />
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-[#e53e29]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
