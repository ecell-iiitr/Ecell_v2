import Image from "next/image";
import React from "react";
import college from "../../../public/college.png";

const HighlightsFlipCard = () => {
  return (
    <div className="relative w-[300px] h-[260px] group perspective cursor-pointer">
      {/* Card Container */}
      <div className="absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out transform-style preserve-3d group-hover:rotate-y-180">
        {/* Front Side */}
        <div
          className="absolute inset-0 w-full h-full bg-white"
          style={{
            boxShadow: "0px 4px 15px 0px #0000004D",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="h-[60px] w-[300px] p-[10px] flex items-center justify-center bg-[#243137]">
            <p className="text-center font-[400] text-[#BD9F67] text-[14px] font-poppins">
              We are on Forbes
            </p>
          </div>
          <Image
            src={college}
            className="h-[200px] w-[300px] object-cover"
            width={300}
            height={200}
          />
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 w-full h-full bg-white"
          style={{
            transform: "rotateY(180deg)",
            boxShadow: "0px 4px 15px 0px #0000004D",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="h-[60px] w-[300px] p-[10px] flex items-center justify-center bg-[#243137]">
            <p className="text-center font-[400] text-[#BD9F67] text-[14px] font-poppins">
              We are on Forbes
            </p>
          </div>
          <div className="h-[200px] w-[300px] relative">
            <Image
              src={college}
              className="h-[200px] w-[300px] object-cover"
              width={300}
              height={200}
            />
            <div className="absolute inset-0 bg-[#00000099] z-1"></div>
            <p className="absolute inset-0 flex items-center justify-center text-center font-[400] text-[11px] text-[#BD9F67] font-poppins p-[16px] z-10">
              We are on Forbes Entrepreneurs have a clear vision. These are the
              thinkers, innovators, the action takers who change society for a
              better by giving them exposure, mentorship, network, funding
              opportunities and wisdom to turn their dreams into reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightsFlipCard;
