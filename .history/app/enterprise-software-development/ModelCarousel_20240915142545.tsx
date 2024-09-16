import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface CarouselItemProps {
  title: string
  description: string
}

interface ModelCarouselProps {
  items: CarouselItemProps[]
}

export function ModelCarousel({ items }: ModelCarouselProps) {
  return (
    <Carousel className="w-[80%] bg-purple-100 rounded-2xl border-purple-200 border-[1px] h-[340px]">
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div>
                <span className="text-4xl font-semibold">{item.title}</span>
                <p>{item.description}</p>
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

// Example usage
