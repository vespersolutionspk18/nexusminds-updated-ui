
import React from 'react'
import { PathWay } from './PathWay'
import Header from '../Header'
import Principles from './Principles'

const page = () => {
  return (
    <div className="mx-10 my-2">
        <Header />
        <PathWay />
        <Principles />
    </div>
  )
}

export default page