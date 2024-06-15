import React from "react";

type TitlePros = {
  text: string;
  color?: string;
  colorDesc?: string;
};

const Title = ({
  text,
  color = "text-slate-900",
  colorDesc = "after:bg-slate-300",
}: TitlePros) => {
  return (
    <div
      className={`${color} font-barlow text-7xl font-semibold after:content-[''] after:absolute after:w-8 after:h-8  after:rounded-[50%] max-md:text-6xl max-sm:text-5xl max-sm:after:w-6  max-sm:after:h-6 max-[500px]:text-4xl ${colorDesc}`}
    >
      {text}
    </div>
  );
};

export default Title;
