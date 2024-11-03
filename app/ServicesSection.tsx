"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Separator } from '@/components/ui/separator'

const ServicesSection = () => {
    const router = useRouter();
 
    const softwareClick = () => {
      router.push('/services?tab=software-development');
    };
    const cloudClick = () => {
      router.push('/services?tab=cloud-consulting');
    };
    const webClick = () => {
      router.push('/services?tab=web-development');
    };
    const mobileClick = () => {
      router.push('/services?tab=mobile-development');
    };
    const startupClick = () => {
      router.push('/services?tab=startup-services');
    };
    const blockchainClick = () => {
      router.push('/services?tab=blockchain-development');
    };
    const artificialintelligenceClick = () => {
      router.push('/services?tab=artificial-intelligence');
    };
    const erpClick = () => {
      router.push('/services?tab=erp-consulting');
    };
    const iotClick = () => {
      router.push('/services?tab=iot-solutions');
    };

  return (
    <div id="servicessection">
        <div className=" rounded-2xl md:ml-10 flex flex-col md:flex-row items-start justify-between pt-10">
        <div className="md:w-1/2"><h3 className="md:pl-10 font-semibold md:text-3xl text-2xl text-slate-800 px-10">Expertise</h3></div>
        <div className="md:w-1/2 w-full flex flex-row  md:pr-24 items-start justify-start gap-0 mt-5 md:mt-0 px-10 md:px-0">
            <div className="flex flex-col gap-3  w-1/2 h-full items-start">
                <h4 className="font-medium text-lg md:text-2xl underline text-slate-800 hover:text-purple-700 cursor-pointer" onClick={softwareClick}>Software Development</h4>
                <h4 className="font-medium text-lg md:text-2xl underline text-slate-800 hover:text-purple-700 cursor-pointer" onClick={webClick}>Web Development</h4>
                <h4 className="font-medium text-lg md:text-2xl underline text-slate-800 hover:text-purple-700 cursor-pointer" onClick={mobileClick}>Mobile Development</h4>
                <h4 className="font-medium text-lg md:text-2xl underline text-slate-800 hover:text-purple-700 cursor-pointer" onClick={cloudClick}>Cloud Computing</h4>
                <h4 className="font-medium text-lg md:text-2xl underline text-slate-800 hover:text-purple-700 cursor-pointer" onClick={startupClick}>Startup Services</h4>
            </div>
            <div className="flex flex-col gap-3  w-1/2 h-full items-start pl-10">
                <h4 className="font-medium text-lg md:text-2xl underline text-slate-800 hover:text-purple-700 cursor-pointer" onClick={blockchainClick}>Blockchain</h4>
                <h4 className="font-medium text-lg md:text-2xl underline text-slate-800 hover:text-purple-700 cursor-pointer" onClick={artificialintelligenceClick}>Artificial Intelligence</h4>
                <h4 className="font-medium text-lg md:text-2xl underline text-slate-800 hover:text-purple-700 cursor-pointer" onClick={erpClick}>ERP Consulting</h4>
                <h4 className="font-medium text-lg md:text-2xl underline text-slate-800 hover:text-purple-700 cursor-pointer" onClick={iotClick}>IoT Solutions</h4>
                
            </div>
            
        </div>
        
    </div>
    
    <div className="mx-10 mt-10"><Separator /></div>
    </div>
  )
}

export default ServicesSection