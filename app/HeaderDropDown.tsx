"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { IoMdMenu } from "react-icons/io";
import Link from 'next/link';
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator";



export function HeaderDropDown() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-auto justify-center"
        >
          
          <IoMdMenu className=" h-5 w-5 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto bg-white p-0 mx-5">
        <Command>
          
          <CommandList>
            <div className="flex flex-col px-3 py-3 text-slate-800 text-lg">
            
            <a href="/"><p>Home</p></a>
            <Separator />
            <Link href="/#servicessection"><p>Services</p></Link>
            <Separator />
            <a href="/about"><p>About</p></a>
            <Separator />
            <a href="/contact"><p>Contact</p></a>
            <Separator />
            </div>
            
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
