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
import Footer from '../Footer';
import Header from '../Header';
const page = () => {
  return (
    <div>
      <Header />
        <div className="w-full lg:grid lg:min-h-[800px] lg:grid-cols-2 xl:min-h-[800px]">
        <div id="contains the form" className="mt-20 mx-10">
  
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