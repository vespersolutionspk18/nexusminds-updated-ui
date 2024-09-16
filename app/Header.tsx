"use client";

import React, { useState, useEffect } from 'react';
import RightArrow from "@/public/assets/right.svg"; 
import ButtonArrow from "@/public/assets/buttonarrow.svg"; 
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { NavigationMenuDemo } from './headMenuNav';

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
      <div className="bg-white  px-10 w-full my-2  h-[64px]  flex items-center justify-between">
        <div className="flex-1 flex items-center justify-start">
          <Image src="/assets/nexuslogo.svg" width={250} height={250} alt="Nexus Minds" className="ml-3"/>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <NavigationMenuDemo />
        </div>
        <div className="flex-1 flex items-center justify-end">
          <div
            id="button"
            className="group bg-slate-700 h-[44px] flex-row font-sans text-white text-[16px] py-1 px-1 font-regular rounded-full flex items-center justify-between w-[170px] transition-width duration-500 ease-in-out hover:transition-width hover:ease-in-out hover:w-[188px] hover:bg-blue-700"
            onClick={getInTouchClick}
          >
            <div className="mx-3">
              Get in Touch 
            </div>
            <div className="bg-[#E8E9E9] rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45">
              <ButtonArrow className="h-[24px] w-[24px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
