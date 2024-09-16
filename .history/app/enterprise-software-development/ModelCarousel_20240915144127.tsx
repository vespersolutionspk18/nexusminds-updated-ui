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
    { title: "Title 1", description: "Description 1" },
    { title: "Title 2", description: "Description 2" },
    { title: "Title 3", description: "Description 3" },
    { title: "Title 4", description: "Description 4" },
    { title: "Title 5", description: "Description 5" },
  ]

  return (
    <Carousel className="w-[90%] bg-white rounded-2xl border-gray-200 border-[2px] overflow-hidden relative">
      <CarouselContent className="flex">
        {items.map((item, index) => (
          <CarouselItem key={index} className="w-1/2 flex-shrink-0">
            <div className="p-1">
              <div className="px-10 py-10 flex flex-col items-start justify-between">
                <span className="text-4xl font-semibold text-slate-800">{item.title}</span>
                <p className="text-slate-800">{item.description}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10" />
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10" />
    </Carousel>
  )
}