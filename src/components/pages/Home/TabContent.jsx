
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from "react";

const TabContent = () => {
    const [tab, setTabs] = useState(1);

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


    const links = [
        {
            title: 'Wheels',
            path: 'Wheels',
        },
        {
            title: 'Sounds',
            path: 'Sounds',
        },
        {
            title: 'Featured',
            path: 'Featured',
        },
        {
            title: 'Colors',
            path: 'Colors',
        }
    ]

    const handleTab = (e) => {
        setTabs(e);
        console.log(e)
    }

    return (
        <div>
            <div className='text-center'>
                <h3 className="text-lg text-[#e53e29] font-bold mb-2">// PARTS</h3>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Products</h1>
            </div>

            <div className='mt-10 md:mt-16'>
                <ul className='flex justify-center items-center space-x-4 md:space-x-16 font-medium text-lg transform'>
                    <li className='pe-4 md:pe-14 border-e-2 h-8'>
                        <button
                            onClick={() => handleTab(1)}
                            className={`${tab === 1 && "border-b-[3px] border-[#e53e29] transition-[.4s] font-medium text-lg"}`}
                        >Wheels</button>
                    </li>
                    <li className='pe-4 md:pe-14 border-e-2 h-8'>
                        <button
                            onClick={() => handleTab(2)}
                            className={`${tab === 2 && "border-b-[3px] border-[#e53e29] transition-[.4s] font-medium text-lg"}`}
                        >Sounds</button>
                    </li>
                    <li className='pe-4 md:pe-14 border-e-2 h-8'>
                        <button
                            onClick={() => handleTab(3)}
                            className={`${tab === 3 && "border-b-[3px] border-[#e53e29] transition-[.4s] font-medium text-lg"}`}
                        >Featured</button>
                    </li>
                    <li className='h-8'>
                        <button
                            onClick={() => handleTab(4)}
                            className={`${tab === 4 && "border-b-[3px] border-[#e53e29] transition-[.4s] font-medium text-lg"}`}
                        >Colors</button>
                    </li>
                </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative Hover mt-24">

                {
                    banners?.map((banner) => (

                        <div key={banner.id} className="rounded-xl hover:shadow-xl hover:border-b-[#e53e29] hover:border-2 transition-all border-2 h-96 relative">
                            <div className='flex shadow-2xl w-44 mx-auto absolute top-[50%] left-[50%] posi bg-white'>
                                <div className='border'>
                                    <button className="hover:bg-[#e53e29] hover:text-white transition-all w-14 h-14 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className='border'>
                                    <button className="hover:bg-[#e53e29] hover:text-white transition-all w-14 h-14 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className='border'>
                                    <button className="hover:bg-[#e53e29] hover:text-white transition-all w-14 h-14 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className='h-64 w-64 mx-auto'>
                                <Image
                                    src={banners[currentIndex].imageUrl}
                                    alt={banners[currentIndex].title}
                                    width={200}
                                    height={100}
                                    className="h-64 w-64 object-cover"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h2 className="text-xl font-semibold mb-2 text-gray-800">{banners[currentIndex].sub_title}</h2>
                                <h2 className="text-xl font-semibold mb-2 text-red-500">Price: $00.00</h2>
                            </div>
                        </div>))
                }

            </div>
            <div className='mt-14 flex justify-center'>
                <button className="hover:bg-[#e53e29] border-2 border-[#e53e29] transition-all w-32 h-12 mx-auto md:mx-0 hover:text-white font-medium flex justify-center items-center gap-2">SEE MORE
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>

                </button>
            </div>
        </div>
    );
};

export default TabContent;