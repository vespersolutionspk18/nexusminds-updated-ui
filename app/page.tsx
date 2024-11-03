import Image from "next/image";
import Hero from "./Hero";
import WhyUsSection from "./WhyUsSection";
import HowWeWork from "./HowWeWork";
import FaqSection from "./FaqSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import { ProjectCards } from "./ProjectCards";
import ClientCarousel from "./ClientCarousel";
import Logoticker from "./Logoticker";
import ServicesSection from "./ServicesSection";
import IndustriesSection from "./IndustriesSection";
import Header from "./Header";





export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <ClientCarousel />
    <WhyUsSection />
    <ServicesSection />

    <IndustriesSection />
    
    <HowWeWork />
    <ProjectCards />
    <FaqSection />
    <ContactSection />
    <Footer />
    </>
  );
}
