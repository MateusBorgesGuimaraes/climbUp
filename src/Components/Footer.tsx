import React from "react";
import { assets } from "../assets/assets";
import Title from "./Title";

const Footer = () => {
  return (
    <footer className="bg-slate-950">
      <div className="max-container py-8 max-xl:px-3">
        <div className="grid grid-cols-12 max-md:grid-cols-1 max-md:items-center max-md:justify-center">
          <div className="col-span-6 max-md:col-span-full max-md:row-start-1 flex flex-col justify-between max-md:gap-4 max-md:mb-6">
            <div className="">
              <img src={assets.logo} alt="" />
            </div>
            <Title
              text="Contact Us"
              color="text-slate-100"
              colorDesc="after:bg-cyan-600"
            />
            <div className="flex gap-4 flex-col text-base font-lato font-semibold text-slate-100">
              <p>99999-9999/88888-8888</p>
              <p>climb-up@gmail.com/climb-up2@gmail.com</p>
              <p>@ClimbUpOficial/@ClimbUpGalery</p>
            </div>
            <p className="text-base font-lato font-semibold text-slate-300">
              feedbash©todos.os.direitos.reservados
            </p>
          </div>

          <form
            className="col-start-7 col-span-full w-full flex flex-col gap-3 max-md:col-span-full max-md:row-start-2"
            action=""
          >
            <div className="w-full flex flex-col gap-1">
              <label
                className="text-2xl font-semibold font-barlow text-slate-100"
                htmlFor="name"
              >
                nome
              </label>
              <input
                className="w-full bg-slate-500 h-9  text-slate-100 font-medium font-lato"
                type="text"
                name="name"
                id=""
              />
            </div>

            <div className="w-full flex flex-col gap-1">
              <label
                className="text-2xl font-semibold font-barlow text-slate-100"
                htmlFor="email"
              >
                email
              </label>
              <input
                className="w-full bg-slate-500 h-9  text-slate-100 font-medium font-lato"
                type="email"
                name="email"
                id=""
              />
            </div>

            <div className="w-full flex flex-col gap-1">
              <label
                className="text-2xl font-semibold font-barlow text-slate-100"
                htmlFor="mensage"
              >
                mensage
              </label>
              <textarea
                className="resize-none w-full bg-slate-500 h-48  text-slate-100 font-medium font-lato"
                name="mensage"
                id=""
              ></textarea>
            </div>

            <button className="py-3 px-16 bg-cyan-500 text-2xl font-barlow font-semibold text-slate-200 self-end transition  hover:bg-cyan-600">
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
