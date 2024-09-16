"use client";

import React, { useState, useEffect } from 'react';
import RightArrow from "@/public/assets/right.svg"; 
import ButtonArrow from "@/public/assets/buttonarrow.svg"; 
import { useRouter } from 'next/navigation';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const FaqSection = () => {
    const router = useRouter();
 
  
    const getInTouchClick = () => {
      router.push('/contact');
    };
  
    

  return (
    <div className="px-10 mt-32">
        <div className="flex lg:flex-row flex-col justify-center w-full">
            <div className="w-full lg:w-[40%] flex flex-col items-center justify-center lg:items-start lg:justify-start">
                <h3 className="text-3xl text-center lg:text-start lg:text-5xl font-semibold text-slate-800">You have questions?<br></br><span className="font-normal">We have answers</span></h3>
                <p className="lg:text-xl md:text-lg text-md text-slate-800 font-light mt-8 lg:mr-64 text-center lg:text-start ">Have a question that is not answered? You can contact us at
                info@nexusmindstech.com</p>
                <div id="button container" className="lg:mt-10 mt-3 mb-10 lg:mb-0">
                <div
                id="button"
                className="group bg-[#8B00FF] h-[44px] flex-row font-sans text-white text-[16px] py-1 px-1 font-regular rounded-full flex items-center justify-between w-[165px] transition-width duration-500 ease-in-out hover:transition-width hover:ease-in-out hover:w-[180px]"
                onClick={getInTouchClick}
                    >
                <div className="ml-3 text-lg">
                Get in Touch 
                </div>
                <div className="bg-white rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45">
                <ButtonArrow className="h-[24px] w-[24px]" />
                </div>
                </div>
                </div>
            </div>
            <div className="lg:w-[60%] w-full">
                <Accordion type="single" collapsible className="w-full">
                    <div className="flex flex-col gap-5">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Who we are?</AccordionTrigger>
                            <AccordionContent>
                            Nexus Minds is a global collective of engineering and innovation experts, committed to partnering with clients to drive industry-wide transformation. Our deep technical expertise and unwavering commitment position us as a strategic partner, capable of taking businesses from concept to IPO, while establishing new industry benchmarks along the way.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>What drives us?</AccordionTrigger>
                            <AccordionContent>
                            Our mission is to equip technology leaders with the exceptional talent required to fast-track their strategic roadmap, drive innovation with greater speed and efficiency, and scale their operations to new levels of success.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Why choose Nexus?</AccordionTrigger>
                            <AccordionContent>
                            At Nexus, we are as committed to our clients' vision as we are to the software we create. With over 20 years of experience, we take pride in using our expertise to help innovators turn their ideas into impactful products that enhance user experiences and transform industries on a large scale.
                            </AccordionContent>
                        </AccordionItem>
                    </div>
                </Accordion>
            </div>
        </div>
    </div>
  )
}

export default FaqSection