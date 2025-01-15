"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

const Carousel = () => {
  const images = [
    "https://picsum.photos/400/300",
    "https://picsum.photos/400/400",
    "https://picsum.photos/400/500",
    "https://picsum.photos/400/400",
    "https://picsum.photos/400/500",
    "https://picsum.photos/400/400",
    "https://picsum.photos/400/500",
    "https://picsum.photos/400/400",
    "https://picsum.photos/400/500",
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
