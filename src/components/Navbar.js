import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants';

import SearchInput from "../components/SearchInput";

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

  return (
    <nav className="sm:px-16 px-6 w-full h-[40px] flex py-6 justify-between items-center nav">


      <ul className="list-none sm:flex hidden justify-start items-center flex-1">
        {navLinks.map((nav, ind) => (
          <li key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${ind === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-black`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle((prev) => !prev)} />
      </div>

      <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, ind) => (
              <li key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${ind === navLinks.length - 1 ? 'mr-0' : 'mb-10'} text-black`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
      </div>

    <div className='justify-between items-center flex-1'>
        <SearchInput />
    </div>
    </nav>
  );
};

export default Navbar;
