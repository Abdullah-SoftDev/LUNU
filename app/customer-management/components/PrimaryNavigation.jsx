'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

function CustomLink({ href, label, isActive, onClick, isFirst, isLast }) {
  return (
    <Link href={href}
      className={`border-r border-gray-200 h-[45px] w-[308px] text-base leading-6 flex items-center justify-center border ${isActive ? 'bg-[#3E4044] text-white border-b-0 font-bold' : 'bg-[#FAFAFA] border-b font-normal'
        } ${isFirst ? 'rounded-tl-lg' : ''} ${isLast ? 'rounded-tr-lg' : ''}`} onClick={onClick}>
      {label}
    </Link>
  );
}

export default function PrimaryNavigation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const pathname = usePathname();
  const handleClick = (index) => {
    setActiveIndex(index);
  };
  useEffect(() => {
    var i = 0;
    if (pathname.includes('payment-history')) {
      i = 1;
    } else if (pathname.includes('rules-and-config')) {
      i = 2;
    } else {
      i = 0;
    }
    setActiveIndex(i);
  }, [pathname])

  return (
    <div className="flex w-[912px] h-[45px] shadow-sm">
      <CustomLink href="/customer-management/1" label="CUSTOMER DATA" isActive={activeIndex === 0} onClick={() => handleClick(0)} isFirst />
      <CustomLink href="/customer-management/1/payment-history" label="PAYMENT HISTORY" isActive={activeIndex === 1} onClick={() => handleClick(1)} />
      <CustomLink href="/customer-management/1/rules-and-config" label="CONFIG AND RULES" isActive={activeIndex === 2} onClick={() => handleClick(2)} isLast />
    </div>
  )
}


