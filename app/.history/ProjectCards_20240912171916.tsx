"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

interface AppleCardsCarouselDemoProps {
  id?: string;
}

export function ProjectCards({ id }: AppleCardsCarouselDemoProps) {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={{...card}} index={index} layout={true} />
  ));  
  return (
    <div className="mx-10 rounded-2xl  mt-32 ">
        <div id={id} className="w-full h-full rounded-2xl pt-10 pb-10  bg-radial-gradient">
      <h2 className="max-w-7xl pl-4 mx-10 mt-5 text-4xl md:text-5xl font-semibold text-white tracking-tight ">
        Case Studies
      </h2>
      <p className="text-white mx-10 pl-4  mt-1 text-lg">A curated list of our most recent projects</p>
      <div className="ml-10">
      <Carousel items={cards} />
      </div>
    </div>
    </div>
  );
}

const Casestudiesshowcase = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "PredictaMaint.",
    content: `<b>Our Client</b> OSDCORB Tyres, a leading tyre manufacturer, faced frequent unplanned equipment downtime, leading to production delays and increased costs. To address this, we developed PredictaMaint, an AI-driven predictive maintenance system. The solution utilized real-time data from sensors installed on critical machinery to monitor parameters like temperature and vibration, allowing us to predict equipment failures before they occurred. This proactive approach enabled the client to optimize maintenance schedules, reduce downtime, and extend the lifespan of their equipment.<br><br><b>Technologies Used</b>: We employed machine learning models for predictive analytics, integrated with IoT sensors to gather and analyze real-time data. The system was built using Python for data processing and modeling, TensorFlow for machine learning, and a cloud platform (AWS) for scalable data storage and processing. The resulting solution seamlessly integrated with the client's existing maintenance management system, providing real-time insights and alerts to ensure continuous, efficient production.`,
    image: "/assets/predictamaint.png",
  },
  {
    category: "Cloud Computing",
    title: "BlueRange Logistics & Inventory Management Web App",
    content: `<b>For our client BlueRange</b>, we developed BlueRange Logistics, an all-in-one logistics, shipping, stock, and inventory management web application designed to enhance their operational efficiency. This internal tool provides real-time tracking of inventory levels, automates shipping processes, and optimizes stock management, allowing BlueRange to streamline their supply chain operations. The app features an intuitive user interface that makes it easy for staff to manage daily tasks, generate reports, and gain actionable insights into their logistics operations.<br><br><b>Technologies Used: </b>The BlueRange app was built using ASP.NET for the backend, ensuring a robust and scalable foundation for handling complex logistics data. We utilized MySQL Server for the database, providing a reliable and efficient solution for managing inventory records and transaction data. On the frontend, we implemented Vue.js to create a responsive and dynamic user interface, enabling seamless interaction and real-time updates for users. The combination of these technologies resulted in a powerful, user-friendly application that significantly improved BlueRange's logistics and inventory management processes.`,
    image: "/assets/bluerangelogistics.png",
  },
  {
    category: "Artifical Intelligence",
    title: "Sarz CRM with AI & ML Integration",
    content: `
    <b>Project Overview:</b>We developed an advanced AI & ML-driven CRM system for Sarz, a leading plastic manufacturer based in the US. As Sarz expanded its operations and customer base, the need for a smarter CRM system became evident to manage their growing sales pipeline, enhance customer relationships, and optimize marketing efforts. The CRM system we built integrates powerful AI and ML capabilities, transforming how Sarz interacts with its customers, manages leads, and makes data-driven decisions.<br><br>
    <b>Project Implementation:</b><ul>
    <li><b>Predictive Lead Scoring:</b><br>Implemented machine learning algorithms to analyze customer behavior, historical sales data, and market trends to predict which leads were most likely to convert. This helped Sarz’s sales team prioritize high-potential opportunities, improving conversion rates and overall sales efficiency.<br></li>
    <li><b>Personalized Marketing Automation:</b><br>Integrated AI-powered recommendation engines to analyze customer purchasing patterns and preferences. This enabled the CRM to generate personalized product recommendations and targeted marketing campaigns, increasing customer engagement and driving sales.<br></li>
    <li><b>Customer Support Automation</b>><br>Deployed AI-driven chatbots to handle routine customer inquiries, provide instant support, and assist with order tracking. This reduced the workload on Sarz’s customer support team while ensuring quick and efficient responses for customers.<br></li>
    <li><b>Churn Prediction and Customer Retention:</b><br>Developed churn prediction models using machine learning to identify at-risk customers based on their interactions, order history, and engagement levels. The CRM system triggered targeted retention campaigns to proactively address potential churn, boosting customer loyalty.<br></li>
    <li><b>Sales Forecasting:</b><br>Leveraged AI to analyze historical sales data, seasonal trends, and market conditions to provide accurate sales forecasts. This allowed Sarz to make informed production and inventory decisions, ensuring they met customer demand without overstocking.<br></li>
    <li><b>Advanced Analytics and Reporting:</b><br>Created AI-powered dashboards that offered real-time insights into customer behavior, sales performance, and market trends. These dashboards enabled Sarz’s management team to make data-driven decisions, optimize their sales strategy, and identify new growth opportunities.<br></li>
    <ul><br><b>Technologies Used:</b><ul>
    <li><b>Backend:</b> Node.js with Express.js for a scalable and efficient backend, handling large volumes of concurrent requests.</li>
    <li><b>Frontend:</b> React.js for a dynamic, responsive, and user-friendly interface.</li>
    <li><b>AI & ML:</b>Python with Scikit-learn and TensorFlow for developing and deploying machine learning models.</li>
    </ul>
    `,
    image: "/assets/sarzcrm.png",
  },
  {
    category: "Mobile App Development",
    title: "Travastas Flight Booking App",
    content: `
    We developed the <b>Travastas Flight Booking App</b> to streamline the flight reservation process for Travastas, providing their customers with a seamless and intuitive platform for searching, comparing, and booking flights. The app offers real-time updates on flight availability and prices, ensuring users have the latest information at their fingertips. By integrating machine learning algorithms, the app personalizes recommendations based on individual user preferences and booking history, enhancing the overall user experience.<br><br>Built with <b>Flutter</b> for a consistent and high-performance user experience across both iOS and Android platforms, the app utilizes a serverless architecture to ensure scalability and efficiency. Using AWS Lambda for serverless compute, Amazon API Gateway for managing APIs, and DynamoDB for scalable data storage, the app provides a responsive and reliable service while minimizing infrastructure management. This setup enables Travastas to handle varying loads and deliver a top-notch booking experience to their customers.`,
    image: "/assets/flightbooking.png"
  },
  {
    category: "Cloud Computing",
    title: "RSTR+ Accounting Web App",
    src: `
    radial-gradient(at 87% 42%, hsla(153,77%,70%,1) 0px, transparent 50%),
radial-gradient(at 9% 16%, hsla(232,70%,61%,1) 0px, transparent 50%),
radial-gradient(at 16% 16%, hsla(320,91%,63%,1) 0px, transparent 50%),
radial-gradient(at 88% 52%, hsla(272,93%,74%,1) 0px, transparent 50%),
radial-gradient(at 34% 82%, hsla(211,76%,64%,1) 0px, transparent 50%),
radial-gradient(at 24% 79%, hsla(355,66%,68%,1) 0px, transparent 50%),
radial-gradient(at 44% 79%, hsla(83,68%,67%,1) 0px, transparent 50%)
    `,
    content: `We developed <b>RSTR+</b>, an advanced accounting web application for our client RSTR, to streamline their financial management processes. The app provides a comprehensive suite of features designed to manage and track financial transactions, generate detailed reports, and facilitate efficient bookkeeping. By incorporating a user-friendly interface and robust functionality, RSTR+ simplifies complex accounting tasks, enabling RSTR to maintain accurate financial records and gain valuable insights into their business operations.<br><br>Built with <b>Laravel</b>, the application benefits from a powerful and scalable framework that ensures secure data handling and smooth performance. Laravel’s elegant syntax and built-in tools facilitate rapid development and easy maintenance, allowing <b>RSTR</b> to efficiently manage their accounting needs. RSTR+ integrates seamlessly with existing systems and provides real-time financial data access, supporting RSTR in making informed decisions and enhancing their overall financial management efficiency.`,
    image: "/assets/rstr.png"
  },
  {
    category: "Cloud Computing",
    title: "Aegis HR+ Human Resource Management System",
    src: `
    radial-gradient(at 22% 85%, hsla(129,60%,78%,1) 0px, transparent 50%),
radial-gradient(at 59% 91%, hsla(330,86%,62%,1) 0px, transparent 50%),
radial-gradient(at 99% 80%, hsla(110,95%,60%,1) 0px, transparent 50%),
radial-gradient(at 80% 99%, hsla(64,81%,65%,1) 0px, transparent 50%),
radial-gradient(at 56% 97%, hsla(6,68%,61%,1) 0px, transparent 50%),
radial-gradient(at 26% 74%, hsla(177,81%,79%,1) 0px, transparent 50%),
radial-gradient(at 65% 84%, hsla(311,99%,61%,1) 0px, transparent 50%)
    `,
    content: `
    We developed <b>Aegis HR+</b>, a comprehensive Human Resource Management System for our client Aegis Solutions, to enhance their HR operations and streamline workforce management. The app offers a range of features including employee onboarding, payroll management, performance tracking, and benefits administration. Designed with user-friendliness in mind, Aegis HR+ simplifies HR tasks and provides a centralized platform for managing employee data, facilitating efficient and effective HR practices.<br><br>Utilizing a modern tech stack, <b>Aegis HR+</b> ensures robust performance and scalability. The system is built with <b>Laravel</b> for a secure and maintainable backend, delivering powerful features and smooth integration with other systems. The frontend is crafted to provide an intuitive user experience, enabling HR teams at Aegis Solutions to easily manage employee information, track performance metrics, and streamline administrative processes. Aegis HR+ supports Aegis Solutions in achieving a more organized and productive HR function, driving operational efficiency and improving employee management.`,
    image: "/assets/hrsoft.jpeg",
  },
];