// use client
import React from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const ServicesOffered = () => {
  const { ref: service1Ref, inView: service1InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: service2Ref, inView: service2InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  // bg-gradient-to-r from-yellow-50 via-white to-yellow-50
  return (
    <section className="py-16 px-8 sm:px-20 lg:px-40 space-y-16">
      <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-black mb-12 animate-fade-in">
        Services Offered
      </h2>

      {/* Service 1 - Balayage & Ombre */}
      <div
        ref={service1Ref}
        className={`flex flex-col md:flex-row lg:items-center space-y-8 md:space-y-0 md:space-x-12 transition-all duration-1000 ease-out ${
          service1InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Image */}
        <div className="flex-1 flex lg:justify-center lg:items-center">
          <div className="w-64 h-80 lg:w-[450px] lg:h-[550px] relative">
            <Image
              src={"/images/models/model2.jpg"}
              alt="Highlights & Lowlights"
              className="rounded-lg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-serif font-bold text-black">Luxury Hair Colouring Services</h2>

          <div>
            <h3 className="text-xl font-bold text-yellow-800 mb-2">Balayage</h3>
            <p className="text-gray-600 text-base">
              Achieve a sun-kissed, natural look with our seamless balayage technique. Perfect for a soft gradient effect that grows out beautifully.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-yellow-800 mb-2">Ombre</h3>
            <p className="text-gray-600 text-base">
              Make a bold statement with our ombre hair coloring, transitioning effortlessly from darker roots to lighter ends for a striking contrast.
            </p>
          </div>
        </div>
      </div>

      {/* Service 2 - Highlights & Lowlights, Baby Lights, Global Color */}
      <div
        ref={service2Ref}
        className={`flex flex-col-reverse md:flex-row lg:items-center space-y-8 md:space-y-0 md:space-x-12 transition-all duration-1000 ease-out ${
          service2InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Content */}
        <div className="flex-1 space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-yellow-800 mb-2 mt-8 md:mt-0">Highlights & Lowlights</h3>
            <p className="text-gray-600 text-base">
              Add dimension and depth to your hair with strategically placed highlights or lowlights, tailored to enhance your natural beauty.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-yellow-800 mb-2">Baby Lights</h3>
            <p className="text-gray-600 text-base">
              Create a subtle shimmer with fine, delicate baby lights that mimic the effect of natural sunlight on your hair.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-yellow-800 mb-2">Global Color</h3>
            <p className="text-gray-600 text-base">
              Transform your entire look with an all-over global color, using premium products for vibrant, long-lasting results.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex lg:justify-center lg:items-center">
          <div className="w-64 h-80 lg:w-[450px] lg:h-[550px] relative">
            <Image
              src={"/images/models/model3.jpg"}
              alt="Highlights & Lowlights"
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

export default ServicesOffered;
