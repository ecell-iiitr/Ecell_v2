"use client";

import React from "react";
import HighlightsFlipCard from "../components/HighlightsFlipCard";
import Timeline from "../components/Timeline";
import Carousel from "../components/Crousel";
const images = [
  { id: 1, src: "https://picsum.photos/200/300" },
  { id: 2, src: "/college.png" },
  { id: 3, src: "https://picsum.photos/200/300" },
  { id: 4, src: "/college.png" },
  { id: 5, src: "https://picsum.photos/200/300" },
  { id: 6, src: "/college.png" },
  { id: 7, src: "https://picsum.photos/200/300" },
];

const highlightData = [
  {
    img: "/gallery/g41.jpg",
    title: "Collabration with BIT Mesra",
    para: "The collaboration with BIT Mesra aims to foster innovation, research, and skill development through joint initiatives, benefiting students and faculty alike.",
  },
];

function AboutPage() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="h-full">
      <main className="relative h-[600px] md:h-[400px]">
        <img
          src="/college.png"
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
        <div className="absolute z-10 bg-black/75 top-0 left-0 h-full w-full pt-10">
          <h1
            className="text-[#BD9F67] text-center text-3xl md:text-6xl pt-20 font-[400]"
            style={{
              fontFamily: "var(--font-bebas-neue), sans-serif",
              color: "#BD9F67",
            }}
          >
            Origins of E-Cell
          </h1>
          <p className="text-center py-9 text-white text-sm md:text-md px-10 md:px-32 font-poppins">
            The Entrepreneurship Cell at IIIT Ranchi, established in 2021,
            embodies the vision of fostering innovation and empowering
            individuals to become job creators rather than job seekers. With a
            dynamic team of 21 managers, 2 overall coordinators, and numerous
            enthusiastic students from various disciplines, we share a unified
            mission to ignite the entrepreneurial spirit within and beyond our
            campus. Our brainstorming sessions, strategies, and plans to fuel
            the startup ecosystem originate from a vibrant workspace located in
            the heart of the campus. This space is not just an office but a hub
            where ideas are transformed into impactful ventures, symbolizing the
            driving force behind IIIT Ranchi’s entrepreneurial aspirations.
            While IIIT Ranchi was established in 2016, the creation of E-Cell in
            2021 marked a pivotal moment in our journey toward promoting
            innovation, collaboration, and the development of groundbreaking
            ideas in the entrepreneurial domain.
          </p>
        </div>
      </main>

      <section className="w-full">
        <div className="w-full flex items-center justify-center pt-12 ">
          <Carousel />
        </div>

        <h1
          className="text-center text-6xl font-[400] text-[#BD9F67] pt-7"
          style={{
            fontFamily: "var(--font-bebas-neue), sans-serif",
            color: "#BD9F67",
          }}
        >
          Our Vision
        </h1>
        <p className="text-center text-sm md:text-md text-[#212529] px-[10%] py-6">
          Entrepreneurs have a clear vision. These are the thinkers, innovators,
          the action takers who change society for a better tomorrow. The vision
          of E-Cell IIT Bombay is to enable these action-takers to efficiently
          traverse their road to an enterprise by giving them exposure,
          mentorship, network, funding opportunities, and wisdom to turn their
          dreams into reality.
        </p>
      </section>

      <section className="w-full pt-10">
        <h1
          className="text-center text-6xl font-[400] text-[#BD9F67] pt-7"
          style={{
            fontFamily: "var(--font-bebas-neue), sans-serif",
            color: "#BD9F67",
          }}
        >
          HIGHLIGHTS
        </h1>
        <div className="flex flex-wrap items-center gap-7 justify-center px-5 md:px-10 py-8 w-full">
          {highlightData.map((d) => (
            <HighlightsFlipCard key={d} img={d.img} title={d.title} para={d.para} />
          ))}
        </div>
      </section>

      <section className="w-full">
        <Timeline />
      </section>
    </div>
  );
}

export default AboutPage;
