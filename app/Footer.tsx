"use client";

import { NewsletterSignup } from '@/components/newsletter-signup'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Footer = () => {
    const router = useRouter();
 
    const homeClick = () => {
      router.push('/');
    };
    const aboutClick = () => {
        router.push('/about');
      };
      const contactClick = () => {
        router.push('/contact');
      };
      const esdClick = () => {
        router.push('/services?tab=software-development');
      };
      const cloudClick = () => {
        router.push('/services?tab=cloud-consulting');
      };
      const aimlClick = () => {
        router.push('/services?tab=artificial-intelligence');
      };
      const webClick = () => {
        router.push('/services?tab=web-development');
      };
      const mobileClick = () => {
        router.push('/services?tab=mobile-development');
      };
      const servicesClick = () => {
        router.push('/services');
      };
      const blockchainClick = () => {
        router.push('/services?tab=blockchain-development');
      };
      const startupClick = () => {
        router.push('/services?tab=startup-services');
      };
      const erpClick = () => {
        router.push('/services?tab=erp-consulting');
      };
      const iotClick = () => {
        router.push('/services?tab=iot-solutions');
      };
      

  return (
    <div className="flex flex-col mx-5 md:mx-10  rounded-2xl">
        <div className="my-3 md:my-10"><Separator /></div>
        <div id="footer first row" className="flex lg:flex-row flex-col justify-between items-center md:items-normal">
            <div className="flex flex-col md:flex-row items-start justify-center gap-5 lg:gap-20">
            <div className="flex flex-row gap-10">
            <div className="flex flex-col ">
            <Image
  src="/assets/nexuslogo.svg"
  alt="logo"
  
  width={320} // Base width
  height={40} // Base height (aspect ratio will be maintained)
  className="md:w-[320px] md:h-[40px] w-[150px] h-[20px]"
  onClick={homeClick}
/>


            <p className=" text-sm lg:text-base font-light mt-5">7901 4th Street North STE 300,<br></br>St. Petersburg, FL 33702,<br></br>United States</p>
            </div>
            
            <div className="flex flex-col">
            <h4 className="font-medium text-slate-800 text-sm lg:text-base">Navigation</h4>
            <ul className="text-slate-800 font-light text-sm lg:text-base">
                <li onClick={homeClick} className="hover:text-purple-700">Home</li>
                
                <li  className="hover:text-purple-700 cursor-pointer" onClick={servicesClick}>Services</li>
                <li onClick={aboutClick} className="hover:text-purple-700">About</li>
                <li onClick={contactClick} className="hover:text-purple-700">Contact</li>
            </ul>
            </div>
            </div>
            <div className="flex md:hidden w-full h-[1px] bg-gray-200"> </div>
            <div id="services here">
            <div className="flex flex-col my-0 md:my-0">
            <h4 className="font-medium text-slate-800 text-sm lg:text-base">Services</h4>
            <div className="flex flex-row gap-10">
            <ul className="text-slate-800 font-light text-sm lg:text-base">
                <li onClick={esdClick} className="hover:text-purple-700">Software Development</li>
                <li onClick={cloudClick} className="hover:text-purple-700">Cloud Consulting</li>
                <li onClick={webClick} className="hover:text-purple-700">Web Development</li>
                <li onClick={aimlClick} className="hover:text-purple-700">Artificial Intelligence</li>
                <li onClick={mobileClick} className="hover:text-purple-700">Mobile Development</li>
            </ul>
            <ul className="text-slate-800 font-light text-sm lg:text-base">
                <li onClick={blockchainClick} className="hover:text-purple-700">Blockchain</li>
                <li onClick={startupClick} className="hover:text-purple-700">Startup Services</li>
                <li onClick={erpClick} className="hover:text-purple-700">ERP Consulting</li>
                <li onClick={iotClick} className="hover:text-purple-700">IoT Solutions</li>
                
            </ul>
            </div>
            
            </div>
            </div>
            <div className="flex md:hidden w-full h-[1px] bg-gray-200"> </div>
            </div>
            <div className="flex items-center mt-5 md:mt-0">
                <NewsletterSignup />
            </div>
        </div>
        
        <div className="mt-10 mb-2"><Separator /></div>
        <div id="3" className="flex flex-row justify-between  mb-5">
        <div>
            <h3>©2024 Nexus Minds, Inc</h3>
            <p className="font-light text-sm text-slate-800">All Rights Reserved.</p>
        </div>
        </div>
    </div>
  )
}

export default Footer