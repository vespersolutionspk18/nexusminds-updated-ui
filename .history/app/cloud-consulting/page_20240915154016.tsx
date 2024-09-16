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
import HowWeWork from '../HowWeWork';
import { ProjectCards } from '../ProjectCards';
import Footer from '../Footer';
import { ModelCarousel } from '../enterprise-software-development/ModelCarousel';
import { Separator } from '@/components/ui/separator';
import { SeparatorVertical } from '@/components/ui/separator-vertical';
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
                <h1 className="text-white font-sans text-4xl md:text-6xl font-semibold md:leading-[72px] mr-20">Cloud Consulting</h1>
                <h5 className="text-white font-sans text-xl font-light tracking-tight mt-7">Elevate your infrastructure with our cloud development services. Our expert teams are equipped to assist your company in smoothly migrating digital assets, resources, apps, services, and databases to any cloud platform or in developing a new, powerful cloud-based solution to address your most pressing business challenges.</h5>
               
                <p className="text-slate-400 font-light pt-5">Driving the future with advanced, customized solutions that empower innovation and shape the digital landscape</p>
            </div>
            
        </div>
        <ClientCarousel />
        <div className="flex flex-col items-center justify-center text-5xl text-center font-semibold mt-20"><div className="font-light text-xs bg-purple-100 border-[1px] border-purple-200 rounded-full px-2 py-1">Cloud Consulting</div><h3 className="text-2xl md:text-5xl">Services we provide</h3><p className="font-light mt-5 text-sm md:text-lg mx-20 md:mx-72">We design solutions that transform the digital landscape for businesses, ranging from early-stage startups to Fortune 500 companies.</p></div>
        <div className="flex flex-col items-center justify-center mx-10 gap-5 mt-10 bg-purple-100 px-10 py-10 rounded-2xl">
        <div className="flex flex-col md:flex-row items-start justify-between ">
          <div className="md:w-[40%] mx-2 my-2 md:mx-0"><h5 className="text-2xl font-semibold">Consulting</h5></div>
          <div className="md:w-[60%]"><p className="text-justify">Discover the benefits of cloud technology with Nexus&apos; consulting services. Our specialists will support you through all stages of strategic planning, design, and deployment. This encompasses selecting the right tech stack, ensuring compliance with regulations (such as FDA, HIPAA, PCI DSS), and crafting customized strategies to enhance your cloud services.</p></div>
        </div>
        <SeparatorPurple />
        <div className="flex md:flex-row flex-col items-start justify-between ">
          <div className="md:w-[40%] mx-2 my-2 md:mx-0"><h5 className="text-2xl font-semibold">Development</h5></div>
          <div className="md:w-[60%]"><p className="text-justify">Embark on your cloud transformation journey with cloud app development services that grow with your business. Be it cloud-native development and apps, cloud-based solutions, or cloud-enabled systems, our cloud architectures are robust, reliable, and scalable for startups and enterprises alike.</p></div>
        </div>
        <SeparatorPurple />
        <div className="flex md:flex-row flex-col items-start justify-between ">
          <div className="md:w-[40%] mx-2 my-2 md:mx-0]"><h5 className="text-2xl font-semibold">Software product development</h5></div>
          <div className="md:w-[60%]"><p className="text-justify">Software product development requires unwavering commitment and meticulous attention to detail, from the early phases of prototyping and design through development, testing, deployment, and support. But our involvement doesn&apos;t end there. Our dedication covers the entire lifecycle, ensuring thorough testing, smooth deployment, and continuous post-launch support. It&apos;s all about delivering an outstanding product experience through a fully tailored, comprehensive approach.</p></div>
        </div>
        <SeparatorPurple />
        <div className="flex md:flex-row flex-col items-start justify-between ">
          <div className="md:w-[40%] mx-2 my-2 md:mx-0"><h5 className="text-2xl font-semibold">Software enhancement</h5></div>
          <div className="md:w-[60%]"><p className="text-justify">To ensure your software stands out in the market, our development services focus on fine-tuning and optimizing your solutions using cutting-edge technologies like AI, AR/VR, blockchain, and IoT. We also enhance UI/UX for better intuitiveness, bolster security, and quickly identify and resolve bugs. Additionally, we improve speed and responsiveness, while ensuring compatibility across multiple operating systems and devices.</p></div>
        </div>
        <SeparatorPurple />
        <div className="flex md:flex-row flex-col items-start justify-between ">
          <div className="md:w-[40%] mx-2 my-2 md:mx-0"><h5 className="text-2xl font-semibold">Software integration services</h5></div>
          <div className="md:w-[60%]"><p className="text-justify">We specialize in API development and integrating third-party services, including CRM, payment systems, ERP, DMS, and EHR. However, our expertise extends far beyond these areas, addressing a wide range of technological needs tailored to your goals, preferences, business requirements, tech stack, or industry. We apply the latest industry best practices to overcome all your implementation and software integration challenges, from architectural design to post-launch support. With our help, you’ll experience a seamless transition to upgraded systems and optimized performance, ensuring a maximum return on investment.</p></div>
        </div>
        <SeparatorPurple />
        <div className="flex md:flex-row flex-col items-start justify-between ">
          <div className="md:w-[40%] mx-2 my-2 md:mx-0]"><h5 className="text-2xl font-semibold">Software modernization</h5></div>
          <div className="md:w-[60%]"><p className="text-justify">We ensure efficient updates to your existing solutions and implement solid architectural enhancements. Our process begins with a thorough evaluation of your software, including document analysis and code review. Based on this, our team pinpoints key areas for modernization. Whether it’s code refactoring or cloud migration, we develop a customized strategy that aligns with your needs. We promise a smooth system modernization while maintaining the core integrity of your original software. And if you prefer Agile and DevOps methodologies, we’re fully equipped to support those as well.</p></div>
        </div>
        
        </div>
        <HowWeWork />
        <ProjectCards />
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center mt-20 mx-20">
            <h3 className="font-semibold text-4xl text-slate-800">Choose your model</h3>
            <SeparatorVertical orientation="vertical"/>
            <h5 className="font-normal text-2xl px-64 text-slate-800">We provide flexible collaboration options tailored to suit your current situation.</h5>
          </div>
          <div className="w-full flex flex-row items-center justify-center px-20 mt-10 gap2-"><ModelCarousel />
</div>
        </div>
        <ContactSection />
        <Footer />
      
    </div>
  )
}

export default page