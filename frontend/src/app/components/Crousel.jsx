"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

const Carousel = () => {
  const images = [
    "/gallery/g8.jpg",
    "/gallery/g2.jpg",
    "/gallery/g1.jpg",
    "/gallery/g19.png",
    "/gallery/g20.png",
    "/gallery/g21.png",
    "/gallery/g22.png",
    "/gallery/g25.png",
    "/gallery/g26.png",
    "/gallery/g33.png",
    "/gallery/g38.png",
    "/gallery/g39.png",
  ];

  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full">
            <img src={image} alt="img" className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
