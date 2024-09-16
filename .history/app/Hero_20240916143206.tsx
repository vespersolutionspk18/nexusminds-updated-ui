"use client";

import React, { useState } from 'react';
import RightArrow from "@/public/assets/right.svg"; 
import ButtonArrow from "@/public/assets/buttonarrowwhite.svg"; 
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SplineComponent from '@/components/SplineComponent' // Import the Spline Component
import Spline from '@splinetool/react-spline';
const Hero = () => {
    const router = useRouter();
  
    const getInTouchClick = () => {
      router.push('/contact');
    };

    return (
        <div className=" mx-10 flex flex-row  my-2 rounded-3xl bg-radial-gradient pt-16 md:pt-32  pb-16">
            <div id="left content of hero" className="mx-20 my-5 md:my-10 w-full md:w-1/2">
                <h1 className="text-white font-sans text-4xl md:text-6xl font-semibold md:leading-[72px] mr-20">Transforming tech solutions for a new digital age.</h1>
                <h5 className="text-white font-sans text-xl font-light tracking-tight mt-7">Unlock the power of modern technology: efficient, streamlined, and built for a digital-first world.</h5>
                <div id="buttons container" className="mt-7 flex flex-row">
                    <div
                    id="button"
                    className="group bg-[#ffffffa1] hover:bg-white h-[44px] flex-row font-sans text-slate-800 text-[16px] py-1 px-1 font-regular rounded-full flex items-center justify-between w-[165px] transition-width duration-500 ease-in-out hover:transition-width hover:ease-in-out hover:w-[180px]"
                    onClick={getInTouchClick}
                        >
                    <div className="ml-3 text-lg">
                    Get in Touch 
                    </div>
                    <div className="bg-slate-800 rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45">
                    <ButtonArrow className="h-[24px] w-[24px]" />
                    </div>
                    </div>

                </div>
                <p className="text-slate-400 font-light pt-5">Driving the future with advanced, customized solutions that empower innovation and shape the digital landscape</p>
            </div>
            <div className="text-white w-1/2 h-[506px] overflow-hidden hidden md:flex items-center justify-center">
               {/* Use the Spline component here <SplineComponent /> */}
               <Image
        src="/assets/cubic.png" 
        width={720}
        height={720}
        alt=""
      />
            </div>
        </div>
    );
};

export default Hero;
