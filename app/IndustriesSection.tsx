"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Separator } from '@/components/ui/separator'

const IndustriesSection = () => {
    const router = useRouter();
 
    const esdClick = () => {
      router.push('/enterprise-software-development');
    };

  return (
    <div>
        <div className=" rounded-2xl ml-10 flex flex-col md:flex-row items-start justify-between pt-10">
        <div className="md:w-1/2"><h3 className="md:pl-10 font-semibold md:text-3xl text-2xl text-slate-800 px-10">Industries</h3></div>
        <div className="md:w-1/2 w-full flex flex-row  md:pr-24 items-start justify-start gap-0 mt-5 md:mt-0 px-10 md:px-0">
            <div className="flex flex-col gap-3  w-1/2 h-full items-start">
                <h4 className="font-medium text-xl md:text-2xl underline text-slate-800 hover:text-purple-700">Finance</h4>
                <h4 className="font-medium text-xl md:text-2xl underline text-slate-800 hover:text-purple-700">Manufacturing</h4>
                <h4 className="font-medium text-xl md:text-2xl underline text-slate-800 hover:text-purple-700">Agriculture</h4>
                <h4 className="font-medium text-xl md:text-2xl underline text-slate-800 hover:text-purple-700">Health</h4>
                
            </div>
            <div className="flex flex-col gap-3  w-1/2 h-full items-start pl-10">
                <h4 className="font-medium text-xl md:text-2xl underline text-slate-800 hover:text-purple-700">Textile</h4>
                <h4 className="font-medium text-xl md:text-2xl underline text-slate-800 hover:text-purple-700">Marketing & Retail</h4>
                <h4 className="font-medium text-xl md:text-2xl underline text-slate-800 hover:text-purple-700">Automotive</h4>
                <h4 className="font-medium text-xl md:text-2xl underline text-slate-800 hover:text-purple-700">Food & Beverages</h4>
               
            </div>
            
        </div>
        
    </div>
    
    <div className="mx-10 mt-10"><Separator /></div>
    </div>
  )
}

export default IndustriesSection