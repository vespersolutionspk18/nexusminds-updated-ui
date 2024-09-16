
import React from 'react'
import { PathWay } from './PathWay'
import Header from '../Header'
import Principles from './Principles'
import ClientCarousel from '../ClientCarousel'
import { ProjectCards } from '../ProjectCards'
import ContactSection from '../ContactSection'
import Footer from '../Footer'


const page = () => {
  return (
    <div className=" my-2">
        <Header />
        <div className="mx-5 md:mx-10"><PathWay /></div>
        
        <Principles />
        <ContactSection />
        <Footer />
    </div>
  )
}

export default page