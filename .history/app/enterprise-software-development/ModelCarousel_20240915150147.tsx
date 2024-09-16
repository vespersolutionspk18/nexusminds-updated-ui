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
    { title: "Staff Augmentation", description: "If you already have a team in place, our staff augmentation services can provide the additional support required to tackle specific technical challenges, address skill gaps, and elevate your projects to the next level. This delivery model focuses on flexibility and rapid deployment, making it ideal for scenarios where time is crucial. Whether you need specialized expertise or extra resources to help your team navigate a sprint, our staff augmentation solutions are tailored to meet your exact requirements." },
    { title: "Title 2", description: "Description 2" },
    { title: "Title 3", description: "Description 3" },
    { title: "Title 4", description: "Description 4" },
    { title: "Title 5", description: "Description 5" },
  ]

  return (
    <Carousel className=" bg-white rounded-2xl border-gray-200 border-[2px] ">
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div className="px-10 py-10 flex flex-row items-start justify-between">
                <div><h3>Scenario 1</h3></div>
                <div className="flex  flex-col gap-10 items-start justify-center"><span className="text-4xl font-semibold text-slate-800">{item.title}</span>
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