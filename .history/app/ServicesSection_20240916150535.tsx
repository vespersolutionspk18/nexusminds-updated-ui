"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Separator } from '@/components/ui/separator'

const ServicesSection = () => {
    const router = useRouter();
 
    const esdClick = () => {
      router.push('/enterprise-software-development');
    };

  return (
    <div>
        <div className=" rounded-2xl md:ml-10 flex flex-col md:flex-row items-start justify-between pt-20">
        <div className="md:w-1/2"><h3 className="md:pl-10 font-semibold md:text-3xl text-2xl text-slate-800 px-10 ">Expertise</h3></div>
        <div className="md:w-1/2 w-full flex flex-row  md:pr-24 items-start justify-start gap-0 mt-5 md:mt-0 px-10 md:px-0">
            <div className="flex flex-col gap-3  w-1/2 h-full items-start ">
                <h4 className="font-medium text-xl md:text-2xl underline text-slate-800 hover:text-purple-700">Software Development</h4>
                <h4 className="font-medium text-xl md:text-2xl underline text-slate-800 hover:text-purple-700">Web Development</h4>
                <h4 className="font-medium text-xl md:text-2xl underline text-slate-800 hover:text-purple-700">Mobile Development</h4>
                <h4 className="font-medium text-xl md:text-2xl underline text-slate-800 hover:text-purple-700">Cloud Computing</h4>
                <h4 className="font-medium text-xl md:text-2xl underline text-slate-800 hover:text-purple-700">Startup Services</h4>
            </div>
            <div className="flex flex-col md:gap-3  w-1/2 h-full items-start md:pl-10">
                <h4 className="font-medium text-xl md:text-2xl underline text-slate-800 hover:text-purple-700">Blockchain</h4>
                <h4 className="font-medium text-xl md:text-2xl underline text-slate-800 hover:text-purple-700">Artificial Intelligence</h4>
                <h4 className="font-medium text-xl md:text-2xl underline text-slate-800 hover:text-purple-700">ERP Consulting</h4>
                <h4 className="font-medium text-xl md:text-2xl underline text-slate-800 hover:text-purple-700">IoT Solutions</h4>
                <h4 className="font-medium text-xl md:text-2xl underline text-slate-800 hover:text-purple-700">UI/UX</h4>
            </div>
            
        </div>
        
    </div>
    
    <div className="mx-10 mt-10"><Separator /></div>
    </div>
  )
}

export default ServicesSection