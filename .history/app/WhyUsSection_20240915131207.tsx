"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaCode } from "react-icons/fa6";
import { IoIosCloudOutline } from "react-icons/io";
import { useRouter } from 'next/navigation';
import { TbWorldWww } from "react-icons/tb";
import { LuBrainCircuit } from "react-icons/lu";
import { FaMobileScreen } from "react-icons/fa6";

const WhyUsSection = () => {
    const router = useRouter();
 
    const esdClick = () => {
      router.push('/enterprise-software-development');
    };

    return (
      <div className="flex flex-col justify-center items-center">
        <div className="md:mt-20 mt-10">
          <h3 className="text-3xl md:text-5xl font-semibold text-center">Nexus Minds → New Horizons</h3>
        </div>
        <div>
          <h4 className="text-lg md:text-2xl font-light mt-2 md:mt-5">Everything you need in one place</h4>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-10 w-full px-10">
          <div className="bg-purple-100 w-full md:w-1/3 rounded-2xl flex flex-col items-center justify-between pt-10 px-10">
            <h3 className="text-2xl font-medium text-center">Bespoke, Tailored, and Customised Solutions</h3>
            <p className="text-center font-light text-slate-800 mt-3">
            </p>
            <div>
              <Image src="/assets/webcube.png" alt="Simple Onboarding" width={320} height={320} />
            </div>
          </div>

          <div className="bg-purple-100 w-full md:w-1/3 rounded-2xl flex flex-col items-center justify-between pt-10 px-10">
            <h3 className="text-2xl font-medium text-center">Pros Who Make Integration and Deployment a Breeze</h3>
            <p className="text-center font-light text-slate-800 mt-3">
            </p>
            <div>
              <Image src="/assets/rocket2.png" alt="Simple Onboarding" width={320} height={320} />
            </div>
          </div>

          <div className="bg-purple-100 w-full md:w-1/3 rounded-2xl flex flex-col items-center justify-between pt-10 px-10">
            <h3 className="text-2xl font-medium text-center">We&apos;re Here for the Long Haul with Continuous Support</h3>
            <p className="text-center font-light text-slate-800 mt-3">
            </p>
            <div className="md:pb-10 pb-5">
              <Image src="/assets/cloudbubble.png" alt="Simple Onboarding" width={320} height={320} />
            </div>
          </div>
        </div>
       
      </div>
    );
}

export default WhyUsSection;