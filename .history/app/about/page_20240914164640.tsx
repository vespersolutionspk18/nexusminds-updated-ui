
import React from 'react'
import { PathWay } from './PathWay'
import Header from '../Header'
import Principles from './Principles'
import ClientCarousel from '../ClientCarousel'

const page = () => {
  return (
    <div className="mx-10 my-2">
        <Header />
        <PathWay />
        <ClientCarousel />
        <Principles />
    </div>
  )
}

export default page