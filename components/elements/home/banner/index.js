import React from 'react';
import Image from 'next/image';
import model from "../../../../public/images/models/model1.JPG"

const Banner = () => {
  // bg-gradient-to-r from-yellow-50 via-white to-yellow-50
  return (
    <section className="flex flex-col md:flex-row lg:items-center bg-white p-8 sm:px-20 xl:px-40 space-y-8 md:space-y-0 md:space-x-12">
      <div className="flex-1 space-y-4">
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-black leading-tight animate-fade-in-up">
          Transform Your Hair, <br /> Elevate Your Style
        </h1>
        <p className="text-xl text-gray-400 animate-fade-in-up delay-100">
          Indulge in the art of luxury hair care – where every treatment is a masterpiece.
        </p>
        <p className="hidden sm:block sm:text-base text-gray-600 animate-fade-in-up delay-200">
          Unlock the secret to vibrant, healthy hair with our curated treatments and globally renowned products. From bespoke coloring to transformative keratin solutions, we bring you the finest in hair care innovation.
          <span>
            Also experience the pinnacle of hair artistry – where luxury meets innovation, and every strand is transformed into a work of art
          </span>
        </p>
        <p className="block sm:hidden sm:text-base text-gray-600 animate-fade-in-up delay-200">
          Unlock the secret to vibrant, healthy hair with our curated treatments and globally renowned products.
          {/* From bespoke coloring to transformative keratin solutions, we bring you the finest in hair care innovation. */}
        </p>
        <button className="mt-4 px-6 py-3 border-2 border-yellow-600 rounded-full text-yellow-600 font-medium hover:bg-yellow-600 hover:text-white transition-transform transform hover:scale-105 duration-300 animate-fade-in-up delay-300">
          Book Your Experience Now
        </button>
      </div>
      <div className="flex-1 flex lg:justify-center lg:items-center">
        <div className="w-64 h-80 lg:w-[450px] lg:h-[550px] relative">
          <Image
            src={model}
            alt="Luxury hair care"
            className="rounded-lg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
