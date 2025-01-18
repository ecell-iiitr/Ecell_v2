import React from "react";
import Gallerycard from "../components/Gallerycard";
import ContactForm from "../components/ContactForm";
import InspirationalSpeakerCard from "../components/InspirationalSpeakerCard";
import Initiativesection from "../components/Initiativesection";
import TeamMemberCard from "../components/TeamMemberCard";
import Shahnawaz from "../../../public/Shahnawaz_Khan.jpg";
import yash from "../../../public/yash.jpg";
import manu from "../../../public/manu.jpg";
import praful from "../../../public/praful.jpg";
import manjeet from "../../../public/manjeet.jpg";
import singh from "../../../public/singh.jpg";
import sandeep from "../../../public/sandeep.jpg";
import dipu from "../../../public/dipu.jpg";
import shubh from "../../../public/shubh.jpg";
import akshat from "../../../public/akshat.jpg";
import piyush from "../../../public/piyush.jpg";
import people from "../../../public/person.jpg";

function page() {
  const team = [
    [
      Shahnawaz,
      "Shahnawaz Khan",
      "Secretary, Corporate Relations and Networking",
    ],
    [yash, "Yash Raj", "Secretary, Operations"],
    [manu, "Manu Shukla", "Secretary, Joint Marketing, Design and Research"],
    [praful, "Prafful Sharma", "Secretary, Student Coordination and PR"],
    [manjeet, "Manjeet Singh", "Secretary, Creative Design"],
    [
      piyush,
      "Piyush Kumar Madhukar",
      "Secretary, Social Media Marketing and PR",
    ],
    [
      akshat,
      "Akshat Kumar",
      "Joint Secretary, Corporate Relations and Networking",
    ],
    [dipu, "Dipuranjan Shetty", "Joint Secretary, Operations"],
    [
      shubh,
      "Shubh Shubhanjal",
      "Joint Secretary, Joint Marketing Design and Research",
    ],
    [people, "Harsh Vardhan", "Joint Secretary, Social Media and Marketing"],
    [sandeep, "Sandeep Kumar", "Joint Secretary, Student Coordination and PR"],
    [singh, "Aditya Singh", "Joint Secretary, Creative Design"],
  ];

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
            The Entrepreneurship Cell, at IIT Bombay was founded in 1998 with
            the motto of ‘Creating Job Creators’. Currently, we are a team of 21
            managers, 2 overall Coordinators, and many enthusiastic students
            studying at IITB, sharing a common mission. The team meets up in an
            18x18x14 room, popularly known as the ‘E-Cell office’ inside the
            Students Activity Centre (SAC), where the strategy to uplift the
            flame of startups across the globe originates.{" "}
          </p>
        </div>
      </main>
      <section className="w-full mt-10 md:mt-16 px-10">
        <h1 className="text-[#BD9F67]  text-center  text-3xl md:text-5xl font-bold pt-20 pb-10">
          MEET OUR TEAM{" "}
        </h1>
        <div className="flex  flex-wrap  items-center gap-24 mt-16  justify-center px-5 md:px-10  w-full">
          {team.map((i, index) => (
            <TeamMemberCard
              key={index} // Use a unique identifier if available instead of index
              img={i[0]}
              name={i[1]}
              des={i[2]}
            />
          ))}
        </div>
      </section>
      <section className="w-full mt-10 md:mt-16 px-10 mb-6">
        <ContactForm />
      </section>
    </div>
  );
}

export default page;
