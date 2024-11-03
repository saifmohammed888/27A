import React from 'react';
import Image from 'next/image';

const LuxuryStylist = () => {
  return (
    <section className="bg-black text-white py-16 px-8 md:px-20 lg:px-40">
      <div className="flex flex-col md:flex-row lg:items-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Image Section */}
        <div className="flex-1 flex ld:justify-center">
            <div className="w-64 h-80 lg:w-[750px] lg:h-[550px] relative">
            <Image
               src={"/images/models/ali.png"}
                alt="Luxury Hair Stylist"
                className="rounded-sm"
                layout="fill"
                objectFit="cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-yellow-300">Our Luxury Stylist</h2>

          <blockquote className="italic text-2xl text-white mb-4">"Transforming hair into art, one style at a time"</blockquote>

          <p className="text-gray-300 text-base">
            Mr Ali, with over 15 years in the fashion industry, is a master of luxury hair color, treatments, styling, and cuts. Known for his precision, he crafts colors that enhance each client’s natural beauty. From soft balayage to bold statements, each look leaves a lasting impression.
          </p>

          <p className="text-gray-300 text-base">
            With a high-fashion and editorial background, he brings refined elegance to every style, blending classic and modern trends. Specializing in advanced treatments, he prioritizes hair health with premium products. Every cut and style boosts confidence, creating looks clients love for any occasion.
          </p>

          <p className="text-yellow-300 text-lg font-semibold mt-6">
            Mohammed Ali – Celebrity Stylist & Luxury Hair Expert
          </p>
        </div>
      </div>
    </section>
  );
};

export default LuxuryStylist;
