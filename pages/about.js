import React from 'react';
import { HomeLayout } from '../components/layouts/homeLayout';
import { ImageGrid } from '../components/elements/about/image';

function About() {
  return (
    <HomeLayout pageName="About">
      <div className="bg-white text-gray-800 px-4 sm:px-6 md:px-8 lg:px-16 py-10 md:py-16">
        
        {/* Main About Section */}
        <div className="max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 md:mt-12">
          
          {/* About Text Section */}
          <section className="lg:col-span-3">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-500 mb-4 text-center md:text-left">About 27A</h2>
            <div className="md:text-center lg:text-left lg:pr-20 xl:pr-40">
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
                At 27A, we redefine luxury hair care with a passion for artistry and attention to detail, transforming every shade and style into a personalized masterpiece. Our journey spans collaborations with iconic names, from Jawed Habib to the prestigious Vidal Sassoon Academy in London, where our founder mastered the art of hair design and architecture.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
                Today, at 27A, we bring this legacy to life through bespoke coloring and treatments that celebrate each client’s unique beauty and style. Experience the essence of luxury in every strand, where innovation, precision, and elegance come together to create a look as distinctive as you are.
              </p>
            </div>
            <button className="mt-4 px-4 sm:px-6 py-2 sm:py-3 border-2 border-yellow-600 rounded-full text-yellow-600 font-medium hover:bg-yellow-600 hover:text-white transition-transform transform hover:scale-105 duration-300">
              Book Your Experience Now
            </button>
          </section>

          {/* About Image Section */}
          <div className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105 h-64 sm:h-80 md:h-[50vh]">
            <img src="/images/models/model1.jpg" alt="Model 1" className="w-full h-full object-cover" />
          </div>
          
        </div>

        {/* Image Grid Section */}
        <div className="mt-12">
          <ImageGrid />
        </div>
      </div>
    </HomeLayout>
  );
}

export default About;
