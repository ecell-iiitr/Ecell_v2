'use client'
import TestimonialSlider from "./components/Testimonial";
import SpeakerCarousel from "./components/SpeakerSlider";
import EcellCard from "./components/EcellCard";
import Initiativesection from "./components/Initiativesection";
import Herosection from "./components/Herosection";
export default function Home() {
  return (
  <div>
    <Herosection/>
    <EcellCard/>
    <Initiativesection/>
    <SpeakerCarousel/>
    <TestimonialSlider/>
   
  </div>
  );
}
