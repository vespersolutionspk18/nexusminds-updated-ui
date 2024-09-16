import React from 'react'
import Image from "next/image"
import Link from "next/link"
import RightArrow from "@/public/assets/right.svg";
import ButtonArrow from "@/public/assets/buttonarrow.svg";
import { Textarea } from "@/components/ui/textarea"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Footer from '../Components/Footer';
import Header from '../Components/Header';
const page = () => {
  return (
    <div>
      <Header />
        <div className="w-full lg:grid lg:min-h-[800px] lg:grid-cols-2 xl:min-h-[800px]">
        <div id="contains the form" className="mt-20 mx-10">
  <Card className="mx-auto">
    <CardHeader>
      <CardTitle className="text-5xl">Contact Us</CardTitle>
      <CardDescription className="text-lg">
        Get in touch to discuss your project or inquire about our services.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="first-name" className="text-lg text-neutral-800">First name</Label>
            <Input id="first-name" placeholder="Max" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="last-name" className="text-lg text-neutral-800">Last name</Label>
            <Input id="last-name" placeholder="Robinson" required />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email" className="text-lg text-neutral-800">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="company" className="text-lg text-neutral-800">Company</Label>
          <Input id="company" placeholder="Nexus Minds" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message" className="text-lg text-neutral-800">Message</Label>
          <Textarea />
        </div>
        <div className="flex items-center justify-center">
          <div id="button" className="group bg-slate-700 h-[44px] flex-row font-sans text-white text-[16px] py-1 px-1 font-regular rounded-full flex items-center justify-between w-[120px] transition-width duration-500 ease-in-out hover:transition-width hover:ease-in-out hover:w-[148px] hover:bg-blue-700">
            <div className="mx-3">
              Submit
            </div>
            <div className="bg-[#E8E9E9] rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45">
              <ButtonArrow className="h-[24px] w-[24px]" />
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/assets/abstract.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default page