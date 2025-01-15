import React from "react";
import Gallerycard from "../components/Gallerycard";
import ContactForm from "../components/ContactForm";
import InspirationalSpeakerCard from "../components/InspirationalSpeakerCard";
import Initiativesection from "../components/Initiativesection";
import TeamMemberCard from "../components/TeamMemberCard";

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
          E-Cell TeaM
          </h1>
          <p className="text-left py-9 text-white text-sm md:text-md px-10 md:px-32">
          The Entrepreneurship Cell, at IIT Bombay was founded in 1998 with the motto of ‘Creating Job Creators’. Currently, we are a team of 21 managers, 2 overall Coordinators, and many enthusiastic students studying at IITB, sharing a common mission. The team meets up in an 18x18x14 room, popularly known as the ‘E-Cell office’ inside the Students Activity Centre (SAC), where the strategy to uplift the flame of startups across the globe originates.          </p>
        </div>
      </main>
      <section className="w-full mt-10 md:mt-16 px-10">
        <h1 className="text-[#BD9F67]  text-center  text-3xl md:text-5xl font-bold pt-20 pb-10">
          MEET OUR TEAM{" "}
        </h1>
        <div className="flex  flex-wrap-reverse  items-center gap-24 mt-16  justify-center px-5 md:px-10  w-full">
     
        <TeamMemberCard/>
        <TeamMemberCard/>
        <TeamMemberCard/>
        <TeamMemberCard/>
        <TeamMemberCard/>
        <TeamMemberCard/>
        <TeamMemberCard/>
        <TeamMemberCard/>
        <TeamMemberCard/>
        <TeamMemberCard/>
        <TeamMemberCard/>
        </div>
      </section>
      <section className="w-full mt-10 md:mt-16 px-10 mb-6">
        <ContactForm />
      </section>
    </div>
  );
}

export default page;
