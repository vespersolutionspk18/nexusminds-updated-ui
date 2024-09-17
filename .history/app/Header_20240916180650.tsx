"use client";

import React, { useState, useEffect } from 'react';
import RightArrow from "@/public/assets/right.svg"; 
import ButtonArrow from "@/public/assets/buttonarrow.svg"; 
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { NavigationMenuDemo } from './headMenuNav';
import { HeaderDropDown } from './HeaderDropDown';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);

  const getInTouchClick = () => {
    router.push('/contact');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="bg-white  md:px-10 px-5 w-full my-2  h-[64px]  flex items-center justify-between">
        <div className="flex-1 flex items-center justify-start">
          <a href="/"><Image src="/assets/nexuslogo.svg" width={250} height={250} alt="Nexus Minds" className="ml-3"/></a>
        </div>
        <div className="flex-1 items-center justify-center hidden md:flex">
          <NavigationMenuDemo />
        </div>
        <div className="flex-1 flex items-center justify-end">
        <Link href="/contact#meeting"><div
  id="button"
  className="group  bg-slate-700 h-[44px] flex-row font-sans text-white text-[16px] py-1 px-1 font-regular rounded-full hidden md:flex items-center justify-between w-[170px] transition-width duration-500 ease-in-out hover:shadow-[6px_6px_12px_rgba(0,0,0,0.6),-6px_-6px_12px_rgba(255,255,255,0.3)] hover:w-[188px] hover:bg-purple-700"
  
>
  <div className="mx-3">Schedule Meeting</div>
  <div className="bg-[#E8E9E9] rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45">
    <ButtonArrow className="h-[24px] w-[24px]" />
  </div>
</div></Link>

          <div className="block md:hidden">
            <HeaderDropDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
