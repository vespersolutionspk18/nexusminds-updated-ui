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
        <div className=" rounded-2xl  px-1 py-1">
            <div className="bg-aws-image h-[220px] w-full bg-cover bg-center rounded-xl"></div>
        </div>
        
        <h4 className="text-2xl font-medium mt-5  text-slate-800">AWS</h4>
        <p className="text-lg font-regular text-slate-800 mt-2 mb-10 md:mb-0 text-justify">Robust, user-friendly, secure, and accessible. When you blend AWS's extensive suite of over 200 services with our expertise as AWS Architects, you get a secure solution designed to drive your business forward.</p>
        </div>
        <div className="w-full md:w-1/4">
        <div className=" rounded-2xl px-1 py-1">
            <div className="bg-azure-image h-[220px] w-full bg-cover bg-center rounded-xl"></div>
        </div>

        <h4 className="text-2xl font-medium  text-slate-800 mt-5">Azure</h4>
        <p className="text-lg font-regular text-slate-800 mt-2 mb-10 md:mb-0 text-justify">Whether developing new applications or deploying existing ones, our certified teams leverage Azure&apos;s comprehensive toolkit to assist you in managing essential software. This includes creating, running, and overseeing applications with top-notch performance standards.</p>
        </div>
        <div className="w-full md:w-1/4">
        <div className=" rounded-2xl  px-1 py-1">
            <div className="bg-gcp-image h-[220px] w-full bg-cover bg-center rounded-xl"></div>
        </div>
        <h4 className="text-2xl font-medium  text-slate-800 mt-5">Google Cloud Platform</h4>
        <p className="text-lg font-regular text-slate-800 mt-2 mb-10 md:mb-0 font-justify">We leverage GCP's global reach, fiber network, and analytics to boost the productivity of your cloud computing solutions, wherever your business operates. Google Cloud&apos;s AI-powered computing and data management services are vital for modern companies.</p>
        </div>
        <div className="w-full md:w-1/4">
        <div className=" rounded-2xl px-1 py-1">
            <div className="bg-heroku-image h-[220px] w-full bg-cover bg-left rounded-xl"></div>
        </div>
        <h4 className="text-2xl font-medium  text-slate-800 mt-5">Heroku</h4>
        <p className="text-lg font-regular text-slate-800 mt-2 mb-10 md:mb-0">Heroku, a multi-language platform-as-a-service and a Nexus favorite as a Heroku Partner, allows you to build, run, and manage cloud-based apps. It speeds up development and offers a ready-to-use environment for quick code deployment, ideal for startups and mid-sized businesses.</p>
        </div>
        
        
        
        
        </div>
        
        
    </div>
  )
}

export default CloudProviders