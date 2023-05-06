'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MENU_ITEMS = [
    { id: 0, label: 'Dashboard', href: '/' },
    { id: 1, label: 'Transactions', href: '/transactions' },
    { id: 2, label: 'Customer management', href: '/customer-management' },
    { id: 3, label: 'Retailer management', href: '/retailer-management' },
    { id: 4, label: 'Global Rules', href: '/global-rules' },
    { id: 5, label: 'Partner management', href: '/partner-management' },
    { id: 6, label: 'Product Analytics', href: '/product-analytics' },
    { id: 7, label: 'Settings', href: '/settings' },
];

const Menu = ({ activeIndex, handleClick }) => {
    return (
        <div className="mt-[69px] w-[221px] h-[367px] ml-[101px] mr-[45px] mb-[389px]">
            {MENU_ITEMS.map(item => (
                <div key={item.id} className="mb-[23px] relative">
                    {activeIndex === item.id && (
                        <div className="mt-[13px] absolute h-[30px] skew-y-[14deg] bg-[#3e4044] shadow-lg rotate-[42deg] transform origin-top-right w-[100px] left-[185px] -z-10" />
                    )}
                    <Link href={item.href} onClick={() => handleClick(item.id)} className={`text-lg leading-6 ${activeIndex === item.id ? 'text-[#FDFDFD] font-bold' : 'text-[#A3A7AC] font-light'}`}>
                        <p>{item.label}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default function Sidebar() {
    const [activeIndex, setActiveIndex] = useState(0);
    const pathname = usePathname();
    const handleClick = (index) => {
        setActiveIndex(index);
    };
    useEffect(() => {
        let i = 0;
        if (pathname.includes('')) {
            i = 0;
        }
        if (pathname.includes('customer-management')) {
            i = 2;
        }
        if (pathname.includes('new-customer')) {
            i = 2;
        }
        setActiveIndex(i);
    }, [pathname]);
    return (
        <div className="w-[367px] bg-[#3E4044] ">
            {/* Logo and mini heading */}
            <div className="ml-[102px] mr-[10px] w-[255px] h-[30px] mt-[58px] flex items-center justify-center">
                <img className="w-[128px] mr-[22px]" src="/lunulogo.png" alt="Logo" />
                <p className="w-[105px] h-[30px] text-[#A3A7AC] font-light text-base leading-7">Admin</p>
            </div>
            {/* Navlinks */}
            <Menu activeIndex={activeIndex} handleClick={handleClick} />
        </div>
    );
}
