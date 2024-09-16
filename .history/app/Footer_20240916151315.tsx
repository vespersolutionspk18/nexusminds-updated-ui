"use client";

import { NewsletterSignup } from '@/components/newsletter-signup'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

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
        router.push('/enterprise-software-development');
      };
      const cloudClick = () => {
        router.push('/cloud-consulting');
      };
      const aimlClick = () => {
        router.push('/artificial-intelligence');
      };
      const webClick = () => {
        router.push('/web-development');
      };
      const mobileClick = () => {
        router.push('/mobile-development');
      };
      const servicesClick = () => {
        router.push('/#servicesection');
      };

  return (
    <div className="flex flex-col mx-10  rounded-2xl">
        <div className="my-10"><Separator /></div>
        <div id="footer first row" className="flex lg:flex-row flex-col justify-between ">
            <div className="flex flex-col md:flex-row items-start justify-center gap-10 lg:gap-20">
            <div className="flex flex-col">
            <Image src="/assets/nexuslogo.svg" alt="logo" width="230" height="220" onClick={homeClick}/>
            <p className=" text-sm lg:text-base font-light mt-5">3943 Irvine Boulevard,<br></br>Irvine CA 92602,<br></br>United States</p>
            </div>
            <div className="flex flex-col">
            <h4 className="font-medium text-slate-800 text-sm lg:text-base">Navigation</h4>
            <ul className="text-slate-800 font-light text-sm lg:text-base">
                <li onClick={homeClick} className="hover:text-purple-700">Home</li>
                
                <li onClick={homeClick} className="hover:text-purple-700">Services</li>
                <li onClick={aboutClick} className="hover:text-purple-700">About</li>
                <li onClick={contactClick} className="hover:text-purple-700">Contact</li>
            </ul>
            </div>
            <div id="services here">
            <div className="flex flex-col">
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
                <li onClick={esdClick} className="hover:text-purple-700">Blockchain</li>
                <li onClick={cloudClick} className="hover:text-purple-700">Startup Services</li>
                <li onClick={webClick} className="hover:text-purple-700">ERP Consulting</li>
                <li onClick={aimlClick} className="hover:text-purple-700">IoT Solutions</li>
                <li onClick={mobileClick} className="hover:text-purple-700">UI/UX</li>
            </ul>
            </div>
            
            </div>
            </div>
            
            </div>
            <div className="flex items-center">
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