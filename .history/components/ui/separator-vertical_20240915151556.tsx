"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const SeparatorVertical = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "vertical", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-[#e5e5e5]",
        orientation === "vertical" ? "h-full w-[1px]" : "h-[1px] w-full",
        className
      )}
      {...props}
    />
  )
)
SeparatorVertical.displayName = SeparatorPrimitive.Root.displayName

export { SeparatorVertical }
