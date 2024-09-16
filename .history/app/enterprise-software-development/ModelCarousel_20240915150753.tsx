import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function ModelCarousel() {
  const items = [
    { precursor: "Scenario 1", title: "Staff Augmentation", description: "If you already have a team in place, our staff augmentation services can provide the additional support required to tackle specific technical challenges, address skill gaps, and elevate your projects to the next level. This delivery model focuses on flexibility and rapid deployment, making it ideal for scenarios where time is crucial. Whether you need specialized expertise or extra resources to help your team navigate a sprint, our staff augmentation solutions are tailored to meet your exact requirements." },
    { precursor: "Scenario 2", title: "Dedicated Team", description: "Description 2" },
    { precursor: "Scenario 3", title: "Title 3", description: "Description 3" },
    { precursor: "Scenario 4", title: "Title 4", description: "Description 4" },
    { precursor: "Scenario 5", title: "Title 5", description: "Description 5" },
  ]

  return (
    <Carousel className="w-[100%] max-w-[100%] bg-white rounded-2xl border-gray-200 border-[2px] ">
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div className=" px-0 py-10 flex flex-row items-start justify-between">
                <div className="w-[30%]"><h3 className=" font-semibold px-10 text-4xl text-slate-800">{item.precursor}</h3></div>
                <div className="w-[70%] flex flex-col gap-10 items-start justify-center"><span className="text-2xl font-semibold text-slate-800">{item.title}</span>
                <p className="text-slate-800">{item.description}</p></div>
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