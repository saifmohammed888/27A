import React from 'react';
import Link from 'next/link';
import Navbar from '../components/common/navbar';

const Custom404 = () => {
  return (
    <div>
        <Navbar />
        <div className="flex flex-col items-center justify-center h-[70vh] bg-white px-6 md:px-20 text-center">
        <div className="text-yellow-600 font-serif font-bold text-[50px] md:text-[70px] leading-tight">
            404
        </div>
        <h1 className="text-black font-serif text-3xl md:text-4xl mt-4">
            Oops! Page Not Found
        </h1>
        <p className="text-gray-600 text-base md:text-lg mt-4">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col md:flex-row items-center mt-8 space-y-4 md:space-y-0 md:space-x-6">
            <Link href="/">
            <span className="px-6 py-3 border-2 border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition-all duration-300">
                Go Back Home
            </span>
            </Link>
        </div>
        </div>
    </div>
  );
};

export default Custom404;
