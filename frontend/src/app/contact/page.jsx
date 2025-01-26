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
          <h1
            className="text-[#BD9F67] text-center  text-3xl md:text-6xl font-[400] pt-20"
            style={{
              fontFamily: "var(--font-bebas-neue), sans-serif",
              color: "#BD9F67",
            }}
          >
            E-Cell TeaM
          </h1>
          <p className=" py-9 text-white text-sm md:text-md px-10 md:px-32 text-center font-poppins">
            The E-Cell at IIIT Ranchi operates with a well-defined
            organizational structure, ensuring seamless coordination and
            efficiency in all its endeavors. Our team is divided into various
            departments, each managed by a dedicated Secretary and Joint
            Secretary, who collectively oversee different aspects of the Cell's
            functioning. From corporate relations and networking to creative
            design, social media marketing, operations, and student
            coordination, each department plays a critical role in driving our
            mission. The Secretaries lead their respective verticals with a
            strategic vision, while the Joint Secretaries work alongside them,
            ensuring smooth execution and innovation. This collaborative
            structure not only promotes leadership and teamwork but also enables
            the E-Cell to effectively nurture entrepreneurial talent and build a
            thriving startup ecosystem at IIIT Ranchi.
          </p>
        </div>
      </main>
      <section className="w-full mt-10 md:mt-16 px-10">
        <h1
          className="text-[#BD9F67]  text-center  text-3xl md:text-6xl font-[400] pt-20 pb-10"
          style={{
            fontFamily: "var(--font-bebas-neue), sans-serif",
            color: "#BD9F67",
          }}
        >
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
