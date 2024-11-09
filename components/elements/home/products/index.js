import React from 'react';
import Image from 'next/image';

const ComingSoon = () => {
  return (
    <section className="bg-white py-16 px-8 sm:px-20 lg:px-40 space-y-16">
      {/* Heading and Description */}
      <div className="text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-yellow-600">
          Coming Soon - Luxury with 27A
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
          Experience the future of hair care with our soon-to-launch exclusive range under 27A. Designed to elevate your styling and treatment routine, curated to give your hair the care it deserves.
        </p>
      </div>

      {/* Product Highlights */}
      <div className="flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-12">
        {/* Product Image 1 */}
        <div className="flex-1 flex justify-end">
          <div className="w-72 h-48 lg:w-[550px] lg:h-[300px] relative">
            <Image
              src={"/images/products/product1.png"}
              alt="27A Product Display"
              className="rounded-lg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Features List 1 */}
        <div className="flex-1 space-y-4 text-left sm:text-2xl md:text-left text-gray-800">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="font-bold text-yellow-700 mr-2">→</span> Exclusive, salon-quality formulas.
            </li>
            <li className="flex items-start">
              <span className="font-bold text-yellow-700 mr-2">→</span> Eco-friendly packaging.
            </li>
            <li className="flex items-start">
              <span className="font-bold text-yellow-700 mr-2">→</span> Customizable for all hair types.
            </li>
            <li className="flex items-start">
              <span className="font-bold text-yellow-700 mr-2">→</span> Professional-grade results.
            </li>
          </ul>
        </div>
      </div>

      {/* Second Product Section */}
      <div className="flex flex-col-reverse md:flex-row items-center space-y-12 md:space-y-0 md:space-x-12">
        {/* Features List 2 */}
        <div className="flex-1 space-y-4 text-left sm:text-2xl md:text-right text-gray-800">
          <ul className="space-y-4 mt-8 md:mt-0 md:pl-[25%]">
            <li className="flex items-end">
              <span className="font-bold text-yellow-700 mr-2">→</span> Salon results at home.
            </li>
            <li className="flex items-start">
              <span className="font-bold text-yellow-700 mr-2">→</span> Healthier, stronger hair.
            </li>
            <li className="flex items-start">
              <span className="font-bold text-yellow-700 mr-2">→</span> Easy online access and delivery.
            </li>
            <li className="flex items-start">
              <span className="font-bold text-yellow-700 mr-2">→</span> Special launch discounts.
            </li>
          </ul>
        </div>

        {/* Product Image 2 */}
        <div className="flex-1 flex justify-start">
          <div className="w-72 h-48 lg:w-[550px] lg:h-[300px] relative">
            <Image
              src={"/images/products/product2.png"}
              alt="27A Product Collection"
              className="rounded-lg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
