import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";

const Recommendations = () => {
  return (
    <section className="max-xl:px-3">
      <Title text="Recommendations" />
      <div className="mt-8 flex gap-5 flex-wrap max-lg:justify-center">
        <div className="w-[17.5rem] bg-slate-100 shadow-md ">
          <div className="card-zoom">
            <img
              className="h-[180px] w-full object-cover card-zoom-image"
              src={assets.card1}
              alt="Montanha Serrat Tourvel dificuldade 3/5"
            />
          </div>
          <div className="p-3 flex flex-col gap-4">
            <h4 className="font-lato font-semibold text-slate-700 uppercase text-base">
              Serrat Tourvel
            </h4>
            <div>
              <h5 className="font-lato font-semibold text-slate-500 uppercase text-sm">
                difficulty
              </h5>
              <div className="flex gap-3 mt-2">
                <p className="w-8 h-8 flex items-center justify-center font-lato font-semibold text-slate-50 text-sm bg-slate-400 rounded-full">
                  1
                </p>

                <p className="w-8 h-8 flex items-center justify-center font-lato font-semibold text-slate-50 text-sm bg-slate-400 rounded-full">
                  2
                </p>

                <p className="w-8 h-8 flex items-center justify-center font-lato font-semibold text-slate-50 text-sm bg-slate-600 rounded-full">
                  3
                </p>

                <p className="w-8 h-8 flex items-center justify-center font-lato font-semibold text-slate-50 text-sm bg-slate-400 rounded-full">
                  4
                </p>

                <p className="w-8 h-8 flex items-center justify-center font-lato font-semibold text-slate-50 text-sm bg-slate-400 rounded-full">
                  5
                </p>
              </div>
            </div>
            <p className="font-lato font-semibold text-slate-700 uppercase text-sm flex items-center gap-1">
              <img src={assets.location} alt="location icon" /> China, Xangai
            </p>
            <button className="self-start bg-sky-900 font-lato font-semibold text-white text-sm py-[10px] px-4 transition hover:bg-sky-700">
              MORE ABOUT
            </button>
          </div>
        </div>

        <div className="w-[17.5rem] bg-slate-100 shadow-md ">
          <div className="card-zoom">
            <img
              className="h-[180px] w-full object-cover card-zoom-image"
              src={assets.card2}
              alt="Montanha Serrat Tourvel dificuldade 3/5"
            />
          </div>
          <div className="p-3 flex flex-col gap-4">
            <h4 className="font-lato font-semibold text-slate-700 uppercase text-base">
              Carrasckty
            </h4>
            <div>
              <h5 className="font-lato font-semibold text-slate-500 uppercase text-sm">
                difficulty
              </h5>
              <div className="flex gap-3 mt-2">
                <p className="w-8 h-8 flex items-center justify-center font-lato font-semibold text-slate-50 text-sm bg-slate-400 rounded-full">
                  1
                </p>

                <p className="w-8 h-8 flex items-center justify-center font-lato font-semibold text-slate-50 text-sm bg-slate-400 rounded-full">
                  2
                </p>

                <p className="w-8 h-8 flex items-center justify-center font-lato font-semibold text-slate-50 text-sm bg-slate-400 rounded-full">
                  3
                </p>

                <p className="w-8 h-8 flex items-center justify-center font-lato font-semibold text-slate-50 text-sm bg-slate-400 rounded-full">
                  4
                </p>

                <p className="w-8 h-8 flex items-center justify-center font-lato font-semibold text-slate-50 text-sm bg-slate-600 rounded-full">
                  5
                </p>
              </div>
            </div>
            <p className="font-lato font-semibold text-slate-700 uppercase text-sm flex items-center gap-1">
              <img src={assets.location} alt="location icon" /> RUSSIA,
              YEKOVSITKY
            </p>
            <button className="self-start bg-sky-900 font-lato font-semibold text-white text-sm py-[10px] px-4 transition hover:bg-sky-700">
              MORE ABOUT
            </button>
          </div>
        </div>

        <div className="w-[17.5rem] bg-slate-100 shadow-md ">
          <div className="card-zoom">
            <img
              className="h-[180px] w-full object-cover card-zoom-image"
              src={assets.card3}
              alt="Montanha Serrat Tourvel dificuldade 3/5"
            />
          </div>
          <div className="p-3 flex flex-col gap-4">
            <h4 className="font-lato font-semibold text-slate-700 uppercase text-base">
              ESTOCON DEU
            </h4>
            <div>
              <h5 className="font-lato font-semibold text-slate-500 uppercase text-sm">
                difficulty
              </h5>
              <div className="flex gap-3 mt-2">
                <p className="w-8 h-8 flex items-center justify-center font-lato font-semibold text-slate-50 text-sm bg-slate-400 rounded-full">
                  1
                </p>

                <p className="w-8 h-8 flex items-center justify-center font-lato font-semibold text-slate-50 text-sm bg-slate-400 rounded-full">
                  2
                </p>

                <p className="w-8 h-8 flex items-center justify-center font-lato font-semibold text-slate-50 text-sm bg-slate-400 rounded-full">
                  3
                </p>

                <p className="w-8 h-8 flex items-center justify-center font-lato font-semibold text-slate-50 text-sm bg-slate-600 rounded-full">
                  4
                </p>

                <p className="w-8 h-8 flex items-center justify-center font-lato font-semibold text-slate-50 text-sm bg-slate-400 rounded-full">
                  5
                </p>
              </div>
            </div>
            <p className="font-lato font-semibold text-slate-700 uppercase text-sm flex items-center gap-1">
              <img src={assets.location} alt="location icon" /> CHILE, SANTA
              ELENA
            </p>
            <button className="self-start bg-sky-900 font-lato font-semibold text-white text-sm py-[10px] px-4 transition hover:bg-sky-700">
              MORE ABOUT
            </button>
          </div>
        </div>

        <div className="w-[17.5rem] bg-slate-100 shadow-md ">
          <div className="card-zoom">
            <img
              className="h-[180px] w-full object-cover card-zoom-image"
              src={assets.card4}
              alt="Montanha Serrat Tourvel dificuldade 3/5"
            />
          </div>
          <div className="p-3 flex flex-col gap-4">
            <h4 className="font-lato font-semibold text-slate-700 uppercase text-base">
              HOUSTON HILL
            </h4>
            <div>
              <h5 className="font-lato font-semibold text-slate-500 uppercase text-sm">
                difficulty
              </h5>
              <div className="flex gap-3 mt-2">
                <p className="w-8 h-8 flex items-center justify-center font-lato font-semibold text-slate-50 text-sm bg-slate-400 rounded-full">
                  1
                </p>

                <p className="w-8 h-8 flex items-center justify-center font-lato font-semibold text-slate-50 text-sm bg-slate-600 rounded-full">
                  2
                </p>

                <p className="w-8 h-8 flex items-center justify-center font-lato font-semibold text-slate-50 text-sm bg-slate-400 rounded-full">
                  3
                </p>

                <p className="w-8 h-8 flex items-center justify-center font-lato font-semibold text-slate-50 text-sm bg-slate-400 rounded-full">
                  4
                </p>

                <p className="w-8 h-8 flex items-center justify-center font-lato font-semibold text-slate-50 text-sm bg-slate-400 rounded-full">
                  5
                </p>
              </div>
            </div>
            <p className="font-lato font-semibold text-slate-700 uppercase text-sm flex items-center gap-1">
              <img src={assets.location} alt="location icon" /> CANADA, ARLOIW
              ELENA
            </p>
            <button className="self-start bg-sky-900 font-lato font-semibold text-white text-sm py-[10px] px-4 transition hover:bg-sky-700">
              MORE ABOUT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
