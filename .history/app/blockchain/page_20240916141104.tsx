"use client";

import React, { useState } from 'react';

import { useRouter } from 'next/navigation';

import Header from '../Header';
import ClientCarousel from '../ClientCarousel';
import { SeparatorPurple } from '@/components/ui/separator-purple';

import { ProjectCards } from '../ProjectCards';
import Footer from '../Footer';



import ContactSection from '../ContactSection';


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
                <h1 className="text-white font-sans text-4xl md:text-6xl font-semibold md:leading-[72px] mr-20">Blockchain Development</h1>
                <h5 className="text-white font-sans text-xl font-light tracking-tight mt-7">We leverage blockchain technology for solutions that make company operations more efficient and pave the way for game-changing innovation. Increase your revenue and prepare your organization for the digital economy of the future.</h5>
               
                <p className="text-slate-400 font-light pt-5">Driving the future with advanced, customized solutions that empower innovation and shape the digital landscape</p>
            </div>
            
        </div>
        <ClientCarousel />
        <div className="flex flex-col items-center justify-center text-5xl text-center font-semibold mt-20"><div className="font-light text-xs bg-purple-100 border-[1px] border-purple-200 rounded-full px-2 py-1">Blockchain Development</div><h3 className="text-2xl md:text-5xl">Services we provide</h3><p className="font-light mt-5 text-sm md:text-lg mx-20 md:mx-72">We design solutions that transform the digital landscape for businesses, ranging from early-stage startups to Fortune 500 companies.</p></div>
        <div className="flex flex-col items-center justify-center mx-10 gap-5 mt-10 bg-purple-100 px-10 py-10 rounded-2xl">
        <div className="flex flex-col md:flex-row items-start justify-between ">
          <div className="md:w-[40%] mx-2 my-2 md:mx-0"><h5 className="text-2xl font-semibold">Custom blockchain app development</h5></div>
          <div className="md:w-[60%]"><p className="text-justify">Nexus provides full-cycle development to deliver products that help you secure transactions, control digital assets, and protect your entire ecosystem.</p></div>
        </div>
        <SeparatorPurple />
        <div className="flex md:flex-row flex-col items-start justify-between ">
          <div className="md:w-[40%] mx-2 my-2 md:mx-0 flex items-start justify-between"><h5 className="text-2xl font-semibold">Smart contracts development</h5></div>
          <div className="md:w-[60%]"><p className="text-justify">Automation is our forte. With blockchain, this translates to smart contracts that streamline services and deter fraudulent transactions.</p></div>
        </div>
        <SeparatorPurple />
        <div className="flex md:flex-row flex-col items-start justify-between ">
          <div className="md:w-[40%] mx-2 my-2 md:mx-0"><h5 className="text-2xl font-semibold">Crypto exchange and wallet development</h5></div>
          <div className="md:w-[60%]"><p className="text-justify">Our team knows how to craft and tailor secure, UX-friendly cryptocurrency wallets and exchange apps, paired with top-notch customer support.</p></div>
        </div>
        <SeparatorPurple />
        <div className="flex md:flex-row flex-col items-start justify-between ">
          <div className="md:w-[40%] mx-2 my-2 md:mx-0"><h5 className="text-2xl font-semibold">Decentralized (dApp) development</h5></div>
          <div className="md:w-[60%]"><p className="text-justify">We deploy decentralized applications for clients interested in tapping opportunities like cryptocurrency, advanced supply chain data tracking, and middleman exclusion.</p></div>
        </div>
        <SeparatorPurple />
        <div className="flex md:flex-row flex-col items-start justify-between ">
          <div className="md:w-[40%] mx-2 my-2 md:mx-0"><h5 className="text-2xl font-semibold">Decentralized (dApp) development</h5></div>
          <div className="md:w-[60%]"><p className="text-justify">We deploy decentralized applications for clients interested in tapping opportunities like cryptocurrency, advanced supply chain data tracking, and middleman exclusion.</p></div>
        </div>
        
       
        
        </div>
       
        <ProjectCards />
       {/* } <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center mt-20 mx-20">
            <h3 className="font-semibold text-4xl text-slate-800">Cloud Deployment Models</h3>
            
            <h5 className="font-normal text-2xl px-32 pr-64 text-slate-800">We provide flexible collaboration options tailored to suit your current situation.</h5>
          </div>
          <div className="w-full flex flex-row items-center justify-center px-20 mt-10 gap2-">
</div>
        </div> */}
        <ContactSection />
        <Footer />
      
    </div>
  )
}

export default page