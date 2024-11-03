"use client";

import React, { useState } from 'react';
import RightArrow from "@/public/assets/right.svg"; 
import ButtonArrow from "@/public/assets/buttonarrowwhite.svg"; 
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SplineComponent from '@/components/SplineComponent' // Import the Spline Component
import Spline from '@splinetool/react-spline';
const SerHero = () => {
    const router = useRouter();
  
    const getInTouchClick = () => {
      router.push('/contact');
    };
  return (
    <div className=" flex flex-row  my-2 bg-services-bg pt-8 md:pt-26  pb-8">
            <div id="left content of hero" className="mx-5 md:mx-20 my-5 md:my-10 w-full md:w-1/2">
                <h1 className="text-white font-sans text-xl md:text-6xl font-semibold md:leading-[72px] mr-20">Our Services</h1>
                <h5 className="text-white font-sans md:text-lg text-sm font-light tracking-tight mt-7 text-justify">Looking to quickly expand your development capabilities or create a future-ready solution from the ground up?<br></br><br></br>We&apos;ve got you covered at every stage.</h5>
                
                
            </div>
            <div className="text-white w-1/2 h-[120px] overflow-hidden hidden md:flex items-center justify-center">

               
            </div>
        </div>
  )
}

export default SerHero