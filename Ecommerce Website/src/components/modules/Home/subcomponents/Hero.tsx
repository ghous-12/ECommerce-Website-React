import React from "react";
import { images } from "../../../../utils/constants";

const Hero = () => {
  return (
    <>
      <div>
        <img src={images.Hero} alt="" className="" />
        {/* heading */}
        <h1 className="text-5xl font-bold absolute top-60 left-40 text-white">
          Genuine
        </h1>
        <h1 className="text-5xl font-bold absolute top-80 left-40 text-white">
          Shoes Online Shopping
        </h1>
      </div>
    </>
  );
};

export default Hero;
