"use client"

import { useState } from "react";

const BannerCarousel = () => {
    const banners = [
        {
            id: 1,
            sub_title: "Welcome to our shop",
            title: "Get $250 In Total Discounts On A New Set Of Tires",
            description: "Predictive analytics is drastically changing the real estate industry. In the past, providing data for quick",
            imageUrl: "/image/1.webp", // Replace with your image URLs
        },
        {
            id: 2,
            sub_title: "Welcome to our shop",
            title: "The Parts Of Shock Absorbers Assembly",
            description: "Predictive analytics is drastically changing the real estate industry. In the past, providing data for quick",
            imageUrl: "/image/9.webp",
        },
        {
            id: 3,
            sub_title: "Welcome to our shop",
            title: "Get $250 In Total Discounts On A New Set Of Tires",
            description: "Predictive analytics is drastically changing the real estate industry. In the past, providing data for quick",
            imageUrl: "/image/11.webp",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
    };

    return (
        <div className="relative w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Text Section */}
                <div className="flex flex-col justify-center">
                    <h3 className="text-2xl text-[#e53e29] font-bold mb-6">{banners[currentIndex].sub_title}</h3>
                    <h1 className="text-5xl font-bold mb-6">{banners[currentIndex].title}</h1>
                    <p className="text-lg text-gray-700 mb-10 w-10/12">{banners[currentIndex].description}</p>
                    <button className="bg-[#e53e29] w-40 h-16 text-white font-medium">SHOP NOW</button>
                    <div>
                        <button
                            onClick={prevSlide}
                            className="px-4 py-2 border hover:bg-[#e53e29] transition-all mr-2 absolute lg:top-[50%] posi lg:-left-40"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                            </svg>
                            {/* Previous */}
                        </button>
                        <button
                            onClick={nextSlide}
                            className="px-4 py-2 border hover:bg-[#e53e29] transition-all absolute lg:top-[50%] posi2 lg:-right-40"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                            {/* Next */}
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative">
                    <img
                        src={banners[currentIndex].imageUrl}
                        alt={banners[currentIndex].title}
                        className="w-full h-64 md:h-full object-cover rounded"
                    />
                </div>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {banners.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-[#e53e29]" : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default BannerCarousel;
