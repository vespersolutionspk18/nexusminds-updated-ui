import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Separator } from "@/components/ui/separator"

export function ModelCarousel() {
  const items = [
    { precursor: "Scenario 1", title: "Staff Augmentation", description: "If you already have a team in place, our staff augmentation services can provide the additional support required to tackle specific technical challenges, address skill gaps, and elevate your projects to the next level. This delivery model focuses on flexibility and rapid deployment, making it ideal for scenarios where time is crucial. Whether you need specialized expertise or extra resources to help your team navigate a sprint, our staff augmentation solutions are tailored to meet your exact requirements." },
    { precursor: "Scenario 2", title: "Dedicated Team", description: "Looking for a dedicated team of engineers to support your business throughout an entire project or for an extended period? Count on us to assemble a team customized to your precise requirements, including specialized skills and industry expertise. This solution is perfect for large-scale, long-term projects where you want to enhance your in-house team with an external group, avoiding the time and expense of local recruitment. It’s especially useful if you already have on-site engineers but need additional support for a specific project phase or want to simplify your management duties." },
    { precursor: "Scenario 3", title: "Virtual CTO", description: "Need increased involvement in planning and estimation? We provide CTO as a Service (CTOaaS), offering you access to an experienced technology leader who can support product development, clearly convey technical details to investors, evaluate quality, and develop technical roadmaps for your project." },
    { precursor: "Scenario 4", title: "Project Outsourcing", description: "Occasionally, you have a project in mind and are looking for a reliable outsourcing partner to assist with defining the scope of work. We can collaborate with you to oversee your digital journey from inception to completion, allowing your core team to focus on other important priorities." },
  ]

  return (
    <Carousel className="w-[100%] max-w-[100%] bg-white rounded-2xl border-gray-200 border-[2px] ">
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div className=" md:px-0 py-5 md:py-10 px-5 flex flex-col md:flex-row items-start justify-between">
                <div className="md:w-[30%]"><h3 className=" font-semibold md:px-10 text-2xl md:text-4xl text-slate-800">{item.precursor}</h3></div>
                <div><Separator orientation="vertical"/></div>
                <div className="md:w-[70%] flex flex-col md:gap-10 items-start justify-center"><span className="text-2xl font-semibold text-slate-800">{item.title}</span>
                <p className="text-slate-800 pr-20 text-lg">{item.description}</p></div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}