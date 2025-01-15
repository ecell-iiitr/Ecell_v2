import React from "react";

function Initiativesection() {
  return (
    <div className="px-10 md:px-20 py-16 md:py-24">
      <h1 className="text-3xl text-center font-bold text-[#BD9F67]">
        Our Initiatives
      </h1>
      <p className="mt-10 px-16 text-sm md:text-md  lg:text-lg text-center">
        We at E-Cell, IIIT Ranchi believe that entrepreneurship is the key to
        India’s development. To fulfill this vision, we have conceptualized &
        successfully implemented various initiatives to help students, young
        entrepreneurs & professionals in their entrepreneurial journey.
      </p>
      <div className="pt-10 flex-wrap  md:flex items-center justify-center ">
        <div className="h-[170px] w-[240px] md:h-[220px] md:w-[300px] bg-[#243137] rounded-2xl p-3 mx-auto md:mx-4 m-2">
            <div className="w-full h-full border-2 border-[#BD9F67] rounded-2xl p-1">
                <div className="w-full h-full border-2 border-[#BD9F67] rounded-2xl p-8">
                    <img src="./img.png" className="w-24 h-16 md:w-40 md:h-20 mx-auto object-contain"/>
                    <h1 className="font-bold text-[#BD9F67] text-md md:text-xl text-center mt-1 md:mt-3">Eureka!</h1>
                </div>
            </div>
        </div>
        <div className="h-[170px] w-[240px] md:h-[220px] md:w-[300px]  bg-[#243137] rounded-2xl p-3 mx-auto m-2 md:mx-4">
            <div className="w-full h-full border-2 border-[#BD9F67] rounded-2xl p-1">
                <div className="w-full h-full border-2 border-[#BD9F67] rounded-2xl p-8">
                    <img src="./img2.png" className="w-24 h-16 md:w-40 md:h-20 mx-auto object-contain"/>
                    <h1 className="font-bold text-[#BD9F67] text-md md:text-xl text-center mt-1 md:mt-3">Eureka! Junior</h1>
                </div>
            </div>
        </div>
        <div className="h-[170px] w-[240px] md:h-[220px] md:w-[300px]  bg-[#243137] rounded-2xl  mx-auto m-2 p-3 md:mx-4">
            <div className="w-full h-full border-2 border-[#BD9F67] rounded-2xl p-1">
                <div className="w-full h-full border-2 border-[#BD9F67] rounded-2xl p-8">
                    <img src="./img3.png" className="w-24 h-16 md:w-40 md:h-20 mx-auto object-contain"/>
                    <h1 className="font-bold text-[#BD9F67] text-md md:text-xl text-center mt-1 md:mt-3">Campus Executive</h1>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Initiativesection;
