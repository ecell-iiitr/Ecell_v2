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

function Gallerycard() {
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch('/api/gallery');
        const data = await response.json();
        setGalleryData(data);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
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
          {galleryData.map((item, i) => (
            <div
              className="relative rounded-[16px] overflow-hidden group cursor-pointer"
              key={i}
            >
              <img
                src={item.imageUrl}
                className="w-full h-auto object-cover rounded-[16px]"
                alt={item.title}
                loading="lazy"
              />
              {/* Overlay with transition */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Text container with transition */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-poppins font-[500] text-[20px] leading-[30px] text-[#FFF]">
                  {item.title}
                </p>
                <p className="font-poppins font-[400] text-[16px] leading-[24px] text-[#FFF]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default Gallerycard;
