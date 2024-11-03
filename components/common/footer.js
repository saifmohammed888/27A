import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-8 sm:px-20 lg:px-40 border-t-2">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-8 lg:space-y-0">
        {/* Logo and Description */}
        <div className="flex-1 text-center lg:text-left space-y-4">
          <div className="flex justify-center lg:justify-start">
            <Image
              src={"/images/logo.jpeg"}
              alt="27A Logo"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <p className="text-gray-400 text-sm max-w-xs mx-auto lg:mx-0">
            27A is a luxury hair care brand offering premium products and treatments for sophisticated, high-quality hair care solutions.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6 text-center lg:text-left">
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-yellow-500">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-500">Products</a></li>
              <li><a href="#" className="hover:text-yellow-500">Services</a></li>
              <li><a href="#" className="hover:text-yellow-500">Stores</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-yellow-500">FAQ</a></li>
              <li><a href="#" className="hover:text-yellow-500">Terms</a></li>
              <li><a href="#" className="hover:text-yellow-500">Legal</a></li>
              <li><a href="#" className="hover:text-yellow-500">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">More</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-yellow-500">Career</a></li>
              <li><a href="#" className="hover:text-yellow-500">Testimonials</a></li>
              <li><a href="#" className="hover:text-yellow-500">Appointment</a></li>
              <li><a href="#" className="hover:text-yellow-500">Seminars and Tutorials</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
        <p>Copyright © 2024 27A. All rights reserved.</p>
        <p>
          Unauthorized use, reproduction, or distribution of 27A’s content, products, and materials is strictly prohibited.
        </p>
      </div>
    </footer>
  );
};

export default Footer;