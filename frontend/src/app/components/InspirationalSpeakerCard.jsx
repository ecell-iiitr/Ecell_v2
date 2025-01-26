import Image from "next/image";
import React from "react";

import person from "../../../public/person.jpg";

const InspirationalSpeakerCard = ({ speaker }) => {
  return (
    <div className="relative w-[200px] h-[230px] group overflow-hidden cursor-pointer">
      {/* Initially Visible Card */}
      <div className="absolute inset-0 bg-[#243137] rounded-[10px] flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
        <Image
          className="h-[99px] w-[99px] rounded-full object-cover"
          height={99}
          width={99}
          alt="speaker"
          src={speaker.image}
        />
        <div className="flex flex-col gap-[6.5px] pt-[19.7px]">
          <p className="font-[600] text-[15px] text-[#BD9F67] font-poppins text-center leading-[15px]">
            {speaker.name}
          </p>
          <p className="font-[500] text-[14px] text-[#FFF] font-poppins text-center leading-[14px]">
            {speaker.title}
          </p>
        </div>
      </div>

      {/* Hover Card */}
      <div className="absolute inset-0 w-[200px] h-[230px] rounded-[10px] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
        <Image
          className="absolute inset-0 w-full h-full rounded-[10px] object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-in-out"
          height={230}
          width={200}
          alt="speaker"
          src={speaker.image}
        />
        <div className="absolute inset-0 bg-black/50 rounded-[10px]"></div>
        <div className="flex flex-col gap-[6.5px] relative">
          <p className="font-[600] text-[15px] text-[#BD9F67] font-poppins text-center leading-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 ease-in-out">
            {speaker.name}
          </p>
          <p className="font-[500] text-[14px] text-[#FFF] font-poppins text-center leading-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 ease-in-out">
            {speaker.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InspirationalSpeakerCard;
