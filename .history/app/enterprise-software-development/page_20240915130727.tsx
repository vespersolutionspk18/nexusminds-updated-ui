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
        <div className="w-1/3 bg-purple-100 rounded-2xl h-[460px]">
          <h4 className="text-3xl font-semibold text-slate-700 mt-10 mx-10">Software development consulting</h4>
          <p className="mx-10 mt-3 mb-10 text-justify">We thoroughly analyze your organization’s unique requirements, ensuring that every solution is tailored to meet your specific business needs. Our approach involves exploring the user journey, from concept development to risk evaluation and competitor analysis, to create solutions that align with your goals. In addition, our team offers expert guidance on choosing the most appropriate technology stack, providing a comprehensive evaluation of each option's advantages and drawbacks, setting your software development project up for success.</p>
        </div>
        <div className="w-1/3 bg-purple-100 rounded-2xl">
          <h4 className="text-3xl font-semibold text-slate-700 mt-10 mx-10">Custom software development</h4>
          <p className="mx-10 mt-3 mb-10 text-justify">For us, custom software development is about crafting flawless, scalable, and truly unique solutions, whether they are web or mobile products, all designed to perfectly align with your distinctive business vision and company culture, or even meet your personal needs. When off-the-shelf solutions fall short, we ensure you remain connected with your customers and can address any internal challenges that come up throughout your business journey. Your success is our mission, custom-tailored to meet your exact requirements.</p>
        </div>
        <div className="w-1/3 bg-purple-100 rounded-2xl">
          <h4 className="text-3xl font-semibold text-slate-700 mt-10 mx-10">Software development consulting</h4>
          <p className="mx-10 mt-3 mb-10 text-justify">We thoroughly analyze your organization’s unique requirements, ensuring that every solution is tailored to meet your specific business needs. Our approach involves exploring the user journey, from concept development to risk evaluation and competitor analysis, to create solutions that align with your goals. In addition, our team offers expert guidance on choosing the most appropriate technology stack, providing a comprehensive evaluation of each option's advantages and drawbacks, setting your software development project up for success.</p>
        </div>
        
        </div>
        <div className="flex flex-row items-center justify-center mx-10 gap-5 mt-5">
        <div className="w-1/3 bg-purple-100 rounded-2xl">
          <h4 className="text-3xl font-semibold text-slate-700 mt-10 mx-10">Software development consulting</h4>
          <p className="mx-10 mt-3 mb-10 text-justify">We thoroughly analyze your organization’s unique requirements, ensuring that every solution is tailored to meet your specific business needs. Our approach involves exploring the user journey, from concept development to risk evaluation and competitor analysis, to create solutions that align with your goals. In addition, our team offers expert guidance on choosing the most appropriate technology stack, providing a comprehensive evaluation of each option's advantages and drawbacks, setting your software development project up for success.</p>
        </div>
        <div className="w-1/3 bg-purple-100 rounded-2xl">
          <h4 className="text-3xl font-semibold text-slate-700 mt-10 mx-10">Software development consulting</h4>
          <p className="mx-10 mt-3 mb-10 text-justify">We thoroughly analyze your organization’s unique requirements, ensuring that every solution is tailored to meet your specific business needs. Our approach involves exploring the user journey, from concept development to risk evaluation and competitor analysis, to create solutions that align with your goals. In addition, our team offers expert guidance on choosing the most appropriate technology stack, providing a comprehensive evaluation of each option's advantages and drawbacks, setting your software development project up for success.</p>
        </div>
        <div className="w-1/3 bg-purple-100 rounded-2xl">
          <h4 className="text-3xl font-semibold text-slate-700 mt-10 mx-10">Software development consulting</h4>
          <p className="mx-10 mt-3 mb-10 text-justify">We thoroughly analyze your organization’s unique requirements, ensuring that every solution is tailored to meet your specific business needs. Our approach involves exploring the user journey, from concept development to risk evaluation and competitor analysis, to create solutions that align with your goals. In addition, our team offers expert guidance on choosing the most appropriate technology stack, providing a comprehensive evaluation of each option's advantages and drawbacks, setting your software development project up for success.</p>
        </div>
        
        </div>
    </div>
  )
}

export default page