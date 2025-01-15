import Image from 'next/image';
import React from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { IoLocation } from "react-icons/io5";

function Footer() {
  return (
    <footer className="bg-[#243137] w-full">
      <div className="bg-transparent w-full md:flex justify-between items-start py-8 px-6 md:px-12">
        
        
        <section className="text-white mb-8 md:mb-0 md:w-1/3">
          <Image 
            src="/logofull.png" 
            width={65} 
            height={65} 
            alt="E-Cell IIIT Ranchi Logo" 
            className="w-40 mb-4" 
          />
          <p className="py-2">Subscribe to Our Newsletter</p>
          <form className="flex flex-col">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-3 py-2 rounded-full w-full border-2 border-[#BD9F67] focus:outline-none text-black" 
              aria-label="Enter your email"
            />
          </form>
          <p className="py-2 mt-4">Get connected with us on social networks:</p>
        </section>

        
        <nav className="md:flex justify-evenly gap-10 text-white">
          <section className="mb-6 md:mb-0">
            <h2 className="font-semibold text-[#BD9F67] text-lg mb-2">OUR INITIATIVES</h2>
            <ul className="space-y-2">
              <li>E-Summit</li>
              <li>Eureka!</li>
              <li>Eureka! Junior</li>
              <li>Illuminate</li>
              <li>Campus Executive</li>
              <li>FinCoF</li>
            </ul>
          </section>

         
          <section className="mb-6 md:mb-0">
            <h2 className="font-semibold text-[#BD9F67] text-lg mb-2">USEFUL LINKS</h2>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About Us</li>
              <li>Gallery</li>
              <li>Contact Us</li>
            </ul>
          </section>

          
          <section>
            <h2 className="font-semibold text-[#BD9F67] text-lg mb-2">CONTACT</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <IoLocation className="mr-2 mt-1" />
                <p>
                  ARTTC, BSNL Campus, IIIT Ranchi,
                  <br />
                  Jharkhand 835217
                </p>
              </li>
              <li className="flex items-center">
                <HiOutlineMail className="mr-2 text-white" />
                <a href="mailto:support@ecell.in" className="hover:underline">support@ecell.in</a>
              </li>
            </ul>
          </section>
        </nav>
      </div>

      
      <div className="bg-[#0000002D] w-full h-10 flex items-center justify-center text-[#BD9F67]">CREATE ⋅ INNOVATE ⋅ IMPACT</div>
    </footer>
  );
}

export default Footer;
