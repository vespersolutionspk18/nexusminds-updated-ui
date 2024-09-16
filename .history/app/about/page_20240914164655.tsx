
import React from 'react'
import { PathWay } from './PathWay'
import Header from '../Header'
import Principles from './Principles'
import ClientCarousel from '../ClientCarousel'
import { ProjectCards } from '../ProjectCards'

const page = () => {
  return (
    <div className="mx-10 my-2">
        <Header />
        <PathWay />
        <ClientCarousel />
        <Principles />
        <ProjectCards />
    </div>
  )
}

export default page