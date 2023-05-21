import React from 'react'
import Topsec from "./topsec";
import Detailsec from './detailsec';
import CarLogoSec from './carLogoSec';
import HowItWorkSec from './howItWorkSec';
import WhyChooseUs from './whyChooseUs';
import Testimonials from './Testimonials';
const Home = () => {
  return (
    <div>
      <Topsec/>
      <Detailsec/>
      <CarLogoSec/>
      <HowItWorkSec/>
      <WhyChooseUs/>
      <Testimonials/>
    </div>
  )
}

export default Home