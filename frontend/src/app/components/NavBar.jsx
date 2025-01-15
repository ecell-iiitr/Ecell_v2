'use client';
import React from 'react';
import Image from 'next/image';
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname(); 

  
  const isGalleryOrContact = pathname.includes('/gallery') || pathname.includes('/contact');

  const links = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'INITIATIVES', href: '/initiatives' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'CONTACT US', href: '/contact' },
  ];
  const logo =isGalleryOrContact?"/logo.svg":"/logo.png";
  return (
    <nav
      className={`${
        isGalleryOrContact ? 'bg-white text-black' : 'bg-transparent text-white'
      } shadow-md max-h-16 sm:max-h-24 md:px-4 md:py-2`}
    >
      <div className="container flex justify-between items-center mx-auto px-6 md:px-10">
        
        <div className="flex items-center space-x-2">
          <Image src={logo} width={35} height={35} alt="Logo" />
        </div>

        
        <RxHamburgerMenu className={`text-2xl sm:hidden ${isGalleryOrContact ? 'text-black' : 'text-white'} cursor-pointer`} />

        
        <ul className="hidden sm:flex gap-6 font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`hover:underline ${
                  pathname === link.href ? 'underline' : ''
                }`}
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
