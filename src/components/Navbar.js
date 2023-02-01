import React, { useState } from 'react'
import { fav, notifi, shop, close, menu} from '../assets'
import { navLinks } from '../constants';

import SearchInput from "../components/SearchInput";

const Navbar = (props) => {
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

      <div className="sm:hidden flex flex-1 justify-start items-center">
        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle((prev) => !prev)} />
      </div>

      <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-slate-50 absolute top-28 left-14 z-10 mx-4 rounded-xl sidebar`}>

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

    <div className='lg:flex lg:gap-32 gap-10 justify-center items-center'>
      <div className='justify-between items-center flex'>
          <SearchInput setSearch={props.setSearch}/>
      </div>

      <div className="sm:flex hidden justify-between gap-12 pt-2">
        <img src={fav} alt="fav" className="w-[28px] h-[28px]"/>
        <img src={shop} alt="shop" className="w-[28px] h-[28px]"/>
        <img src={notifi} alt="notifi" className="w-[28px] h-[28px]"/>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
