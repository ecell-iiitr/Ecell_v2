import Image from "next/image";
import React from "react";

import person from "../../../public/person.jpg";

const TeamMemberCard = () => {
  return (
    <div
      className="relative h-[180px] w-[250px] bg-[#243137] rounded-[10px]"
      style={{ boxShadow: "0px 0px 10px 0px #00000033" }}
    >
      <Image
        className="absolute top-[-50px] left-[75px]  h-[100px] w-[100px] rounded-full object-cover"
        alt="team-member"
        src={person}
        width={100}
        height={100}
      />
      <div className="flex flex-col pt-[60px]">
        <p className="font-[600] text-[20px] text-[#BD9F67] font-poppins leading-[30px] text-center px-[15px]">
          Shubh Shubhanjal
        </p>
        <p className="font-[500] text-[16px] text-[#FFF] font-poppins text-center px-[15px]">
          Joint Secretary, Joint Marketing Design and Research
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
