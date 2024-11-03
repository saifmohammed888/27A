import React from 'react';
import { ScissorsIcon, SparklesIcon, BeakerIcon } from '@heroicons/react/24/outline';

const Features = () => {
  return (
    <section className="bg-black text-white py-16 px-8 sm:px-20 xl:px-40">
      <h2 className="text-center text-xl sm:text-2xl md:text-4xl font-serif font-bold text-white mb-12">
        Our Expertise in Luxury Hair Styling <br /> & Treatments
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-12 space-y-12 md:space-y-0">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center p-8 border border-gray-700 rounded-lg bg-black hover:bg-gray-900 transition-all duration-300 w-full md:w-1/3">
          <ScissorsIcon className="h-12 w-12 text-yellow-600 mb-6" />
          <h3 className="text-xl font-bold mb-4">Custom Hair Coloring</h3>
          <p className="text-base text-gray-400">
            Achieve your dream look with bespoke hair colors tailored to perfection. Whether it’s subtle balayage or bold highlights, our expert stylists use premium products for long-lasting vibrancy.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center p-8 border border-gray-700 rounded-lg bg-black hover:bg-gray-900 transition-all duration-300 w-full md:w-1/3">
          <SparklesIcon className="h-12 w-12 text-yellow-600 mb-6" />
          <h3 className="text-xl font-bold mb-4">Precision Hair Treatments</h3>
          <p className="text-base text-gray-400">
            Rejuvenate your hair with our luxurious keratin, smoothing, and conditioning treatments. Designed to nourish and restore, these treatments leave your hair soft, shiny, and healthy.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center p-8 border border-gray-700 rounded-lg bg-black hover:bg-gray-900 transition-all duration-300 w-full md:w-1/3">
          <BeakerIcon className="h-12 w-12 text-yellow-600 mb-6" />
          <h3 className="text-xl font-bold mb-4">International Product Line</h3>
          <p className="text-base text-gray-400">
            Explore an exclusive range of world-renowned products selected for their effectiveness and luxury. Elevate your hair care routine with the best that the world has to offer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
