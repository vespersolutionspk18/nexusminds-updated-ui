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
                <h1 className="text-white font-sans text-4xl md:text-6xl font-semibold md:leading-[72px] mr-20">Mobile Development</h1>
                <h5 className="text-white font-sans text-xl font-light tracking-tight mt-7">To achieve success in mobile app development, it's essential to have both sleek design and a seamless user experience, along with a deep awareness of the intense competition in your app store category. Nexus provides the ideal blend of technical skills and in-depth understanding of the competitive mobile market.</h5>
               
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
          <div className="md:w-[40%] mx-2 my-2 md:mx-0"><h5 className="text-2xl font-semibold">Cloud Migration</h5></div>
          <div className="md:w-[60%]"><p className="text-justify">Seamlessly transition your applications to the cloud with our complete migration services. We set CI/CD pipelines, test and optimize systems rigorously, minimize disruptions, and maximize performance in the cloud service of your choice. This includes comprehensive post-migration support with advanced system monitoring tools.</p></div>
        </div>
        <SeparatorPurple />
        <div className="flex md:flex-row flex-col items-start justify-between ">
          <div className="md:w-[40%] mx-2 my-2 md:mx-0"><h5 className="text-2xl font-semibold">Modernization</h5></div>
          <div className="md:w-[60%]"><p className="text-justify">Optimize your existing cloud-based applications and infrastructure to maximize their potential. We overhaul your outdated cloud apps, suggest new cloud technologies, and implement modern development practices — serverless computing, containers, microservices — that your current cloud architecture might be missing.</p></div>
        </div>
        <SeparatorPurple />
        <div className="flex md:flex-row flex-col items-start justify-between ">
          <div className="md:w-[40%] mx-2 my-2 md:mx-0"><h5 className="text-2xl font-semibold">Support & Maintenance</h5></div>
          <div className="md:w-[60%]"><p className="text-justify">Ensure the continuous functionality and enhancement of your cloud applications with premier maintenance systems you can trust. With 24/7 support and a commitment to continuous improvement, we keep your cloud systems running smoothly and evolving with your business needs through regular upgrades — plus robust backup and recovery strategies for that extra, always welcome layer of redundancy.</p></div>
        </div>
       
        
        </div>
       
        <ProjectCards />
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center mt-20 mx-20">
            <h3 className="font-semibold text-4xl text-slate-800">Cloud Deployment Models</h3>
            
            <h5 className="font-normal text-2xl px-32 pr-64 text-slate-800">We provide flexible collaboration options tailored to suit your current situation.</h5>
          </div>
          <div className="w-full flex flex-row items-center justify-center px-20 mt-10 gap2-">
</div>
        </div>
        <ContactSection />
        <Footer />
      
    </div>
  )
}

export default page