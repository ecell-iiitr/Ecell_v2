import React from "react";
import Gallerycard from "../components/Gallerycard";


function page() {
  return (
    <div className="h-full">
      <main className="w-full mt-10 md:mt-16 px-10">
        <h1 className="text-[#BD9F67] text-center  text-3xl md:text-5xl font-bold pt-20">
          E-Cell in Motion
        </h1>
        <p className="text-[#212529] px-[10%] md:px-[17%] text-center py-8">Explore unforgettable moments where aspiring entrepreneurs, industry experts, and innovators come together to share knowledge, inspire ideas, and drive change.</p>
        <div className="flex flex-wrap  items-center gap-7  justify-center px-5 md:px-10 py-8 w-full">
             <Gallerycard/>
             <Gallerycard/>
             <Gallerycard/>
             <Gallerycard/>
             <Gallerycard/>
             <Gallerycard/>
             <Gallerycard/>
             <Gallerycard/>
             <Gallerycard/>
             <Gallerycard/>
             <Gallerycard/>
        </div>
      </main>
      <section className="w-full mt-10 md:mt-16 px-10 mb-6">
        <h1 className="text-[#BD9F67] text-center  text-3xl md:text-5xl font-bold pt-20">
          E-Cell in Motion
        </h1>
        <p className="text-[#212529] px-[10%] md:px-[17%] text-center py-8">Explore unforgettable moments where aspiring entrepreneurs, industry experts, and innovators come together to share knowledge, inspire ideas, and drive change.</p>
        <div className="flex  items-center  justify-center py-10 w-full">
             <div className=" w-[80%] md:w-[70%] lg:w-[60%] h-[400px] overflow-hidden rounded-lg">
                <img src="/college.png" className="w-full h-[90%] object-cover "/>
                <div className="bg-[#243137] h-[10%] flex items-center justify-center py-2 text-white">
                LOREM IPSUM DOLOR SI AMET
                </div>
             </div>
        </div>
      </section>
    </div>
  );
}

export default page;
