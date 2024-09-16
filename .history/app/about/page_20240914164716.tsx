
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
    <div className="mx-10 my-2">
        <Header />
        <PathWay />
        <ClientCarousel />
        <Principles />
        <ProjectCards />
        <ContactSection />
        <Footer />
    </div>
  )
}

export default page