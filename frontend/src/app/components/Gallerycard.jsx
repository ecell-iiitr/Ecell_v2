import React from "react";

function Gallerycard() {
  return (
    <div className="h-[200px] w-[250px] relative rounded-md overflow-hidden group">
      <img src="/college.png" className="h-full w-full absolute z-10" />

      <div className="h-full w-full absolute z-10 bg-gradient-to-tr from-black/70 via-black/50 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <h1 className="text-lg font-semibold">E-Summit 2024</h1>
        <p className="text-sm font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
      </div>
    </div>
  );
}

export default Gallerycard;
