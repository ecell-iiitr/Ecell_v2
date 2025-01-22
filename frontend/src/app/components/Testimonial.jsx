import React, { useState } from "react";

const testimonials = [
  {
    name: "Kanchan Chanana ",
    position: "Corporate Professional",
    image: "./college.png",
    message:
      "Speaking at this event was an incredible experience. I loved connecting with the audience and sharing insights about navigating the corporate world. Their enthusiasm and curiosity made the session truly memorable. I hope my journey inspires others to embrace challenges and turn them into opportunities for growth.",
  },
  {
    name: "Mamta Kumari",
    position: "Co-Founder, Prep Bytes",
    image: "./college.png",
    message:
      "t was an absolute pleasure to share my journey as a co-founder of Prep Bytes with such an engaging audience. Witnessing their eagerness to learn and grow reminded me of why I started this venture in the first place. I’m grateful for the opportunity to motivate others to follow their dreams and create meaningful impact.",
  },
  {
    name: "Gaurisha R Srivastava",
    position: "Software Engineer, Microsoft",
    image: "./college.png",
    message:
      "Being part of this event was an enriching experience for me as much as it was for the attendees. Sharing my journey at Microsoft and discussing the value of curiosity, persistence, and lifelong learning felt incredibly rewarding. I hope my story inspired others to embrace their unique paths in technology.",
  },
  {
    name: "Vishal Pratap Singh",
    position: "Co-Founder, SARG.IO",
    image: "./college.png",
    message:
      "Speaking at this platform gave me an opportunity to reflect on my entrepreneurial journey and share valuable lessons from building SARG.IO. I believe that by fostering adaptability and resilience, anyone can create something impactful. It was truly inspiring to connect with such a motivated group of individuals.",
  },
  {
    name: "Siddharth Shekhar",
    position: "Co-Founder, SARG.IO",
    image: "./college.png",
    message:
      "It was an honor to share the stage and talk about my experiences co-founding SARG.IO. Interacting with aspiring entrepreneurs and sharing insights on leadership, creativity, and teamwork was incredibly fulfilling. I hope my story encouraged others to pursue their dreams fearlessly and build something meaningful.",
  },
  {
    name: "Bishal Chakraborty",
    position: "Co-Founder, Growth Traders",
    image: "./college.png",
    message:
      "Participating as a speaker was a phenomenal experience. Sharing my insights into the financial world and my journey with Growth Traders allowed me to connect with individuals eager to learn and grow. I hope my session empowered the audience to take confident steps toward achieving financial independence.",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-10 px-10 flex-col items-center justify-center">
      <h2 className="text-center text-3xl font-bold text-[#BD9F67] mb-16">
        TESTIMONIAL
      </h2>
      <div className="max-w-3xl mx-auto p-8 bg-[#243137] rounded-lg shadow-md relative text-white">
        <div className="relative overflow-hidden">
          <div
            className="transition-transform duration-500 ease-in-out flex"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 p-8 text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-[#BD9F67]">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-[#BD9F67] mb-4">
                  {testimonial.position}
                </p>
                <p>{testimonial.message}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#BD9F67] text-[#243137] p-3 rounded-full shadow-md hover:bg-[#243137] hover:text-[#BD9F67] transition-all"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#BD9F67] text-[#243137] p-3 rounded-full shadow-md hover:bg-[#243137] hover:text-[#BD9F67] transition-all"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
