"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the Masonry components with SSR disabled
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
    return null; // or a loading skeleton
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
            <div className="relative rounded-[16px] overflow-hidden" key={i}>
              <img
                src={imageUrl}
                className="w-full h-auto object-cover rounded-[16px]"
                alt={`Gallery Image ${i + 1}`}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/400x300";
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(194.66deg, rgba(0, 0, 0, 0) 10.39%, rgba(0, 0, 0, 0.6) 67.39%, rgba(0, 0, 0, 0.6) 88.57%)",
                }}
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default GalleryMassonary;
