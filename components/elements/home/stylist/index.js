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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-yellow-600">Our Luxury Stylist</h2>

          <blockquote className="italic text-2xl text-white mb-4">"Transforming hair into art, one style at a time"</blockquote>

          <p className="text-gray-300 text-base">
            Ali, an award-winning hair designer with over 18 years of experience, started his career in Delhi, learning the art of hairstyling from his father before refining his craft at Jawed Habib Institute and London’s Vidal Sassoon Academy.
          </p>

          <p className="text-gray-300 text-base">
            His brand, ALI HAIR STORIES, is renowned for its luxury services and has collaborated with top names in fashion, including Lakmé Fashion Week and Warren Tricomi. Ali’s client list of celebrities, CEOs, and industry leaders reflects his influence and dedication to creating transformative, bespoke styling experiences.
          </p>
          <p className="text-gray-300 text-base">
            His client portfolio includes celebrities, politicians, CEOs, and founders, reflecting his influence and authority in the hair industry. Known for pushing boundaries and setting trends
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
