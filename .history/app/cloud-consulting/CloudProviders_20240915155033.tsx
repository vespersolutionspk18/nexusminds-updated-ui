import React from 'react'

const CloudProviders = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-36">
        <div className="flex flex-col items-center justify-center">
        <h3 className="text-center font-semibold text-slate-800 md:text-5xl text-3xl">Cloud providers<br></br>we work with</h3>
        <p className="text-lg px-10 md:px-72 text-slate-800 mt-3 text-center">We strategically choose the optimal development toolkit for your custom cloud solution to ensure that your stack integrates smoothly with any major cloud service provider.</p>
        </div>
        <div id="bentos row 1" className="flex flex-col md:flex-row gap-5 w-full px-10 mt-10">
        <div className="w-full md:w-1/4">
        <div className=" rounded-2xl bg-purple-700 px-1 py-1">
            <div className="bg-blueprint-image h-[220px] w-full bg-cover bg-center rounded-xl"></div>
        </div>
        
        <h4 className="text-2xl font-medium mt-5  text-slate-800">AWS</h4>
        <p className="text-lg font-regular text-slate-800 mt-2 mb-10 md:mb-0 text-justify">Robust, user-friendly, secure, and accessible. When you blend AWS's extensive suite of over 200 services with our expertise as AWS Architects, you get a secure solution designed to drive your business forward.</p>
        </div>
        <div className="w-full md:w-1/4">
        <div className=" rounded-2xl bg-purple-700 px-1 py-1">
            <div className="bg-prototyping-image h-[220px] w-full bg-cover bg-center rounded-xl"></div>
        </div>

        <h4 className="text-2xl font-medium  text-slate-800 mt-5">Azure</h4>
        <p className="text-lg font-regular text-slate-800 mt-2 mb-10 md:mb-0 text-justify">Whether developing new applications or deploying existing ones, our certified teams leverage Azure&apos;s comprehensive toolkit to assist you in managing essential software. This includes creating, running, and overseeing applications with top-notch performance standards.</p>
        </div>
        <div className="w-full md:w-1/4">
        <div className=" rounded-2xl bg-purple-700 px-1 py-1">
            <div className="bg-devlopment-image h-[220px] w-full bg-cover bg-center rounded-xl"></div>
        </div>
        <h4 className="text-xl mt-5 text-slate-600">03</h4>
        <h4 className="text-2xl font-medium  text-slate-800">Development & Deployment</h4>
        <p className="text-lg font-regular text-slate-800 mt-2 mb-10 md:mb-0">Developing your ideas into blueprints for digital success. Quick, collaborative sessions to define the roadmap.</p>
        </div>
        <div className="w-full md:w-1/4">
        <div className=" rounded-2xl bg-purple-700 px-1 py-1">
            <div className="bg-support-image h-[220px] w-full bg-cover bg-left rounded-xl"></div>
        </div>
        <h4 className="text-xl mt-5 text-slate-600">04</h4>
        <h4 className="text-2xl font-medium  text-slate-800">Support</h4>
        <p className="text-lg font-regular text-slate-800 mt-2 mb-10 md:mb-0">Ensuring long-term success with continuous support and performance enhancements.</p>
        </div>
        
        
        
        
        </div>
        
        
    </div>
  )
}

export default CloudProviders