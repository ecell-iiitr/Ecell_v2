import React from "react";
import HighlightsFlipCard from "../components/HighlightsFlipCard";

function page() {
  return (
    <div className="h-full">
      <main className="relative h-[600px] md:h-[400px]">
        <img
          src="/college.png"
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
        <div className="absolute z-10 bg-black/75 top-0 left-0 h-full w-full pt-10">
          <h1 className="text-[#BD9F67] text-center  text-3xl md:text-5xl font-extrabold pt-20">
            Origins of E-Cell
          </h1>
          <p className="text-left py-9 text-white text-sm md:text-md px-10 md:px-32">
            The Entrepreneurship Cell, at IIT Bombay was founded in 1998 with
            the motto of ‘Creating Job Creators’. Currently, we are a team of 21
            managers, 2 overall Coordinators, and many enthusiastic students
            studying at IITB, sharing a common mission. The team meets up in an
            18x18x14 room, popularly known as the ‘E-Cell office’ inside the
            Students Activity Centre (SAC), where the strategy to uplift the
            flame of startups across the globe originates.
          </p>
        </div>
      </main>
      <section className="w-full">
        <div className="w-full flex items-center justify-center pt-12">
          <img
            src="/party.jpeg"
            className="w-72 h-64 md:w-96 md:h-72 rounded-xl object-cover object-center"
          />
        </div>
        <h1 className="text-center text-5xl font-bold text-[#BD9F67] pt-7">
          Our Vision
        </h1>
        <p className="text-center text-sm md:text-md text-[#212529] px-[10%] py-6">
          Entrepreneurs have a clear vision. These are the thinkers, innovators,
          the action takers who change society for a better tomorrow. The vision
          of E-Cell IIT Bombay is to enable these action-takers to efficiently
          traverse their road to an enterprise by giving them exposure,
          mentorship, network, funding opportunities and wisdom to turn their
          dreams into reality.
        </p>
      </section>

      <section className="w-full pt-10">
        <h1 className="text-center text-4xl font-bold text-[#BD9F67] pt-7">
          HIGHLIGHTS
        </h1>
        <div className="flex flex-wrap  items-center gap-7  justify-center px-5 md:px-10 py-8 w-full">
          <HighlightsFlipCard />
          <HighlightsFlipCard />
          <HighlightsFlipCard />
          <HighlightsFlipCard />
          <HighlightsFlipCard />
          <HighlightsFlipCard />
        </div>
      </section>
      <section className="w-full pt-10 px-2">
        <h1 className="text-center text-4xl font-bold text-[#BD9F67] pt-7 mb-10">
          TIMELINE
        </h1>
        <div className="h-full flex items-center justify-center mb-10 w-full">
            <div className="flex mx-auto">
            <div className="mb-36  mt-auto ">
            <div className=" h-20 w-20 rounded-full bg-[#243137]"></div>
            <div className="h-6 mt-6  rounded-full w-[300px] bg-[#BD9F67] flex items-center justify-center text-white">
              2016
            </div>
            <div className=" mt-6  rounded-xl w-[300px] border-2 border-[#BD9F67] p-4">
              <h1 className="text-[#BD9F67]">2016</h1>
              <p className="text-black font-light text-sm mt-2">Business incubator SINE inaugurated by Mr. Nandan Nilekani, CEO, Infosys and Mr. Kanwal Rekhi, Venture Capitalist and Director, TiE, jump starts with 8 startups incubated already.</p>
            </div>
          </div>
          <div className="h-5 w-[20px] md:w-[300px] rounded-full bg-[#BD9F67] mt-[50px] relative right-[50px]"></div>
          <div className="h-5  w-[20px] md:w-[300px] rounded-full bg-[#BD9F67] mt-[10px] relative right-[50px]  "></div>
            </div>


        </div>
      </section>
    </div>
  );
}

export default page;
