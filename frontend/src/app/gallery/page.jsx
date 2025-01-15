import React from "react";
import Gallerycard from "../components/Gallerycard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const images = [
  {
    id: 1,
    src: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    src: "/college.png",
  },
  {
    id: 3,
    src: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    src: "/college.png",
  },
  {
    id: 5,
    src: "https://picsum.photos/200/300",
  },
  {
    id: 6,
    src: "/college.png",
  },
  {
    id: 7,
    src: "https://picsum.photos/200/300",
  },
];

function page() {
  return (
    <div className="h-full">
      <main className="w-full mt-10 md:mt-16 px-10">
        <h1 className="text-[#BD9F67] text-center  text-3xl md:text-5xl font-bold pt-20">
          E-Cell in Motion
        </h1>
        <p className="text-[#212529] px-[10%] md:px-[17%] text-center py-8">
          Explore unforgettable moments where aspiring entrepreneurs, industry
          experts, and innovators come together to share knowledge, inspire
          ideas, and drive change.
        </p>
        <div className="flex flex-wrap  items-center gap-7  justify-center px-5 md:px-10 py-8 w-full">
          <Gallerycard />
          <Gallerycard />
          <Gallerycard />
          <Gallerycard />
          <Gallerycard />
          <Gallerycard />
          <Gallerycard />
          <Gallerycard />
          <Gallerycard />
          <Gallerycard />
          <Gallerycard />
        </div>
      </main>
      <section className="w-full mt-10 md:mt-16 px-10 mb-6">
        <h1 className="text-[#BD9F67] text-center  text-3xl md:text-5xl font-bold pt-20">
          E-Cell in Motion
        </h1>
        <p className="text-[#212529] px-[10%] md:px-[17%] text-center py-8">
          Explore unforgettable moments where aspiring entrepreneurs, industry
          experts, and innovators come together to share knowledge, inspire
          ideas, and drive change.
        </p>
        <div className="flex  items-center  justify-center py-10 w-full">
          <div className=" w-[80%] md:w-[70%] lg:w-[60%] h-[400px] overflow-hidden rounded-lg flex flex-col items-center justify-center">
            <Carousel className="w-4/5 ">
              <CarouselContent>
                {images.map((image) => (
                  <CarouselItem key={image.id}>
                    <div className="p-1 ">
                      <img
                        src={image.src}
                        alt="img"
                        className="w-72 h-72 md:w-full   object-cover object-center rounded-t-xl"
                      />
                      <div className="bg-[#243137] h-[10%] flex items-center justify-center py-2 text-white w-full rounded-b-xl">
                        LOREM IPSUM DOLOR SI AMET
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
