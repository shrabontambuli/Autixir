"use client"
import BannerCarousel from '@/components/BannerCarousel';
import React from 'react';
import Image from "next/image";
import TabContent from './TabContent';

const Home = () => {
    return (
        <div>
            <div className='bg-[#F2F6F7] py-10 Hover-banner'>
                <div className='max-w-screen-xl mx-auto'>
                    <BannerCarousel />
                </div>
            </div>
            <div className='max-w-screen-xl mx-auto'>
                <div className='my-28 grid md:grid-cols-2 justify-items-center'>
                    <div className='lg:w-[600px] h-[482px] group overflow-hidden relative'>
                        <Image
                            className="transform transition-transform duration-1000 group-hover:scale-110"
                            src="/image/4.webp"
                            alt="logo"
                            width={600}
                            height={482}
                            priority
                        />
                        <div className='absolute top-10 left-10'>
                            <h3 className="text-lg text-[#e53e29] font-bold mb-2">FROM $49.00</h3>
                            <h1 className="text-3xl w-72 text-white font-bold mb-6">Latest & Beauty headlights</h1>
                        </div>
                        <div className='absolute bottom-10 left-10'>
                            <button className="bg-slate-800 text-white hover:text-[#e53e29] transition-all w-20 h-14 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='lg:w-[600px] h-[482px] group overflow-hidden relative'>
                        <Image
                            className="transform transition-transform duration-1000 group-hover:scale-110"
                            src="/image/5.webp"
                            alt="logo"
                            width={600}
                            height={482}
                            priority
                        />
                        <div className='absolute top-10 left-10'>
                            <h3 className="text-lg text-[#e53e29] font-bold mb-2">FROM $40.00</h3>
                            <h1 className="text-3xl w-72 text-white font-bold mb-6">Attractive Car Dashboard</h1>
                        </div>
                        <div className='absolute bottom-10 left-10'>
                            <button className="bg-slate-800 text-white hover:text-[#e53e29] transition-all w-20 h-14 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <TabContent/>
            </div>
        </div>
    );
};

export default Home;