import React from "react";
import Gallerycard from "../components/Gallerycard";
import ContactForm from "../components/ContactForm";
import InspirationalSpeakerCard from "../components/InspirationalSpeakerCard";
import Initiativesection from "../components/Initiativesection";
import TeamMemberCard from "../components/TeamMemberCard";

function page() {
  return (
    <div className="h-full">
      <main className="w-full mt-10 md:mt-16 px-10">
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
      </main>
      <section className="w-full mt-10 md:mt-16 px-10 mb-6">
        <ContactForm />
      </section>
    </div>
  );
}

export default page;
