'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


function CustomLink({ href, label, isActive, onClick, isFirst, isLast }) {
  return (
    <Link href={href}
      className={`border-r border-[#3E4044] h-[45px] w-[308px] text-base leading-6 flex items-center justify-center border ${isActive ? 'bg-[#3E4044] text-white border-b-0 font-bold' : 'bg-[#FAFAFA] border-b font-normal'
        } ${isFirst ? 'rounded-l-lg' : ''} ${isLast ? 'rounded-r-lg' : ''}`} onClick={onClick}>
      {label}
    </Link>
  );
}


export default function SecondaryNavigation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const pathname = usePathname();
  const handleClick = (index) => {
    setActiveIndex(index);
  };
  useEffect(() => {
    var i = 0;
    if (pathname.includes('routing')) {
      i = 1;
    }
    if (pathname.includes('wallet-list')) {
      i = 2;
    }
    if (pathname.includes('customer-notifications')) {
      i = 3;
    }
    setActiveIndex(i);
  }, [pathname])

  return (
    <div className="flex w-[912px] h-[45px]">
      <CustomLink href="/customer-management/1/rules-and-config" label="LIMITS" isActive={activeIndex === 0} onClick={() => handleClick(0)} isFirst />
      <CustomLink href="/customer-management/1/rules-and-config/routing" label="ROUTING" isActive={activeIndex === 1} onClick={() => handleClick(1)} />
      <CustomLink href="/customer-management/1/rules-and-config/wallet-list" label="WALLET LIST" isActive={activeIndex === 2} onClick={() => handleClick(2)} />
      <CustomLink href="/customer-management/1/rules-and-config/customer-notifications" label="NOTIFICATION" isActive={activeIndex === 3} onClick={() => handleClick(3)} isLast />
    </div>
  )
}
