import React from "react";
import { assets } from "../assets/assets";

type CardProps = {
  name: string;
  img: string;
  location: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
};

const Card = ({ name, img, location, difficulty }: CardProps) => {
  return (
    <div className="w-[17.5rem] bg-slate-100 shadow-md ">
      <div className="card-zoom">
        <img
          className="h-[180px] w-full object-cover card-zoom-image"
          src={img}
          alt={`Montanha ${name} dificuldade ${difficulty}/5`}
        />
      </div>
      <div className="p-3 flex flex-col gap-4">
        <h4 className="font-lato font-semibold text-slate-700 uppercase text-base">
          {name}
        </h4>
        <div>
          <h5 className="font-lato font-semibold text-slate-500 uppercase text-sm">
            difficulty
          </h5>
          <div className="flex gap-3 mt-2">
            <p
              className={`w-8 h-8 flex items-center justify-center font-lato font-semibold text-slate-50 text-sm ${
                difficulty === 1 ? "bg-slate-600" : "bg-slate-400"
              } rounded-full`}
            >
              1
            </p>

            <p
              className={`w-8 h-8 flex items-center justify-center font-lato font-semibold text-slate-50 text-sm ${
                difficulty === 2 ? "bg-slate-600" : "bg-slate-400"
              } rounded-full`}
            >
              2
            </p>

            <p
              className={`w-8 h-8 flex items-center justify-center font-lato font-semibold text-slate-50 text-sm ${
                difficulty === 3 ? "bg-slate-600" : "bg-slate-400"
              } rounded-full`}
            >
              3
            </p>

            <p
              className={`w-8 h-8 flex items-center justify-center font-lato font-semibold text-slate-50 text-sm ${
                difficulty === 4 ? "bg-slate-600" : "bg-slate-400"
              } rounded-full`}
            >
              4
            </p>

            <p
              className={`w-8 h-8 flex items-center justify-center font-lato font-semibold text-slate-50 text-sm ${
                difficulty === 5 ? "bg-slate-600" : "bg-slate-400"
              } rounded-full`}
            >
              5
            </p>
          </div>
        </div>
        <p className="font-lato font-semibold text-slate-700 uppercase text-sm flex items-center gap-1">
          <img src={assets.location} alt="location icon" /> {location}
        </p>
        <button className="self-start bg-sky-900 font-lato font-semibold text-white text-sm py-[10px] px-4 transition hover:bg-sky-700">
          MORE ABOUT
        </button>
      </div>
    </div>
  );
};

export default Card;
