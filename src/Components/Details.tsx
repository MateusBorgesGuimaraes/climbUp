import React from "react";

type DetailsProps = React.ComponentProps<"details"> & {
  title: string;
  name: string;
  text: string;
  number: number;
};

const Details = ({ title, text, number, name, ...props }: DetailsProps) => {
  return (
    <details name={name} {...props}>
      <summary className="z-10 relative border-b-2 border-slate-500 duration-300 cursor-pointer hover:bg-slate-300">
        <div className="font-barlow font-semibold text-xl text-slate-700">
          <span className="font-barlow relative font-semibold text-4xl before:content-['']  before:absolute before:w-3 before:h-3 before:bg-sky-700 before:left-[-16px] before:top-[12px] before:rounded-[50%] mr-3 ">
            {number}
          </span>
          {title}
        </div>
      </summary>
      <div className="font-lato text-slate-700 font-medium mt-2">{text}</div>
    </details>
  );
};

export default Details;
