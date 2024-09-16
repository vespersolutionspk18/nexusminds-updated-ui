"use client";

import React, { useState, useEffect } from 'react';
import RightArrow from "@/public/assets/right.svg"; 
import ButtonArrowwhite from "@/public/assets/buttonarrowwhite.svg";
import ButtonArrow from "@/public/assets/buttonarrow.svg";  
import { useRouter } from 'next/navigation';

import { MdHandyman } from "react-icons/md";
import { MdOutlineQuickreply } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
const ContactSection = () => {
    const router = useRouter();
 
    const getInTouchClick = () => {
      router.push('/contact');
    };

  return (
    <div className="mx-10 mb-32 mt-32 gap-10 bg-radial-gradient pt-10 md:pt-32 pb-10 md:pb-32 rounded-2xl flex flex-col md:flex-row text-white">
        <div className="w-full md:w-[40%] md:mx-10 flex flex-col items-center justify-center md:items-start md:justify-start">
            <h3 className="md:text-5xl text-3xl font-medium mx-10 md:mx-0">Get an estimate in 10 minutes or less</h3>
            <p className="mt-5  text-slate-200 mx-10 md:mx-0">Start your journey with Nexus Minds today. Our efficient, cost-effective solutions ensure your business fully leverages modern technologies for success.</p>
        </div>
        <div className="w-[50%] flex flex-col md:mt-4 ">
        <div id="first" className="hidden md:flex gap-2 flex-row ">
            <div className="w-[30%]">
                <div className="bg-[#ffffffa1] rounded-lg w-[48px] h-[48px] mb-3 flex items-center justify-center">
                <MdHandyman size="34px" className="fill-black   "/>
                </div>
                &gt; 500 Solutions Delivered
                </div>
            <div className="w-[30%]">
            <div className="bg-[#ffffffa1] rounded-lg w-[48px] h-[48px] mb-3 flex items-center justify-center">
            <MdOutlineQuickreply size="34px" className="fill-black"/>
                </div>
                Instant Customer Support
            </div>
            <div className="w-[30%]">
            <div className="bg-[#ffffffa1] rounded-lg w-[48px] h-[48px] mb-3 flex items-center justify-center">
                <TbMoneybag size="34px" className="stroke-black"/>
                </div>
                &gt; $10M saved for clients
            </div>
        </div>
        <div className="">
        <div id="buttons container" className="mt-7 flex flex-col md:flex-row items-center justify-center md:items-start md:justify-start">
                <div
                id="button"
                className="group bg-[#ffffffa1] hover:bg-white h-[44px] flex-row font-sans text-slate-800 text-[16px] py-1 px-1 font-regular rounded-full flex items-center justify-between w-[165px] transition-width duration-500 ease-in-out hover:transition-width hover:ease-in-out hover:w-[180px]"
                onClick={getInTouchClick}
                    >
                <div className="ml-3 text-lg">
                Get in Touch 
                </div>
                <div className="bg-slate-800 rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45">
                <ButtonArrowwhite className="h-[24px] w-[24px]" />
                </div>
                </div>
                <div className="md:pl-3 pt-3 md:pt-0">
                <div
                id="button2"
                className="group  h-[44px] flex-row font-sans text-white text-[16px] py-1 px-1 font-regular rounded-full hidden md:flex items-center justify-between w-[220px] transition-width duration-500 ease-in-out hover:transition-width hover:ease-in-out hover:w-[235px]"
                onClick={getInTouchClick}
                    >
                <div className="ml-3 text-lg">
                Schedule a meeting
                </div>
                <div className="rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45">
                <ButtonArrowwhite className="h-[24px] w-[24px]" />
                </div>
                </div>
                </div>

            </div>
        </div>
        </div>
    </div>
  )
}
export default ContactSection