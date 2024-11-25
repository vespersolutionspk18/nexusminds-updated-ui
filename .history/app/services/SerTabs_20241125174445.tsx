'use client';

import { Button } from '@/components/ui/button';
import { FaAngleRight } from "react-icons/fa6";
import React, { useEffect, useState } from 'react';

interface Tab {
  id: string;
  label: string;
  image: string;
  heading: string;
  paragraph: string;
  buttonText: string;
  buttonRoute: string;
}

interface SerTabsProps {
  tabId: string;
}

const tabs: Tab[] = [
  {
    id: 'software-development',
    label: 'Software Development',
    image: '/assets/software-development.jpeg', // Background image path
    heading: 'Custom Software Development',
    paragraph: '<p>Nexus goes beyond offering software development services &mdash; our engineers integrate seamlessly into your business for as long as you require their expertise. The solutions we deliver are defined by their security, outstanding performance, user focus, and scalability.<br></br>We analyze your organization&apos;s unique needs to deliver tailored solutions, considering user journeys, risks, and competitor analysis. Our team provides expert guidance on selecting the right technology stack, ensuring a successful software development project.<br></br><b>Our Services Include:</b><ul><li>&#x2022; Software development consulting</li><li>&#x2022; Custom software development</li><li>&#x2022; Software product development</li><li>&#x2022; Software enhancement</li><li>&#x2022; Software integration services</li><li>&#x2022; Software modernization</li></ul></p>',
    buttonText: 'Learn More',
    buttonRoute: '/agriculture', // Route for the button
  },
  {
    id: 'cloud-consulting',
    label: 'Cloud Consulting',
    image: '/assets/cloud-consulting.webp',
    heading: 'Cloud Consulting',
    paragraph: '<p>Elevate your infrastructure with our cloud development services. Our expert teams are equipped to assist your company in smoothly migrating digital assets, resources, apps, services, and databases to any cloud platform or in developing a new, powerful cloud-based solution to address your most pressing business challenges.<br></br><b>Our Services Include:</b><ul><li>&#x2022; Consulting</li><li>&#x2022; Development</li><li>&#x2022; Cloud Migration</li><li>&#x2022; Modernization</li><li>&#x2022; Support & Maintenance</li></ul></p>',
    buttonText: 'Explore Services',
    buttonRoute: '/construction',
  },
  {
    id: 'web-development',
    label: 'Web Development',
    image: '/assets/web-development.jpeg',
    heading: 'Web Development',
    paragraph: '<p>Forget conventional solutions. Nexus&apos; software developers possess a deep and nuanced understanding of how a top-tier web application can revolutionize your business&apos;s operations, profitability, and scalability.<br></br><b>Our Services Include:</b><ul><li>&#x2022; UI / UX Design & Development</li><li>&#x2022; Frontend Development</li><li>&#x2022; Backend Development</li><li>&#x2022; Integration Services</li><li>&#x2022; QA & Testing</li></ul></p>',
    buttonText: 'Discover More',
    buttonRoute: '/education',
  },
  {
    id: 'mobile-development',
    label: 'Mobile Development',
    image: '/assets/mobile-development.jpeg',
    heading: 'Mobile Development',
    paragraph: '<p>To achieve success in mobile app development, it&apos;s essential to have both sleek design and a seamless user experience, along with a deep awareness of the intense competition in your app store category. Nexus provides the ideal blend of technical skills and in-depth understanding of the competitive mobile market.<br></br><b>Our Services Include:</b><ul><li>&#x2022; Mobile Technology Consulting</li><li>&#x2022; UI/UX Design & Development</li><li>&#x2022; Serverless Backend</li><li>&#x2022; QA & Testing</li><li>&#x2022; Ongoing Enhancement</li></ul></p>',
    buttonText: 'Learn About Our Work',
    buttonRoute: '/environment',
  },
  {
    id: 'startup-services',
    label: 'Startup Services',
    image: '/assets/startup-services.jpeg',
    heading: 'Startup Services',
    paragraph: '<p>Startups frequently need to pivot or scale quickly, requiring built-in adaptability and partners who can move in sync with them as circumstances evolve. Nexus provides exactly that kind of support, offering a thorough understanding of your technical needs at each phase and engineering teams that share your ambition.<br></br><b>Our Services Include:</b><ul><li>&#x2022; CTO as a service</li><li>&#x2022; Software Development</li><li>&#x2022; Advisory & Consulting</li><li>&#x2022; Scaling Startups</li><li>&#x2022; MVP Development</li></ul>',
    buttonText: 'View Our Projects',
    buttonRoute: '/energy',
  },
  {
    id: 'blockchain-development',
    label: 'Blockchain Development',
    image: '/assets/blockchain.webp',
    heading: 'Blockchain Development',
    paragraph: '<p>We leverage blockchain technology for solutions that make company operations more efficient and pave the way for game-changing innovation. Increase your revenue and prepare your organization for the digital economy of the future.<br></br><b>Our Services Include:</b><ul><li>&#x2022; Smart Contracts Development</li><li>&#x2022; Crypto Exchange and wallet development</li><li>&#x2022; Decentralizer (dApp) Development</li><li>&#x2022; Non-fungible token development</li></ul></p>',
    buttonText: 'Explore Hydropower',
    buttonRoute: '/hydropower',
  },
  {
    id: 'artificial-intelligence',
    label: 'Artificial Intelligence',
    image: '/assets/artificial-intelligence.jpg',
    heading: 'Artificial Intelligence',
    paragraph: '<p>At Nexus, our AI services transcend traditional offerings – our experts become an integral part of your team, providing tailored AI-driven solutions for as long as you need. Every solution we craft is marked by cutting-edge innovation, unparalleled precision, user-centric design, and the ability to scale effortlessly as your business grows.<br></br></p><p><b>Our Services Include:</b></p><ul><li>&#x2022; AI/ML Consulting</li><li>&#x2022; Custom AI/ML Model Development</li><li>&#x2022; AI/ML Product Development</li><li>&#x2022; AI/ML Model Enhancement</li><li>&#x2022; AI/ML Integration Services</li></ul>',
    buttonText: 'Get In Touch',
    buttonRoute: '/management-consulting',
  },
  {
    id: 'erp-consulting',
    label: 'ERP Consulting',
    image: '/assets/erp-consulting.jpg',
    heading: 'ERP Consulting',
    paragraph: '<p>Nexus takes ERP consulting to the next level by partnering with your business to streamline operations and enhance productivity. Our consultants work closely with your team to ensure a tailored approach that aligns with your strategic goals and day-to-day activities.<br></br>From assessing your current systems to implementing custom ERP solutions, we focus on minimizing inefficiencies and driving continuous improvement. Our services cover everything from process optimization to integration, ensuring your ERP system delivers maximum value across every department.<br></br></p><p><b>Our Services Include:</b></p><ul><li>&#x2022; ERP Needs Assessment and Strategy</li><li>&#x2022; ERP System Implementation</li><li>&#x2022; Business Process Optimization</li><li>&#x2022; ERP Integration Services</li><li>&#x2022; ERP Customization and Development</li></ul>',
    buttonText: 'Get In Touch',
    buttonRoute: '/management-consulting',
  },
  {
    id: 'iot-solutions',
    label: 'IoT Solutions',
    image: '/assets/iot-solutions.jpg',
    heading: 'IoT Solutions',
    paragraph: '<p>To achieve success in IoT solutions, it&apos;s crucial to combine robust connectivity with cutting-edge sensor technology, while maintaining a focus on scalability and security. Nexus delivers the perfect balance of technical expertise and industry knowledge to help you thrive in the rapidly growing IoT market.<br></br></p><p><b>Our Services Include:</b></p><ul><li>&#x2022; Device Integration & Connectivity</li><li>&#x2022; Data Management & Analytics</li><li>&#x2022; Security & Compliance</li><li>&#x2022; Continuous Monitoring & Optimization</li></ul>',
    buttonText: 'Get In Touch',
    buttonRoute: '/management-consulting',
  },
];

const SerTabs: React.FC<SerTabsProps> = ({ tabId }) => {
  const [activeTab, setActiveTab] = useState<string>(tabId);
  const [isClient, setIsClient] = useState(false);
  const activeTabContent = tabs.find((tab) => tab.id === activeTab);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setActiveTab(tabId);
  }, [tabId]);

  const handleClick = (id: string) => {
    setActiveTab(id);
  };

  return (
    <div className="flex flex-col px-3 md:px-10 mt-10 md:my-20" id="sectors">
      <div className="flex flex-row gap-3 md:gap-10">
        {/* Left Section: Vertical List of Buttons */}
        <div className="w-[30%]">
          <ul className="list-none p-0 m-0 flex flex-col gap-0 md:gap-3">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  className={`w-full p-0 pr-1 pb-1 pt-1 md:p-2 text-xs md:text-lg text-left flex items-center justify-between gap-1 md:gap-2 ${
                    activeTab === tab.id
                      ? ' text-slate-900 pl-2 pr-2 pb-2 pt-2 bg-gray-100 rounded-md  '
                      : ' text-slate-800 pl-2 pr-2 pb-2 pt-2 '
                  }`}
                  onClick={() => handleClick(tab.id)}
                >
                  {tab.label}
                  <FaAngleRight
                    className={`md:h-4 md:w-4 md:ml-2 h-2 w-2 ml-1 ${
                      activeTab === tab.id ? 'text-slate-900' : 'text-slate-800'
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Dynamic Content Based on Active Button */}
        <div className="w-[80%] ">
          {activeTabContent && isClient && (
            <div className="flex flex-col gap-4">
              <h2 className="text-sm md:text-4xl font-semibold md:my-3">{activeTabContent.heading}</h2>
              <div
                className="h-16 md:h-80 bg-cover bg-center rounded-md md:rounded-2xl"
                style={{ backgroundImage: `url(${activeTabContent.image})` }}
              ></div>
              
              <p dangerouslySetInnerHTML={{ __html: activeTabContent.paragraph }} className="text-black font-light text-xs md:text-lg text-justify"/>
              <a
                href={activeTabContent.buttonRoute}
                className="mt-3"
              >
                {/*<Button variant="outline" className="px-5 py-6 text-lg font-light">
                  {activeTabContent.buttonText} <FaAngleRight className="mr-2 ml-2 h-4 w-4" />
                </Button>*/}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SerTabs;