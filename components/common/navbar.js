import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  //bg-gradient-to-r from-yellow-50 via-gray-100 to-yellow-100
  return (
    <nav className="w-full border-b border-gray-200 bg-white px-0 md:px-12 xl:px-20">
      <div className="flex justify-between items-center px-6 md:px-10 lg:px-20 py-4">
        {/* Logo and Tagline */}
        <div className="flex flex-col">
          <div className="font-serif font-bold text-[32px] md:text-[40px] lg:text-[50px] text-yellow-600 leading-none">
            <Link href="/">27A</Link>
          </div>
          <p className="font-serif font-light text-[10px] md:text-[12px] lg:text-[14px] text-black italic leading-none">
            Luxury Hair Experts
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-black">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          {/* <Link href="/products">Products</Link> */}
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Book Now Button */}
        <div className="hidden md:block">
          <button className="px-5 py-2 border-2 border-black rounded-full text-black hover:bg-black hover:text-white transition-all duration-300">
            Book Now
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleNav}>
            {navOpen ? (
              <XMarkIcon className="h-8 w-8 text-black" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="bg-gradient-to-b   from-yellow-50 via-gray-100 to-yellow-100
        md:hidden flex flex-col items-left space-y-4 p-8 bg-white border-t border-gray-200">
          <Link href="/" onClick={() => setNavOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setNavOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setNavOpen(false)}>Services</Link>
          {/* <Link href="/products" onClick={() => setNavOpen(false)}>Products</Link> */}
          <Link href="/gallery" onClick={() => setNavOpen(false)}>Gallery</Link>
          <Link href="/contact" onClick={() => setNavOpen(false)}>Contact</Link>
          <button
            className="px-5 py-2 border-2 w-[150px] border-black text-black hover:bg-black hover:text-white transition-all duration-300"
            onClick={() => setNavOpen(false)}
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
