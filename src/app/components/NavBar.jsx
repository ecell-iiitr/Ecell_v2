'use client'
import React from 'react';
import Image from 'next/image';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
   
  return (
    <nav className=" md:px-4 md:py-2 max-h-16 shadow-md sm:max-h-24 bg-black/80">
      <div className="container flex justify-between items-center mx-auto px-10 ">
        <div className="text-xl font-bold">
          <Image src="/logo.png" width={35} height={35} alt="Logo" />
        </div>
        <RxHamburgerMenu className='text-2xl sm:hidden h-20 text-white'/>
        <ul className=" hidden sm:flex gap-9 text-white">
          <li>
            <a href="#" className=" hover:underline">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              INITIATIVES
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              GALLERY
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              CONTACT US
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
