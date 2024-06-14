import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section className="max-container max-xl:px-3 ">
      <div className="flex  h-screen flex-col items-center justify-center relative max-sm:pb-16">
        <h1 className="font-barlow text-9xl font-semibold text-slate-100 after:content-[''] after:absolute after:w-10 after:h-10 after:bg-slate-200 after:rounded-[50%] max-sm:text-7xl max-sm:after:w-6 max-sm:after:h-6">
          Climb Up
        </h1>
        <p className="font-lato text-center text-xl font-semibold text-slate-100 mt-6 max-sm:text-base">
          Climb Up is your ultimate destination for thrilling and adventurous
          rock climbing experiences. Our state-of-the-art climbing facility
          caters to climbers of all skill levels, from beginners to seasoned
          professionals
        </p>
        <button className="absolute bottom-10 max-sm:bottom-16 animate-bounce-slow">
          <img src={assets.arrowDown} alt="Go to recommendations" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
