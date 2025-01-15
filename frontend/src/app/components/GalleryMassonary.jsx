"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ResponsiveMasonry = dynamic(
  () => import("react-responsive-masonry").then((mod) => mod.ResponsiveMasonry),
  { ssr: false }
);

const Masonry = dynamic(
  () => import("react-responsive-masonry").then((mod) => mod.default),
  { ssr: false }
);

const GalleryMassonary = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const galleryData = [
    "https://picsum.photos/400/300",
    "https://picsum.photos/400/400",
    "https://picsum.photos/400/500",
  ];

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 200: 1, 300: 2, 750: 3, 1000: 4, 1250: 5 }}
        className="pb-[28px] md:pb-[69px]"
      >
        <Masonry
          columnsCount={5}
          gutter="15px"
          className="px-[20px] md:px-[50px] mt-[18px] md:mt-[61px]"
        >
          {galleryData.map((imageUrl, i) => (
            <div
              className="relative rounded-[16px] overflow-hidden group cursor-pointer"
              key={i}
            >
              <img
                src={imageUrl}
                className="w-full h-auto object-cover rounded-[16px]"
                alt={`Gallery Image ${i + 1}`}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/400x300";
                }}
              />
              {/* Overlay with transition */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Text container with transition */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-poppins font-[500] text-[20px] leading-[30px] text-[#FFF]">
                  E-Summit 2024
                </p>
                <p className="font-poppins font-[400] text-[16px] leading-[24px] text-[#FFF]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default GalleryMassonary;
