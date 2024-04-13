import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constant";

import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <header className="padding-x padding-y absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <img
            src={hamburger}
            alt="Menu"
            width={30}
            height={30}
            className="hidden max-lg:block hover:text-coral-red"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
          {isOpen && (
            <div className="absolute right-0 padding-x">
              <ul className="py-2 px-2 bg-white shadow-md rounded-lg flex flex-col gap-2">
                {navLinks.map((item) => (
                  <li
                    key={item.label}
                    className="px-6 py-2 cursor-pointer hover:bg-gray-100  hover:text-coral-red"
                  >
                    <a href={item.href} onClick={() => setIsOpen(!isOpen)}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
