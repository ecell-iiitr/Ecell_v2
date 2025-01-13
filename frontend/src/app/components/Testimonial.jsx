import React, { useState } from "react";

const testimonials = [
  {
    name: "Dharmendra Pradhan",
    position: "Education Minister of India",
    image: "./college.png",
    message:
      "In a country like ours where job creation and entrepreneurship are critical to becoming a developed nation, the role of IIT students and alumni is vital. IIT Bombay has produced some of the most successful entrepreneurs who have gone on to create thousands of jobs. IIT Bombay has been instrumental in fostering a culture of innovation among its students.",
  },
  {
    name: "Ratan Tata",
    position: "Industrialist & Philanthropist",
    image: "./college.png",
    message:
      "The IIT system has been a great source of innovation and continues to produce remarkable talent that is shaping industries worldwide.",
  },
  {
    name: "Sundar Pichai",
    position: "CEO, Google",
    image: "./college.png",
    message:
      "The focus on solving real-world problems at IIT has created a new generation of leaders who are making a significant impact globally.",
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
