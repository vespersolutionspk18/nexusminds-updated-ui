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
import { SeparatorPurple } from '@/components/ui/separator-purple';

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
        <div className="flex flex-col items-center justify-center text-5xl text-center font-semibold mt-20"><div className="font-light text-xs bg-purple-100 border-[1px] border-purple-200 rounded-full px-2 py-1">Enterprise Software Development</div><h3>Services we provide</h3><p className="font-light mt-5 text-lg mx-72">We design solutions that transform the digital landscape for businesses, ranging from early-stage startups to Fortune 500 companies.</p></div>
        <div className="flex flex-col items-center justify-center mx-10 gap-5 mt-10 bg-purple-100 px-10 py-10 rounded-2xl">
        <div className="flex flex-row items-start justify-between ">
          <div className="w-[40%]"><h5 className="text-2xl font-semibold">Software development consulting</h5></div>
          <div className="w-[60%]"><p className="text-justify">We thoroughly analyze your organization&apos;s unique requirements, ensuring that every solution is tailored to meet your specific business needs. Our approach involves exploring the user journey, from concept development to risk evaluation and competitor analysis, to create solutions that align with your goals. In addition, our team offers expert guidance on choosing the most appropriate technology stack, providing a comprehensive evaluation of each option's advantages and drawbacks, setting your software development project up for success.</p></div>
        </div>
        <SeparatorPurple />
        <div className="flex flex-row items-start justify-between ">
          <div className="w-[40%]"><h5 className="text-2xl font-semibold">Custom software development</h5></div>
          <div className="w-[60%]"><p className="text-justify">For us, custom software development is about crafting flawless, scalable, and truly unique solutions, whether they are web or mobile products, all designed to perfectly align with your distinctive business vision and company culture, or even meet your personal needs. When off-the-shelf solutions fall short, we ensure you remain connected with your customers and can address any internal challenges that come up throughout your business journey. Your success is our mission, custom-tailored to meet your exact requirements.</p></div>
        </div>
        <SeparatorPurple />
        <div className="flex flex-row items-start justify-between ">
          <div className="w-[40%]"><h5 className="text-2xl font-semibold">Software product development</h5></div>
          <div className="w-[60%]"><p className="text-justify">Software product development requires unwavering commitment and meticulous attention to detail, from the early phases of prototyping and design through development, testing, deployment, and support. But our involvement doesn&apos;t end there. Our dedication covers the entire lifecycle, ensuring thorough testing, smooth deployment, and continuous post-launch support. It&apos;s all about delivering an outstanding product experience through a fully tailored, comprehensive approach.</p></div>
        </div>
        <SeparatorPurple />
        <div className="flex flex-row items-start justify-between ">
          <div className="w-[40%]"><h5 className="text-2xl font-semibold">Software enhancement</h5></div>
          <div className="w-[60%]"><p className="text-justify">To ensure your software stands out in the market, our development services focus on fine-tuning and optimizing your solutions using cutting-edge technologies like AI, AR/VR, blockchain, and IoT. We also enhance UI/UX for better intuitiveness, bolster security, and quickly identify and resolve bugs. Additionally, we improve speed and responsiveness, while ensuring compatibility across multiple operating systems and devices.</p></div>
        </div>
        <SeparatorPurple />
        
        </div>
      
    </div>
  )
}

export default page