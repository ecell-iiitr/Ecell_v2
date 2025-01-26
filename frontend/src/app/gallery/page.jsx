"use client";

import React from "react";
import Gallerycard from "../components/Gallerycard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { title } from "process";

const images = [
  {
    id: 1,
    src: "/gallery/g40.jpg",
    title: "Session at 6PM (2nd Feb 2025), BIT Mesra",
  },
  { id: 2, src: "/gallery/g41.jpg", title: "Collabration with BIT Mesra" },
  { id: 3, src: "/gallery/g42.jpg", title: "Krayonnz Quiz at IIIT Ranchi" },
];

const Page = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="h-full">
      {/* Main Section */}
      <main className="w-full mt-10 md:mt-16 px-10">
        <h1
          className="text-[#BD9F67] text-center text-3xl md:text-6xl font-[400] pt-20"
          style={{
            fontFamily: "var(--font-bebas-neue), sans-serif",
            color: "#BD9F67",
          }}
        >
          E-Cell in Motion
        </h1>
        <p className="text-[#212529] px-[10%] md:px-[17%] text-center py-8 font-poppins">
          Explore unforgettable moments where aspiring entrepreneurs, industry
          experts, and innovators come together to share knowledge, inspire
          ideas, and drive change.
        </p>

        <Gallerycard />
      </main>

      {/* Carousel Section */}
      <section className="w-full mt-10 md:mt-16 px-10 mb-6">
        <h1
          className="text-[#BD9F67] text-center text-3xl md:text-6xl font-[400] pt-20"
          style={{
            fontFamily: "var(--font-bebas-neue), sans-serif",
            color: "#BD9F67",
          }}
        >
          Latest in E-Cell
        </h1>
        <p className="text-[#212529] px-[10%] md:px-[17%] text-center py-8 font-poppins">
          Experience the latest developments in E-Cell. Stay updated with the
          freshest ideas, inspiring stories, and exclusive opportunities from
          the entrepreneurial world.
        </p>
        <div className="flex items-center justify-center py-10 w-full">
          <div className="w-[80%] md:w-[70%] lg:w-[60%] h-[400px] overflow-hidden rounded-lg">
            <Carousel responsive={responsive}>
              {images.map((image) => (
                <div key={image.id} className="p-1">
                  <img
                    src={image.src}
                    alt="Gallery"
                    className="w-72 h-72 md:w-full object-contain object-center rounded-t-xl"
                  />
                  <div className="bg-[#243137] h-[10%] flex items-center justify-center py-2 text-white w-full rounded-b-xl">
                    {image.title}
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
