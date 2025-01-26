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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  //   "https://picsum.photos/400/300",
  //   "https://picsum.photos/400/400",
  //   "https://picsum.photos/400/500",
  //   "https://picsum.photos/400/300",
  //   "https://picsum.photos/400/400",
  //   "https://picsum.photos/400/500",
  //   "https://picsum.photos/400/300",
  //   "https://picsum.photos/400/400",
  //   "https://picsum.photos/400/500",
  //   "https://picsum.photos/400/300",
  //   "https://picsum.photos/400/400",
  //   "https://picsum.photos/400/500",
  //   "https://picsum.photos/400/300",
  //   "https://picsum.photos/400/400",
  //   "https://picsum.photos/400/500",
  //   "https://picsum.photos/400/300",
  //   "https://picsum.photos/400/400",
  //   "https://picsum.photos/400/500",
  //   "https://picsum.photos/400/300",
  //   "https://picsum.photos/400/400",
  //   "https://picsum.photos/400/500",
  //   "https://picsum.photos/400/300",
  //   "https://picsum.photos/400/400",
  //   "https://picsum.photos/400/500",
  // ];

  const galleryData = [
    [
      "/gallery/g1.jpg",
      "E-Cell Induction",
      "Welcoming the 2k24 batch to the E-Cell family.",
    ],
    [
      "/gallery/g2.jpg",
      "E-Cell Induction",
      "Welcoming the 2k24 batch to the E-Cell family.",
    ],
    [
      "/gallery/g3.jpg",
      "E-Cell Induction",
      "Welcoming the 2k24 batch to the E-Cell family.",
    ],
    [
      "/gallery/g4.jpg",
      "E-Cell Induction",
      "Welcoming the 2k24 batch to the E-Cell family.",
    ],
    [
      "/gallery/g5.jpg",
      "E-Cell Induction",
      "Welcoming the 2k24 batch to the E-Cell family.",
    ],
    [
      "/gallery/g6.jpg",
      "E-Cell Induction",
      "Welcoming the 2k24 batch to the E-Cell family.",
    ],
    [
      "/gallery/g7.jpg",
      "E-Cell Induction",
      "Welcoming the 2k24 batch to the E-Cell family.",
    ],
    [
      "/gallery/g8.jpg",
      "E-Cell Induction",
      "Welcoming the 2k24 batch to the E-Cell family.",
    ],
    [
      "/gallery/g9.jpg",
      "E-Cell Induction",
      "Welcoming the 2k24 batch to the E-Cell family.",
    ],
    [
      "/gallery/g10.jpg",
      "E-Cell Induction",
      "Welcoming the 2k24 batch to the E-Cell family.",
    ],
    [
      "/gallery/g11.jpg",
      "E-Cell Induction",
      "Welcoming the 2k24 batch to the E-Cell family.",
    ],
    [
      "/gallery/g12.jpg",
      "E-Cell Induction",
      "Welcoming the 2k24 batch to the E-Cell family.",
    ],
    [
      "/gallery/g13.jpg",
      "E-Cell Induction",
      "Welcoming the 2k24 batch to the E-Cell family.",
    ],
    [
      "/gallery/g14.jpg",
      "E-Cell Induction",
      "Welcoming the 2k24 batch to the E-Cell family.",
    ],
    [
      "/gallery/g15.jpg",
      "E-Cell Induction",
      "Welcoming the 2k24 batch to the E-Cell family.",
    ],
    [
      "/gallery/g16.jpg",
      "E-Cell Induction",
      "Welcoming the 2k24 batch to the E-Cell family.",
    ],
    [
      "/gallery/g17.jpg",
      "E-Cell Induction",
      "Welcoming the 2k24 batch to the E-Cell family.",
    ],
    [
      "/gallery/g18.jpg",
      "E-Cell Induction",
      "Welcoming the 2k24 batch to the E-Cell family.",
    ],
    [
      "/gallery/g19.png",
      "E-Talks Glimpses",
      "By Vishal Pratap & Siddharth Shekhar 's Session",
    ],
    ["/gallery/g20.png", "E-Talks Glimpses", "Gaurisha's Session"],
    ["/gallery/g21.png", "E-Talks Glimpses", "Idea to Reality Session"],
    ["/gallery/g22.png", "E-Talks Glimpses", "Idea to Reality Session"],
    [
      "/gallery/g23.png",
      "E-Talks",
      "By Vishal Pratap (Co-Founder - SARD.IO) & Siddharth Shekhar (Founder - SARD.IO)",
    ],
    [
      "/gallery/g24.png",
      "Idea to Reality Session",
      "By Mamta Kumari (Co-Founder - PrepBytes , Ex-Amazon , Samsung)",
    ],
    ["/gallery/g25.png", "E-Talks", "3-days continous learning."],
    [
      "/gallery/g26.png",
      "E-Talks",
      "By Bishal Chakrobarty (Founder - Growth Traders)",
    ],
    [
      "/gallery/g27.png",
      "E-Cell Induction",
      "Welcoming the 2k22 batch to the E-Cell family.",
    ],
    [
      "/gallery/g28.png",
      "E-Cell Induction",
      "Welcoming the 2k21 batch to the E-Cell family.",
    ],
    [
      "/gallery/g29.png",
      "E-Cell Induction",
      "Welcoming the 2k21 batch to the E-Cell family.",
    ],
    [
      "/gallery/g30.png",
      "E-Cell Induction",
      "Welcoming the 2k21 batch to the E-Cell family.",
    ],
    [
      "/gallery/g31.png",
      "E-Cell Induction",
      "Welcoming the 2k21 batch to the E-Cell family.",
    ],
    [
      "/gallery/g32.png",
      "E-Cell Induction",
      "Welcoming the 2k21 batch to the E-Cell family.",
    ],
    [
      "/gallery/g33.png",
      "E-Cell Induction",
      "Welcoming the 2k21 batch to the E-Cell family.",
    ],
    [
      "/gallery/g34.png",
      "E-Cell Induction",
      "Welcoming the 2k21 batch to the E-Cell family.",
    ],
    [
      "/gallery/g35.png",
      "E-Cell Induction",
      "Welcoming the 2k21 batch to the E-Cell family.",
    ],
    [
      "/gallery/g37.png",
      "E-Cell Induction",
      "Welcoming the 2k21 batch to the E-Cell family.",
    ],
    [
      "/gallery/g38.png",
      "E-Cell Induction",
      "Welcoming the 2k21 batch to the E-Cell family.",
    ],
    ["/gallery/g39.png", "Online Session", "LinkedIn and it's productive use."],
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
                src={imageUrl[0]}
                className="w-full h-auto object-cover rounded-[16px]"
                alt={`Gallery Image ${i + 1}`}
                loading="lazy"
              />
              {/* Overlay with transition */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Text container with transition */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-poppins font-[500] text-[20px] leading-[30px] text-[#FFF]">
                  {imageUrl[1]}
                </p>
                <p className="font-poppins font-[400] text-[16px] leading-[24px] text-[#FFF]">
                  {imageUrl[2]}
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
