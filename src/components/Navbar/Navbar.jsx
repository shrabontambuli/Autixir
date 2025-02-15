"use client"
import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const pathName = usePathname();

    const links = [
        {
            title: 'Home',
            path: '/',
        },
        {
            title: 'About',
            path: '/about',
        },
        {
            title: 'Shop',
            path: '/shop',
        },
        {
            title: 'News',
            path: '/news',
        },
        {
            title: 'Pages',
            path: '/pages',
        },
        {
            title: 'Contact',
            path: '/contact',
        }
    ]

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='flex justify-between items-center py-8 max-w-screen-xl mx-auto'>
            <div>
                <Image
                    src="/image/logo.webp"
                    alt="logo"
                    width={101}
                    height={45}
                    priority
                />
            </div>

            {/* Mobile Menu Button */}
            <button
                className="text-[#e53e29] md:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <Menu size={28} /> : <Menu size={28} />}
            </button>
            <div className='md:w-2/3'>
                <div
                    className={`absolute md:static top-28 right-0 z-10 w-60 shadow-xl text-xl rounded-2xl md:w-auto bg-[#e53e29] md:bg-transparent md:flex md:justify-between md:space-x-6 p-4 ps-8 md:p-0 transition-all duration-300 ${isOpen ? "block" : "hidden"
                        }`}
                >
                    <ul className='md:flex justify-between items-center space-y-2 md:space-y-0 md:space-x-6 font-medium text-lg text-white md:text-black transform'>
                        {
                            links?.map((link) => (
                                <li key={link.path}>
                                    <Link className={`${pathName === link.path && "border-b-[3px] border-black md:border-[#e53e29] transition-[.4s] font-medium text-lg"}`} href={link.path}>{link.title}</Link>
                                </li>
                            ))
                        }
                    </ul>

                    <div className='mt-6 md:mt-0'>
                        <ul className='flex md:justify-between items-center space-x-6 font-medium text-lg text-white md:text-black'>
                            <li className='hover:text-black md:hover:text-[#e53e29] transition-all font-medium text-lg'>USD</li>
                            <li className='hover:text-black md:hover:text-[#e53e29] transition-all font-medium text-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                                </svg>
                            </li>
                            <li className='hover:text-black md:hover:text-[#e53e29] transition-all font-medium text-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                                </svg>
                            </li>
                            <li className='hover:text-black md:hover:text-[#e53e29] transition-all font-medium text-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                                </svg>
                            </li>
                        </ul>
                    </div>

                </div>
                {/* <div>
                    <ul className='flex justify-between items-center space-x-6 font-medium text-lg'>
                        <li className='hover:text-[#e53e29] transition-all font-medium text-lg'>USD</li>
                        <li className='hover:text-[#e53e29] transition-all font-medium text-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                            </svg>
                        </li>
                        <li className='hover:text-[#e53e29] transition-all font-medium text-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                            </svg>
                        </li>
                        <li className='hover:text-[#e53e29] transition-all font-medium text-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                            </svg>
                        </li>
                    </ul>
                </div> */}
            </div>
        </nav>
    );
};

export default Navbar;