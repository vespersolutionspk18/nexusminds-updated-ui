"use client";

import React, { useState } from 'react';

import { useRouter } from 'next/navigation';

import Header from '../Header';
import ClientCarousel from '../ClientCarousel';
import { SeparatorPurple } from '@/components/ui/separator-purple';

import { ProjectCards } from '../ProjectCards';
import Footer from '../Footer';



import ContactSection from '../ContactSection';


const Page = () => {
  const router = useRouter();
  
    const getInTouchClick = () => {
      router.push('/contact');
    };
  return (
    <div>
      <Header />
<div className=" mx-5 md:mx-10 flex flex-row  my-2 rounded-3xl bg-radial-gradient pt-16 md:pt-32  pb-16">
            <div id="left content of hero" className="mx-10 md:mx-20 my-5 md:my-10 w-full ">
                <h1 className="text-white font-sans text-4xl md:text-6xl font-semibold md:leading-[72px] mr-20">Services for startups</h1>
                <h5 className="text-white font-sans text-xl font-light tracking-tight mt-7">Startups frequently need to pivot or scale quickly, requiring built-in adaptability and partners who can move in sync with them as circumstances evolve. Nexus provides exactly that kind of support, offering a thorough understanding of your technical needs at each phase and engineering teams that share your ambition.</h5>
               
                <p className="text-slate-400 font-light pt-5">Driving the future with advanced, customized solutions that empower innovation and shape the digital landscape</p>
            </div>
            
        </div>
        <ClientCarousel />
        <div className="flex flex-col items-center justify-center text-5xl text-center font-semibold mt-20"><div className="font-light text-xs bg-purple-100 border-[1px] border-purple-200 rounded-full px-2 py-1">Startup Services</div><h3 className="text-2xl md:text-5xl">Services we provide</h3><p className="font-light mt-5 text-sm md:text-lg mx-20 md:mx-72">We design solutions that transform the digital landscape for businesses, ranging from early-stage startups to Fortune 500 companies.</p></div>
        <div className="flex flex-col items-center justify-center mx-5 md:mx-10 gap-5 mt-10 bg-purple-100 px-10 py-10 rounded-2xl">
        <div className="flex flex-col md:flex-row items-start justify-between ">
          <div className="md:w-[40%] mx-0 my-2 md:mx-0"><h5 className="text-2xl font-semibold">CTO as a Service</h5></div>
          <div className="md:w-[60%]"><p className="text-justify">Hiring in-house technical leadership is a slow process, and sometimes you need guidance before you’re ready to hire a full-time CTO.
          That&apos;s the perfect time to tap our CTO for support for everything from choosing a tech stack to planning your next steps.</p></div>
        </div>
        <SeparatorPurple />
        <div className="flex md:flex-row flex-col items-start justify-between ">
          <div className="md:w-[40%] mx-0 my-2 md:mx-0"><h5 className="text-2xl font-semibold">Software Development Services</h5></div>
          <div className="md:w-[60%]"><p className="text-justify">We bring 20+ years of experience to our software development services.
          Whether you need full-cycle application development support or time-saving integrations, Nexus equips you with the expertise you need to outpace the competition.</p></div>
        </div>
        <SeparatorPurple />
        <div className="flex md:flex-row flex-col items-start justify-between ">
          <div className="md:w-[40%] mx-0 my-2 md:mx-0"><h5 className="text-2xl font-semibold">Advisory & Consulting</h5></div>
          <div className="md:w-[60%]"><p className="text-justify">Our consultants provide strategic guidance and technical expertise to help you build a roadmap and navigate the complexities of IT services for startups — and transform technical challenges into growth opportunities.
          Starting with a deep dive into your business requirements, we’ll help you make informed decisions about your investments in technology, from your choice of tech stack to your implementation and launch plans.</p></div>
        </div>
        <SeparatorPurple />
        <div className="flex md:flex-row flex-col items-start justify-between ">
          <div className="md:w-[40%] mx-0 my-2 md:mx-0"><h5 className="text-2xl font-semibold">Scaling Startups</h5></div>
          <div className="md:w-[60%]"><p className="text-justify">Your business already has its feet on the ground and its product on the market.
          Now what? Our comprehensive support can deliver engineering teams and experienced leadership to catapult your business into the next stage of growth.</p></div>
        </div>
        <SeparatorPurple />
        <div className="flex md:flex-row flex-col items-start justify-between ">
          <div className="md:w-[40%] mx-0 my-2 md:mx-0"><h5 className="text-2xl font-semibold">MVP Development</h5></div>
          <div className="md:w-[60%]"><p className="text-justify">With swift iterations, comprehensive testing, and our signature focus on scalability, Vention engineers efficiently navigate every stage of MVP development, from initial concept to a high-performing, market-ready product.</p></div>
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

export default Page