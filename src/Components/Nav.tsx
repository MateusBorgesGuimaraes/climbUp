import React from "react";
import { assets } from "../assets/assets.ts";
import useMedia from "../Hooks/useMedia.ts";

const Nav = () => {
  const [focusIndex, setFocusIndex] = React.useState(0);
  const links = ["home", "mountains", "tips", "gallery", "contacts"];

  const mobile = useMedia("(max-width: 768px)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const handleClick = (index: number) => {
    setFocusIndex(index === focusIndex ? 0 : index);
  };

  return (
    <header className="max-container pt-4">
      <nav className="flex relative  justify-between items-center">
        <a href="/">
          <img
            width={90}
            height={53}
            className="m-0 w-[90px] h-[53px]"
            src={assets.logo}
            alt="Logo"
          />
        </a>

        {mobile && (
          <button
            aria-label="Menu"
            className={`h-8 w-8 flex justify-center items-center after:content-[''] after:block after:w-8 after:h-[2.5px] after:bg-slate-100 after:rounded-[2.5px] after:customShadow after:duration-200 ${
              mobileMenu &&
              "after:-rotate-90 after:h-[6px] after:w-[6px] after:rounded-[6px]"
            }`}
            onClick={() => setMobileMenu(!mobileMenu)}
          ></button>
        )}
        <ul
          className={`${
            mobileMenu ? "max-md:block max-md:absolute" : "max-md:hidden"
          } flex font-lato text-lg text-slate-100 gap-9`}
        >
          {links.map((item, index) => (
            <li
              key={index}
              onClick={() => handleClick(index)}
              className={`relative ${
                focusIndex === index
                  ? 'after:content-[""] after:absolute after:w-3 after:h-3 after:bg-slate-200 after:rounded-[50%] after:transition-transform after:duration-500 after:transform after:scale-100 after:opacity-100'
                  : 'after:content-[""] after:absolute after:w-3 after:h-3 after:bg-slate-200 after:rounded-[50%] after:transition-transform after:duration-500 after:transform after:scale-0 after:opacity-0'
              }`}
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
