"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { fetchData } from "@/lib/api";
import LoadingState from "@/components/ui/LoadingState";

const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await fetchData('testimonials');
        setTestimonials(data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) return <LoadingState />;
  if (error) return <div>Error: {error}</div>;
  if (!testimonials.length) return <div>No testimonials available</div>;

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

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="max-w-[800px] w-full h-[464px] bg-[#243137] rounded-[50px] flex flex-col items-center gap-[17px] py-[50px]">
      <div className="flex flex-col gap-[9px] items-center justify-center">
        <Image
          src={currentTestimonial.imageUrl}
          alt={currentTestimonial.name}
          className="w-[100px] h-[100px] object-cover rounded-full"
          width={100}
          height={100}
        />
        <div className="flex flex-col">
          <p className="font-poppins font-[600] text-[25px] leading-[30px] text-[#BD9F67] text-center">
            {currentTestimonial.name}
          </p>
          <p className="font-poppins font-[400] text-[16px] leading-[24px] text-[#BD9F67] text-center">
            {currentTestimonial.position}
          </p>
        </div>
      </div>
      <p className="font-poppins font-[400] text-[16px] leading-[24px] text-[#FFF] text-center w-[77%]">
        <span className="font-poppins font-[700] text-[30px] text-[#BD9F67] leading-[16px] px-1">
          "
        </span>
        {currentTestimonial.message}
        <span className="font-poppins font-[700] text-[30px] text-[#BD9F67] leading-[16px] px-1">
          "
        </span>
      </p>
      <div className="flex gap-4 mt-4">
        <button onClick={handlePrev} className="text-[#BD9F67]">Previous</button>
        <button onClick={handleNext} className="text-[#BD9F67]">Next</button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
