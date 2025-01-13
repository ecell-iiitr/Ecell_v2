'use client'
import TestimonialSlider from "./components/Testimonial";
import SpeakerCarousel from "./components/SpeakerSlider";
import EcellCard from "./components/EcellCard";
export default function Home() {
  return (
  <div>
    <EcellCard/>
     <SpeakerCarousel/>
    <TestimonialSlider/>
   
  </div>
  );
}
