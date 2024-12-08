
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TabContent = () => {
    const pathName = usePathname();

    const links = [
        {
            title: 'Wheels',
            path: '/',
        },
        {
            title: 'Sounds',
            path: '/about',
        },
        {
            title: 'Featured',
            path: '/shop',
        },
        {
            title: 'Colors',
            path: '/news',
        }
    ]
    return (
        <div className='pb-40'>
            <div className='text-center'>
                <h3 className="text-lg text-[#e53e29] font-bold mb-2">// PARTS</h3>
                <h1 className="text-6xl font-bold mb-6">Our Products</h1>
            </div>
            <div className='mt-16'>
                <ul className='flex justify-center items-center space-x-16 font-medium text-lg transform'>
                    {
                        links?.map((link) => (
                            <li className='pe-10 border-e-2' key={link.path}>
                                <Link className={`${pathName === link.path && "border-b-[3px] border-[#e53e29] transition-[.4s] font-medium text-lg"}`} href={link.path}>{link.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default TabContent;