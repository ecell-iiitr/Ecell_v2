import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import InspirationalSpeakerCard from "./InspirationalSpeakerCard";

const SPEAKERS = [
  {
    id: 1,
    name: "Vishal Pratap Singh",
    title: "Co-founder, Sarg",
    image: "/gallery/pratapsingh.png",
  },
  {
    id: 2,
    name: "Siddharth Shekhar",
    title: "Founder, Sarg",
    image: "/gallery/siddharth.png",
  },
  {
    id: 3,
    name: "Bishal Chakroborty",
    title: "Founder, Growth Traders",
    image: "/gallery/Bishal.png",
  },
  {
    id: 4,
    name: "Kanchan Chanana",
    title: "Corporate Professional",
    image: "/gallery/kanchan.png",
  },
  {
    id: 5,
    name: "Mamta Kumari",
    title: "Co-founder, PrepBytes",
    image: "/gallery/MamtaKumari.png",
  },
  {
    id: 6,
    name: "Gaurisha R Srivastava",
    title: "SWE, Microsoft",
    image: "/gallery/gaurisha.png",
  },
];

const RESPONSIVE_BREAKPOINTS = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 2000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1200 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1200, min: 900 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 900, min: 600 },
    items: 3,
  },
  mobile2: {
    breakpoint: { max: 600, min: 464 },
    items: 2,
  },

  smallphone: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Speaker({ speaker }) {
  return (
    <div className="w-[210px] sm:w-[200px] ">
      <div className=" w-[205px] sm:w-[195px] bg-[#243137] h-[270px] rounded-md p-10 flex-col items-center justify-center gap-3">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-[100px] h-[100px] rounded-full mx-auto mb-4"
        />
        <h3 className="text-lg text-[#BD9F67] font-semibold text-center">
          {speaker.name}
        </h3>
        <p className="text-md text-center text-white">{speaker.title}</p>
      </div>
    </div>
  );
}

function SpeakerCarousel() {
  return (
    <div className=" px-10 py-16 md:p-16 lg:p-20">
      <div
        className="text-[#BD9F67] font-[400] text-center mb-24 text-3xl md:text-6xl"
        style={{
          fontFamily: "var(--font-bebas-neue), sans-serif",
          color: "#BD9F67",
        }}
      >
        Inspirational Speakers
      </div>
      <div className="mt-10">
        <Carousel
          responsive={RESPONSIVE_BREAKPOINTS}
          className="flex items-center"
        >
          {SPEAKERS.map((speaker) => (
            <InspirationalSpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default SpeakerCarousel;
