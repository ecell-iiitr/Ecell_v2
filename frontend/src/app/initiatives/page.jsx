"use client";
import React from "react";
import HighlightsFlipCard from "../components/HighlightsFlipCard";
import ProgramCard from "../components/ProgramCard";

function page() {
  return (
    <div className="h-full">
      <main className="relative h-[600px] md:h-[400px]">
        <img
          src="/college.png"
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
        <div className="absolute z-10 bg-black/75 top-0 left-0 h-full w-full pt-10">
          <h1
            className="text-[#BD9F67] text-center  text-3xl md:text-6xl font-[400] pt-20"
            style={{
              fontFamily: "var(--font-bebas-neue), sans-serif",
              color: "#BD9F67",
            }}
          >
            OUR INITIATIVES
          </h1>
          <p className="py-9 text-white text-sm md:text-md px-10 md:px-32 font-poppins text-center">
            Through our diverse range of initiatives, we aim to inspire and
            empower the next generation of entrepreneurs. From hands-on
            workshops and business plan competitions to mentorship programs and
            startup showcases, each initiative is crafted to bridge the gap
            between ideas and execution. We foster collaboration, provide access
            to industry leaders, and equip students with the tools they need to
            navigate the entrepreneurial journey.
          </p>
        </div>
      </main>

      <section className="w-full py-10">
        <h1 className="text-center text-4xl font-bold text-[#BD9F67] pt-7">
          BLOOMING PROGRAMS
        </h1>
        <p className="text-center py-9 text-black text-sm md:text-md px-10 md:px-32">
          Engage in transformative programs where aspiring entrepreneurs,
          seasoned mentors, and industry leaders collaborate to spark
          innovation, share insights, and shape the future of entrepreneurship
        </p>
        <div className="flex flex-wrap  items-center justify-evenly gap-y-14  px-5 md:px-10 py-8 md:w-[80%]  mx-auto">
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
        </div>
      </section>
    </div>
  );
}

export default page;
