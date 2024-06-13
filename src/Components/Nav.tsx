import React from "react";
import { assets } from "../assets/assets.ts";

const Nav = () => {
  const [focusIndex, setFocusIndex] = React.useState(0);
  const links = ["home", "mountains", "tips", "gallery", "contacts"];

  const handleClick = (index: number) => {
    setFocusIndex(index === focusIndex ? 0 : index);
  };

  return (
    <header className="max-container pt-4">
      <nav className="flex  justify-between items-center">
        <a href="/">
          <img
            width={90}
            height={53}
            className="m-0 w-[90px] h-[53px]"
            src={assets.logo}
            alt="Logo"
          />
        </a>

        <ul className="flex font-lato text-lg text-slate-100 gap-9">
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
