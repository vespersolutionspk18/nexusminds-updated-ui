"use client";

import React, { useState } from 'react';
import RightArrow from "@/public/assets/right.svg"; 
import ButtonArrow from "@/public/assets/buttonarrowwhite.svg"; 
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SplineComponent from '@/components/SplineComponent' // Import the Spline Component
import Spline from '@splinetool/react-spline';
import Header from '../Header';
import ClientCarousel from '../ClientCarousel';

const page = () => {
  const router = useRouter();
  
    const getInTouchClick = () => {
      router.push('/contact');
    };
  return (
    <div>
      <Header />
<div className=" mx-10 flex flex-row  my-2 rounded-3xl bg-radial-gradient pt-16 md:pt-32  pb-16">
            <div id="left content of hero" className="mx-20 my-5 md:my-10 w-full ">
                <h1 className="text-white font-sans text-4xl md:text-6xl font-semibold md:leading-[72px] mr-20">Software Development Services</h1>
                <h5 className="text-white font-sans text-xl font-light tracking-tight mt-7">Nexus goes beyond offering software development services – our engineers integrate seamlessly into your business for as long as you require their expertise. The solutions we deliver are defined by their security, outstanding performance, user focus, and scalability.</h5>
               
                <p className="text-slate-400 font-light pt-5">Driving the future with advanced, customized solutions that empower innovation and shape the digital landscape</p>
            </div>
            
        </div>
        <ClientCarousel />
        <div className="flex items-center justify-center text-5xl text-center font-semibold mt-20"><h3>Services we provide</h3></div>
        <div className="flex flex-row items-center justify-center mx-10 gap-5 mt-10">
        <div className="w-1/3 bg-purple-200 rounded-2xl">
          <h4 className="text-3xl font-semibold text-slate-800 mt-5 mx-10">Software development consulting</h4>
        </div>
        <div className="w-1/3 bg-purple-200 rounded-2xl">1</div>
        <div className="w-1/3 bg-purple-200 rounded-2xl">1</div>
        
        </div>
    </div>
  )
}

export default page