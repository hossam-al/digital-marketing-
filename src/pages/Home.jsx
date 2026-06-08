import React from 'react';
import { HeroScrollLock } from '@/components/sections/HeroScrollLock/HeroScrollLock';
import {AboutUs} from '../components/sections/AboutUS/AboutUS';
import { StatsCounter } from '../components/sections/StatsCounter/StatsCounter';
import { ServicesGrid } from '../components/sections/ServicesGrid/ServicesGrid';
import  ScrollSection  from '../components/sections/ScrollSection/ScrollSection';
import CaseStudies  from '../components/sections/CaseStudies/CaseStudies';
import  WhyChooseUs  from '../components/sections/WhyChooseUs/WhyChooseUs';
import OurClints from '../components/sections/OurClients/OurClients';
import OurProcess from '../components/sections/OurProcess/OurProcess';
import Testimonials from '../components/sections/Testimonials/Testimonials';
import FAQSection from '../components/sections/FAQSection/FAQSection';

const Home = () => {
  return (
    <>
    <HeroScrollLock />
    <AboutUs/>
    <StatsCounter />
    <ServicesGrid />
    <ScrollSection /> 
    <CaseStudies />
    <WhyChooseUs />
    <OurClints /> 
    <OurProcess />
      <Testimonials />
      <FAQSection />
    </>
  );
};

export default Home;