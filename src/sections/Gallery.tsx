import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";

const Gallery = () => {
  const mountains = [
    {
      link: assets.gallery1,
      alt: "Mountain 1",
    },
    {
      link: assets.gallery2,
      alt: "Mountain 2",
    },
    {
      link: assets.gallery3,
      alt: "Mountain 3",
    },
    {
      link: assets.gallery4,
      alt: "Mountain 4",
    },
    {
      link: assets.gallery5,
      alt: "Mountain 5",
    },
    {
      link: assets.gallery6,
      alt: "Mountain 6",
    },
  ];
  return (
    <section className="max-xl:px-3">
      <Title text="Gallery" />
      <div className="mb-8 flex gap-5 flex-wrap mt-8 justify-center max-sm:gap-3">
        {mountains.map((mountain) => (
          <div key={mountain.link} className="card-zoom2 max-sm:card-zoom">
            <img
              className="w-[380px] h-[290px] object-cover card-zoom-image max-sm:w-[280px] max-sm:h-[180px]"
              src={mountain.link}
              alt={mountain.alt}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
