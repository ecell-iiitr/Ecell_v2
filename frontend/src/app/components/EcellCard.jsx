import React from "react";

function EcellCard() {
  return (
    <div className=" pt-20 px-10 h-screen md:pt-28 lg:pt-32 lg:px-32">
      <h1 className="text-[#BD9F67] text-3xl font-bold  text-center">
        What is E-Cell?
      </h1>
      <p className="text-sm text-center lg:text-lg mt-10 text-black md:px-10 px-2">
        "E-Cell IIIT Ranchi helps the hustling startups and young professionals
        via dynamic workshops, thought-provoking speaker sessions, high-stakes
        business plan competitions, and numerous other game-changing initiatives
        throughout the year to create a crucible for innovation. We stand as
        pillars of support for budding entrepreneurs, providing them with
        personalized guidance from experienced mentors, crucial funding
        opportunities, and a robust network that can change the course of their
        journey forever!"
      </p>
      <div className="relative w-full h-64 mt-10 rounded-3xl overflow-hidden">
        <img src="./college.png" className="w-full h-full object-cover absolute top-0 left-0"/>
        <div className="h-full w-full bg-black/50 absolute z-20 top-0 left-0 flex items-center justify-center gap-5">
            <div className="p-2 md:p-10">
                <img className="md:h-20 md:w-20 w-10 h-10 mx-auto " src="./building.png"/>
                <h1 className=" text-2xl md:text-4xl text-[#BD9F67] font-extrabold text-center my-2">600 +</h1>
                <p className="text-white text-center font-semibold text-lg">Cities</p>
            </div>
            <div className=" p-2 md:p-10">
                <img className="md:h-20 md:w-20 w-10 h-10 mx-auto " src="./light.png"/>
                <h1 className="text-2xl md:text-4xl text-[#BD9F67] font-extrabold text-center my-2">7000 +</h1>
                <p className="text-white text-center font-semibold text-lg">Startups</p>
            </div>
            <div className="p-2 md:p-10">
                <img className="md:h-20 md:w-20 w-10 h-10 mx-auto " src="./student.png"/>
                <h1 className="text-2xl md:text-4xl text-[#BD9F67] font-extrabold text-center my-2">250K +</h1>
                <p className="text-white text-center font-semibold text-lg">Students</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default EcellCard;
