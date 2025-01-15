"use client";
import React, { useState } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const isGalleryOrContact = pathname.includes("/gallery");

  const links = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "INITIATIVES", href: "/initiatives" },
    { name: "GALLERY", href: "/gallery" },
    { name: "CONTACT US", href: "/contact" },
  ];

  const logo = isGalleryOrContact ? "/logo.svg" : "/logo.png";

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav
      className={`${
        isGalleryOrContact ? "bg-white text-black" : "bg-transparent text-white"
      } shadow-md max-h-16 sm:max-h-24 md:px-4 md:py-2`}
    >
      <div className="container flex justify-between items-center mx-auto px-6 md:px-10">
        <div className="flex items-center space-x-2">
          <Image src={logo} width={35} height={35} alt="Logo" />
        </div>

        {/* Hamburger Menu */}
        <button className="sm:hidden" onClick={toggleSidebar}>
          <RxHamburgerMenu
            className={`text-2xl ${
              isGalleryOrContact ? "text-black" : "text-white"
            } cursor-pointer`}
          />
        </button>

        
        <ul className="hidden sm:flex gap-6 font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`hover:underline ${
                  pathname === link.href ? "underline" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out w-64`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-black text-2xl"
            onClick={toggleSidebar}
          >
            ✕
          </button>
        </div>
        <ul className="flex flex-col items-start gap-4 p-6">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-black hover:underline"
                onClick={toggleSidebar}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
